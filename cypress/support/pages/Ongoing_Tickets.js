class OngoingTickets {
  elements = {
    // Xpath or Element Selectors Tickets page
    tab_OngoingTicket: "//div[contains(text(),'Ongoing tickets')]",
    txt_Rate: "(//table/thead/tr/th[1][contains(text(),'Rate')])[4]",
    txt_ServiceContained:
      "//tbody/tr[1]/td[2]",
    txt_ValidUntil: "//aos-ongoing-tickets[1]//div[1]//div[1]//div[1]//table[1]//tbody[1]//tr[1]//td[3]",
    txt_OngoingTicketsUserDetail:
      "//div[@id='content']/div/div[3]/div/table/tbody/tr/td",
    aosIFrame: "#app aos-iframe-page iframe",
    txt_TicketUserDetails:
      "(//table/thead/tr/th[1][contains(text(),'Rate')])[4]/ancestor::table/tbody/tr/td[contains(text(),'Electrical Diagnosis & Programming')] ",
    tab_myAOS: "//div[@class='ds-list-item__content'][normalize-space()='My AOS']",
  };

  /*-------- METHODS ------------ */

  should_ClickOnOngoingTickets() {
    cy.xpath(this.elements.tab_OngoingTicket)
      .should("be.visible")
      .click({ force: true });
    cy.wait(15000);
  }
  // Check the table of all users under the organization
  should_CheckTableOfAllUsersUnderOrg() {
    cy.xpath(this.elements.txt_Rate)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.txt_ServiceContained)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.txt_ValidUntil)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
  }
  //Checks the user details
  CheckUserTicketDetails() {
    cy.xpath(this.elements.txt_TicketUserDetails)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
  }
}

export default OngoingTickets;
