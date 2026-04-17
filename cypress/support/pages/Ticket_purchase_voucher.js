class voucher_Ticket_purchase {
  elements = {
    /*-------- XPATHS/ELEMENT LOCATORS ------------ */
    theIFrame: "#app aos-payment-confirmation iframe",
    lbl_firstHour: "(//span[contains(text(),'Hour')])[1]",
    btn_continue: "//div[@id='purchaseTicketCalculation']//following::span",
    btn_purchaseNow: "//*[contains(text(),'Purchase now')]",
    txt_successful: "//p[contains(text(),'Your ticket was successfully activated.')]",
    btn_ok: "//button[@class='ok-button']",
    tbl_couponAmountList: "//table[@class='buy-ticket ds-table ds-table--outer-divider']",
    txt_voucherFirstChild: 'td:nth-child(1)'
  };

  /*-------- METHODS ------------ */

  // Get all the available vouchers
  should_Get_Available_Vouchers() {
    const vouchers = [];
    let compareElement;
    // Locate the voucher table and iterate over each row
    cy.xpath(this.elements.tbl_couponAmountList).find("tr").each(($row) => {
      // Extract the first cell  text from the row
      const voucher = $row.find(this.elements.txt_voucherFirstChild).text()
        .replace(/\n/g, "") // Remove newline characters
        .trim();
        // Add the voucher to the array
        vouchers.push(voucher);
        // Log the voucher for visibility in test run
        cy.log(voucher);
      });
    // Remove the first element from the array
    cy.wrap(vouchers).then(() => {
      vouchers.shift();
    });
    const randonNum = Math.floor(Math.random() * vouchers.length);
    // Access and log a random voucher from the array
    cy.then(() => {
      const randomElement = vouchers[randonNum];
      cy.log(randomElement);
    });
  }

  //Click on first hour ticket and continue button
  should_Click_Required_Ticket(Ticket) {
    cy.xpath(this.elements.lbl_firstHour).click();
    cy.xpath(this.elements.btn_continue).click({ force: true });
    cy.wait(10000);
    cy.wait(7000);
  }

  // Clicks on "Purchase Now" button and verifies success
  should_Click_PurchaseNow_And_Verify_Message() {
    cy.xpath(this.elements.btn_purchaseNow).click({ force: true });
    cy.wait(20000);
    cy.xpath(this.elements.txt_successful).invoke("text")
      .should("equal", " Your ticket was successfully activated. ");
    cy.xpath(this.elements.btn_ok).click();
  }
}
export default voucher_Ticket_purchase;