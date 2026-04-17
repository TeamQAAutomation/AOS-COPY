import login from "../../support/pages/Login_Page.cy.js";
import JiraExecution from "../../support/Commons/Jira_Execution.js";
import dateGetter from "../../support/Commons/DateGetter.js";
import startPage from "../../support/pages/StartPage.js";
import bmwAPI from "../../support/pages/BMW_APIs.js";
describe("Verify Retail Integration Service Portal",()=>{
    const aos_login = new login();
    let testTitle;
    const je=  new JiraExecution();
    const date = new dateGetter();
    const start = new startPage();
    const bmwapi = new bmwAPI();
    const Pass="PASS".toString();
    const testcase="AOSRE-5987".toString()
    const dateTime = date.getDate();

    let ArraySteps = [];
    const environment_name="QA2".toString()
  
    const user="||Legal_User|| ".toString();
    let errorMessage = ""
    const screenshotName = "Fail_AOSRE-5987_" + dateTime;
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
    it("AOSRE-5987_Verify Retail Integration Service Portal",()=>{
        testTitle = Cypress.spec.name.toString();
        //Acces url from config file 
        cy.visit(Cypress.env("url"))
        //Login
        aos_login.AOS_login(
            Cypress.env("Username"),
            Cypress.env("Password")
          );
        cy.wait(6000)
        cy.wrap().then(() => {
            cy.logStepStatus(ArraySteps, "step1", "Pass");
          });
          //welcome to aso text should be visible
        start.should_Verify_AOS_WelcomeText();
        cy.wrap().then(() =>{
            cy.logStepStatus(ArraySteps,"step2","Pass");
        });
        //check english language is selected
        start.should_Check_LanguageSelection("English");
        cy.wrap().then(() =>{
            cy.logStepStatus(ArraySteps,"step3","Pass");
        });
        //click on bmw apis
        start.should_Click_BMW_APIs();
        cy.wrap().then(()=>{
            cy.logStepStatus(ArraySteps,"step4","Pass");
        });
        //check bmw apis
        bmwapi.should_Check_All_BMWAPIs();
      
        cy.wrap().then(()=>{
            cy.logStepStatus(ArraySteps,"step5","Pass");
        });
        //click more button
        bmwapi.should_Check_MoreButton();
        cy.wrap().then(() =>{
            cy.logStepStatus(ArraySteps,"step6","Pass");
        });
        //check rsi portal
        bmwapi.should_Click_RISPortal();
        cy.wrap().then(() =>{
            cy.logStepStatus(ArraySteps,"step7","Pass");
        });
        cy.wait(20000)
        //verify the texts on bmw cardata
        bmwapi.should_Verify_Texts_On_RISportal();
        cy.wrap().then(() =>{
            cy.logStepStatus(ArraySteps,"step8","Pass");
        });
        //pass executions
         je.should_Create_Jira_Pass_Execution(testTitle,environment_name,user,testcase,Pass)
          cy.wait(20000);
    })
});