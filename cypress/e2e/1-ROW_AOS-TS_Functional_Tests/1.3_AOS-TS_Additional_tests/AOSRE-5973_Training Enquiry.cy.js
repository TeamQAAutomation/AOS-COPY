import login from "../../../support/pages/Login_Page.js";
import TrainingEnquiry from "../../../support/pages/Training_Enquiry_Form.js";
import dateGetter from "../../../support/Commons/DateGetter.js";
import HelpOverview from "../../../support/pages/Help_Overview_page.js";
import MyRequest from "../../../support/pages/My_Requests.js";
import JiraExecution from "../../../support/Commons/Jira_Execution.js";

describe("Training Enquiry", () => {
  const aos_login = new login();
  const date = new dateGetter();
  //const jira = new Execution_Status();
  const help = new HelpOverview();
  let testTitle;

  const je = new JiraExecution();
  const Pass = "PASS".toString();
  const testcase = "AOSRE-5973".toString()

  const dateTime = date.getDate();
  let ArraySteps = [];
  const environment_name = "QA2".toString()
  const user = "||Legal_User|| ".toString();
  let errorMessage = ""
  const screenshotName = "Fail_AOSRE-5973_" + dateTime;
  // Handle test failures globally by capturing error messages
    Cypress.on("fail", (err, runnable) => {
        errorMessage = err && err.message ? err.message : "";
        if (errorMessage && errorMessage.length != 0) {
            console.log("failed test");
            console.log(errorMessage);
        }
        throw err;
    });

    afterEach(() => {
        if (errorMessage && errorMessage.length != 0) {
             je.should_Create_Jira_Fail_Execution(testcase,ArraySteps,errorMessage,environment_name,user,testTitle,screenshotName)
        }
    });

  it("AOSRE-5973: Training Enquiry form", () => {
    const aos_login = new login();
    const aos_TrainingEnquiry = new TrainingEnquiry();
    const helpoverview = new HelpOverview();
    const myreq = new MyRequest();

    testTitle = Cypress.spec.name.toString();
    //login to application
    cy.visit(Cypress.env("url"));
    aos_login.should_Login_AOS_When_ValidCredentials(
      Cypress.env("Username"),
      Cypress.env("Password")
    );
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step1", "Pass");
    });
    cy.wait(10000);
    // //click and check overview
    helpoverview.should_Verify_Help_Menu("ROW");
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step2", "Pass");
      cy.logStepStatus(ArraySteps, "step3", "Pass");
    });
    //  //click on Training Enquiry Form   
    aos_TrainingEnquiry.should_Click_TrainingEnquiryForm();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step4", "Pass");
    });
    //     //CheckListOfbrandsAndSelectBMWbrand
    aos_TrainingEnquiry.should_Check_ListOfBrands_And_SelectABrand();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step5", "Pass");
      cy.logStepStatus(ArraySteps, "step6", "Pass");
    });
    //     //checkSectionsShoulddisplayafterselectingbrand
    aos_TrainingEnquiry.should_Check_Sections_After_BrandSelection();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step7", "Pass");
    })
    //     //checkfiledsaredisplayoingunderinofrmationaboutyourreqsection();
    aos_TrainingEnquiry.should_Check_Fileds_Under_InfoAboutYourReq();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step8", "Pass");
    })
    // //informationaboutyourrequestsectionfilling    
    aos_TrainingEnquiry.should_Fill_Details_Under_InfoAboutYourReq();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step9", "Pass");
    });
    // //validateUserdataAndandfilldata
    aos_TrainingEnquiry.should_Update_UserData_Section();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step10", "Pass");
      cy.logStepStatus(ArraySteps, "step11", "Pass");
    });
    //clickonsendbutton
    aos_TrainingEnquiry.should_Click_SendButton();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step12", "Pass");
    });
    // // Validate Ticket Purchase Functionality 
    aos_TrainingEnquiry.should_Validate_Ticket_Success_Message();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step13", "Pass");
    });
    aos_login.should_Click_ExpandButton();
    //clickon my request and check latest ticket purchase
    myreq.Should_click_MyRequest_And_Check_Latest();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step14", "Pass");
    });
    //Pass Execution  for Testcase
    je.should_Create_Jira_Pass_Execution(testTitle, environment_name, user, testcase, Pass)
  });
});
