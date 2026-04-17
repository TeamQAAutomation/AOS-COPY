import Execution_Status from "../../support/Commons/Testresults.cy.js";
import login from "../../support/pages/Login_Page.cy.js";
import dateGetter from "../../support/Commons/DateGetter.js";
import admin from "../../support/pages/Admin_User.js";
import JiraExecution from "../../support/Commons/Jira_Execution.js";
import registration from "../../support/pages/RegistrationPage.js";
 
 
describe("Review of open registration request page ", () => {
  const aos_login = new login();
  const jira = new Execution_Status();
  const date = new dateGetter();
  const Admin = new admin();
  let registrationData;
  let errorMessage = ""
  let testTitle;
  let Adminapproval_Data;
  const je = new JiraExecution();
  const Pass="PASS".toString();
  const testcase="AOSRE-12705".toString()
 
  const dateTime = date.getDate();
  let ArraySteps = [];
  const environment_name="QA2".toString()
  const user="||Admin_User|| ".toString();
 
 
  const screenshotName = "Fail_AOSRE-12705_" + dateTime;
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
 
  it("AOSRE-12705: Review_open_registrationrequest ", () => {

    cy.fixture("Registration_config_row.json").then((config) => {
      registrationData = config.registration_data;


    //Current Test title
  testTitle = Cypress.spec.name.toString();
    const Login = new login()
    const reg=new registration();    
      //Current Test Title
     
     //Load url from Config file
     Login.launch_login_page();
   
      cy.wait(5000);
      //click on register now button
      reg.should_ClickRegisterNow();
     
       //Register
       reg.should_Register( "testregistrationFunc",
        registrationData.Dealer_Dropdown,
        registrationData.Dealer_Drop_Down_value,
        registrationData.Country_Dropdown,
        registrationData.Country_Dropdown_Value,
        registrationData.Organization_name,
        registrationData.Street_address,
        registrationData.Postal_Code,
        registrationData.Organization_city,
        registrationData.Salutation,
        registrationData.Salutation_Value,
        registrationData.Last_name,
        registrationData.First_name,
        registrationData.Registration_form_language,
        registrationData.Registration_form_language_value,
        registrationData.Timezone,
        registrationData.Timezone_Value);
     
       //Verify Registration and log it
      reg.should_Verify_Registration();
      cy.log("success registration");
      cy.wait(20000);
 
   
 
 
 
    cy.visit(Cypress.env("url"));
    cy.wait(10000);
   
 
    //Login
    aos_login.AOS_login(
      Cypress.env("Admin_username"),
      Cypress.env("Admin_password")
    );
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step1", "Pass");
    });
    cy.wait(5000);
    Admin.click_on_administration();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step2", "Pass");
    });
    Admin.click_on_Registrations();
    cy.wait(40000);
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step3", "Pass");
    });
    Admin.click_on_latest_user();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step4", "Pass");
    });
    cy.fixture("Admin_approval_config.json").then((config) => {
      Adminapproval_Data= config.Admin_approval_data;
    Admin.verify_user_details(Adminapproval_Data.email,Adminapproval_Data.country,Adminapproval_Data.Dealer_Dropdown,Adminapproval_Data.Last_name,Adminapproval_Data.First_name);
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step5", "Pass");
    });
    // Pass Execution for Test case
  je.should_Create_Jira_Pass_Execution(testTitle,environment_name,user,testcase,Pass)
});
});
});
});