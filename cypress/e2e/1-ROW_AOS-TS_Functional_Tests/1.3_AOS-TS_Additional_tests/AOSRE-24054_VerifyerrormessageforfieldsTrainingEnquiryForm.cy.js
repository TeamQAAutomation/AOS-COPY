import login from "../../../support/pages/Login_Page.js";
//import Execution_Status from "../../../support/Commons/Testresults.js";
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
  const testcase = "AOSRE-24054".toString()

  const dateTime = date.getDate();
  let ArraySteps = [];
  const environment_name = "QA2".toString()
  const user = "||Legal_User|| ".toString();
  let errorMessage = ""
  const screenshotName = "Fail_AOSRE-24054_" + dateTime;
  // Handle test failures globally by capturing error messages
  Cypress.on("fail", (err, runnable) => {
    errorMessage = err && err.message ? err.message : ""; // Assign error message safely
    if (errorMessage && errorMessage.length != 0) {
      console.log("failed test");
      console.log(errorMessage);
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

  it("AOSRE-24054: Training Enquiry form", () => {
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
    // //click and chefck overview
    // helpoverview.should_Click_On_Help_Overview();
    //  cy.wrap().then(() => {
    //   cy.logStepStatus(ArraySteps, "step2", "Pass");
    // });

    // helpoverview.should_Verify_Overview();
    // cy.wrap().then(() => {
    //   cy.logStepStatus(ArraySteps, "step3", "Pass");
    // });
    //  //click on Training Enquiry Form   
    aos_TrainingEnquiry.should_Click_TrainingEnquiryForm();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step4", "Pass");
    });
    //CheckListOfbrandsAndSelectBMWbrand
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
    // aos_TrainingEnquiry.Clickonsendbutton();
    aos_TrainingEnquiry.should_Verify_Error_Messages();
    //clickonsendbutton
    ;
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step12", "Pass");
    });

//Pass Execution  for Testcase
je.should_Create_Jira_Pass_Execution(testTitle,environment_name,user,testcase,Pass)
});
});
