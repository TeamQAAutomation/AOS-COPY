import Execution_Status from "../../../support/Commons/Testresults.js";
import login from "../../../support/pages/Login_Page.js";
import logout from "../../../support/pages/LogoutPage.js";
import dateGetter from "../../../support/Commons/DateGetter.js";
import HelpOverview from "../../../support/pages/Help_Overview_page.js";
import JiraExecution from "../../../support/Commons/Jira_Execution.js";

describe("To verify AOS Help Tab ", () => {
  const aos_login = new login();
  const jira = new Execution_Status();
  const Logout = new logout();
  const date = new dateGetter();
  const help = new HelpOverview();
  let ArraySteps = [];
  let errorMessage = ""
  let testTitle;

  const je = new JiraExecution();
  const Pass="PASS".toString();
  const testcase="AOSRE-5968".toString()

  const dateTime = date.getDate();
  const environment_name="QA2".toString()

  const user="||Legal_User|| ".toString();


  const screenshotName = "Fail_AOSRE-5968_" + dateTime;
// Handle test failures globally by capturing error messages
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
 

  it("AOSRE-5968 : Verify Help Tab Overview Options ", () => {
    //Current Test Title
    testTitle = Cypress.spec.name.toString();
    //Acces url from config file 
    cy.visit(Cypress.env("url"));
    //Login Functionality
    aos_login.should_Login_AOS_When_ValidCredentials(
      Cypress.env("Username"),
      Cypress.env("Password")
    );
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step1", "Pass");
    });
    //Verify Options in  Help tab 
    help.should_Verify_Help_Menu("ROW");
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step2", "Pass");
    });
   //Verify Options in  Help tab are accessible or not 
    help.should_Verify_Help_Links();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step3", "Pass");
    });
// Pass Execution for Test case
je.should_Create_Jira_Pass_Execution(testTitle,environment_name,user,testcase,Pass)
});
});