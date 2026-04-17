class ServicesTouchCommandservices {
  elements = {
    /*-------- XPATHS/ELEMENT LOCATORS ------------ */
    tab_Services:
      "//div[@class='ds-list-item__content'][normalize-space()='Service']",
    tab_Touchcommandservices:
      "//ds-list-item[@aria-label='Service']//..//div[contains(text(),' Touch Command Service Updater ')]",
    iFrame: "#app aos-iframe-page iframe",
    btn_leftArrow: "(//*[@icon='arrow_left_small' and @role='button'])[1]",
    btn_cookies: () =>
      cy.xpath("//div[@class='cookie-banner']//button[text()='OK']"),
    txt_TouchCommandServiceUpdater:
      " (//h2[contains(text(),'Touch Command Service Updater')])[1]",
    txt_TCSUpdaterDownload:
      " //h2[contains(text(),' Touch Command Service Updater Download ')]",
    txt_SamsungUSB:
      "//span[contains(text(),' SAMSUNG_USB_Driver_for_Mobile_Phones_v1.5.42.0.exe ')]",
    txt_TCU2ndoption: "//span[contains(text(),' TCSU_162910.00005_C_USER.zip ')]",
    txt_Ruser: "//span[contains(text(),' TCSU_162910.00005_R_USER.zip ')]",
    txt_UserDocumentation: "//span[contains(text(),' User documentation ')]",
  };

  /*-------- METHODS ------------ */
  should_Click_LeftArrow(){
     cy.xpath(this.elements.btn_leftArrow)
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
  }

  should_Click_TouchCommandServices() {
    cy.xpath(this.elements.tab_Touchcommandservices)
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
  }
  //Click and verifies the Toch Command Services
  should_Click_And_Check_TouchCommandServices() {
    const VirtualGTTouchCommandServiceUpdaterText1Text =
      "Touch Command Service Updater";
    const TCSUpdaterDownloadText = "Touch Command Service Updater Download";
    // Verify that the "Touch Command Service Updater" text is visible and correct
    cy.xpath(this.elements.txt_TouchCommandServiceUpdater)
      .should("be.visible")
      .invoke("text")
      .then((actualText) => {
        expect(actualText.trim()).to.equal(
          VirtualGTTouchCommandServiceUpdaterText1Text
        );
      });
    // Verify that the "Touch Command Service Updater Download" text is visible and correct
    cy.xpath(this.elements.txt_TCSUpdaterDownload)
      .should("be.visible")
      .invoke("text")
      .then((actualText) => {
        expect(actualText.trim()).to.equal(TCSUpdaterDownloadText);
      });
    cy.xpath(this.elements.btn_leftArrow).should("be.visible").click({ force: true });
    cy.wait(5000);
  }
  //Verifies available options and logs the text in Touch Comamnd Service Updater
  should_Verify_Options_Under_TouchCommandServices() {
    cy.xpath(this.elements.txt_SamsungUSB)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.txt_TCU2ndoption)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.txt_Ruser)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.txt_UserDocumentation)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
  }
  // Click on file in toch comemnd Services and delete the downloaded files
  should_DownloadFiles_Under_TCS_And_Delete() {
    cy.xpath(this.elements.txt_SamsungUSB)
      .should("be.visible")
      .click({ force: true });
    cy.wait(10000);
    cy.xpath(this.elements.txt_UserDocumentation)
      .should("be.visible")
      .click({ force: true });
    cy.wait(10000);
    cy.task("deleteFolder", `cypress\\downloads`);
  }

  should_Click_And_Check_TouchCommandServices() {
    const VirtualGTTouchCommandServiceUpdaterText1Text =
      "Touch Command Service Updater";
    const TCSUpdaterDownloadText = "Touch Command Service Updater Download";
    // Click on the Touch Command Services section
    cy.xpath(this.elements.tab_Touchcommandservices)
      .should("be.visible")
      .click({ force: true });
    // Verify that the "Touch Command Service Updater" text is visible and correct
    cy.xpath(this.elements.txt_TouchCommandServiceUpdater)
      .should("be.visible")
      .invoke("text")
      .then((actualText) => {
        expect(actualText.trim()).to.equal(
          VirtualGTTouchCommandServiceUpdaterText1Text
        );
      });
    // Verify that the "Touch Command Service Updater Download" text is visible and correct
    cy.xpath(this.elements.txt_TCSUpdaterDownload)
      .should("be.visible")
      .invoke("text")
      .then((actualText) => {
        expect(actualText.trim()).to.equal(TCSUpdaterDownloadText);
      });
    cy.xpath(this.elements.btn_leftArrow).should("be.visible").click({ force: true });
    cy.wait(5000);
  }
}
export default ServicesTouchCommandservices;