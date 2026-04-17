class logout {
  elements = {
    /*-------- XPATHS/ELEMENT LOCATORS ------------ */
    dropdown_Aos_logout: () => cy.xpath("//ds-icon[@class='text-color-primary ds-icon ds-icon--md']"),
    btn_logout: () =>
      cy.xpath(
        "//div[contains(text(),'Logging out')]"),

    btn_login: () => cy.xpath("//button[@data-qa='header-login-button']"),
    US_logout:"//ds-icon[@class='text-color-primary ds-icon ds-icon--md']",
    US_logginoutbutton:"//div[contains(text(),'Logging out')]",
    txt_logout:"//h3[contains(text(),' Welcome to AOS ')]",

  };

  /*-------- METHODS ------------ */
  
  //Clicking on the Logout button for ROW and Korea Countries
  should_Verify_AOS_ROW_Logout() {
    this.elements.dropdown_Aos_logout().click({force:true});
    this.elements.btn_logout().click();
    this.elements.btn_login().should("be.visible");
  }

  //Clicking on the Logout button for US Country
  should_Verify_AOS_US_Logout(){
    cy.xpath(this.elements.US_logout).click({ force: true });
    cy.wait(5000);
    cy.xpath(this.elements.US_logginoutbutton).click({ force: true });
    cy.wait(5000);
    cy.xpath(this.elements.txt_logout)
      .should("be.visible")
      .invoke("text")
      .then(text => {
        cy.log(text);
      });
  }
}
export default logout;
