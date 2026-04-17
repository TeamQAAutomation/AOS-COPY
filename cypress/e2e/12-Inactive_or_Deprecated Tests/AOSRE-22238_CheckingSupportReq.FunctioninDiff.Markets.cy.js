import Execution_Status from "../../support/Commons/Testresults.cy.js";
import login from "../../support/pages/Login_Page.cy.js";
//import Homepage from "../../../support/pages/start_page.js";
import logout from "../../support/pages/Logout_page.cy.js";
import dateGetter from "../../support/Commons/DateGetter.js";
import JiraExecution from "../../support/Commons/Jira_Execution.js";
import HelpOverview from "../../support/pages/Help_Overview_page.js";
import SupportForm from "../../support/pages/Support_Form.js";

describe("Checking Support form with different markets", () => {
  const aos_login = new login();
  const jira = new Execution_Status();
  //const home = new Homepage();
  const Logout = new logout();
  const date = new dateGetter();
  let errorMessage = ""
  let testTitle;
  const je = new JiraExecution();
  const Pass = "PASS".toString();
  const testcase = "AOSRE-5971".toString()
  const support = new SupportForm();

  const dateTime = date.getDate();
  let ArraySteps = [];
  const environment_name = "QA2".toString()
  

  const screenshotName = "Fail_AOSRE-5971_" + dateTime;
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
        je.should_Create_Jira_Fail_Execution(testcase, ArraySteps, errorMessage, environment_name, user, testTitle, screenshotName)
      }

    } catch (error) {
      console.error("Error in afterEach:", error);
    }
  });

  it("AOSRE-5971 : Checking Support Request functionality with different markets", () => {
    testTitle = Cypress.spec.name.toString();
    const users = Cypress.env('users');
    //const tickets = new myTickets();    
    //access url from Config file
    cy.visit(Cypress.env("url"));
    //Login
    users.forEach((user) => {
      cy.log(user.Username);
      cy.log(user.Password);
      cy.log(user.Country);
      const country = user.Country;
      aos_login.Relogin(user.Username, user.Password);
      cy.wait(9000);

  support.should_Create_Support_Request();  

    Logout.verify_logout();
     cy.wait(10000);
       //Verify Logout  
       //Pass Execution for Testcase
    je.should_Create_Jira_Pass_Execution(testTitle, environment_name, country, testcase, "PASS")
    });   
  });
});