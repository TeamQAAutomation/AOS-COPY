import login from "../../../support/pages/Login_Page.js";
import dateGetter from "../../../support/Commons/DateGetter.js";
import DiagnosticsArticles from "../../../support/pages/Diagnostics_Articles.js";
import JiraExecution from "../../../support/Commons/Jira_Execution.js";
import Execution_Status from "../../../support/Commons/Testresults.js";

describe("Diagnostic Articles", () => {
  let ArraySteps = [];
  let errorMessage = ""
  let testTitle;
  const jira = new Execution_Status();
  const Diagnosticarticles = new DiagnosticsArticles();
  const aos_login = new login();
  const date = new dateGetter();
  const je = new JiraExecution();
  const Pass = "PASS".toString();
  const testcase = "AOSRE-5963".toString()
  const dateTime = date.getDate();
  const environment_name = "QA2".toString()
  const user = "||Legal_User|| ".toString();
  const screenshotName = "Fail_AOSRE-5963_" + dateTime;

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


  it("AOSRE-5963-Diagnostic Articles", () => {
    testTitle = Cypress.spec.name.toString();
    const aos_login = new login();
    const Diagnosticarticles = new DiagnosticsArticles();
    
    //Login Functionality
    cy.visit(Cypress.env("url"));
    aos_login.should_Login_AOS_When_ValidCredentials(
      Cypress.env("Username"),
      Cypress.env("Password")
    );

    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step1", "Pass");
    });

    //Click on Diagnostics Articles
    Diagnosticarticles.should_ClickOnMyDiagnosticArticles();
    cy.wait(5000);
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step2", "Pass");
      cy.logStepStatus(ArraySteps, "step3", "Pass");
      cy.logStepStatus(ArraySteps, "step4", "Pass");
    });
    //Check Diagnostics Articles
    Diagnosticarticles.Should_Click_on_DiagArticlesISSNextDetails();
    //click on back to overview button
    Diagnosticarticles.should_Click_on_BackToOverviewButton();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step5", "Pass");
    });

    //Check DiagnosticArticlesReqOrderInfo
    Diagnosticarticles.should_Click_On_RequestingOrderInformationbutton();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step6", "Pass");
      cy.logStepStatus(ArraySteps, "step7", "Pass");
    });
    //Check RequestingOrderInformation
    Diagnosticarticles.should_CheckReqOrderInformation();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step8", "Pass");
      cy.logStepStatus(ArraySteps, "step9", "Pass");
    });
    //Submit the Request
    Diagnosticarticles.should_CheckSentRequest();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step10", "Pass");
      cy.logStepStatus(ArraySteps, "step11", "Pass");
    });
    //Creating pass execution
    je.should_Create_Jira_Pass_Execution(testTitle, environment_name, user, testcase, Pass)

  });
});