import Execution_Status from "../../support/Commons/Testresults.js";
import login from "../../support/pages/Login_Page.js";
import dateGetter from "../../support/Commons/DateGetter.js";
import Homepage from "../../support/pages/StartPage.js";
import JiraExecution from "../../support/Commons/Jira_Execution.js";

describe("AccessToMyInvoicesPageForClientAdminuser", () => {
  let errorMessage = ""
  let testTitle;
  const jira = new Execution_Status();
  const date = new dateGetter();
  const home = new Homepage();
  const je = new JiraExecution();
  const Pass="PASS".toString();
  const testcase="AOSRE-9733".toString()

  const dateTime = date.getDate();
  let ArraySteps = [];
  const environment_name="QA2".toString()
  const user="Legal_User".toString();

  const screenshotName = "Fail_AOSRE-9733_" + dateTime;
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


  it("AOSRE-9733: AccessToMyinvoicesPageForClientAdminuser", () => {
    const aos_login = new login();
    //Current Test Title 
    testTitle = Cypress.spec.name.toString();
    //Access url from config file
    cy.visit(Cypress.env("url"));
    cy.wait(5000);
    //login
    aos_login.should_Login_AOS_When_ValidCredentials(
      Cypress.env("Username"),
      Cypress.env("Password")
    );

    // cy.visit(Cypress.env("int_url"))
    // cy.wait(5000)
    // aos_login.AOS_login(Cypress.env("int_Admin_username"), Cypress.env("int_Admin_password"))
   
   //verify login
    home.should_Verify_Login();
    //click on my aos
    home.should_Click_MyAOS();
    //Assert Options in myaos
    home.elements.myAosOptions().should("not.have.value", "My invoices");
// Pass Execution for Test case
je.should_Create_Jira_Pass_Execution(testTitle,environment_name,user,testcase,Pass)
});
});
