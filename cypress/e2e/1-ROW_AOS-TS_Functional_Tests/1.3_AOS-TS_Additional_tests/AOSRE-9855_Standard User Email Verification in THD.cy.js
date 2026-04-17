import login from "../../../support/pages/Login_Page.js";
import Execution_Status from "../../../support/Commons/Testresults.js";
import TechnicalHelpDesk from "../../../support/pages/Technical_Help_Desk.js";
import dateGetter from "../../../support/Commons/DateGetter.js";
import JiraExecution from "../../../support/Commons/Jira_Execution.js";

describe("StandardUserEmailVerificationinTHD", () => {
  const date = new dateGetter();
  const jira = new Execution_Status();

  let testTitle;

  const je = new JiraExecution();
  const Pass="PASS".toString();
  const testcase="AOSRE-9855".toString()

  const dateTime = date.getDate();
  let ArraySteps = [];
  const environment_name="QA2".toString()
  const user="Guest_User".toString();

  const screenshotName = "Fail_AOSRE-9855_" + dateTime;
// Handle test failures globally by capturing error messages
let errorMessage = ""; // Ensure errorMessage is always initialized
 
Cypress.on("fail", (err, runnable) => {
  errorMessage = err && err.message ? err.message : ""; // Assign error message safely
  if (errorMessage && errorMessage.length != 0) {
    console.log("failed test");
    console.log(errorMessage);
  }
  throw err;
});

  afterEach(() => {
    if (errorMessage.length != 0) {
    je.should_Create_Jira_Fail_Execution(testcase,ArraySteps,errorMessage,environment_name,user,testTitle,screenshotName)
    }
  });


  it("AOSRE-9855: StandardUserEmailVerificationinTHD", () => {
    testTitle = Cypress.spec.name.toString();
    const aos_login = new login();
    const aos_THD = new TechnicalHelpDesk();
    //Access url from Config File 
    cy.visit(Cypress.env("url"));
    //Login
    aos_login.should_Login_AOS_When_ValidCredentials(
      Cypress.env("Username"),
      Cypress.env("Password")
    );
    cy.wait(15000);
    //click on Technical Help Form 
    aos_THD.should_Click_TechnicalHelpDesk();
    //Fill Technical Help Desk Form
    aos_THD.should_Fill_TechnicalHelpDesk_Form();
    //Verify user by email
    aos_THD.should_Verify_Email_Populated_In_TechnicalHelpDesk();
    //cy.wait(40000);
   // Pass Execution for Test case
 je.should_Create_Jira_Pass_Execution(testTitle,environment_name,user,testcase,Pass)
});
});