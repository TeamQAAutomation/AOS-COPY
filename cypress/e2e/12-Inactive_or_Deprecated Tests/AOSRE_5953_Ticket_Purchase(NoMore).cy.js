import card_Creation_Verification from "../../../support/Commons/CardVerification.cy.js";
import Execution_Status from "../../support/Commons/Testresults.js";
import login from "../../support/pages/Login_Page.js";
import bmwPay from "../../support/pages/bmw_pay_Purchase.js";
import dateGetter from "../../support/Commons/DateGetter.js";
import MyPaymentMethods from "../../support/pages/MyPayments_Methods.js";
import myTickets from "../../support/pages/MyTicketsPage.js";
import jirastatus from "../../../../support/Commons/jiraexecutions.js";

describe("Purchase a Ticket", () => {
  let errorMessage = ""
  let testTitle;
  const jira = new Execution_Status();
  const date = new dateGetter();
  const bmw_Pay = new bmwPay();
  const je = new jirastatus();
  const Pass="PASS".toString();
  const testcase="AOSRE-5953".toString()

  const dateTime = date.getDate();
  let ArraySteps = [];
  const environment_name="QA2".toString()
  const user="Legal_user".toString();

  const screenshotName = "Fail_AOSRE-5953_" + dateTime;
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
     je.jira_fail(testcase,ArraySteps,errorMessage,environment_name,user,testTitle,screenshotName)
    }
  });

 
  
  it("AOSRE-5953: Ticket purchase from My Tickets", () => {
    const aos_login = new login();
    const card = new card_Creation_Verification();
    //Current Test Title 
    testTitle = Cypress.spec.name.toString();

    const paymentMethods = new MyPaymentMethods();
    const tickets = new myTickets();
//Login
    cy.visit(Cypress.env("url"));
    aos_login.should_Login_AOS_When_ValidCredentials(
      Cypress.env("Legal_representative_username"),
      Cypress.env("Legal_representative_password")
    );
    //cy.visit(Cypress.env("int_url"))
    cy.wait(5000);
    // aos_login.AOS_login(Cypress.env("int_Admin_username"), Cypress.env("int_Admin_password"))
    cy.wait(10000);
//Click on Myaos and click on Mypayment methods     
    paymentMethods.should_ClickOnMypaymentmethods();
//generate Random  card Details 
    let credit_card = card.generate_randomcard();
    cy.log(credit_card);
    const randomcard = credit_card;
    const cardname = "TestAutomation" + randomcard;
//Update and generate card details 
    card.create_card(cardname);
    cy.wait(40000);
//Click on     AOS and click my payment methods
    paymentMethods.should_ClickOnMypaymentmethods();

    cy.wait(30000);
//Verify Card Details
    card.Verify_Card_Details(cardname);
//Click on My aos and click on Mytickets

tickets.should_ClickOnMyTickets()
   // cy.clickLink("My tickets");
    cy.wait(10000);
    //Purchase Ticket by name
    bmw_Pay.should_TicketPurchase("Document research");

    cy.wait(40000);
// Pass Execution for Test case
je.jira_pass(testTitle,environment_name,user,testcase,Pass)
});
});