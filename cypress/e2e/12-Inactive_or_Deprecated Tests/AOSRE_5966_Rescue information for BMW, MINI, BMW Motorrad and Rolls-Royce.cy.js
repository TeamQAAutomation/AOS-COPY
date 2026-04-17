import login from "../../support/pages/Login_Page.cy.js";
import Execution_Status from "../../support/Commons/Testresults.cy.js";
import dateGetter from "../../support/Commons/DateGetter.js";
import ServicesOverview from "../../support/pages/ServicesOverview.js";
import RescueInformation from "../../support/pages/RescueInformation.js";
import JiraExecution from "../../support/Commons/Jira_Execution.js";
import ResuceinformationOfMotorcycle from "../../support/pages/RescueInformationSubpages/RescueInformationOfMotorcycle.js";
import ResuceinformationOfRollsRoyce from "../../support/pages/RescueInformationSubpages/RescueInformationOfRollsRoyce.js";
import RescueInformationOfMINI from "../../support/pages/RescueInformationSubpages/RescueInformationOfMINI.js";
import RescueInformationOfBMW from "../../support/pages/RescueInformationSubpages/RescueInformationOfBMW.js";
//Test

describe("AOSRE-5966_Rescue information for BMW, MINI, BMW Motorrad and Rolls-Royce", () => {
  const aos_login = new login();
  const services = new ServicesOverview();
  const RescueInfo = new RescueInformation();
  const RescuInfoOfBMW = new RescueInformationOfBMW();
  const RescueInfoOfMINI = new RescueInformationOfMINI();
  const ResInfoOfRoolsRoyce = new ResuceinformationOfRollsRoyce();
  const RescueInfoOfMC = new ResuceinformationOfMotorcycle();

  const jira = new Execution_Status();
  const date = new dateGetter();
  let errorMessage = ""
  let testTitle;

  const je = new JiraExecution();
  const Pass="PASS".toString();
  const testcase="AOSRE-5966".toString()

  const dateTime = date.getDate();
  let ArraySteps = [];
  const environment_name="QA2".toString()
  const user="Legal_User".toString();

  const screenshotName = "Fail_AOSRE-5966_" + dateTime;
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


  it("AOSRE-5966_Rescue information for BMW, MINI, BMW Motorrad and Rolls-Royce", () => {
     //Current Test title
     testTitle = Cypress.spec.name.toString();
     //login to application
    cy.visit(Cypress.env("url"));
    aos_login.AOS_login(
      Cypress.env("Legal_representative_username"),
      Cypress.env("Legal_representative_password")
    );
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step1", "Pass");
    });
    cy.wait(10000);
     //Click Services and Verify its  Options 
     services.should_Check_ServicesTab();
     cy.wrap().then(() => {
       cy.logStepStatus(ArraySteps, "step2", "Pass");
     });
     //Click on Rescueinfo Options
     RescueInfo.should_ClickOnRescueInfo();
     cy.wrap().then(() => {
       cy.logStepStatus(ArraySteps, "step3", "Pass");
     });
    //Verify Bmw services Overview
    RescuInfoOfBMW.should_Check_BMWOverview();

    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step4", "Pass");
    });

    //Verify Content and Downloadable Files
    RescuInfoOfBMW.should_Check_Headings_And_Download();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step5", "Pass");
    });
    //Verify Rescue sheets 
    RescuInfoOfBMW.should_Check_BMWOverview_RescueSheets();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step6", "Pass");
    });
    cy.visit(Cypress.env("url"));
    services.should_Check_ServicesTab();
    RescueInfo.should_ClickOnRescueInfo();

    //Check Overview of Bmw 
    RescuInfoOfBMW.should_Check_BMWOverview();

    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step7", "Pass");
    });
    ///Click on Bmw Compact van
    RescuInfoOfBMW.should_Click_BMWCompactVan();

    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step8", "Pass");
    });
    //Click on Bmw Compact Van Series Check 
    RescuInfoOfBMW.should_Verify_BMWCompactVan_Series();

    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step9", "Pass");
    });
    //Verify Pdf Files Downloadable or not 
    RescuInfoOfBMW.should_Download_PDFFiles();
    cy.wait(20000);
    
    cy.wrap().then(() => {
        cy.logStepStatus(ArraySteps, "step10", "Pass");
      });

    //Check filenameand deletefiles ofCompact van
    RescuInfoOfBMW.should_Check_FileName_And_DeleteFiles_Of_CompactVan();

    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step11", "Pass");
    });
    cy.visit(Cypress.env("url"));
    services.should_Check_ServicesTab();
    RescueInfo.should_ClickOnRescueInfo();
    RescuInfoOfBMW.should_Check_BMWOverview();

    //Click on Convertible 
    RescuInfoOfBMW.should_Click_Convertible();

    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step12", "Pass");
    });
//Verify text Bmw Convertible series 
    RescuInfoOfBMW.should_Verify_BMWConvertibleSeries();

    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step13", "Pass");
    });
//Download pdf files
    RescuInfoOfBMW.should_Download_PDFFiles();
    cy.wait(10000);
  //Verify and Delete Files by name
    RescuInfoOfBMW.should_Check_FileName_And_DeleteFiles_Of_Convertible();

    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step14", "Pass");
    });
    cy.visit(Cypress.env("url"));
    services.should_Check_ServicesTab();
    RescueInfo.should_ClickOnRescueInfo();

    //Check Overview of Bmw 
    RescuInfoOfBMW.should_Check_BMWOverview();
     //Click on Coupe or Compact
     RescuInfoOfBMW.should_Click_CoupéORCompact();

     cy.wrap().then(() => {
       cy.logStepStatus(ArraySteps, "step15", "Pass");
     });
     //Verify Text Check 
     RescuInfoOfBMW.should_Verify_BMWCoupéORCompactSeries();
 
     cy.wrap().then(() => {
       cy.logStepStatus(ArraySteps, "step16", "Pass");
     });
 //Pdf files Downlaod
     RescuInfoOfBMW.should_Download_PDFFiles();
     cy.wait(10000);
 
  //Check File name    and delete Files of Coupe or Compact
     RescuInfoOfBMW.should_Check_FileName_And_DeleteFiles_Of_CoupeorCompact();
 
     cy.wrap().then(() => {
       cy.logStepStatus(ArraySteps, "step17", "Pass");
     });
     cy.visit(Cypress.env("url"));
    services.should_Check_ServicesTab();
    RescueInfo.should_ClickOnRescueInfo();

    //Check Overview of Bmw 
    RescuInfoOfBMW.should_Check_BMWOverview();
     //Click on Saloon
     RescuInfoOfBMW.should_Click_Saloon();
     cy.wrap().then(() => {
       cy.logStepStatus(ArraySteps, "step18", "Pass");
     });
     //Verify Text of Bmw saloon
     RescuInfoOfBMW.should_Verify_BMWSaloonSeries();
     cy.wrap().then(() => {
       cy.logStepStatus(ArraySteps, "step19", "Pass");
     });
     //Verify Pdf Files Download or larger files 
     RescuInfoOfBMW.should_Download_Larger_PDFFiles();
     cy.wait(10000);
     //Click on Rescueinfo_Check File name and Delete Files of Saloon
     RescuInfoOfBMW.should_Check_FileName_And_DeleteFiles_Of_Saloon();
 
     cy.wrap().then(() => {
       cy.logStepStatus(ArraySteps, "step20", "Pass");
     });
     cy.visit(Cypress.env("url"));
    services.should_Check_ServicesTab();
    RescueInfo.should_ClickOnRescueInfo();

    //Check Overview of Bmw 
    RescuInfoOfBMW.should_Check_BMWOverview();
    //Click on SAV
    RescuInfoOfBMW.should_Click_Sav();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step21", "Pass");
    });
    //Verify BMW Series Text
    RescuInfoOfBMW.should_Verify_BMWSavSeries();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step22", "Pass");
    });
    //DownLoad Large Files
    RescuInfoOfBMW.should_Download_Larger_PDFFiles();
  //Verify   Filename and Delete Files of Sav
    RescuInfoOfBMW.should_Check_FileName_And_DeleteFiles_Of_Sav();
    cy.wait(10000);
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step23", "Pass");
    });
    cy.visit(Cypress.env("url"));
    services.should_Check_ServicesTab();
    RescueInfo.should_ClickOnRescueInfo();

    //Check Overview of Bmw 
    RescuInfoOfBMW.should_Check_BMWOverview();
    //Click on SAV
    RescuInfoOfBMW.should_Click_Touring();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step24", "Pass");
    });
    //Verify Bmw Series Text check
    RescuInfoOfBMW.should_Verify_BMWTouringSeries();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step25", "Pass");
    });
    //Verify PDF Files Download
    RescuInfoOfBMW.should_Download_PDFFiles();
    cy.wait(10000);
    //Verify Deleted Files of Touring
    RescuInfoOfBMW.should_Check_FileName_And_DeleteFiles_Of_Touring();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step26", "Pass");
    });
    cy.visit(Cypress.env("url"));
    services.should_Check_ServicesTab();
    RescueInfo.should_ClickOnRescueInfo();
    //Mini Overview 
    RescueInfoOfMINI.should_Check_MINIOverview();

    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step27", "Pass");
    });
    //Check Heading 
    RescueInfoOfMINI.should_Check_Headings_In_MINI();

    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step28", "Pass");
    });
    //Verify Rescue sheet of mini
    RescueInfoOfMINI.should_Check_RescueSheets_MINI();

    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step29", "Pass");
    });
    cy.visit(Cypress.env("url"));
    services.should_Check_ServicesTab();
    RescueInfo.should_ClickOnRescueInfo();
    //Mini Overview 
    RescueInfoOfMINI.should_Check_MINIOverview();

    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step30", "Pass");
    });
    RescueInfoOfMINI.should_Click_MINIClubman();

    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step31", "Pass");
    });

    RescueInfoOfMINI.should_Validate_Models_MINIClubman;

    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step32", "Pass");
    });
    RescueInfoOfMINI.should_Download_All_PDFs();
    cy.wait(20000);
    RescueInfoOfMINI.should_Validate_And_Delete_Files_Of_MINIClubman();

    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step33", "Pass");
    });
    cy.visit(Cypress.env("url"));
    services.should_Check_ServicesTab();
    RescueInfo.should_ClickOnRescueInfo();
    //Mini Overview 
    RescueInfoOfMINI.should_Check_MINIOverview();

    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step34", "Pass");
    });
    //Verify Convertible
    RescueInfoOfMINI.should_Click_MINIConvertible();

    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step35", "Pass");
    });
    //Verify Mini Convertible Text
    RescueInfoOfMINI.should_Validate_Models_MINIConvertible();

    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step36", "Pass");
    });
    //Verify Pdf Files Download
    RescueInfoOfMINI.should_Download_All_PDFs();
    cy.wait(20000);
    //Verify file deletion using name
    RescueInfoOfMINI.should_Validate_And_Delete_Files_Of_MINIConvertible();

    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step37", "Pass");
    });
    cy.visit(Cypress.env("url"));
    services.should_Check_ServicesTab();
    RescueInfo.should_ClickOnRescueInfo();
    //Mini Overview 
    RescueInfoOfMINI.should_Check_MINIOverview();

    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step38", "Pass");
    });
     // Verify Country man
     RescueInfoOfMINI.should_Click_MINICountryman();

     cy.wrap().then(() => {
       cy.logStepStatus(ArraySteps, "step39", "Pass");
     });
 // Verify  Mini country man Text
     RescueInfoOfMINI.should_Validate_Models_MINICountryMan();
 
     cy.wrap().then(() => {
       cy.logStepStatus(ArraySteps, "step40", "Pass");
     });
     //Verify Pdf Files Down load 
     RescueInfoOfMINI.should_Download_All_PDFs();
     cy.wait(20000);
   //Check file name and delete   files Country man
     RescueInfoOfMINI.should_Validate_And_Delete_Files_Of_MINICountryman();
 
     cy.wrap().then(() => {
       cy.logStepStatus(ArraySteps, "step41", "Pass");
     });
     cy.visit(Cypress.env("url"));
    services.should_Check_ServicesTab();
    RescueInfo.should_ClickOnRescueInfo();
    //Mini Overview 
    RescueInfoOfMINI.should_Check_MINIOverview();

    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step42", "Pass");
    });
     //Verify click on Coupe 
     RescueInfoOfMINI.should_Click_MINICoupe();

     cy.wrap().then(() => {
       cy.logStepStatus(ArraySteps, "step43", "Pass");
     });
     //Verify Mni Coupe Text Check 
     RescueInfoOfMINI.should_Validate_Models_MINICoupe();
 
     cy.wrap().then(() => {
       cy.logStepStatus(ArraySteps, "step44", "Pass");
     });
 
     //Verify Download Pdf Files  of RescueInfoof mini Downloadable or not
     RescueInfoOfMINI.should_Download_All_PDFs();
     cy.wait(20000);
     //Verify Files of Coupe by name and delete 
     RescueInfoOfMINI.should_Validate_And_Delete_Files_Of_MINICoupe();
 
     cy.wrap().then(() => {
       cy.logStepStatus(ArraySteps, "step45", "Pass");
     });
     cy.visit(Cypress.env("url"));
    services.should_Check_ServicesTab();
    RescueInfo.should_ClickOnRescueInfo();
     //Verify Rolls Royce Overview
     ResInfoOfRoolsRoyce.should_Verify_RollsRoyce_Overview();
     cy.wrap().then(() => {
       cy.logStepStatus(ArraySteps, "step46", "Pass");
     });
      //Verify Headers of Rolls Royce 
    ResInfoOfRoolsRoyce.should_Verify_RollsRoyce_Headings();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step47", "Pass");
    });
    //verify rollsroyce Rescue Sheets
    ResInfoOfRoolsRoyce.should_Check_RescueSheets_RollsRoyce();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step48", "Pass");
    });
    cy.visit(Cypress.env("url"));
    services.should_Check_ServicesTab();
    RescueInfo.should_ClickOnRescueInfo();
     //Verify Rolls Royce Overview
     ResInfoOfRoolsRoyce.should_Verify_RollsRoyce_Overview();
     cy.wrap().then(() => {
       cy.logStepStatus(ArraySteps, "step49", "Pass");
     });
     //Click on Convertiable
    ResInfoOfRoolsRoyce.should_Click_RRConvertible();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step50", "Pass");
    });
    //Check Convertiable
    ResInfoOfRoolsRoyce.should_Check_RRConvertiable_Text();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step51", "Pass");
    });
    //Download pdf files of Rollsroyce
    ResInfoOfRoolsRoyce.should_Download_All_PDFs();
    cy.wait(10000);
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step52", "Pass");
    });

    //Delete Files of Convertiable by name
    ResInfoOfRoolsRoyce.should_Validate_FileName_And_DeleteFiles_RRConvertiable();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step53", "Pass");
    });
    cy.visit(Cypress.env("url"));
    services.should_Check_ServicesTab();
    RescueInfo.should_ClickOnRescueInfo();
     //Verify Motor Cycle Overview
     RescueInfoOfMC.should_Check_Motorcycle_Overview();
     cy.wrap().then(() => {
       cy.logStepStatus(ArraySteps, "step54", "Pass");
     });
     //Check Heading in motor Cycle
     RescueInfoOfMC.should_Check_Motorcycle_Heading();
     cy.wrap().then(() => {
       cy.logStepStatus(ArraySteps, "step55", "Pass");
     });
     //Check Rescue sheets OF Motor cycle 
     RescueInfoOfMC.should_Check_RescueSheets_Motorcycle();
     cy.wrap().then(() => {
       cy.logStepStatus(ArraySteps, "step56", "Pass");
     });
     cy.visit(Cypress.env("url"));
     services.should_Check_ServicesTab();
     RescueInfo.should_ClickOnRescueInfo();
      //Verify Motor Cycle Overview
      RescueInfoOfMC.should_Check_Motorcycle_Overview();
      cy.wrap().then(() => {
        cy.logStepStatus(ArraySteps, "step57", "Pass");
      });
      //Click on E scooter
    RescueInfoOfMC.should_Click_EScooter();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step58", "Pass");
    });
    //Download Files Of Motor cycle/E scooter
    RescueInfoOfMC.should_Download_All_PDFs();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step59", "Pass");
    });
    //Delete E-SCOOTER  Files By name
    RescueInfoOfMC.should_Check_FileName_And_DeleteFiles_Of_Escooter();
    cy.wrap().then(() => {
      cy.logStepStatus(ArraySteps, "step60", "Pass");
    });
        // Pass Execution for Test case
  je.should_Create_Jira_Pass_Execution(testTitle,environment_name,user,testcase,Pass)
});
});
