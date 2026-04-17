import login from "../../support/pages/Login_Page.js";
import logout from "../../support/pages/LogoutPage.js"
import voucher_Ticket_purchase from "../../support/pages/Ticket_purchase_voucher.js";
import Voucher_Management from "../../support/pages/VoucherManagement.js";
import dateGetter from "../../support/Commons/DateGetter.js";
import Execution_Status from "../../support/Commons/Testresults.js";
import myTickets from "../../support/pages/MyTicketsPage.js";
import Homepage from "../../support/pages/StartPage.js";
import JiraExecution from "../../support/Commons/Jira_Execution.js";

describe("Ticket through Voucher", () => {
  const date = new dateGetter();
  const jira = new Execution_Status();
  let testTitle;
  const je = new JiraExecution();
  const Pass="PASS".toString();
  const testcase="AOSRE-6322".toString()

  const dateTime = date.getDate();
  let ArraySteps = [];
  const environment_name="QA2".toString()
  const user="Guest_User".toString();

  const screenshotName = "Fail_AOSRE-6322_" + dateTime;
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


  it("AOSRE-6322: purchase ticket with available voucher", () => {
    testTitle = Cypress.spec.name.toString();
    const aos_login = new login();
    const vocuherMgmt = new Voucher_Management();
    const log_out = new logout();
    const voucher_Ticket = new voucher_Ticket_purchase();
    const tickets = new myTickets();
    const home = new Homepage();

    //Load url from Config 
    cy.visit(Cypress.env("url"));
    //Login
    aos_login.should_Login_AOS_When_ValidCredentials(
      Cypress.env("Admin_username"),
      Cypress.env("Admin_password")
    );

    //Admin_username

    // aos_login.launch_login_page()
    // aos_login.AOS_login(Cypress.env("int_Admin_username"),Cypress.env("int_Admin_password"))
    cy.wait(10000);
    //Verify Login
    //home.verify_login();
    //Click on Myaos and Click on Myorganisation
    vocuherMgmt.Click_MyOrganisation();
    //Search Organisation
    vocuherMgmt.SearchOrganisation(
      Cypress.env("int_Legal_representative_username")
    );
    //Add Vouchers by Ticket Type
    vocuherMgmt.AddVouchers("Document hourly ticket of the tariff");
    cy.wait(6000);

    //Verify Logout
    log_out.should_Verify_AOS_ROW_Logout();
    cy.wait(6000);
    //Clear Session Storage
    cy.clearAllSessionStorage();
    //Clear Cookies
    cy.clearAllCookies();
    //Load url from Config File
    cy.visit(Cypress.env("url"));
    //Login
    aos_login.should_Login_AOS_When_ValidCredentials(
      Cypress.env("Legal_representative_username"),
      Cypress.env("Legal_representative_password")
    );
    // aos_login.launch_login_page()
    // aos_login.AOS_login(Cypress.env("int_Legal_representative_username"),Cypress.env("int_Legal_representative_password"))
    //Click on Myaos and Click on My Tickets 
    tickets.should_ClickOnMyTickets();
//Validate Voucher Availability     
    voucher_Ticket.should_Get_Available_Vouchers();
//Click on ticket
    voucher_Ticket.should_Click_Required_Ticket();

//Purchase Page    
    voucher_Ticket.should_Click_PurchaseNow_And_Verify_Message();
// Pass Execution for Test case
je.should_Create_Jira_Pass_Execution(testTitle,environment_name,user,testcase,Pass)
});
});