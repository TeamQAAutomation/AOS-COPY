import Execution_Status from "../../support/Commons/Testresults.cy.js";
import login from "../../support/pages/Login_Page.cy.js";
//import Homepage from "../../../support/pages/start_page.js";
import logout from "../../support/pages/Logout_page.cy.js";
import dateGetter from "../../support/Commons/DateGetter.js";
import JiraExecution from "../../support/Commons/Jira_Execution.js";
import myTickets from "../../support/pages/MyTicketsPage.js";

describe("To Test Login Functionality", () => {
  const aos_login = new login();
  const jira = new Execution_Status();
  //const home = new Homepage();
  const Logout = new logout();
  const date = new dateGetter();
  let errorMessage = null;
  let index = 0;
  let country = null;
  let processedFail = false;
  let testTitle;
  const je = new JiraExecution();
  const Pass = "PASS".toString();
  const testcase = "AOSRE-8849".toString()

  const dateTime = date.getDate();
  let ArraySteps = [];
  const environment_name = "QA2".toString()
  const user = "||Legal_User|| ".toString();

  const screenshotName = "Fail_AOSRE-8849_" + dateTime;
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


    it("AOSRE-8849 : Ticket Purchase functionality", () => {
      testTitle = Cypress.spec.name.toString();
      //const users = Cypress.env('users');
      const tickets = new myTickets();

      //access url from Config file
      cy.visit(Cypress.env("url"));
      //Login
      cy.wait(10000)

      //users.forEach((user) => {
      cy.log(user.Username);
      cy.log(user.Password);
      cy.log(user.Country);

      const country = user.Country;

      aos_login.AOS_login(user.Username, user.Password);
      cy.wait(10000);
      //Click on myaos and click on my Tickets 
      tickets.should_ClickOnMyTickets();
      //Purchase Ticket by name,Time Constraint
      tickets.should_Purchase_Ticket("Information research", "Day");

      Logout.verify_logout();
      cy.wait(10000);
      cy.clearAllCookies();
      //Verify Logout

      //Pass Execution for Testcase

      je.should_Create_Jira_Pass_Execution(testTitle, environment_name, country, testcase, "PASS")
      cy.visit(Cypress.env("url"));

    });
  });
});