//import Execution_Status from "../../../support/Commons/Testresults.js";
import login from "../../../support/pages/Login_Page.js";
//import logout from "../../../support/pages/Logout_page.js"
import dateGetter from "../../../support/Commons/DateGetter.js";
import HelpOverview from "../../../support/pages/Help_Overview_page.js";
import SupportForm from "../../../support/pages/Support_Form.js";
import guest from "../../../support/pages/Guest_UserPage.js";
import JiraExecution from "../../../support/Commons/Jira_Execution.js";


describe("Checking Support Request form ", () => {
  const aos_login = new login();
  //const jira = new Execution_Status();
  const support = new SupportForm();
  //const home = new Homepage()
  // const Logout = new logout();
  const date = new dateGetter();
  //const Footer=new footer()
  //const services=new ServicesOverview()
  const help = new HelpOverview();

  const guestuser = new guest()
  let testTitle;

  // const je = new jirastatus();
  const je = new JiraExecution();
  const Pass = "PASS".toString();
  const testcase = "AOSRE-24050".toString()

  const dateTime = date.getDate();
  let ArraySteps = [];
  const environment_name = "QA2".toString()

  const user = "||Legal_User|| ".toString();

  let errorMessage = ""
  const screenshotName = "Fail_AOSRE-24050_" + dateTime;
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
        je.should_Create_Jira_Fail_Execution(testcase,ArraySteps,errorMessage,environment_name,user,testTitle,screenshotName)
       }
       
    } catch (error) {
      console.error("Error in afterEach:", error);
    }
  });


  it("AOSRE-24050 : Support Request Creation ", () => {
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
    support.should_Verify_SupportRequest_Error_Messages();
    
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step2", "Pass");
      cy.logStepStatus(ArraySteps, "step3", "Pass");
      cy.logStepStatus(ArraySteps, "step4", "Pass");
      cy.logStepStatus(ArraySteps, "step5", "Pass");
      cy.logStepStatus(ArraySteps, "step6", "Pass");
      cy.logStepStatus(ArraySteps, "step7", "Pass");
      cy.logStepStatus(ArraySteps, "step8", "Pass");
    });

    cy.wait(30000)
//Pass Execution for Testcase
je.should_Create_Jira_Pass_Execution(testTitle,environment_name,user,testcase,Pass)
   
  });
});