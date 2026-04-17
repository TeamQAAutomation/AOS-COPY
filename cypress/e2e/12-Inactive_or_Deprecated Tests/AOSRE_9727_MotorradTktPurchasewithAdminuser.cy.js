import login from "../../support/pages/Login_Page.js";
import Execution_Status from "../../support/Commons/Testresults.js";
import dateGetter from "../../support/Commons/DateGetter.js";
import Mytickets_page from "../../support/pages/MyTicketsPage.js";
import Motorradtktpurchase from "../../support/pages/TicketPurchase_Motorrad.js";
import JiraExecution from "../../support/Commons/Jira_Execution.js";

describe(
  "Logged in User Email should display on the Payment details page For user group" +
    "motorrad of Admin User",
  () => {
    let errorMessage = ""
    let testTitle;
    const jira = new Execution_Status();
    const date = new dateGetter();
    const tickets = new Motorradtktpurchase();
    const je = new JiraExecution();
    const Pass="PASS".toString();
    const testcase="AOSRE-9727".toString()
  
    const dateTime = date.getDate();
    let ArraySteps = [];
    const environment_name="QA2".toString()
    const user="Guest_User".toString();
  
    const screenshotName = "Fail_AOSRE-9727_" + dateTime;
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
      "AOSRE-9727: Check whether the LoggedIn Admin user is displayed in the Payment" +
        " details page or not",
      () => {
        //current test title 
        testTitle = Cypress.spec.name.toString();

        const aos_login = new login();
        const my_tickets = new Mytickets_page();
//access urls from config file 
        cy.visit(Cypress.env("url"));
        //login 
        aos_login.should_Login_AOS_When_ValidCredentials(
          Cypress.env("Username"),
          Cypress.env("Password")
        );
        cy.wait(10000);

        cy.wrap().then(() => {
          cy.logStepStatus(ArraySteps, "step1", "Pass");
        });
//Click on my tickets 
        my_tickets.should_ClickOnMyTickets();
        cy.wait(20000);

        cy.wrap().then(() => {
          cy.logStepStatus(ArraySteps, "step2", "Pass");
        });
//Purchae Ticket by Username
        tickets.should_Purchase_MotorradTicket(Cypress.env("Username"));
        cy.wait(10000);

        cy.wrap().then(() => {
          cy.logStepStatus(ArraySteps, "step3", "Pass");
        });
// Verify Ticket Purchase Payment page
        tickets.should_Verify_Motorrad_PurchasePaymentPage();

        cy.wrap().then(() => {
          cy.logStepStatus(ArraySteps, "step4", "Pass");
        });
//Verify Info Payment page by Motorrad user
        tickets.should_Verify_UserInfo_In_PaymentPage(
          Cypress.env("Username")
        );

        cy.wrap().then(() => {
          cy.logStepStatus(ArraySteps, "step5", "Pass");
        });
// Pass Execution for Test case
je.should_Create_Jira_Pass_Execution(testTitle,environment_name,user,testcase,Pass)
});
});
