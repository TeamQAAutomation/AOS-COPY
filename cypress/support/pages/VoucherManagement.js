class Voucher_Management {
  elements = {
    /*-------- XPATHS/ELEMENT LOCATORS ------------ */
    myAOS: "//div[@class='ds-list-item__content'][normalize-space()='My AOS']",
    administartion: '//*[@id="administration-li"]',
    AllOrgansation: '//*[@id="allOrganizations-li"]',
    searchField: "//input[@placeholder='Search organisation']",
    organisationName: "//tbody/tr/td[2]",
    clickOrg: "//tbody/tr/td[1]/a",
    SearchButton: "//*[contains(text(),'Search')]",
    ManageVouchers: "//button/span[contains(text(),'Manage vouchers')]",
    productName: "//tbody/tr/td[1]/span",
    AddVoucher: "//button/span[text()='Add voucher']",
    theIFrame: "#app aos-iframe-page iframe",
    adminIFrame: "#app aos-iframe-page iframe",
    couponCommentInput: "//*[@id='coupon-comment']",
    addVoucherButton:
      "//div[@class='ui-dialog-buttonpane ui-helper-clearfix']/button[2]/span",
    paginatorBTN: '//*[@id="pn_id_1"]/p-paginator/div/span/button[2]',
    products: "//h3[contains(text(),'Products')]",
    voucherreport: "//h3[contains(text(),'Voucher report')]",
    vouchers: "//h3[contains(text(),'Vouchers')]",
    productnamecoloum:
      "(//th[@class='p-element p-sortable-column p-highlight'])[1]",
    addcoloum: "//th[contains(text(),' Add ')]",
  };

  /*-------- METHODS ------------ */

  Click_MyOrganisation() {
    cy.xpath(this.elements.administartion).click({ force: true });
    cy.wait(8000);
    cy.xpath(this.elements.AllOrgansation).click({ force: true });
    cy.wait(30000);
  }

  // Searches for an organization by email and selects it
  SearchOrganisation(mail) {
    cy.frameLoaded(this.elements.theIFrame).invoke(
      "attr",
      "style",
      "width: 1000px; height: 1300px"
    );
    cy.enter(this.elements.theIFrame).then((frame) => {
      frame().xpath(this.elements.searchField).type(mail);
      frame().xpath(this.elements.SearchButton).click({ force: true });
      cy.wait(6000);
      frame().xpath(this.elements.clickOrg).click({ force: true });
      cy.wait(20000);
    });
  }
  // Clicks on "Manage Vouchers"
  clickonVouchermanagement() {
    cy.frameLoaded(this.elements.adminIFrame).invoke(
      "attr",
      "style",
      "width: 1000px; height: 1300px"
    );
    cy.enter(this.elements.adminIFrame).then((frame) => {
      frame().xpath(this.elements.ManageVouchers).click({ force: true });
      cy.wait(25000);
    });
  }
  // Checks and logs the subheadlines
  Checksubheadline() {
    cy.frameLoaded(this.elements.adminIFrame).invoke(
      "attr",
      "style",
      "width: 1000px; height: 1300px"
    );
    cy.enter(this.elements.adminIFrame).then((frame) => {
      frame()
        .xpath(this.elements.products)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      frame()
        .xpath(this.elements.voucherreport)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      frame()
        .xpath(this.elements.vouchers)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
    });
  }
  // Verifies visibility and logs the text of specific columns
  tablecolumncheck() {
    cy.frameLoaded(this.elements.adminIFrame).invoke(
      "attr",
      "style",
      "width: 1000px; height: 1300px"
    );
    cy.enter(this.elements.adminIFrame).then((frame) => {
      frame()
        .xpath(this.elements.productnamecoloum)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      frame()
        .xpath(this.elements.addcoloum)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
    });
  }
  // Adds a voucher 
  AddVouchers(voucherName) {
    let Productindex;

    cy.frameLoaded(this.elements.theIFrame).invoke(
      "attr",
      "style",
      "width: 1000px; height: 1300px"
    );
    cy.enter(this.elements.theIFrame).then((frame) => {
    });

    cy.frameLoaded(this.elements.adminIFrame).invoke(
      "attr",
      "style",
      "width: 1000px; height: 1300px"
    );
    cy.enter(this.elements.adminIFrame).then((frame) => {
      frame().xpath(this.elements.paginatorBTN).click({ force: true });
      cy.wait(10000);
    });

    cy.frameLoaded(this.elements.adminIFrame).invoke(
      "attr",
      "style",
      "width: 1000px; height: 1300px"
    );
    cy.enter(this.elements.adminIFrame).then((frame) => {
      const targetProduct = voucherName;
      let index = 0;
      let matchedindex = 0;

      frame()
        .xpath('//*[@id="pn_id_1-table"]')
        .find("tr")
        .each(($row) => {
          let productText = $row.find("td:nth-child(1) span").text();
          cy.log(`Processing product ${(index = index + 1)}:  ${productText}`);
          if (productText.includes(targetProduct)) {
            cy.log("product got matched");
            matchedindex = index;
            cy.log(matchedindex);
          }
        });

      let indexVoucher = 0;

      frame()
        .xpath('//*[@id="pn_id_1-table"]')
        .find("tr")
        .each(($button) => {
          let tex = $button.find("td:nth-child(2) .p-button-label").text();
          cy.log(
            `Processing product ${(indexVoucher = indexVoucher + 1)}:  ${tex}`
          );
          if (indexVoucher == matchedindex) {
            cy.log("Index got matched");
            $button.find("td:nth-child(2) .p-button-label").click();
          }
        });

      frame().xpath(this.elements.couponCommentInput).type("Test purpose");
      frame().xpath(this.elements.addVoucherButton).click({ force: true });
    });
  }
}
export default Voucher_Management;
