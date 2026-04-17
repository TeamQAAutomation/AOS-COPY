class IndividualApps {
  elements = {
    /*-------- XPATHS/ELEMENT LOCATORS ------------ */
    txt_AIR: () =>
      cy.xpath('//*[contains(text(),"Aftersales Information Research")]'),
    txt_BMW_ASE: () =>
      cy.xpath(
        "//*[@data-qa='application-list-ase']//p[contains(text(),'BMW ASE')]"
      ),
    txt_Dealer_Cockpit: () =>
      cy.xpath(
        "//*[@data-qa='application-list-cddc']//p[contains(text(),'Dealer Cockpit')]"
      ),
    txt_Connected_RMI: () =>
      cy.xpath("//p[contains(text(),'Connected RMI Services Administration')]"),
    txt_Control_Unit_Encoding: () =>
      cy.xpath("//p[contains(text(),'Control unit encoding')]"),
    txt_Electronic_Parts_Catalogue: () =>
      cy.xpath("//p[contains(text(),'Electronic Parts Catalogue')]"),
    txt_Exhaust_gas_setpoint_data: () =>
      cy.xpath("//p[contains(text(),'Exhaust gas setpoint data')]"),
    txt_Retailer_Equipment_Catalogue: () =>
      cy.xpath("//p[contains(text(),'Retailer Equipment Catalogue')]"),
    txt_Update_of_navigation_maps: () =>
      cy.xpath("//p[contains(text(),'Update of navigation maps')]"),
    txt_BMW_IRAP_Next: () => cy.xpath("//p[contains(text(),'BMW IRAP Next')]"),
    txt_E_series_programming: () =>
      cy.xpath("//p[contains(text(),'E series programming')]"),
    txt_ISTA_P_series_programming: () =>
      cy.xpath('//*[contains(text(),"E series programming")]'),
    txt_RITA: () =>
      cy.xpath('//*[contains(text(),"RITA")]'),
    txt_ISTA_workshop_system: () =>
      cy.xpath('//*[contains(text(),"ISTA workshop system")]'),
    txt_BMW_KaSIO: () => cy.xpath('//*[contains(text(),"BMW KaSIO")]'),
    txt_partslink24: () =>
      cy.xpath(
        '//*[@data-qa="application-list-partslink24"]//p[contains(text(),"partslink24")]'
      ),
    txt_PTI_data: () => cy.xpath('//*[contains(text(),"PTI data")]'),
    txt_RDC_Tool: () => cy.xpath("//p[contains(text(),'RDC Tool')]"),
    txt_Smart_Maintenance: () =>
      cy.xpath('//*[contains(text(),"Smart Maintenance")]'),
    txt_compassSelfHelpLink:
      "//nav[@class='nav-left']/ul/li/a[contains(text(),'COMPASS self help')]",
    aosIFrame: "#app aos-iframe-page iframe",
    startTab: "//a[@class='start ng-star-inserted']",
  };

  assertElements = {
    airAssertElement: "//*[@class='air-frontpage-search-title']",
    BMWASEAssertElement:
      '//*[contains(text(),"No instance is assigned to you.")]',
    connectedRMIAssertElement: '//h1[@class="bmw-h1"]',
    emissionTestAssertElement: '//*[@id="maintitle"]',
    ptiDataAssertElement: '//*[@class="application-home-button"]',
    electronicPartsCatalouge:
      '//*[contains(text(),"Welcome to the Electronics Parts Catalogue (EPC)")]',
    smartMaintenance: '//*[contains(text(),"BMW KaSIO")]',
  };

  expectedValues = {
    airExpectedValue: "Search for the vehicle",
    BMWASEExpectedValue: "No instance is assigned to you.",
    connectedRMIExpectedValue: "WELCOME TO CONNECTED RMI SERVICE",
    emissionTestExpectedValue: " AU-Solldaten ",
    ptiDataExpectedValue:
      "PTI-Data - your tool for researching vehicle system data",
    electronicPartsCatalougeexpectedValues:
      "Welcome to the Electronics Parts Catalogue (EPC)",
    smartMaintenance: "BMW KaSIO",
  };
  /*-------- METHODS ------------ */

  // Click on 'Aftersales Information Research'
  should_Click_AIR() {
    this.elements.txt_AIR().click();
    this.should_Verify_StartTab_Is_Enabled();
  }
  // Click on 'Smart Maintenance'
  should_Click_SmartMaintenance() {
    this.elements.txt_Smart_Maintenance().click();
    this.should_Verify_StartTab_Is_Enabled();
  }
  // Click on 'PTI data'
  should_Click_PTI_data() {
    this.elements.txt_PTI_data().click();
    this.should_Verify_StartTab_Is_Enabled();
  }
  // Click on 'Smart Maintenance' and verify that navigation is successful
  // should_Click_SmartMaintenance() {
  //   this.elements.txt_Smart_Maintenance().click();
  //   this.should_Click_Link_And_Assert(
  //     this.assertElements.smartMaintenance,
  //     this.expectedValues.smartMaintenance
  //   );
  // }
  // Click on 'Electronic Parts Catalogue' and verify that navigation is successful
  should_Click_ElectronicPartsCatalogue() {
    this.elements.txt_Electronic_Parts_Catalogue().click();
    this.should_Click_Link_And_Assert(
      this.assertElements.electronicPartsCatalouge,
      this.expectedValues.electronicPartsCatalougeexpectedValues
    );
  }
  // Click on 'After Information Research' and verify that navigation is successful
  should_Click_AfterSalesInformationResearch() {
    this.elements.txt_AIR().click();
    this.should_Click_Link_And_Assert(
      this.assertElements.airAssertElement,
      this.expectedValues.airExpectedValue
    );
  }

  // Click on 'BMW ASE' and verify that navigation is successful
  should_Click_BMWASE_And_Verify_Elements() {
    this.elements.txt_BMW_ASE().click();
    this.should_Click_Link_And_Assert(
      this.assertElements.BMWASEAssertElement,
      this.expectedValues.BMWASEExpectedValue
    );
  }
  // Click on 'Connected RMI Services' and verify that navigation is successful
  should_Click_ConnectedRMI_And_Verify_Elements() {
    this.elements.txt_Connected_RMI().click();
    this.should_Click_Link_And_Assert(
      this.assertElements.connectedRMIAssertElement,
      this.expectedValues.connectedRMIExpectedValue
    );
  }

  should_Click_EmissionTest_And_Verify_Elements() {
    this.elements.Emissions_test_nominal_values().click();
    this.should_Click_Link_And_Assert(
      this.assertElements.emissionTestAssertElement,
      this.expectedValues.emissionTestExpectedValue
    );
  }
  // Click on 'PTI Data' and verify that navigation is successful
  should_Click_PTIData_And_Verify_Elements() {
    this.elements.txt_PTI_data().click();
    this.should_Click_Link_And_Assert(
      this.assertElements.ptiDataAssertElement,
      this.expectedValues.ptiDataExpectedValue
    );
  }
  //Clicks on the link and verifies successful navigation by checking the URL.
  should_Click_CompassSelfHelp() {
    cy.xpath(this.elements.txt_compassSelfHelpLink)
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.wait(20000);
    let ur = cy.url();
    ur.should("contains", "compass");
  }
  // Click on 'Update of navigation maps' and verify that the file download starts successfully
  should_Click_UpdateOfNavigationMaps() {
    this.elements.txt_Update_of_navigation_maps().click();
    this.should_Verify_DownloadedFile_When_Link_Is_Clicked("start.hddstartcfg");
  }
  // Click on 'BMR IRAP Next' and verify that the file download starts successfully
  should_Click_BMWIRAPNext() {
    this.elements.txt_BMW_IRAP_Next().click();
    this.should_Verify_DownloadedFile_When_Link_Is_Clicked("start.irapcfg");
  }
  // Click on 'ISTA workshop system' and verify that the file download starts successfully
  should_Click_ISTAWorkshopSystem() {
    this.elements.txt_ISTA_workshop_system().click();
    this.should_Verify_DownloadedFile_When_Link_Is_Clicked("start.ista3cfg");
  }
  // Click on 'E series programming' and verify that the file download starts successfully
  should_Click_ISTA_PSeriesProgramming() {
    this.elements.txt_ISTA_P_series_programming().click();
    this.should_Verify_DownloadedFile_When_Link_Is_Clicked("start.istapics");
  }
   // Click on 'RITA' and verify that the file download starts successfully
  should_Click_RITA() {
     this.elements.txt_RITA().click();
    this.should_Verify_StartTab_Is_Enabled();
  }
  // Click on 'RDC Tool' and verify that the file download starts successfully
  should_Click_RDCTool() {
    this.elements.txt_RDC_Tool().click();
    this.should_Verify_DownloadedFile_When_Link_Is_Clicked("start.rdccfg");
  }
  // Verify that the 'Start' tab is enabled
  should_Verify_StartTab_Is_Enabled() {
    cy.xpath(this.elements.startTab).should(
      "not.have.attr",
      "disabled",
      "true"
    );
  }
  //Click link inside iframe in same tab
  should_Click_Link_And_Assert(assertElements, expectedValue) {
    cy.frameLoaded(this.elements.aosIFrame);
    cy.wait(10000);
    cy.enter(this.elements.aosIFrame).then((p) => {
      // Remove 'target' and click
      p()
        .xpath(this.elements.startTab)
        .invoke("removeAttr", "target")
        .click({ force: true });
      // Restore 'target' attribute and click again to confirm navigation
      p()
        .xpath(this.elements.startTab)
        .invoke("attr", "target", "_self")
        .click();
    });
  }
  // Click start tab and verify that the expected file is downloaded
  should_Verify_DownloadedFile_When_Link_Is_Clicked(fileName) {
    cy.xpath(this.elements.startTab).click({ force: true });

    cy.wait(5000);

    const expectedFileName = fileName;
    const filePath = `cypress/downloads/${expectedFileName}`;
    cy.readFile(filePath, { log: false }).then((content) => {
      cy.log(`File "${expectedFileName}" exists.`);
      const actualFileName = Cypress._.last(filePath.split("/"));
      expect(actualFileName).to.eq(expectedFileName);
    });
  }
}
export default IndividualApps;
