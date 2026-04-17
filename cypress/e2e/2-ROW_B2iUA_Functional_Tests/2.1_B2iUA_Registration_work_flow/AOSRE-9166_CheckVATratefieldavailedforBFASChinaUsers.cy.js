import login from "../../../support/pages/Login_Page.js";
import Execution_Status from "../../../support/Commons/Testresults.js";
import registration from "../../../support/pages/RegistrationPage.js";
import dateGetter from "../../../support/Commons/DateGetter.js";
import JiraExecution from "../../../support/Commons/Jira_Execution.js";

describe("AOS Registration functionality", () => {
  const aos_login = new login();
  const date = new dateGetter();
  const jira = new Execution_Status();
  let testTitle;
  const je = new JiraExecution();
  const Pass = "PASS".toString();
  const testcase = "AOSRE-9166".toString()

  const dateTime = date.getDate();
  let ArraySteps = [];
  const environment_name = "QA2".toString()
  const user = "Guest_User".toString();

  const screenshotName = "Fail_AOSRE-9166_" + dateTime;
  // Handle test failures globally by capturing error messages
  let errorMessage = ""; // Ensure errorMessage is always initialized

  Cypress.on("fail", (err, runnable) => {
    errorMessage = err && err.message ? err.message : ""; // Assign error message safely
    if (errorMessage && errorMessage.length != 0) {
      console.log("failed test");
      console.log(errorMessage);
    }
    throw err;
  });

  afterEach(() => {

    if (errorMessage.length != 0) {
      je.should_Create_Jira_Fail_Execution(testcase, ArraySteps, errorMessage, environment_name, user, testTitle, screenshotName)
    }

  });

  it("AOSRE-9166: BFAS China Registration test", () => {

    //Current test Title
    testTitle = Cypress.spec.name.toString();

    cy.visit(Cypress.env("url"));
    cy.wait(5000);
    // aos_login.should_Login_AOS_When_ValidCredentials(
    //   Cypress.env("Username"),
    //   Cypress.env("Password")
    // );
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step1", "Pass");
    });

    const reg = new registration();
    reg.should_ClickRegisterNow()
    //Register 
    reg.should_VerifyBFASchinaregister("testregistrationFunc", "Access to BFAS - BMW Fluid Approval System (for oil manufacturers only)", "BFAS",
      "China", "CN", "Test org", "Test street", "45612", "germany", "Mr", "MALE", "testlast12", "testfirst34", "English (United Kingdom)", "ENGLISH_UK", "(UTC +01:00) Central European Time", "CET");
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step2", "Pass");
    });
    //Verify Registration and log it 
    reg.should_Verify_Registration();
    cy.log("success registration");
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step3", "Pass");
    });
    cy.wait(10000);
    // Pass Execution for Test case
    je.should_Create_Jira_Pass_Execution(testTitle, environment_name, user, testcase, Pass)
  });
});