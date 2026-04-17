const { defineConfig } = require("cypress");
const { rm } = require("fs");
const fs = require("fs");

module.exports = defineConfig({
  chromeWebSecurity: false,
  video: true,

  e2e: {
    defaultCommandTimeout: 40000,
    viewportWidth: 1366,
    viewportHeight: 784,
    pageLoadTimeout: 10000,
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, args) => {
        if (browser.name === "chrome") {
          // launch chrome using incognito
          args.push(" --incognito");
        }
      });

      on("task", {
        deleteFolder(folderName) {
          return new Promise((resolve, reject) => {
            rm(folderName, { maxRetries: 10, recursive: true }, err => {
              if (err) {
                console.error(err);
              }
              resolve(null);
            });
          });
        }
      });

      on("task", {
        logStepStatuses: stepStatuses => {
          // Process step statuses here
          console.log("Step Statuses:", stepStatuses);

          // Perform actions with step statuses (e.g., update Jira)

          // You can also return this data if needed
          return stepStatuses;
        }
      });

      // on("task", {
      //   readFile: (screenshot) => {
      //     return new Promise((resolve, reject) => {
      //       fs.readFile(screenshot, (err, data) => {
      //         if (err) {
      //           console.error(err);
      //           reject(err);
      //         } else {
      //           const base64Content = Buffer.from(data).toString('base64');
      //           resolve(base64Content);
      //         }
      //       });
      //     });
      //   }
      // });

      on("task", {
        readFile: screenshot => {
          return cy.readFile(screenshot, "base64");
        }
      });

      // const version = config.env.VERSION || "RoW_QA2_URL";

      // const urls = {
      //   RoW_INT_URL: "https://aos-i.bmwgroup.com/group/oss/start",
      //   RoW_QA2_URL: "https://aos-q2.bmwgroup.com/group/oss/start",
      //   Korea_INT_URL: "https://aos-i.aosbmw.co.kr/group/korea/start",
      //   Korea_QA2_URL: "https://aos-q2.aosbmw.co.kr/group/korea/start",
      //   US_INT_URL: "https://aos-int.bmwna.com/group/usa/start",
      //   US_QA2_URL: "https://aos-qa2.bmwna.com/group/usa/start"
      // };

      // config.baseUrl = urls[version];

      // return config;
    },

    env: {
      url: "https://aos-q2.bmwgroup.com",
      testplan: "",
      Admin_username: "",
      Admin_password: "",
      Guest_username:null,
      Guest_password:null,
      Legal_representative_username: "",
      Legal_representative_password:  "",     
      Standard_User: "",
      Standard_password: "",       
      int_url: "https://aos-i.bmwgroup.com",
      
    }   
  }
});
