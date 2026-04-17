import RescueInfo from "../Commons/RescueInfo.js";

class ServicesDownloads {
  /*-------- XPATHS/ELEMENT LOCATORS ------------ */
  elements = {
    Services:
      "//div[@class='ds-list-item__content'][normalize-space()='Service']",
    Downloads: "#downloads-li",
    iFrame: "#app aos-iframe-page iframe",
    Button:
      "/html/body/app-root/ds-theme/aos-navigation/ds-navigation-bar/div[2]/ds-list-item/div/ds-icon",
    Motorcycle:
      "//ds-list-item[@id='downloadMotorcycle-li']/div/div[contains(text(),' Motorcycle ')]",
    VehicletypeList:
      "//ds-list-item[@id='downloadVehicleTypeList-li']/div/div[contains(text(),' Vehicle type list ')]",
    cookiesButton: () =>
      cy.xpath("//div[@class='cookie-banner']//button[text()='OK']"),
    MotorCycleText:
      "//div[@class='page-content col-span-5']/h1[contains(text(),'Motorcycle')]",
    Button:
      "/html/body/app-root/ds-theme/aos-navigation/ds-navigation-bar/div[2]/ds-list-item/div/ds-icon",
    RMIDATA:
      "//*[@id='downloadRMIData-li']/div/div[contains(text(),' RMI data ')]",
    RMIdatasubheadline:
      "//div[@id='headlines']//h2[contains(text(),'RMI data')]",
    AvailableFiles: "//h3[contains(text(),'Available files')]",
    FileTablecol: "//table/tbody/tr[1]/th[1][contains(text(),'File')]",
    aosIFrame: "#app aos-iframe-page iframe",
    listofpdfname: "//table/tbody/tr/td[1]",
    ListOfdownload: "//table/tbody/tr/td[2]",
    VehicleTypelistheadline: "//div/h1[contains(text(),'Vehicle type list')]",
    KeyRead:
      "//ds-list-item[@id='keyReadDownloads-li']/div/div[contains(text(),' KeyRead')]",
    KeyReadText:
      "//h2[contains(text(),'KeyRead')]",
    pdfDownload: "ds-button span ",
  };
  /*-------- METHODS ------------ */

  should_displayKeyReadText(){
    cy.xpath(this.elements.KeyReadText).should("be.visible")
  }
  should_Click_Download() {
    cy.get(this.elements.Downloads)
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
  }
  should_displayKeyReadTitle(){

  }

  // Verify that all download dropdown list items are visible and log their text values
  should_Check_Downloadsdropdownlist() {
    cy.xpath(this.elements.Motorcycle)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.VehicletypeList)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.KeyRead)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
  }

  // Verify that RMI Data section elements are visible and log their text
  should_Check_RMIData_Elements() {
    cy.frameLoaded(this.elements.aosIFrame);
    cy.enter(this.elements.aosIFrame).then((p) => {
      p()
        .xpath(this.elements.RMIdatasubheadline)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      p()
        .xpath(this.elements.AvailableFiles)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      p()
        .xpath(this.elements.FileTablecol)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      p()
        .xpath(this.elements.DownloadLink)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
    });
  }
  // Click on Downloads, verify Motorcycle text and respective details
  should_Click_Download_And_Check_Elements() {
    const MocyText = "Motorcycle";
    cy.xpath(this.elements.Downloads)
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
    // Verify and log visible text elements
    cy.xpath(this.elements.Motorcycle)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.VehicletypeList)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    // Verify the Motorcycle header text matches expected value
    cy.xpath(this.elements.MotorCycleText)
      .should("be.visible")
      .invoke("text")
      .then((actualText) => {
        expect(actualText.trim()).to.equal(MocyText);
      });
    cy.xpath(this.elements.Button).should("be.visible").click({ force: true });
    cy.wait(5000);
  }
  // Check and log all PDF names inside the RMI Data section
  should_check_RMIDATApdf() {
    cy.frameLoaded(this.elements.aosIFrame);
    cy.enter(this.elements.aosIFrame).then((p) => {
      // Loop through all PDF names and log each one
      p()
        .xpath(this.elements.listofpdfname)
        .each(($cell, index, $list) => {
          cy.wrap($cell)
            .invoke("text")
            .then((text) => {
              cy.log(`Row ${index + 1}, First Column Text: ${text}`);
            });
        });
    });
  }

  // Click on the Motorcycle option and verify the displayed text
  should_Click_Motorcycle() {
    const MocyText = "Motorcycle";
    cy.xpath(this.elements.Motorcycle)
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
    // Verify the text matches "Motorcycle"
    cy.xpath(this.elements.MotorCycleText)
      .should("be.visible")
      .invoke("text")
      .then((actualText) => {
        expect(actualText.trim()).to.equal(MocyText);
      });
  }

  // Click on Vehicle Type List and verify the headline text
  should_Click_VehicleTypeList() {
    cy.xpath(this.elements.VehicletypeList)
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
    // Log the Vehicle Type List headline text
    cy.xpath(this.elements.VehicleTypelistheadline)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
  }

  // Click on KeyRead and verify the displayed text
  should_Click_KeyRead() {
    const KeyreadText = "KeyRead";
    cy.xpath(this.elements.KeyRead).should("be.visible").click({ force: true });
    cy.wait(5000);
    // Check that the KeyRead text is displayed correctly
    cy.xpath(this.elements.KeyReadText)
      .should("be.visible")
      .invoke("text")
      .then((actualText) => {
        expect(actualText.trim()).to.equal(KeyreadText);
      });
  }

  should_Verify_KR_DownloadsTab() {
    cy.get('span').contains('FAQ').should('be.visible')
    cy.get('span').contains('News').should('be.visible')
    cy.get('span').contains('User Guide').should('be.visible')

  }

  should_Download_KR_FAQ_PDF() {
    const rescueInfo = new RescueInfo();
    cy.get(this.elements.pdfDownload).contains('FAQ').should('be.visible').click({ force: true });
    rescueInfo.downloadedFileCheck("AOS_KR_FAQ.pdf");
    cy.task('deleteFolder', `cypress\\downloads`);
  }

  should_Download_KR_News_PDF() {
    const rescueInfo = new RescueInfo();
    const expectedFileNamesKorea = ["AOS_KR_diagnosis tool. v.5 (20231109).pdf", "AOS_KR_warranty.pdf"]
    cy.get(this.elements.pdfDownload).contains(' 전용 진단기 판매 리스트 ').should('be.visible').click({ force: true });
    cy.get(this.elements.pdfDownload).contains(' 진단장비 보증 제외 사항 ').should('be.visible').click({ force: true });
    for (let i = 0; i < expectedFileNamesKorea.length; i++) {
      rescueInfo.downloadedFileCheck(expectedFileNamesKorea[i]);
    }
    cy.task('deleteFolder', `cypress\\downloads`);
  }

  should_Download_KR_UserGuide() {
    const rescueInfo = new RescueInfo();
    cy.get(this.elements.pdfDownload).contains(' 사용자 메뉴얼 ').should('be.visible').click({ force: true });
    rescueInfo.downloadedFileCheck("AOS_KR_User Manual.pdf");
    cy.task('deleteFolder', `cypress\\downloads`);
  }
}
export default ServicesDownloads;
