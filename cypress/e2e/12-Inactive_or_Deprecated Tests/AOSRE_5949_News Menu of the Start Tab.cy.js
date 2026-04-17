import login from "../../support/pages/Login_Page.cy.js";
//import logout from "../../../support/pages/Logout_page.js"
import dateGetter from "../../support/Commons/DateGetter.js";
import HelpOverview from "../../support/pages/Help_Overview_page.js";
import SupportForm from "../../support/pages/Support_Form.js";
import guest from "../../support/pages/Guest_UserPage.js";
import JiraExecution from "../../support/Commons/Jira_Execution.js";
import Homepage from "../../support/pages/StartPage.js";

describe("News Menu of the Start Tab", () => {
  const aos_login = new login();
  //const jira = new Execution_Status();
  const support = new SupportForm();

  const home = new Homepage();
  // const Logout = new logout();
  const date = new dateGetter();
  //const Footer=new footer()
  //const services=new ServicesOverview()
  const help = new HelpOverview();

  const guestuser = new guest();
  let testTitle;

  // const je = new jirastatus();
  const je = new JiraExecution();
  const Pass = "PASS".toString();
  const testcase = "AOSRE-5949".toString();

  const dateTime = date.getDate();
  let ArraySteps = [];
  const environment_name = "QA2".toString();

  const user = "||Legal_User|| ".toString();

  let errorMessage = ""
  const screenshotName = "Fail_AOSRE-5949_" + dateTime;
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
      je.should_Create_Jira_Fail_Execution(
        testcase,
        ArraySteps,
        errorMessage,
        environment_name,
        user,
        testTitle,
        screenshotName
      );
    }
  });

  it("AOSRE-5949 :News Menu of the Start Tab", () => {
    //Current Test Title
    testTitle = Cypress.spec.name.toString();
    //Acces url from config file
    cy.visit(Cypress.env("url"));
    //Login
    aos_login.AOS_login(
      Cypress.env("Legal_representative_username"),
      Cypress.env("Legal_representative_password")
    );
    cy.wait(6000);

    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step1", "Pass");
    });
    //click on new tab
    home.should_Click_News();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step2", "Pass");
    });
    //verify open compass
    home.should_Verify_Open_Compass();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step3", "Pass");
    });

    cy.wait(30000);
    //Pass Execution for Testcase
    je.should_Create_Jira_Pass_Execution(testTitle, environment_name, user, testcase, Pass);
  });
});
