import login from "../../support/pages/Login_Page.cy.js";
import Execution_Status from "../../support/Commons/Testresults.cy.js";
import dateGetter from "../../support/Commons/DateGetter.js";
import admin from "../../support/pages/Admin_User.js";
import JiraExecution from "../../support/Commons/Jira_Execution.js";

describe("AOSRE_5998_Verify Configurations DetailsVerify Configurations Details", () => {
  const aos_login = new login();
  const Adminuser = new admin();

  const jira = new Execution_Status();
  const date = new dateGetter();
  let errorMessage = ""
  let testTitle;

  const je = new JiraExecution();
  const Pass="PASS".toString();
  const testcase="AOSRE-5998".toString()

  const dateTime = date.getDate();
  let ArraySteps = [];
  const environment_name="QA2".toString()
  const user="admin_User".toString();

  const screenshotName = "Fail_AOSRE-5998_" + dateTime;
// Handle test failures globally by capturing error messages
Cypress.on("fail", (err, runnable) => {
  errorMessage = err.message;
  if (errorMessage.length != 0) {
    console.log("failed test");
    console.log(err.message);
  }
  throw err;
  
});

afterEach(() => {
  if (errorMessage.length != 0) {
   je.should_Create_Jira_Fail_Execution(testcase,ArraySteps,errorMessage,environment_name,user,testTitle,screenshotName)
  }
});


  it("AOSRE_5998_Verify Configurations DetailsVerify Configurations Details", () => {
    testTitle = Cypress.spec.name.toString();
    //login to application
    cy.visit(Cypress.env("url"));
    aos_login.AOS_login(
      Cypress.env("Admin_username"),
      Cypress.env("Admin_password")
    );
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step1", "Pass");
    });
    cy.wait(10000);
    //click on admin user
    Adminuser.click_on_administration();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step2", "Pass");
    });
    //click on configuration
    Adminuser.clickConfiguration()
    cy.wrap().then(() => {
        cy.logStepStatus(ArraySteps, "step3", "Pass");
      });
      cy.wait(5000);
    //check aosts option
    Adminuser.CheckAOS_TS();
    cy.wrap().then(() => {
        cy.logStepStatus(ArraySteps, "step4", "Pass");
      });
    //checking b2iua option
    Adminuser.CheckB2i_UA();
    cy.wrap().then(() => {
        cy.logStepStatus(ArraySteps, "step5", "Pass");
      });
    //checking OSMC option
    Adminuser.CheckOSMC();
    cy.wrap().then(() => {
        cy.logStepStatus(ArraySteps, "step6", "Pass");
      });
    //checking billing payment option
    Adminuser.CheckBilling_payment();
    cy.wrap().then(() => {
        cy.logStepStatus(ArraySteps, "step7", "Pass");
      });
  // Pass Execution for Test case
  je.should_Create_Jira_Pass_Execution(testTitle,environment_name,user,testcase,Pass)
});
});