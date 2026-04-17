import Execution_Status from "../../../support/Commons/Testresults.js";
import registration from "../../../support/pages/RegistrationPage.js";
import dateGetter from "../../../support/Commons/DateGetter.js";
import JiraExecution from "../../../support/Commons/Jira_Execution.js";

describe("Checking Registration in special EU regions", () => {
  const date = new dateGetter();
  const jira = new Execution_Status();
  let testTitle;
  const je = new JiraExecution();
  const Pass="PASS".toString();
  const testcase="AOSRE-9358".toString()

  const dateTime = date.getDate();
  let ArraySteps = [];
  const environment_name="QA2".toString()
  const user="Guest_User".toString();

  const screenshotName = "Fail_AOSRE-9358_" + dateTime;
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
      //Creation of Fail Execution
    je.should_Create_Jira_Fail_Execution(testcase,ArraySteps,errorMessage,environment_name,user,testTitle,screenshotName)
    }

  });

  it("AOSRE-9358: Special EU Registration test", () => {

    //Current test Title
    testTitle = Cypress.spec.name.toString();

    cy.visit(Cypress.env("url"));
    cy.wait(5000);
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step1", "Pass");
    });

    const reg = new registration();
    reg.should_ClickRegisterNow()
    //Register 
    reg.should_Register("testregistrationFunc","Independent workshop/dealer","FREE_OUTLET",
    "Aland Islands","AX","Test org","Test street","45612","germany","Mr","MALE","testlast12","testfirst34","English (United Kingdom)","ENGLISH_UK","(UTC +01:00) Central European Time","CET");
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step2", "Pass");
    });
    //Verify Registration and log it 
    reg.should_Verify_Registration();
    cy.log("success registration");
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step3", "Pass");
    });
    cy.wait(40000);
// Pass Execution for Test case
  je.should_Create_Jira_Pass_Execution(testTitle,environment_name,user,testcase,Pass)
});
});