import login from "../../../support/pages/Login_Page.js";
import dateGetter from "../../../support/Commons/DateGetter.js";
import HelpOverview from "../../../support/pages/Help_Overview_page.js";
import SupportForm from "../../../support/pages/Support_Form.js";
import guest from "../../../support/pages/Guest_UserPage.js";
import JiraExecution from "../../../support/Commons/Jira_Execution.js";
import MyRequest from "../../../support/pages/My_Requests.js";


describe("Checking Support Request form ", () => {
  const aos_login = new login();
  const support = new SupportForm();
  const date = new dateGetter();
  const help = new HelpOverview();
  const myRequest = new MyRequest();

  const guestuser = new guest()
  let testTitle;

  // const je = new jirastatus();
  const je = new JiraExecution();
  const Pass = "PASS".toString();
  const testcase = "AOSRE-5971".toString()

  const dateTime = date.getDate();
  let ArraySteps = [];
  const environment_name = "QA2".toString()

  const user = "||Legal_User|| ".toString();

  let errorMessage = ""
  const screenshotName = "Fail_AOSRE-5971_" + dateTime;
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


  it("AOSRE-5971 : Support Request Creation ", () => {
    //Current Test Title
    testTitle = Cypress.spec.name.toString();
    //Acces url from config file 
    cy.visit(Cypress.env("url"));
    //Login
    aos_login.should_Login_AOS_When_ValidCredentials(
      Cypress.env("Username"),
      Cypress.env("Password")
    );
    cy.wait(6000)
    // guestuser.click_on_navigation_bar()
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step1", "Pass");
    });

    support.should_Create_Support_Request();

    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step2", "Pass");
      cy.logStepStatus(ArraySteps, "step3", "Pass");
    });

    cy.wait(10000)

    myRequest.should_ExpandAndClickMyRequest()
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step4", "Pass");
    });

    myRequest.should_Click_On_LatestTicket()
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step5", "Pass");
    });

    myRequest.should_CheckRequestData("INC", 'Portal', 'testing purpose')
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step6", "Pass");
    });

    //Pass Execution for Testcase
    je.should_Create_Jira_Pass_Execution(testTitle, environment_name, user, testcase, Pass)

  });
});