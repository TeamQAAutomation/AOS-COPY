class RescueInformation {
  elements = {
    /*-------- XPATHS/ELEMENT LOCATORS ------------ */
    btn_Service: "//div[@class='ds-list-item__content'][normalize-space()='Service']",
    btn_Rescueinformation: "//div[contains(text(),' Rescue information')]",

    img_BMW: "//div[contains(@style,'bmw')]",
    tab_OverviewOfBMW: "//ds-navigation-bar-item[@id='bmw']//div[contains(text(),'Overview')]",
    tab_CompactVanOfBMW: "(//div[contains(text(),' Compact van ')])[1]",
    tab_ConvertibleOfBMW: "(//div[contains(text(),'Convertible')])[1]",
    tab_SaloonOfBMW: "(//div[contains(text(),' Saloon ')])[1]",
    tab_SavForBMW: "(//div[contains(text(),' SAV')])[1]",
    tab_CoupéORCompactOfBMW: "(//div[contains(text(),' Coupé/Compact ')])[1]",
    tab_TouringForBMW: "(//div[contains(text(),'Touring')])[1]",

    txt_BMWOTITLE: "//div[contains(@class, 'p-4 hero-title ng-star-inserted')]",
    txt_BMWOseriesXpath: "//p[@class='w-full hero-content ng-star-inserted']",
    btn_BMWOpleaseSelectXpath: "//span[contains(text(), 'Please select')]",
    btn_BMWORescueManualPDfDownload:
      "//ds-button[@class='ds-button ds-button--outline has-icon ng-star-inserted']",
    img_BMWOImage: "//img[@class='hero-image w-full ng-star-inserted']",

    img_MINI: "//div[contains(@style,'mini')]",
    img_MotorCycle: "//div[contains(@style,'motor')]",
    img_RollsRoyce: "//div[contains(@style,'rolls')]",

    txt_BMW: "//span[contains(text(),'BMW')]",
    txt_MINI: "//span[contains(text(),'MINI')]",
    txt_Motorcycle: "//span[contains(text(),'Motorcycle')]",
    txt_RollsRoyce: "//span[contains(text(),'Rolls-Royce')]",

    txt_RescueINfoForBMW: "//h1[contains(text(),'Rescue information for BMW')]",
    txt_RescueINfoForMINI: "//h1[contains(text(),'Rescue information for MINI')]",
    txt_RescueINfoForMotorcycle: "//h1[contains(text(),'Rescue information for motorcycle')]",
    txt_RescueINfoForRollsRoyce: "//h1[contains(text(),'Rescue information for Rolls-Royce')]",

    btn_Back: "(//ds-button[@type='button'])[1]",
    theIFrame: "#app aos-iframe-page iframe",

    tab_OverviewOfMINI: "//ds-navigation-bar-item[@id='mini']//div[contains(text(),'Overview')]",
    tab_ClumbmanOfMINI: "//ds-navigation-bar-item[@id='mini']//div[contains(text(),'Clubman')]",
    tab_ConvertibleOfMINI: "//ds-navigation-bar-item[@id='mini']//div[contains(text(),'Convertible')]",
    tab_CountryManOfMINI: "//ds-navigation-bar-item[@id='mini']//div[contains(text(),'Countryman')]",
    tab_CoupeOfMINI: "//ds-navigation-bar-item[@id='mini']//div[contains(text(),'Coupé')]",

    tab_OverviewOfMotorcycle: "//ds-navigation-bar-item[@id='motorcycle']//div[contains(text(),'Overview')]",
    tab_EscooterOfMotorcycle: "//ds-navigation-bar-item[@id='motorcycle']//div[contains(text(),'E-Scooter')]",

    tab_OverviewOfRollsRoyce: "//ds-navigation-bar-item[@id='rolls-royce']//div[contains(text(),'Overview')]",
    tab_SaloonOfRollsRoyce: "//ds-navigation-bar-item[@id='rolls-royce']//div[contains(text(),' Saloon ')]",
    tab_coupeOfRollsRoyce: "//ds-navigation-bar-item[@id='rolls-royce']//div[contains(text(),'Coupé')]",
    tab_CovertiableOfRollsRoyce: "//ds-navigation-bar-item[@id='rolls-royce']//div[contains(text(),'Convertible')]",

    txt_Downloads: "//h2[contains(text(),'Downloads')]",
    txt_RescueManualBoldText: "(//span[contains(text(),'Rescue manual')])[1]",
    btn_RescueManual: "//ds-button//span[contains(text(),'Rescue manual')]",
    txt_RescueSheetAccordingToBodyShape: "//h2[contains(text(),'Rescue sheets according to body shape')]",

    txt_CompactVanINOverview: "//aos-hero-card//div[contains(text(),' Compact van ')]",
    txt_ConvertiableInOverview: "//aos-hero-card//div[contains(text(),'Convertible')]",
    txt_CoupeorcompactInOverview: "//aos-hero-card//div[contains(text(),' Coupé/Compact ')]",
    txt_SaloonINOverview: "//aos-hero-card//div[contains(text(),' Saloon ')]",
    txt_SavInOverview: "//aos-hero-card//div[contains(text(),' SAV')]",
    TouringInOverview: "//aos-hero-card//div[contains(text(),'Touring')]",

    btn_LeftButton: "//aos-navigation//*[@icon='arrow_left_small' and @role='button']"
  };

  /*-------- METHODS ------------ */

  // Clicks on Rescue Information
  should_ClickOnRescueInfo() {
    cy.xpath(this.elements.btn_Rescueinformation).should("be.visible").click({ force: true });
    cy.wait(5000);
  }

  // Clicks on Rescue Information (with label logic)
  should_ClickOnRescueInfoWithLabel(label) {
    cy.xpath(this.elements.btn_Rescueinformation).should("be.visible").click({ force: true });
    cy.wait(5000);

    if (label === "||KR_Legal_User||" || label === "||KR_Standard_User||") {
      cy.xpath(this.elements.img_BMW).should("be.visible");
      cy.xpath(this.elements.img_MINI).should("be.visible");
    } else {
      cy.xpath(this.elements.img_BMW).should("be.visible");
      cy.xpath(this.elements.img_MINI).should("be.visible");
      cy.xpath(this.elements.img_MotorCycle).should("be.visible");
      cy.xpath(this.elements.img_RollsRoyce).should("be.visible");
    }
  }

  // Verify brand images and log text
  should_CheckBrandImageWithName() {
    cy.xpath(this.elements.img_BMW).should("be.visible");
    cy.xpath(this.elements.img_MINI).should("be.visible");
    cy.xpath(this.elements.img_MotorCycle).should("be.visible");
    cy.xpath(this.elements.img_RollsRoyce).should("be.visible");

    cy.xpath(this.elements.txt_BMW).invoke("text").then(text => cy.log(text));
    cy.xpath(this.elements.txt_MINI).invoke("text").then(text => cy.log(text));
    cy.xpath(this.elements.txt_Motorcycle).invoke("text").then(text => cy.log(text));
    cy.xpath(this.elements.txt_RollsRoyce).invoke("text").then(text => cy.log(text));
  }

  // BMW Rescue Info
  should_ClickOnResuceInfoOfBMWandcheck() {
    cy.xpath(this.elements.img_BMW).click({ force: true });
    cy.wait(5000);

    cy.xpath(this.elements.txt_RescueINfoForBMW).invoke("text")
      .then(text => expect(text.trim()).to.equal("Rescue information for BMW"));
  }

  // MINI Rescue Info
  should_ClickOnResuceInfoOfMINIandcheck() {
    cy.xpath(this.elements.btn_Back).click({ force: true });
    cy.xpath(this.elements.img_MINI).click({ force: true });
    cy.wait(5000);

    cy.xpath(this.elements.txt_RescueINfoForMINI).invoke("text")
      .then(text => expect(text.trim()).to.equal("Rescue information for MINI"));
  }

  // Motorcycle Rescue Info
  should_ClickOnRescueInfoOfMotorcycleandCheck() {
    cy.xpath(this.elements.btn_Back).click({ force: true });
    cy.xpath(this.elements.img_MotorCycle).click({ force: true });
    cy.wait(5000);

    cy.xpath(this.elements.txt_RescueINfoForMotorcycle).invoke("text").then(text =>
      expect(text.trim()).to.equal("Rescue information for motorcycle")
    );
  }

  // Rolls-Royce Rescue Info
  should_ClickOnResuceInfoOfRollsRoyceandcheck() {
    cy.xpath(this.elements.btn_Back).click({ force: true });
    cy.xpath(this.elements.img_RollsRoyce).click({ force: true });
    cy.wait(5000);

    cy.xpath(this.elements.txt_RescueINfoForRollsRoyce).invoke("text").then(text =>
      expect(text.trim()).to.equal("Rescue information for Rolls-Royce")
    );
  }

  // Rescue Info → Check BMW visible → Click back
  should_CheckRescueInfoClickandCheck() {
    cy.xpath(this.elements.btn_Rescueinformation).click({ force: true });
    cy.wait(5000);

    cy.xpath(this.elements.img_BMW).should("be.visible");
    cy.xpath(this.elements.btn_LeftButton).click({ force: true });
    cy.wait(5000);
  }
}

export default RescueInformation;