import RescueInfo from "../../Commons/RescueInfo.js";
class ResuceinformationOfRollsRoyce {
  elements = {
    /*-------- XPATHS/ELEMENT LOCATORS ------------ */
    img_RollsRoyceImage:
      "//span[normalize-space()='Rolls-Royce']",
    txt_RescueINfoForRollsRoyce:
      "//h1[contains(text(),'Rescue information for Rolls-Royce')]",
    tab_RollsRoyceText: "//div[contains(text(),'Rolls-Royce')]",
    tab_OverviewOfRollsRoyce: "(//div[contains(text(),'Overview')])[4]",
    tab_SaloonOfRollsRoyce: "(//div[contains(text(),' Saloon ')])[2]",
    tab_coupeOfRollsRoyce: "(//div[contains(text(),'Coupé')])[3]",
    tab_CovertiableOfRollsRoyce: "(//div[contains(text(),'Convertible')])[3]",
    txt_Rescueinformation: "//h2[normalize-space()='Rescue information']",
    txt_Downloads: "//h2[contains(text(),'Downloads')]",
    txt_RescueManualBoldText: "(//span[contains(text(),'Rescue manual')])[1]",
    txt_RescueManualText: "(//span[contains(text(),'Rescue manual')])[2]",
    txt_RescueSheetAccordingToBodyShape:
      "//h2[contains(text(),'Rescue sheets according to body shape')]",
    btn_RescueManualPDfDownload:
      "//ds-button[@class='ds-button ds-button--outline has-icon ng-star-inserted']",
    txt_ConvertiableSeriesText: "//div[@class='ds-box-header__label-wrapper'][normalize-space()='Convertible']",
    txt_CoupeSeriesText: "//div[@class='ds-box-header__label-wrapper'][normalize-space()='Coupé']",
    txt_SaloonSeriesText: "//div[@class='ds-box-header__label-wrapper'][normalize-space()='Saloon']",
  };

  /*-------- METHODS ------------ */

  should_Click_RRConvertible() {
    cy.xpath(this.elements.tab_CovertiableOfRollsRoyce)
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
    cy.xpath(this.elements.txt_RescueSheetAccordingToBodyShape)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
  }
  should_Click_RRCoupe() {
    cy.xpath(this.elements.tab_coupeOfRollsRoyce)
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
    cy.xpath(this.elements.txt_RescueSheetAccordingToBodyShape)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
  }
  should_Click_RRSaloon() {
    cy.xpath(this.elements.tab_SaloonOfRollsRoyce)
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
    cy.xpath(this.elements.txt_RescueSheetAccordingToBodyShape)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
  }
  // Initiates download of PDF files related to Rescue Info
  should_Download_All_PDFs() {
    const rescueInfo = new RescueInfo();
    rescueInfo.should_Download_All_PDFs();
  }
  should_Check_RRConvertiable_Text() {
    cy.xpath(this.elements.txt_ConvertiableSeriesText)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
  }
  should_Check_RRCoupe_Text() {
    cy.xpath(this.elements.txt_CoupeSeriesText)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
  }
  should_Check_RRSaloon_Text() {
    cy.xpath(this.elements.txt_SaloonSeriesText)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
  }
  //Click on Rollsroyce Image and verify the options under Rolls Roys
  should_Verify_RollsRoyce_Overview() {
    cy.xpath(this.elements.img_RollsRoyceImage)
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
    cy.xpath(this.elements.tab_OverviewOfRollsRoyce)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.tab_CovertiableOfRollsRoyce)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.tab_coupeOfRollsRoyce)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.tab_SaloonOfRollsRoyce)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
  }
  //Verify the headlines of Rolls Royce and validate Download
  should_Verify_RollsRoyce_Headings() {
    const RescueInfoOfRR = "Rescue information for Rolls-Royce";
    cy.xpath(this.elements.txt_RescueINfoForRollsRoyce)
      .should("be.visible")
      .invoke("text")
      .then((actualText) => {
        expect(actualText.trim()).to.equal(RescueInfoOfRR);
      });
    cy.xpath(this.elements.txt_Downloads)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.txt_RescueManualBoldText).scrollIntoView();
    cy.xpath(this.elements.txt_RescueManualBoldText)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.txt_RescueManualText)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.btn_RescueManualPDfDownload).click();
  }
  // Verify the RollsRoyce Rescue Sheets are displayed correctly
  should_Check_RescueSheets_RollsRoyce() {
    const rescueInfo = new RescueInfo();
    const expectedTitle = [" Convertible ", " Coupé ", " Saloon "];
    const seriesText = [
      "RR 2, RR 6",
      "RR 2, RR 3, RR 5, RR 6",
      "RR 1, RR 4, RR 11, RR 12, RR 21, RR 22, RR 31",
    ];
    const expectedAltTextsOfimages = [
      "article.rolls-royce-convertible.ImageAltText",
      "article.rolls-royce-coupe.ImageAltText",
      "article.rolls-royce-sedan.ImageAltText",
    ];
    cy.xpath(this.elements.txt_RescueSheetAccordingToBodyShape)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    rescueInfo.should_Check_Images(expectedAltTextsOfimages);
    rescueInfo.should_Check_SeriesText(seriesText);
    rescueInfo.should_Check_Title(expectedTitle);
    rescueInfo.should_Select_Element();
  }
  // Checks the downloaded PDF file names for Convertible and deletes the downloaded files
  should_Validate_FileName_And_DeleteFiles_RRConvertiable() {
    const expectedFileNames = [
      "en_RR2-Phantom-Cabrio.pdf",
      "en_RR6-Dawn-Drophead-Coupe.pdf",
    ];
    const rescueInfo = new RescueInfo();
    for (let i = 0; i < expectedFileNames.length; i++) {
      if (expectedFileNames.includes(expectedFileNames[i])) {
        rescueInfo.should_Check_FileName(expectedFileNames[i]);
        console.log(`File name matches: ${expectedFileNames[i]}`);
      } else {
        console.log(`File name does not match: ${expectedFileNames[i]}`);
      }
      cy.task("deleteFolder", `cypress\\txt_Downloads\\${expectedFileNames[i]}`);
      cy.wait(10000);
    }
  }
  // Checks the downloaded PDF file names for Coupe and deletes the downloaded files
  should_Validate_FileName_And_DeleteFiles_RRCoupe() {
    const expectedFileNames = [
      "en_RR3-Phantom-Coupe.pdf",
      "en_RR5-Wraith-Coupe.pdf",
      "Rolls_Royce_RR06_Dawn_en-GB.pdf",
      "VUL-REK-P-RR25_BEVE_en-GB.pdf",
    ];
    const rescueInfo = new RescueInfo();
    for (let i = 0; i < expectedFileNames.length; i++) {
      if (expectedFileNames.includes(expectedFileNames[i])) {
        rescueInfo.should_Check_FileName(expectedFileNames[i]);
        console.log(`File name matches: ${expectedFileNames[i]}`);
      } else {
        console.log(`File name does not match: ${expectedFileNames[i]}`);
      }
      cy.task("deleteFolder", `cypress\\txt_Downloads\\${expectedFileNames[i]}`);
      cy.wait(10000);
    }
  }
  // Checks the downloaded PDF file names for Saloon and deletes the downloaded files
  should_Validate_FileName_And_DeleteFiles_RRSaloon() {
    const expectedFileNames = [
      "en_RR1-Phantom-Limousine.pdf",
      "en_RR4-Ghost-Limousine.pdf",
      "Rolls Royce Cullinan RR31_en.pdf",
      "Rolls Royce RR11 Phantom_en-US.pdf",
      "Rolls Royce RR12 Phantom Extended Wheelbase_en-US.pdf",
      "Rolls-Royce RR21 GHOST_en-GB.pdf",
      "Rolls-Royce RR22 GHOST_en-GB.pdf",
    ];
    const rescueInfo = new RescueInfo();
    for (let i = 0; i < expectedFileNames.length; i++) {
      if (expectedFileNames.includes(expectedFileNames[i])) {
        rescueInfo.should_Check_FileName(expectedFileNames[i]);
        console.log(`File name matches: ${expectedFileNames[i]}`);
      } else {
        console.log(`File name does not match: ${expectedFileNames[i]}`);
      }
      cy.task("deleteFolder", `cypress\\txt_Downloads\\${expectedFileNames[i]}`);
      cy.wait(10000);
    }
  }
}
export default ResuceinformationOfRollsRoyce;
