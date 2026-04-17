import Execution_Status from "../../support/Commons/Testresults.cy.js";
import login from "../../support/pages/Login_Page.cy.js";
//import Homepage from "../../../support/pages/start_page.js";
import logout from "../../support/pages/Logout_page.cy.js";
import dateGetter from "../../support/Commons/DateGetter.js";
import JiraExecution from "../../support/Commons/Jira_Execution.js";
import TechnicalHelpDesk from "../../support/pages/Technical_Help_Desk.js";


describe("Checking THD functionality", () => {


  const aos_login = new login();
  const jira = new Execution_Status();
  //const home = new Homepage();
  const Logout = new logout();
  const date = new dateGetter();
  let errorMessage = null;
  let testTitle;
  let index = 0;
  const je = new JiraExecution();
  const Pass = "PASS".toString();
  const testcase = "AOSRE-5972".toString()

  const dateTime = date.getDate();
  let country = null;
  let processedFail = false;
  let ArraySteps = [];
  const environment_name = "QA2".toString()
  const user = "||Legal_User|| ".toString();

  const screenshotName = "Fail_AOSRE-5972_" + dateTime;
  const users = Cypress.env('users');
  // Handle test failures globally by capturing error messages
  Cypress.on("fail", (err, runnable) => {
    if (!processedFail) {
      errorMessage = err.message.toString();
      processedFail = true; // mark that we've handled this failure
    }
    throw err; // still fail the test
  });
  beforeEach(() => {
    // Clear values before each test starts
    errorMessage = null;
  });
  afterEach(() => {
    country = users[index].Country;
    index++;
    try {

      if (errorMessage != null) {
        je.should_Create_Jira_Fail_Execution(testcase, ArraySteps, errorMessage, environment_name, country, testTitle, screenshotName)
      }

    } catch (error) {
      console.error("Error in afterEach:", error);
    }
    finally {
      // Reset so the next test is clean
      errorMessage = null;
      processedFail = false;
    }

  });

  users.forEach((user) => {


    country = user.Country;
    it("AOSRE-5972 : Checking THD functionality in different markets", () => {
      testTitle = Cypress.spec.name.toString();
      cy.log(user.Username);
      cy.log(user.Password);
      cy.log(user.Country);

      //const tickets = new myTickets();
      const aos_TechnicalHelpDesk = new TechnicalHelpDesk();
      //access url from Config file
      cy.visit(Cypress.env("url"));
      //Login
      aos_login.AOS_login(user.Username, user.Password);
      cy.wait(10000);
      cy.wrap().then(() => {
        cy.logStepStatus(ArraySteps, "step1", "Pass");
      });
      cy.wait(10000);
      aos_TechnicalHelpDesk.should_Click_TechnicalHelpDesk();
      cy.wrap().then(() => {
        cy.logStepStatus(ArraySteps, "step2", "Pass");
      });
      cy.wait(10000);
      //Fill Technical Helpdesk form
      aos_TechnicalHelpDesk.should_Fill_TechnicalHelpDesk_Form();
      cy.wrap().then(() => {
        cy.logStepStatus(ArraySteps, "step3", "Pass");
      });
      cy.wait(10000);
      //Payment of Ticket using Third party BMW pay
      //aos_TechnicalHelpDesk.PurchaseTicketviaBMWPay();
      //Validation of Purchase of Ticket 
      aos_TechnicalHelpDesk.should_Validate_Ticket_Successfulmessage();
      cy.wrap().then(() => {
        cy.logStepStatus(ArraySteps, "step4", "Pass");
      });
      cy.wait(10000);
      Logout.verify_logout();
      cy.wrap().then(() => {
        cy.logStepStatus(ArraySteps, "step5", "Pass");
      });
      cy.wait(10000);
      //Verify Logout  
      //Pass Execution for Testcase
      je.should_Create_Jira_Pass_Execution(testTitle, environment_name, country, testcase, "PASS")
    });
  });
});