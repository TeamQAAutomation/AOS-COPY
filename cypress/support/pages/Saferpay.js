class saferPay {
  elements = {
    // Xpath or Element Selectors pay page
    theIFrame: "#app aos-my-aos iframe",
    MyTickets: "//div[contains(text(),' My tickets ')]",
    firstHourLabel: "(//label[contains(text(),'Hour')])[1]",
    secondHourLabel: "(//label[contains(text(),'Hour')])[2]",
    continueBTN:
      "//div[@id='purchaseTicketCalculation']/input[contains(@id,'submit')]",
    eDiag_Popup_Continue: "//button[contains(@id,'Continue')]",
    successfulText: "//h3[contains(text(),'Successful')]",
    aosIFrame: "#app aos-iframe-page iframe",
  };

  /*-------- METHODS ------------ */

  // Handles the ticket purchase flow
  SaferPayticketPurchase(ticket) {
    let validTime;
    // Load the payment iframe and force a larger viewport for visibility
    cy.frameLoaded(this.elements.theIFrame).invoke(
      "attr",
      "style",
      "width: 1000px; height: 1300px"
    );
    cy.enter(this.elements.theIFrame).then((frame) => {
      // Ensure the "My tickets" section is visible
      frame()
        .xpath(this.elements.MyTickets)
        .contains("My tickets", { matchCase: false });
      // Handle ticket type selection logic
      if (ticket.includes("Information")) {
        // Select the first hour ticket
        frame().xpath(this.elements.firstHourLabel).click();
        frame().xpath(this.elements.continueBTN).click({ force: true });
      } else if (ticket.includes("Electrical")) {
        // Select the second hour ticket
        frame().xpath(this.elements.secondHourLabel).click();
        frame().xpath(this.elements.continueBTN).click({ force: true });
        // Additional popup that appears only for electrical diagnosis
        cy.wait(10000);
        frame()
          .xpath(this.elements.eDiag_Popup_Continue)
          .click({ force: true });
      }

      cy.wait(10000);
    });

    cy.wait(10000);
    // Re-enter the iframe for the payment confirmation screen
    cy.frameLoaded(this.elements.theIFrame);
    cy.enter(this.elements.theIFrame).then((frame) => {
      // Force link to open in the same tab by changing target to _blank
      frame()
        .xpath(
          "/html/body/app-navigation/app-payment-confirmation/div/div/div[5]/div[2]/button[2]/span"
        )
        .invoke("attr", "target", "_blank")
        .click({ force: true });
      cy.wait(40000);
    });
    // Reload the page after the redirect
    cy.reload();
    // Validate success message
    cy.frameLoaded(this.elements.aosIFrame);
    cy.enter(this.elements.aosIFrame).then((frame) => {
      frame()
        .xpath(this.elements.successfulText)
        .invoke("text")
        .should("be.equal", "Successful");
    });
  }
}
export default saferPay;
