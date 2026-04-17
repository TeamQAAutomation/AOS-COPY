class ServicesPEMSadapter {
  elements = {
    // Xpath or Element Selectors PEMSadapter page
    tab_Services:
      "//div[@class='ds-list-item__content'][normalize-space()='Service']",
    tab_PEMSadapter: "(//div[contains(text(),'PEMS adapter')])[1]",
    iFrame: "#app aos-iframe-page iframe",
    btn_leftArrow: "(//*[@icon='arrow_left_small' and @role='button'])[1]",
    btn_Cookies: () =>
      cy.xpath("//div[@class='cookie-banner']//button[text()='OK']"),
    txt_PEMSadapter: "//h2[contains(text(), 'PEMS adapter')]",
    txt_Downloads: "//h2[contains(text(), 'Downloads')]",
    btn_PEMSadapterdownload:
      "//span[contains(text(),'PEMS adapter for exhaust pipes_EN.pdf')]",

    /*-------- METHODS ------------ */
  };
  should_Click_PEMSAdapter() {
    cy.xpath(this.elements.tab_PEMSadapter)
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
  }
  // Check and download the PEMS adapter PDF
  should_Check_And_Download_PEMsadpaterPDF() {
    const PEMSadaptertext = "PEMS adapter";
    const DownloadsText = "Downloads";
    // Open the PEMS adapter section
    cy.xpath(this.elements.txt_PEMSadapter)
      .should("be.visible")
      .invoke("text")
      .then((actualText) => {
        expect(actualText.trim()).to.equal(PEMSadaptertext);
      });
    // Verify the Downloads text
    cy.xpath(this.elements.txt_Downloads)
      .should("be.visible")
      .invoke("text")
      .then((actualText) => {
        expect(actualText.trim()).to.equal(DownloadsText);
      });
    // Click the button under the PEMS adapter section
    cy.xpath(this.elements.btn_PEMSadapterdownload)
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
  }
  // Click PEMS adapter section and verify related texts
  should_Click_And_Check_PEMSadapter() {
    const PEMSadaptertext = "PEMS adapter";
    const DownloadsText = "Downloads";
    // Open the PEMS adapter section
    cy.xpath(this.elements.tab_PEMSadapter)
      .should("be.visible")
      .click({ force: true });
    // Verify the PEMS adapter heading text
    cy.xpath(this.elements.txt_PEMSadapter)
      .should("be.visible")
      .invoke("text")
      .then((actualText) => {
        expect(actualText.trim()).to.equal(PEMSadaptertext);
      });
    // Verify the Downloads text
    cy.xpath(this.elements.txt_Downloads)
      .should("be.visible")
      .invoke("text")
      .then((actualText) => {
        expect(actualText.trim()).to.equal(DownloadsText);
      });
    // Click the button under the PEMS adapter section
    cy.xpath(this.elements.btn_leftArrow).should("be.visible").click({ force: true });
    cy.wait(5000);
  }
}
export default ServicesPEMSadapter;
