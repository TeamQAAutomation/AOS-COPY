class Services_Downloads{
    elements={
        /*-------- XPATHS/ELEMENT LOCATORS ------------ */
        btn_Downloads:"//div[contains(text(),'Downloads')]",
        tab_MotorCycle:'//a[@href="/services/downloads/motorcycle" and @aria-label="Motorcycle"]',
        txt_MotorCycle:"//h1[contains(text(),'Motorcycle')]",
        btn_download:'//ds-button[@icon="download"]',
        lbl_pdfNamesCheck:'//ds-button[@icon="download"]',//"//div[@class='ds-box-header__item']",
        tab_keyRead:'//a[@href="/services/downloads/key-read" and @aria-label="KeyRead"]',
        tab_vehicleTypeList:'//a[@href="/services/downloads/vehicle-type-list" and @aria-label="Vehicle type list"]',
        txt_vehicleTypeList:"//h1[contains(text(),'Vehicle type list')]",
        btn_PEMSadapter:"//div[contains(text(),' PEMS adapter ')]",
        txt_PEMSadapter:"//h2[contains(text(),'PEMS adapter')]",
        btn_touchcommandservices:"//div[contains(text(),'Touch Command Service Updater')]",
        txt_touchcommandservices:"(//h2[contains(text(),'Touch Command Service Updater')])[1]",
        btn_VirtualGT1:"//div[contains(text(),'VirtualGT1')]",
        txt_VirtualGT1:"(//h2[contains(text(),'VirtualGT1')])[1]",
        btn_RealDrivingEmission:"//div[contains(text(),'Real Driving Emissions (RDE)')]",
        txt_RealdrivingEmission:"//h1[contains(text(),'Real Driving Emissions (RDE)')]",
}
       /*-------- METHODS ------------ */
// Clicks on Downloads tab
  should_ClickOnDownloads() {
    cy.xpath(this.elements.btn_Downloads).should("be.visible").click({ force: true });
    cy.wait(5000);
  }
  //Clicks on MotorCycle
  should_ClickOnMotorcycle(){
    cy.xpath(this.elements.tab_MotorCycle).should("be.visible").click({ force: true });
    cy.wait(5000);
  }
  //clicks on KeyRead
  should_ClickOnKeyRead(){
    cy.xpath(this.elements.tab_keyRead).should("be.visible").click({ force: true });
    cy.wait(5000);
  }
  //Clicks on VehicleTypeList
  should_ClickOnVehicleTypeList(){
    cy.xpath(this.elements.tab_vehicleTypeList).should("be.visible").click({ force: true });
    cy.wait(5000);
  }
//Verify headline 'Motor Cycle'
 should_Verifytxt_MotorCycle(){
    cy.xpath(this.elements.txt_MotorCycle).should("be.visible");

  }
  //verify headline 'Vehicle Type List'
   should_Verifytxt_VehicleTypeList(){
    cy.xpath(this.elements.txt_vehicleTypeList).should("be.visible");

  }
  //Verify headline 'PEMS adapter'
 should_Verifytxt_PEMSadapter(){
    cy.xpath(this.elements.txt_PEMSadapter).should("be.visible");

  }
   //Verify headline 'touchcommandservices'
 should_Verifytxt_tocuhcommandservices(){
    cy.xpath(this.elements.txt_touchcommandservices).should("be.visible");

  }
  //verify headline 'VirtualGT1'
   should_Verifytxt_VirtualGT1(){
    cy.xpath(this.elements.txt_VirtualGT1).should("be.visible");

  }
   //verify headline 'Real driving emission'
   should_Verifytxt_RealdrivingEmission(){
    cy.xpath(this.elements.txt_RealdrivingEmission).should("be.visible");

  }  //Click on PEMS adapater tab
    should_ClickOnPEMSdapter() {
    cy.xpath(this.elements.btn_PEMSadapter).should("be.visible").click({ force: true });
    cy.wait(5000);
  }
 //Click on TouchCommandServicestab
    should_ClickonTouchCommandServices() {
    cy.xpath(this.elements.btn_touchcommandservices).should("be.visible").click({ force: true });
    cy.wait(5000);
  }
  //Click on virtual GT1
   should_ClickOnVirtualGT1() {
    cy.xpath(this.elements.btn_VirtualGT1).should("be.visible").click({ force: true });
    cy.wait(5000);
  }
  //Click on RealDrivingEmissions
   should_ClickonRealDrivingEmissions() {
    cy.xpath(this.elements.btn_RealDrivingEmission).should("be.visible").click({ force: true });
    cy.wait(5000);
  }
  
//Download Files
should_Download_All_PDFs() {
    cy.xpath(this.elements.btn_download,{timeout:10000}).each(($el, index, $list) => {
      cy.wrap($el).click();
      cy.wait(15000)
    })
  }

  should_Download_UserGuide(){
    cy.xpath("//ds-button/span[contains(text(),' User guide ')]").click();
  }

  should_Download_PEMSAdapter(){
    cy.xpath("//ds-button/span[contains(text(),' PEMS ')]").click();
  }
  //Verify the options under Downloads
  should_verify_DownloadsOptions(){
      cy.xpath(this.elements.tab_MotorCycle).should("be.visible");
      cy.xpath(this.elements.tab_vehicleTypeList).should("be.visible");
      cy.xpath(this.elements.tab_keyRead).should("be.visible");
  }
 // Verifies the pdf's names for MotorCycle

   should_Check_pdfNames(ExpectedText){
        cy.xpath(this.elements.lbl_pdfNamesCheck).each(($el, index) => {
            cy.wrap($el).scrollIntoView().should('be.visible').and('include.text', ExpectedText[index]);
          });
     }
     //Checks filenames
    should_Check_FileName(fileName) {

    const expectedFileName = fileName;
    const filePath = `cypress/downloads/${expectedFileName}`;
    cy.readFile(filePath, { log: false })
      .then((content) => {
        cy.log(`File "${expectedFileName}" exists.`);
        const actualFileName = Cypress._.last(filePath.split('/'));
        expect(actualFileName).to.eq(expectedFileName);
        cy.wait(2000);
      })
  }
// Checks the downloaded PDF file names for Motor Cycle and deletes the downloaded files
  should_Check_FileName_And_DeleteFiles(expectedFileNames) {
    for (let i = 0; i < expectedFileNames.length; i++) {
      if (expectedFileNames.includes(expectedFileNames[i])) {
        this.should_Check_FileName(expectedFileNames[i]);
        console.log(`File name matches: ${expectedFileNames[i]}`);
      } else {
        console.log(`File name does not match: ${expectedFileNames[i]}`);
      }
    }
    cy.task("deleteFolder", `cypress/downloads`);
  }


}
export default Services_Downloads;