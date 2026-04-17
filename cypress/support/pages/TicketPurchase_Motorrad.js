class Motorradtktpurchase {
  elements = {
    /*-------- XPATHS/ELEMENT LOCATORS ------------ */
    lbl_firstHour: "//input[@type='radio']/following::label//span[contains(text(), 'Hour')]",
    btn_purchaseTicketContinue: "//div[@id='purchaseTicketCalculation']//span[contains(text(),'Continue')]",
    txt_myTicketsHeading: "//*[@id='headlines']/h1[text()='My tickets']",
    btn_continueNext: "//button[@type='button']//span[contains(text(),'Continue')]",
    txt_Payment: "//h1[text()='Payment']",
    txt_userInformation: "//div[@class='note-style ng-star-inserted']"
  };

  /*-------- METHODS ------------ */

  //Selects One hour ticket and click on continue
  should_Purchase_MotorradTicket() {
    cy.xpath(this.elements.txt_myTicketsHeading).contains("My tickets", { matchCase: false });
    cy.xpath(this.elements.lbl_firstHour).click();
    cy.xpath(this.elements.btn_purchaseTicketContinue).click({ force: true });
    cy.wait(10000);
    cy.xpath(this.elements.btn_continueNext).click({ force: true })
    cy.wait(10000)
  }

  should_Verify_Motorrad_PurchasePaymentPage() {
    cy.xpath(this.elements.txt_Payment).contains("Payment", { matchCase: false });
  }

  should_Verify_UserInfo_In_PaymentPage(user) {
    cy.xpath(this.elements.txt_userInformation)
      .contains(user, { matchCase: false }).should("be.visible");
  }
}
export default Motorradtktpurchase;