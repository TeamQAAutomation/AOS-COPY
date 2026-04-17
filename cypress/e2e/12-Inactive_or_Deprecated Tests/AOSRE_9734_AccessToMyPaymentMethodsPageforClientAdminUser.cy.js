import Execution_Status from "../../support/Commons/Testresults.js";
import login from "../../support/pages/Login_Page.js";
import dateGetter from "../../support/Commons/DateGetter.js";
import MyPaymentMethods from "../../support/pages/MyPayments_Methods.js";
import JiraExecution from "../../support/Commons/Jira_Execution.js";

describe("AccessToMyPaymentMethodsPageForClientAdminuser", () => {
  let ArraySteps = [];
  let errorMessage = ""
  let testTitle;
  const jira = new Execution_Status();
  const date = new dateGetter();
  const MPM = new MyPaymentMethods();
  const je = new JiraExecution();
  const Pass="PASS".toString();
  const testcase="AOSRE-9734".toString()

  const dateTime = date.getDate();
  const environment_name="QA2".toString()
  const user="Guest_User".toString();

  const screenshotName = "Fail_AOSRE-9734_" + dateTime;
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

  it("AOSRE-9734: AccessToMyPaymentMethodsPageForClientAdminuser", () => {
    const aos_login = new login();
    //Current Test TItle
    testTitle = Cypress.spec.name.toString();
    //Access url from config 
    cy.visit(Cypress.env("url"));
    cy.wait(5000);

    //login
    // aos_login.AOS_login(
    //   Cypress.env("Legal_representative_username"),
    //   Cypress.env("Legal_representative_password")
    // );

    // cy.visit(Cypress.env("int_url"))
    // cy.wait(5000)

    aos_login.should_Login_AOS_When_ValidCredentials(Cypress.env("Admin_username"), Cypress.env("Admin_password"))

    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step1", "Pass");
    });
    MPM.should_MYAOSOverview();
    cy.wait(5000);
    //Click on My aos and click on My payment methods
    MPM.should_ClickOnMypaymentmethods();

    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step2", "Pass");
    });
    //Verify Payment Process 
    MPM.should_checkinformationaboutpaymentprocess();

    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step3", "Pass");
    });
    // Pass Execution for Test case
  je.should_Create_Jira_Pass_Execution(testTitle,environment_name,user,testcase,Pass)
});
});
