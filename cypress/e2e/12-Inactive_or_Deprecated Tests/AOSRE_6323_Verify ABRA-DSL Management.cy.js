import login from "../../support/pages/Login_Page.cy.js";
import dateGetter from "../../support/Commons/DateGetter.js";
import JiraExecution from "../../support/Commons/Jira_Execution.js";
import admin from "../../support/pages/Admin_User.js";
import Execution_Status from "../../support/Commons/Testresults.cy.js";

describe("AOSRE_6323_Verify ABRA-DSL Management", () => {
  const aos_login = new login();
  const Adminuser = new admin();

  const jira = new Execution_Status();
  const date = new dateGetter();
  let errorMessage = ""
  let testTitle;

  const je = new JiraExecution();
  const Pass = "PASS".toString();
  const testcase = "AOSRE-6323".toString();

  const dateTime = date.getDate();
  let ArraySteps = [];
  const environment_name = "QA2".toString();
  const user = "admin_User".toString();

  const screenshotName = "Fail_AOSRE-6323_" + dateTime;
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
  it("AOSRE_6323_Verify ABRA-DSL Management", () => {
    testTitle = Cypress.spec.name.toString();
    //login to application
    cy.visit(Cypress.env("url"));
    aos_login.AOS_login(
      Cypress.env("Admin_username"),
      Cypress.env("Admin_password")
    );
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step1", "Pass");
    });
    cy.wait(10000);
    //click on admin user
    Adminuser.click_on_administration();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step2", "Pass");
    });
    //click on configuration
    Adminuser.clickConfiguration();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step3", "Pass");
    });
    cy.wait(5000);
    //verify B2I_Ui_menu
    Adminuser.verify_B2I_Ui_Menu();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step4", "Pass");
    });
    //click on abra dsl management
    Adminuser.click_on_abra_dsl_mananagement();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step5", "Pass");
    });
    cy.wait(20000);
    //verify abra dsl management
    Adminuser.verify_abra_dsl_management();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step6", "Pass");
    });
    cy.wait(30000);
    //Pass Execution for Testcase
    je.should_Create_Jira_Pass_Execution(testTitle, environment_name, user, testcase, Pass);
  });
});
