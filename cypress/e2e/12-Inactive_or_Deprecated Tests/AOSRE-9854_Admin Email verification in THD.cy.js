import login from "../../support/pages/Login_Page.js";
import Execution_Status from "../../support/Commons/Testresults.js";
import TechnicalHelpDesk from "../../support/pages/Technical_Help_Desk.js";
import dateGetter from "../../support/Commons/DateGetter.js";

describe("AdminEmailVerificationinTHD", () => {
  const date = new dateGetter();
  const jira = new Execution_Status();

  let errorMessage = ""
  let testTitle;

  const je = new jirastatus();
  const Pass="PASS".toString();
  const testcase="AOSRE-9854".toString()

  const dateTime = date.getDate();
  let ArraySteps = [];
  const environment_name="QA2".toString()
  const user="Guest_User".toString();

  const screenshotName = "Fail_AOSRE-9854_" + dateTime;
// Handle test failures globally by capturing error messages
 // Ensure errorMessage is always initialized
 
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
     je.jira_fail(testcase,ArraySteps,errorMessage,environment_name,user,testTitle,screenshotName)
    }
  });

  it("AOSRE-9854: AdminEmailVerificationinTHD", () => {
    //Current Test Title 
    testTitle = Cypress.spec.name.toString();
    const aos_login = new login();
    const aos_THD = new TechnicalHelpDesk();
    //access url from Config File 
    cy.visit(Cypress.env("int_url"));
    //Login
    aos_login.should_Login_AOS_When_ValidCredentials(
      Cypress.env("int_Admin_username"),
      Cypress.env("int_Admin_password")
    );
    cy.wait(15000);
    //Click on Technical Help Form 
    aos_THD.should_Click_TechnicalHelpDesk();
    //Fill Technical Help Desk form
    aos_THD.should_Fill_TechnicalHelpDesk_Form();
    //Validate Admin Email
    aos_THD.should_Check_Email_For_AdminUser();
    cy.wait(40000);
// Pass Execution for Test case
je.jira_pass(testTitle,environment_name,user,testcase,Pass)
});
});
