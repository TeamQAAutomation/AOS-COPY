import Execution_Status from "../../support/Commons/Testresults.js";
import login from "../../support/pages/Login_Page.js";
import dateGetter from "../../support/Commons/DateGetter.js";
import History from "../../support/pages/History.js";
import JiraExecution from "../../support/Commons/Jira_Execution.js";

describe("AccessToHistoryPageForClientAdminUser", () => {
  let errorMessage = ""
  let testTitle;
  const jira = new Execution_Status();
  const date = new dateGetter();
  const history = new History();
  const je = new JiraExecution();
  const Pass="PASS".toString();
  const testcase="AOSRE-9732".toString()

  const dateTime = date.getDate();
  let ArraySteps = [];
  const environment_name="QA2".toString()
  const user="Legal_User".toString();

  const screenshotName = "Fail_AOSRE-9732_" + dateTime;
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


  it("AOSRE-9732: AccessToHistoryPageForClientAdminUser", () => {
    const aos_login = new login();
    //Current Test Title
    testTitle = Cypress.spec.name.toString();

    cy.visit(Cypress.env("url"));
    cy.wait(5000);
    //Login
    aos_login.should_Login_AOS_When_ValidCredentials(
      Cypress.env("Username"),
      Cypress.env("Password")
    );

    // cy.visit(Cypress.env("int_url"))
    // cy.wait(5000)
    // aos_login.AOS_login(Cypress.env("int_Admin_username"), Cypress.env("int_Admin_password"))
    cy.wait(5000);
    //Click on myaos and click on History tab
    history.should_Click_HistoryTab();
    //Verify History table details
    history.should_Check_HistoryTable();
    cy.wait(5000);
// Pass Execution for Test case
je.should_Create_Jira_Pass_Execution(testTitle,environment_name,user,testcase,Pass)
});
});
   
