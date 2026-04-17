import Execution_Status from "../../../support/Commons/Testresults.js";
import login from "../../../support/pages/Login_Page.js";
import Homepage from "../../../support/pages/StartPage.js";
import logout from "../../../support/pages/LogoutPage.js";
import dateGetter from "../../../support/Commons/DateGetter.js";
import footer from "../../../support/Commons/Footer.js";
import ServicesOverview from "../../../support/pages/ServicesOverview.js";
import HelpOverview from "../../../support/pages/Help_Overview_page.js";
import JiraExecution from "../../../support/Commons/Jira_Execution.js";

describe("To verify AOS Help Tab ", () => {
  const aos_login = new login();
  const jira = new Execution_Status();
  const home = new Homepage();
  const Logout = new logout();
  const date = new dateGetter();
  const Footer = new footer();
  const services = new ServicesOverview();
  const help = new HelpOverview();
  let ArraySteps = [];

  let errorMessage = ""
  let testTitle;
  const je = new JiraExecution();
  const Pass = "PASS".toString();
  const testcase = "AOSRE-5969".toString()

  const dateTime = date.getDate();
  const environment_name = "QA2".toString()
  const user = "||Legal_User|| ".toString();

  const screenshotName = "Fail_AOSRE-5969_" + dateTime;
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

      if (errorMessage != null) {
        // je.should_Create_Jira_Fail_Execution(testcase, ArraySteps, errorMessage, environment_name, user, testTitle, screenshotName)
      }

    } catch (error) {
      console.error("Error in afterEach:", error);
    }
  });


  it("AOSRE-5969 : Verify Help Tab Overview Content ", () => {
    //Current Test title
    testTitle = Cypress.spec.name.toString();
    cy.visit(Cypress.env("url"));
    //Login
    aos_login.should_Login_AOS_When_ValidCredentials(
      Cypress.env("Username"),
      Cypress.env("Password")
    );
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step1", "Pass");
    });
    //Click on Help Menu
    help.should_Verify_Help_Menu();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step2", "Pass");
    });
    ///Click on Help Overview
    help.should_Click_On_Help_Overview();
    cy.wait(12000);
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step3", "Pass");
    });
    //Verify Contents in Support Ticket Content
    help.should_Verify_SupportTicket_Content();
    cy.wait(12000);
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step4", "Pass");
    });
    //Verify Contents in Technical Helpdesk Page
    help.should_Verify_Technical_HelpDeskContent();
    cy.wait(12000);
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step5", "Pass");
    });
    //Verify Contents in Requests Page
    help.should_Verify_My_RequestsContent();
    cy.wait(12000);
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step6", "Pass");
    });
    //Verify Contents in Training Enquiry Page
    help.should_Verify_training_Enquiry_Content();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step7", "Pass");
    });
    cy.wait(30000);
    //Pass Execution For Testcases
    // je.should_Create_Jira_Pass_Execution(testTitle, environment_name, user, testcase, Pass)
  });
});