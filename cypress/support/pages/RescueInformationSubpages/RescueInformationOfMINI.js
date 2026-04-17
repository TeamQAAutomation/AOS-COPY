import RescueInfo from "../../Commons/RescueInfo.js";

class RescueInformationOfMINI {
  constructor() {
    this.rescueInfo = new RescueInfo();
  }

  elements = {
    /*-------- XPATHS/ELEMENT LOCATORS ------------ */

    img_MINIImage:
      "//span[normalize-space()='MINI'] | //span[normalize-space()='Mini']",
    txt_RescueINfoForMINI: "//h1[contains(text(),'Rescue information for MINI')] | //h1[contains(text(),'MINI 구조 정보')]",
    tab_MINIText: "//div[contains(text(),'MINI')]",
    tab_OverviewOfMINI: "(//div[contains(text(),'Overview')])[2] | (//div[contains(text(),' 개요 ')])[2]",
    tab_ClumbmanOfMINI: "(//div[contains(text(),'Clubman')])[1]",
    tab_ConvertibleOfMINI: "(//div[contains(text(),'Convertible')])[2] | (//div[contains(text(),' 컨버터블 ')])[2]",
    tab_CountryManOfMINI: "(//div[contains(text(),'Countryman')])[1]",
    tab_CoupeOfMINI: "(//div[contains(text(),' Coupé ')])[1] | (//div[contains(text(),' 쿠페')])[2]",
    txt_RescueSheetAccordingToBodyShape: "//h2[contains(text(),'Rescue sheets according to body shape')] | //h2[contains(text(),'차체 형태에 따른 구조 카드')]",
    txt_Downloads: "//h2[contains(text(),'Downloads')] | //h2[contains(text(),' 다운로드 ')]",
    txt_RescueManualBoldText: "(//span[contains(text(),'Rescue manual')])[1] | (//span[contains(text(),'구조지침')])[1]",
    txt_RescueManualText: "(//span[contains(text(),'Rescue manual')])[2] | (//span[contains(text(),'구조지침')])[2]",
    btn_RescueManualPDfDownload: "//ds-button[.//span[normalize-space()='Rescue manual']] | (//span[contains(text(),'구조지침')])[2]",
  };

  /* ---------------- helpers ---------------- */
  isKorean(label) {
    return label === "||KR_Legal_User||" || label === "||KR_Standard_User||";
  }

  should_Click_And_Verify(locator) {
    cy.xpath(locator).should("be.visible").click();
    cy.xpath(this.elements.txt_RescueSheetAccordingToBodyShape).should("be.visible");
  }

  should_Check_And_DeleteFiles(files) {
    files.forEach((file) => this.rescueInfo.should_Check_FileName(file));
    cy.task("deleteFolder", "cypress\\txt_Downloads");
  }

  /* ---------------- navigation ---------------- */
  should_Click_MINI() {
    cy.xpath(this.elements.img_MINIImage).should("be.visible").click();
    cy.xpath(this.elements.txt_RescueINfoForMINI).should("be.visible");
  }

  should_Click_MINIClubman() {
    this.should_Click_And_Verify(this.elements.tab_ClumbmanOfMINI);
    cy.wait(5000)
  }

  should_Click_MINIConvertible() {
    this.should_Click_And_Verify(this.elements.tab_ConvertibleOfMINI);
    cy.wait(5000)
  }

  should_Click_MINICountryman() {
    this.should_Click_And_Verify(this.elements.tab_CountryManOfMINI);
    cy.wait(5000)
  }

  should_Click_MINICoupe() {
    this.should_Click_And_Verify(this.elements.tab_CoupeOfMINI);
    cy.wait(5000)
  }

  /* ---------------- series checks ---------------- */
  should_Validate_Models_MINIClubman() {
    this.rescueInfo.should_Check_SeriesName(["F54", "R55"]);
  }

  should_Validate_Models_MINIConvertible() {
    this.rescueInfo.should_Check_SeriesName(["F57", "R52", "R57", "R59"]);
  }

  should_Validate_Models_MINICountryMan() {
    this.rescueInfo.should_Check_SeriesName(["F60", "R60", "U25"]);
  }

  should_Validate_Models_MINICoupe(label) {
    const en = ["F66", "E", "F55", "F56", "J01", "R50", "R53", "R56", "R58", "R61"];
    const ko = ["E", "F55", "F56", "J01", "R50", "R53", "R56", "R58", "R61"];
    this.rescueInfo.should_Check_SeriesName(this.isKorean(label) ? ko : en);
  }

  /* ---------------- headings & txt_Downloads ---------------- */
  should_Check_Headings_In_MINI() {
    const titleRegex = /Rescue information for MINI|MINI 구조 정보/;

    cy.xpath(this.elements.txt_RescueINfoForMINI)
      .should("be.visible")
      .invoke("text")
      .then((text) => expect(text.trim()).to.match(titleRegex));

    cy.xpath(this.elements.txt_Downloads).should("be.visible");
    cy.xpath(this.elements.txt_RescueManualBoldText).should("be.visible");
    cy.xpath(this.elements.txt_RescueManualText).should("be.visible");

    cy.xpath(this.elements.btn_RescueManualPDfDownload).click();
  }

  /* ---------------- rescue sheet overview ---------------- */
  should_Check_RescueSheets_MINI(label) {
    const titlesEN = ["Clubman", "Convertible", "Countryman", "Coupé"];
    const titlesKO = ["Clubman", "컨버터블", "Countryman", "쿠페"];
    const series = [
      "F54, F65, R55",
      "F57, R52, R57, R59",
      "F60, J05, R60, U25",
      "E, F55, F56, F66, J01, R50, R53, R56, R58, R61",
    ];

    cy.xpath(this.elements.txt_RescueSheetAccordingToBodyShape).should("be.visible");
    this.rescueInfo.should_Check_SeriesText(series);
    this.rescueInfo.should_Check_Title(this.isKorean(label) ? titlesKO : titlesEN);
    this.rescueInfo.should_Select_Element(label);
  }

  /* ---------------- file name checks ---------------- */
  should_Validate_And_Delete_Files_Of_MINIClubman(label) {
    const en = ["en_MINI-Clubman-R55.pdf", "en_MINI-Clubman-F54.pdf"];
    const ko = ["ko_MINI-Clubman-R55.pdf", "ko_MINI-Clubman-F54.pdf"];
    this.should_Check_And_DeleteFiles(this.isKorean(label) ? ko : en);
  }

  should_Validate_And_Delete_Files_Of_MINIConvertible(label) {
    const en = [
      "en_MINI-Cabrio-F57.pdf",
      "en_MINI-Cabrio-R52.pdf",
      "en_MINI-Cabrio-R57.pdf",
      "en_MINI-Roadster-R59.pdf",
      "VUL-REK-P-MINI_F57_E_en-GB.pdf",
    ];
    const ko = [
      "ko_MINI-Cabrio-F57.pdf",
      "ko_MINI-Cabrio-R52.pdf",
      "ko_MINI-Cabrio-R57.pdf",
      "ko_MINI-Roadster-R59.pdf",
      "VUL-REK-P-MINI_F57_E_ko.pdf",
    ];
    this.should_Check_And_DeleteFiles(this.isKorean(label) ? ko : en);
  }

  should_Validate_And_Delete_Files_Of_MINICountryman(label) {
    const en = [
      "Countryman F60_en.pdf",
      "en_MINI-Countryman-R60.pdf",
      "VUL-REK-P-F60_PHEV_en-US.pdf",
      "VUL-REK-P-U25_BEV_en-GB.pdf",
      "VUL-REK-P-U25ICE_en-GB.pdf",
    ];
    const ko = [
      "Countryman F60_ko.pdf",
      "ko_MINI-Countryman-R60.pdf",
      "VUL-REK-P-F60_PHEV_ko.pdf",
      "VUL-REK-P-U25_BEV_ko.pdf",
      "VUL-REK-P-U25ICE_ko.pdf",
    ];
    this.should_Check_And_DeleteFiles(this.isKorean(label) ? ko : en);
  }

  should_Validate_And_Delete_Files_Of_MINICoupe(label) {
    const en = [
      "VUL-REK-P-F66ICE_en-GB.pdf",
      "VUL-REK-P-MINI_F56BN_en-GB.pdf",
      "VUL-REK-P-J01_BEVE_en-GB.pdf",
      "en_MINI-F56.pdf",
      "en_MINI-R50.pdf",
      "en_MINI-Paceman-R61.pdf",
      "en_MINI-F55.pdf",
      "en_MINI-E.pdf",
      "en_MINI-Coupe-R58.pdf",
      "en_MINI-Cooper-S-R53.pdf",
      "en_MINI-R56.pdf",
    ];
    const ko = [
      "ko_MINI-Cooper-S-R53.pdf",
      "ko_MINI-Coupe-R58.pdf",
      "ko_MINI-F56.pdf",
      "ko_MINI-F55.pdf",
      "ko_MINI-E.pdf",
      "ko_MINI-R56.pdf",
      "ko_MINI-R50.pdf",
      "ko_MINI-Paceman-R61.pdf",
      "VUL-REK-P-MINI_F56BN_ko.pdf",
      "VUL-REK-P-J01_BEVE_ko.pdf",
    ];
    this.should_Check_And_DeleteFiles(this.isKorean(label) ? ko : en);
  }

    //Click on MINI Image and verify the options under MINI
  should_Check_MINIOverview() {
    cy.xpath(this.elements.img_MINIImage)
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
    cy.xpath(this.elements.tab_OverviewOfMINI)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.tab_ClumbmanOfMINI)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.tab_ConvertibleOfMINI)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.tab_CountryManOfMINI)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.tab_CoupeOfMINI)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
  }

  should_Download_All_PDFs() {
    const rescueInfo = new RescueInfo();
    rescueInfo.should_Download_All_PDFs();
  }
}

export default RescueInformationOfMINI;
