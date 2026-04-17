import Homepage from "../../support/pages/StartPage.js";
import login from "../../support/pages/Login_Page.js";
import myTickets from "../../support/pages/MyTicketsPage.js";
import Execution_Status from "../../support/Commons/Testresults.js";
import dateGetter from "../../support/Commons/DateGetter.js";
import MyData from "../../support/pages/MyDataPage.js";
import MyPaymentMethods from "../../support/pages/MyPayments_Methods.js";
import JiraExecution from "../../support/Commons/Jira_Execution.js";

describe(
  "Logged in User Email should display on the Payment details page For user group" +
    "independent workshop/dealer of Admin User",
  () => {
    const aos_login = new login();
    const mypayments = new MyPaymentMethods();
    const ticket = new myTickets();
    const mydata = new MyData();
    
    const jira = new Execution_Status();
    const date = new dateGetter();
    let errorMessage = ""
    let testTitle;
    const je = new JiraExecution();
    const Pass="PASS".toString();
    const testcase="AOSRE-9849".toString()
  
    const dateTime = date.getDate();
    let ArraySteps = [];
    const environment_name="QA2".toString()
    const user="Guest_User".toString();
  
    const screenshotName = "Fail_AOSRE-9849_" + dateTime;
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
       je.should_Create_Jira_Fail_Execution(testcase,ArraySteps,errorMessage,environment_name,user,testTitle,screenshotName)
      }
    });
  

    it(
      "AOSRE-9849: Check whether the LoggedIn Admin user is displayed in the Payment" +
        " details page or not",
      () => {
        testTitle = Cypress.spec.name.toString();
        //login to application
        cy.visit(Cypress.env("url"));
        aos_login.should_Login_AOS_When_ValidCredentials(
          Cypress.env("Admin_username"),
          Cypress.env("Admin_password")
        );
        cy.wrap().then(() => {
          cy.logStepStatus(ArraySteps, "step1", "Pass");
        });
        cy.wait(10000);
        //check aos overview
        mydata.should_CheckAOSOverview(Cypress.env("TEST_LABEL"));
        cy.wrap().then(() => {
          cy.logStepStatus(ArraySteps, "step2", "Pass");
        });
        //My tickets page clicked
        ticket.should_MyTicketsTabClick();
        cy.wrap().then(() => {
          cy.logStepStatus(ArraySteps, "step3", "Pass");
        });
        //purchase ticket
        const document = "Information research";
        const time = "Hour";
        ticket.should_Purchase_Ticket("Information", "Hour");
        cy.wrap().then(() => {
          cy.logStepStatus(ArraySteps, "step4", "Pass");
        });
        //click on my payments method
        mypayments.should_CheckingLatestAddedCardDetails();
        cy.wrap().then(() => {
          cy.logStepStatus(ArraySteps, "step5", "Pass");
        });
        // Pass Execution for Test case
  je.should_Create_Jira_Pass_Execution(testTitle,environment_name,user,testcase,Pass)
});
});
