import login from "../../../support/pages/Login_Page";
import Execution_Status from "../../../support/Commons/Testresults.js";
import TechnicalHelpDesk from "../../../support/pages/Technical_Help_Desk.js";
import dateGetter from "../../../support/Commons/DateGetter.js";
import Homepage from "../../../support/pages/StartPage.js";
import JiraExecution from "../../../support/Commons/Jira_Execution.js";

describe("Techical Help Desk", () => {
  const date = new dateGetter();
  const jira = new Execution_Status();
  let testTitle;
  const je = new JiraExecution();
  const Pass="PASS".toString();
  const testcase="AOSRE-5972".toString()

  const dateTime = date.getDate();
  let ArraySteps = [];
  const environment_name="QA2".toString()
  const user="||Legal_User|| ".toString();

  const screenshotName = "Fail_AOSRE-5972_" + dateTime;
// Handle test failures globally by capturing error messages
 let errorMessage = ""; // Ensure errorMessage is always initialized
 
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


  it("AOSRE-5972: Technical Help Desk form", () => {
    testTitle = Cypress.spec.name.toString();
    const aos_login = new login();
    const aos_TechnicalHelpDesk = new TechnicalHelpDesk();
    const home = new Homepage();
    //Load url from  Cypress
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
    //Click on Technical Help desk Form
    aos_TechnicalHelpDesk.should_Click_TechnicalHelpDesk();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step2", "Pass");
      cy.logStepStatus(ArraySteps, "step3", "Pass");
      cy.logStepStatus(ArraySteps, "step4", "Pass");
      cy.logStepStatus(ArraySteps, "step5", "Pass");
      });
    cy.wait(10000);
    //Fill Technical Helpdesk form
    aos_TechnicalHelpDesk.should_Fill_TechnicalHelpDesk_Form();
    aos_TechnicalHelpDesk.should_Submit_TechnicalHelpDesk_Form();
    cy.wrap().then(() => {6
      cy.logStepStatus(ArraySteps, "step", "Pass");
    });
    cy.wait(10000);
    //Validation of Purchase of Ticket 
    aos_TechnicalHelpDesk.should_Validate_Ticket_Successfulmessage();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step7", "Pass");
    });
    cy.wait(10000);
//Pass Execution For Testcase 
je.should_Create_Jira_Pass_Execution(testTitle,environment_name,user,testcase,Pass)
});
});