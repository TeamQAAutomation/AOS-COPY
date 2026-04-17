import login from "../../../support/pages/Login_Page.js";
import dateGetter from "../../../support/Commons/DateGetter.js";
import DiagnosticsArticles from "../../../support/pages/Diagnostics_Articles.js";
import JiraExecution from "../../../support/Commons/Jira_Execution.js";
import Execution_Status from"../../../support/Commons/Testresults.js";

describe("Diagnostic Articles", () => {
  let ArraySteps = [];
  let errorMessage = ""
  let testTitle;
  const jira = new Execution_Status();
  const Diagnosticarticles = new DiagnosticsArticles();
  const aos_login = new login();
  const date = new dateGetter();
  const je = new JiraExecution();
  const Pass="PASS".toString();
  const testcase="AOSRE-24108".toString()
  const dateTime = date.getDate();
  const environment_name="QA2".toString()
  const user="||Legal_User|| ".toString();
  const screenshotName = "Fail_AOSRE-24108_" + dateTime;

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
    if (errorMessage!=null) {
      je.jira_fail(testcase,ArraySteps,errorMessage,environment_name,user,testTitle,screenshotName)
    }
  } catch (error) {
    console.error("Error in afterEach:", error);
  }
});

  it("AOSRE-24108-Diagnostic Articles", () => {
    testTitle = Cypress.spec.name.toString();
    const aos_login = new login();
    const Diagnosticarticles = new DiagnosticsArticles();

    cy.visit(Cypress.env("url"));
    aos_login.should_Login_AOS_When_ValidCredentials(
      Cypress.env("Username"),
      Cypress.env("Password")
    );
    cy.wrap().then(() => {
    cy.logStepStatus(ArraySteps, "step1", "Pass");
    });   

    //home.verify_login();
    Diagnosticarticles.should_ClickOnMyDiagnosticArticles();
    cy.wait(5000);
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step2", "Pass");
      cy.logStepStatus(ArraySteps, "step3", "Pass");
    });   
    Diagnosticarticles.should_CheckReqOrderInformation();
    Diagnosticarticles.should_fillReqOrderInformation();
    Diagnosticarticles.should_VerifyErrorForReqOrderInformation();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step5", "Pass");
      cy.logStepStatus(ArraySteps, "step6", "Pass");
    });

    je.should_Create_Jira_Pass_Execution(testTitle,environment_name,user,testcase,Pass)

  });
});