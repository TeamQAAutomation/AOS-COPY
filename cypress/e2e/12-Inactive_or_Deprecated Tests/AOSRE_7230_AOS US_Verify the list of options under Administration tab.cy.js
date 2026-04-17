import Execution_Status from "../../support/Commons/Testresults.js";
import login from "../../support/pages/Login_Page.js";
import dateGetter from "../../support/Commons/DateGetter.js";
import admin from "../../support/pages/Admin_User.js";
import JiraExecution from "../../support/Commons/Jira_Execution.js";
describe("AOSRE-7230 AOS_US VErify the list of options under administration tab ", () => {
  const aos_login = new login();
  const jira = new Execution_Status();
  const date = new dateGetter();
  let ArraySteps = [];
  const Admin = new admin();
  let errorMessage = ""
  let testTitle;
  let US;
  before(() => {
    cy.fixture("US_config.json").then((data) => {
    US = data;
    });
  });

  const je = new JiraExecution();
  const Pass="PASS".toString();
  const testcase="AOSRE-7230".toString()

  const dateTime = date.getDate();
  const environment_name="QA2".toString()

  const user="||Admin_User|| ".toString();
 
  const screenshotName = "Fail_AOSRE-7230_" + dateTime;
// Handle test failures globally by capturing error messages
Cypress.on("fail", (err, runnable) => {
  errorMessage = err.message.toString();
  if (errorMessage.length != 0) {
        console.log("failed test");
        console.log(err.message);
        throw new Error(errorMessage);
      }
  throw err;
   });
 
afterEach(() => {
    try {
     
      if (errorMessage!=null) {
        je.should_Create_Jira_Fail_Execution(testcase,ArraySteps,errorMessage,environment_name,user,testTitle,screenshotName)
       }
       
    } catch (error) {
        console.error("Error in afterEach:", error);
    }
});


  it("AOSRE_7230_AOS US_Verify the list of options under Administration tab", () => {
    testTitle = Cypress.spec.name.toString();
    //access url from Config file
    let environment_name = US.Admincreds.TestENV.Environment;
    let user = US.Admincreds.TestENV.Role;
   //access url from Config file
    cy.visit(Cypress.env("url"));
  
  //Login
  aos_login.should_Login_AOS_When_ValidCredentials(
    Cypress.env("Username"),
    Cypress.env("Password")
  );
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step1", "Pass");
    });
    cy.wait(10000);

    Admin.click_on_administration();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step2", "Pass");
    });
    Admin.AOS_US_optionsunderadministraion();
    cy.wait(40000);
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step3", "Pass");
    });

    // Pass Execution for Test case
je.should_Create_Jira_Pass_Execution(testTitle,environment_name,user,testcase,Pass)
});
});