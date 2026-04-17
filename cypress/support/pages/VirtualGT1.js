class ServicesVertualGTI {
  elements = {
    /*-------- XPATHS/ELEMENT LOCATORS ------------ */
    tab_Services:
      "//div[@class='ds-list-item__content'][normalize-space()='Service']",
    txt_VirtualGT1: "(//div[contains(text(),' VirtualGT1 ')])[1]",
    iFrame: "#app aos-iframe-page iframe",
    Button: "(//*[@icon='arrow_left_small' and @role='button'])[1]",
    btn_cookies: () =>
      cy.xpath("//div[@class='cookie-banner']//button[text()='OK']"),
    txt_VirtualGT1Text: "//h2[contains(text(),'VirtualGT1')]",
    txt_VirtualGT1Downloads: "//h2[contains(text(),' Virtual GT1 downloads')]",
    txt_Data: "//span[contains(text(),' Data ')]",
    txt_Installationfile: "//span[contains(text(),' Installation file ')]",
    txt_UserGUide: "//span[contains(text(),' User guide ')]",
    txt_Java: "//span[contains(text(),' Java ')]",
    txt_VMwarePlayer: "//span[contains(text(),' VMware Player ')]",
    link_Java: "//a[contains(text(),'Java')]",
    link_Vmware: "//a[contains(text(),'VMware player')]",
  };

  /*-------- METHODS ------------ */

  should_Click_VirtualGt1() {
    cy.xpath(this.elements.txt_VirtualGT1)
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
  }

  // Verifies the Virtual GT1 page
  should_Click_And_Check_VirtualGt1() {
    const VirtualGT1Text = "VirtualGT1";
    const VirtualGT1DownloadsText = "Virtual GT1 downloads";
    // Click the VirtualGT1 element
    cy.xpath(this.elements.txt_VirtualGT1)
      .should("be.visible")
      .click({ force: true });
    // Verify the VirtualGT1 heading text
    cy.xpath(this.elements.txt_VirtualGT1Text)
      .should("be.visible")
      .invoke("text")
      .then((actualText) => {
        expect(actualText.trim()).to.equal(VirtualGT1Text);
      });
    // Verify the VirtualGT1 downloads section text
    cy.xpath(this.elements.txt_VirtualGT1Downloads)
      .should("be.visible")
      .invoke("text")
      .then((actualText) => {
        expect(actualText.trim()).to.equal(VirtualGT1DownloadsText);
      });
    cy.xpath(this.elements.Button).should("be.visible").click({ force: true });
    cy.wait(5000);
  }
  // Checks all options under Virtual GT1 downloads and logs their text
  should_Check_Options_Under_VirtualGT1_Downloads() {
    cy.xpath(this.elements.txt_Data)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.txt_Installationfile)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.txt_Installationfile).click({ force: true });
    cy.wait(10000);
    cy.xpath(this.elements.txt_UserGUide)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.txt_UserGUide).click({ force: true });
    cy.wait(10000);
    cy.xpath(this.elements.txt_Java)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.txt_Java).click({ force: true });
    cy.wait(10000);
    cy.xpath(this.elements.txt_VMwarePlayer)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.txt_VMwarePlayer).click({ force: true });
    cy.wait(10000);
    cy.task("deleteFolder", `cypress\\downloads`);
  }
  // Verifies the hyperlinks under Virtual GT1 are accessible
  should_Check_HyperLink_Access_To_VirtualGt1() {
    cy.xpath(this.elements.link_Java)
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
    cy.xpath(this.elements.link_Vmware)
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
  }
}
export default ServicesVertualGTI;
