import Execution_Status from "../../support/Commons/Testresults.js";
import login from "../../support/pages/Login_Page.js";
import dateGetter from "../../support/Commons/DateGetter.js";
import admin from "../../support/pages/Admin_User.js";
import JiraExecution from "../../support/Commons/Jira_Execution.js";

describe("Review of open registration request page ", () => {
  const aos_login = new login();
  const jira = new Execution_Status();
  const date = new dateGetter();
  const Admin = new admin();
  let testTitle;

  const je = new JiraExecution();
  const Pass="PASS".toString();
  const testcase="AOSRE-12705".toString()

  const dateTime = date.getDate();
  let ArraySteps = [];
  const environment_name="QA2".toString()
  const user="Legal".toString();

  const screenshotName = "Fail_AOSRE-12705_" + dateTime;
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
    je.should_Create_Jira_Fail_Execution(testcase,ArraySteps,errorMessage,environment_name,user,testTitle,screenshotName)
    }

  });

 
  it("AOSRE-12705: Admin_Approval ", () => {
    //Current Test title
    testTitle = Cypress.spec.name.toString();

    cy.visit(Cypress.env("url"));
    cy.wait(10000);
    

    //Login
    aos_login.should_Login_AOS_When_ValidCredentials(
      Cypress.env("Admin_username"),
      Cypress.env("Admin_password"));
      
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step1", "Pass");
    });

    Admin.click_on_administration();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step2", "Pass");
    });
    Admin.click_on_Registrations();
    cy.wait(40000);
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step3", "Pass");
    });

    Admin.click_on_latest_user();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step4", "Pass");
    });
    Admin.verify_user_details("testregistrationfunc","Germany","Independent workshop/dealer","testlast12","testfirst34");
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step5", "Pass");
    });

    // Pass Execution for Test case
  je.should_Create_Jira_Pass_Execution(testTitle,environment_name,user,testcase,Pass)
});
});
