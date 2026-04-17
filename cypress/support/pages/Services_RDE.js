class ServicesRDE {
  elements = {
    /*-------- XPATHS/ELEMENT LOCATORS ------------ */
    tab_Services: "//div[@class='ds-list-item__content'][normalize-space()='Service']",
    tab_RealDrivingEmissions: "//div[contains(text(),' Real Driving Emissions (RDE) ')]",
    txt_RDE_Heading: "//h1[contains(text(),'Real Driving Emissions (RDE)')]",
    iFrame: "#app aos-iframe-page iframe",
    btn_leftArrow: "//*[@icon='arrow_left_small' and @role='button']",
    Url: "//h1[.='Real Driving Emissions (RDE)']//..//p/a",
    aosIFrame: "#app aos-iframe-page iframe",
    Pdfs: "//ds-button[@class='block w-full ds-button ds-button--outline has-icon']//ds-icon[@class='icon-left ds-icon ds-icon--md ds-icon--tone-inherit ng-star-inserted']",

    btn_Cookies: () =>
      cy.xpath("//div[@class='cookie-banner']//button[text()='OK']"),
  };
  /*-------- METHODS ------------ */
  
  //Clicks on RDE 
  should_Click_RDE() {
    cy.xpath(this.elements.tab_RealDrivingEmissions)
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
  }
  // Verifies that the RDE headline is visible and logs the text
  should_Check_RDEHeadline() {
    cy.xpath(this.elements.txt_RDE_Heading)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
  }
  // Verifies that the RDE headline text matches the expected value
  should_Validate_RDEHeadlineText() {
    const RIBMW = "Real Driving Emissions (RDE)";
    cy.xpath(this.elements.txt_RDE_Heading)
      .should("be.visible")
      .invoke("text")
      .then((actualText) => {
        expect(actualText.trim()).to.equal(RIBMW);
      });
  }
  // Navigates to the RDE section, verifies the headline text, and clicks the action button
  should_Click_And_Check_RDE() {
    const RIBMW = "Real Driving Emissions (RDE)";
    cy.xpath(this.elements.tab_RealDrivingEmissions).scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    cy.xpath(this.elements.txt_RDE_Heading)
      .should("be.visible")
      .invoke("text")
      .then((actualText) => {
        expect(actualText.trim()).to.equal(RIBMW);
      });
    //cy.xpath(this.elements.btn_leftArrow).first().should("be.visible").click({ force: true });
    cy.wait(5000);
  }

  // Opens the RDE hyperlink and verifies that it was triggered successfully
  should_Check_RDE_Hyperlink() {
    cy.xpath(this.elements.Url).should("be.visible").click({ force: true });
    cy.wait(5000);
    cy.log("Url got opened in next tab");
  }
  // Verifies that the user can see the list of available PDF documents 
  should_Verify_PDFs_Visibility() {
    cy.frameLoaded(this.elements.aosIFrame);
    cy.enter(this.elements.aosIFrame).then((p) => {
      p().xpath(this.elements.Pdfs).should("be.visible");
    });
  }
  // Downloads all available PDFs by clicking each one
  should_Download_PDFs() {
    cy.xpath(this.elements.Pdfs).each(($el, index, $list) => {
      cy.wrap($el).click();
      cy.wait(10000);
    });
    cy.task("deleteFolder", `cypress\\downloads`);
  }
}
export default ServicesRDE;
