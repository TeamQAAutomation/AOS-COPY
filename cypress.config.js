import { defineConfig } from "cypress";
import fs from "fs";
import path from "path";
import sharp from "sharp";
import { sync as globSync } from "glob";
import { fileURLToPath } from "url";
import { PdfReader } from "pdfreader";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let failureCount = 0;

function getConfigByEnv(env) {
  const configFilePath = `cypress/config/${env}.json`;
  if (fs.existsSync(configFilePath)) {
    return JSON.parse(fs.readFileSync(configFilePath, "utf-8"));
  }
  throw new Error(`Config file for environment '${env}' not found.`);
}

export default defineConfig({
  chromeWebSecurity: false,
  watchForFileChanges:true,

  e2e: {
    testIsolation: true,
    includeShadowDom: true,
    defaultCommandTimeout: 40000,
    viewportWidth: 1366,
    viewportHeight: 784,
    pageLoadTimeout: 60000,
    retries: {
      runMode: 1, // Retries in CI
      openMode: 0, // Retries in local dev
    },

    screenshotOnRunFailure: false,

    screenshotsFolder: path.join(__dirname, "cypress", "screenshots"),

    setupNodeEvents(on, config) {

  const envName = config.env.ENV || "LegalUser";

  console.log("Environment selected:", envName);

  // ---------------------------
  // CI RUN (GitHub Actions)
  // ---------------------------
  if (process.env.CI) {
    console.log("Running in CI mode – loading GitHub secrets");

    config.env = {
      ...config.env,
      url: process.env.URL,
      ENVIRONMENT: process.env.ENVIRONMENT,
      TEST_PLAN: process.env.TEST_PLAN,
      TEST_LABEL: process.env.TEST_LABEL,
      LABEL: process.env.LABEL,
      Username: process.env.USERNAME,
      Password: process.env.PASSWORD,
      BFASUsername: process.env.BFASUSERNAME,
      BFASPassword: process.env.BFASPASSWORD,
      MotorradLegalUsername: process.env.MOTORRADLEGALUSERNAME,
      MotorradLegalPassword: process.env.MOTORRADLEGALPASSWORD,
    };

    if (!config.env.Username || !config.env.Password) {
      throw new Error("Missing required GitHub secrets for login");
    }

  } else {
    // ---------------------------
    // LOCAL RUN
    // ---------------------------
    console.log("Running locally – loading JSON config");

    const envConfig = getConfigByEnv(envName);
    config.env = { ...config.env, ...envConfig };
  }
      on("task", {
        deleteFolder(folderName) {
          return new Promise((resolve, reject) => {
            fs.rm(folderName, { recursive: true, force: true }, (err) => {
              if (err) reject(err);
              else resolve(null);
            });
          });
        },

        fileExists(filepath) {
          return fs.existsSync(filepath);
        },

        logStepStatuses(stepStatuses) {
          console.log("Step Statuses:", stepStatuses);
          return stepStatuses;
        },

        convertToBase64(filename) {
          if (!fs.existsSync(filename)) {
            throw new Error(`File not found: ${filename}`);
          }
          return fs.readFileSync(filename).toString("base64");
        },

        logError({ testName, errorMessage }) {
          console.error(`Error in: ${testName}\n`, errorMessage);
          failureCount++;
          return null;
        },

        getFailureCount() {
          return failureCount;
        },

        findScreenshot({ screenshotName }) {
          try {
            //const screenshotsFolder = config.screenshotsFolder || "cypress/screenshots";
            const screenshotsFolder = path.resolve("cypress", "screenshots");
            const pattern = `${screenshotsFolder.replace(
              /\\/g,
              "/"
            )}/**/${screenshotName}.png`;

            // Use globSync to synchronously search for files matching the pattern
            const matches = globSync(pattern, { nodir: true });

            if (matches.length > 0) {
              console.log(" Screenshot found:", matches[0]);
              return matches[0];
            } else {
              console.warn("Screenshot not found:", pattern);
              return null;
            }
          } catch (err) {
            console.error(" Error in findScreenshot:", err);
            return null;
          }
        },

        readPdf(filename) {
          return new Promise((resolve, reject) => {
            const filePath = path.resolve("cypress", "downloads", filename);
            if (!fs.existsSync(filePath)) {
              return reject(new Error(`PDF file not found: ${filePath}`));
            }

            let textContent = "";

            new PdfReader().parseFileItems(filePath, (err, item) => {
              if (err) {
                console.error("PDF parsing error:", err);
                return reject(err);
              } else if (!item) {
                // End of file
                resolve(textContent);
              } else if (item.text) {
                textContent += item.text + " ";
              }
            });
          });
        },
      });

      //  Log failed tests
      on("after:spec", (spec, results) => {
        if (results?.stats?.failures > 0) {
          console.error(
            `${results.stats.failures} test(s) failed in ${spec.relative}`
          );
          results.tests.forEach((test) => {
            if (test.state === "failed") {
              console.error(`Failed Test: ${test.title}`);
              console.error(`Error Details: ${test.displayError}`);
            }
          });
        }
      });
       // --- AFTER RUN ---
      on("after:run", async (results) => {
        try {
          const issueKey = config.testplan;
          const fetch = globalThis.fetch;
          const token = jira_xray.AUTH_TOKEN;

          let testDetails = [];
          const seenSpecs = new Set();

          for (const run of results.runs || []) {
            if (!run.tests?.length && !run.error) continue;

            // Get spec filename without extension
            const specFullName = path.basename(run.spec.name);
            const specName = specFullName
              .replace(/\.cy\.js$/i, "")  // remove .cy.js
              .replace(/_/g, "-");        // replace _ with -

            if (!seenSpecs.has(specName)) {
              seenSpecs.add(specName);

              // Determine overall spec state
              let specState = "Passed";
              if (run.error) specState = "Skipped";
              else if (run.stats.failures > 0) specState = "Failed";

              testDetails.push({ title: specName, state: specState });
            }
          }

          // Calculate counts
          const totalPassed = testDetails.filter(
            (t) => t.state === "Passed"
          ).length;
          const totalFailed = testDetails.filter(
            (t) => t.state === "Failed"
          ).length;
          const totalSkipped = testDetails.filter(
            (t) => t.state === "Skipped"
          ).length;
          const totalTests = testDetails.length;

          // Build Markdown table with bold headers only
         const header = "|| # || Test File || Status ||";
          const testTable = testDetails
            .map((t, i) => `| ${i + 1} | ${t.title} | ${t.state} |`)
            .join("\n");

          // Build Jira comment
          const comment = `
          Cypress Automated Test Run Completed 

          Overall Summary
          - Passed: ${totalPassed}
          - Failed: ${totalFailed}
          - Skipped: ${totalSkipped}
          - Total Tests: ${totalTests}

          Test Details
          ${header}
          ${testTable}

          Workflow Run: [View in GitHub Actions](${jira_xray.WORKFLOW_URL})`;
          // Post comment to Jira
          await fetch(
            `https://atc.bmwgroup.net/jira/rest/api/2/issue/${issueKey}/comment`,
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ body: comment }),
            }
          );

          console.log("Jira comment added successfully");
        } catch (err) {
          console.error("Failed to add Jira comment:", err);
        }
      });

      const version = config.env.VERSION || "RoW_QA2_URL";
      const urls = {
        RoW_INT_URL: "https://aos-i.bmwgroup.com",
        RoW_QA2_URL: "https://aos-q2.bmwgroup.com",
        Korea_INT_URL: "https://aos-i.aosbmw.co.kr",
        Korea_QA2_URL: "https://aos-q2.aosbmw.co.kr/",
        US_INT_URL: "https://aos-int.bmwna.com",
        US_QA2_URL: "https://aos-qa2.bmwna.com",
      };
      config.baseUrl = urls[version];

      //  Jira/Xray integration
      const jira_xray = {
        URL: "https://atc.bmwgroup.net/jira/rest/raven/2.0/api/import/execution",
        AUTH_TOKEN: "NjY2MzE4Mjk5ODkyOikjv6kcJdlHoQJy+XRn8RXa2v0M",
        WORKFLOW_URL: `https://atc-github.azure.cloud.bmw/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}`,
      };

      // Load testplan from environment JSON (LegalUser.json)
      config.testplan = config.env.TEST_PLAN;
      config.xrayapi = jira_xray.URL;
      config.auth_token = jira_xray.AUTH_TOKEN;

      return config;
    },


  },
});