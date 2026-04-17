import login from "../../../support/pages/Login_Page.js";
import MyRequest from "../../../support/pages/My_Requests.js";
import Execution_Status from "../../../support/Commons/Testresults.js";
import dateGetter from "../../../support/Commons/DateGetter.js";
import HelpOverview from "../../../support/pages/Help_Overview_page.js";
import JiraExecution from "../../../support/Commons/Jira_Execution.js";

describe("my request", () => {
  const aos_login = new login();
  const myReq = new MyRequest();
  const jira = new Execution_Status();
  const helpoverview = new HelpOverview();
  const date = new dateGetter();

  let errorMessage = "";
  let testTitle;
  const je = new JiraExecution();
  const Pass = "PASS".toString();
  const testcase = "AOSRE-5974".toString();

  const dateTime = date.getDate();
  let ArraySteps = [];
  const environment_name = "QA2".toString();

  const user = "||Legal_User|| ".toString();

  const screenshotName = "Fail_AOSRE-5974_" + dateTime;
  
    Cypress.on("fail", (err, runnable) => {
        errorMessage = err && err.message ? err.message : "";
        if (errorMessage && errorMessage.length != 0) {
            console.log("failed test");
            console.log(errorMessage);
        }
        throw err;
    });

    afterEach(() => {
        if (errorMessage && errorMessage.length != 0) {
             je.should_Create_Jira_Fail_Execution(testcase,ArraySteps,errorMessage,environment_name,user,testTitle,screenshotName)
        }
    });

  it("AOSRE-5974: my request data", () => {
    testTitle = Cypress.spec.name.toString();
    //login to application
    cy.visit(Cypress.env("url"));
    aos_login.should_Login_AOS_When_ValidCredentials(Cypress.env("Username"), Cypress.env("Password"));
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step1", "Pass");
    });
    cy.wait(10000);
    //click and check overview
    helpoverview.should_Verify_Help_Menu("ROW");
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step2", "Pass");
      cy.logStepStatus(ArraySteps, "step3", "Pass");
    });
    //click on myrequest
    myReq.should_ClickOnMyRequest();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step4", "Pass");
    });
    //check table heading
    myReq.should_Check_Table_heading();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step5", "Pass");
    });
    //check sorting funtion
    myReq.should_Check_Sorting_Function();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step6", "Pass");
    });

     //data under columns
    myReq.should_Check_Data_Under_Columns();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step7", "Pass");
    });

    //check paginationisworkignproperly
    myReq.should_Check_Paginations();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step8", "Pass");
    });
   
    //Pass Execution for Test case
     je.should_Create_Jira_Pass_Execution(testTitle, environment_name, user, testcase, Pass)
  });
});
