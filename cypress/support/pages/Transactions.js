class Transactions {
  elements = {
    /*-------- XPATHS/ELEMENT LOCATORS ------------ */
    tab_administration: () =>
      cy.xpath('//div[@class="ds-list-item__content"][normalize-space()="Administration"]'),
    tab_configuration: () =>
      cy.xpath('//div[@class="ds-list-item__content"][normalize-space()="Configuration"]'),
    tab_AOSBP: () =>
      cy.xpath('//*[@id="wrapper"]/div[1]/nav/ul/li[6]/ul/li[3]/a[2]'),
    tab_Transactions: () =>
      cy.xpath("(//*[contains(text(),'Transactions')])[2]"),
    btn_AddTransaction: "//*[contains(text(),'Add transaction')]",
    btn_clientDropDown: '//*[@id="client"]/div/span',
    btn_optionsInDropdown: '//*[@id="pr_id_12_list"]/p-dropdownitem[4]/li/span',
    input_TransactionName: '//*[@name="transactionName"]',
    input_price: '//*[@name="netPrice"]',
    input_materialNumber: '//*[@name="materialNumber"]',
    input_description: '//*[@name="description"]',
    btn_store: "//span[contains(text(),'Store')]",
    btn_cookies: () => cy.xpath("//button[@id='cookie-disclaimer-button']"),
    txt_firstRow: '(//*[@class="p-element p-datatable-tbody"]/tr)[1]',
    embeddedIFrame: "#embedded-iframe"
  };

  /*-------- METHODS ------------ */

 //Clcik on the Transactions tab
  clickOnTransactions() {
    this.elements.tab_administration().click();
    cy.wait(5000);
    this.elements.tab_configuration().click({ force: true });
    cy.wait(5000);
    this.elements.tab_AOSBP().click();
    cy.wait(5000);
    this.elements.tab_Transactions().click();
    cy.wait(5000);
  }

  AddTransaction() {

    this.elements.btn_cookiesButton().click({ force: true });

    cy.frameLoaded(this.elements.embeddedIFrame).invoke(
      "attr",
      "style",
      "width: 800px; height: 600px"
    );
    cy.enter(this.elements.embeddedIFrame).then((frame) => {
      frame().xpath(this.elements.btn_AddTransaction).click();
    });

    cy.frameLoaded(this.elements.embeddedIFrame);
    cy.enter(this.elements.embeddedIFrame).then((frame) => {
      frame().xpath(this.elements.btn_clientDropDown).click();
      cy.wait(3000);
      frame().xpath(this.elements.btn_optionsInDropdown).trigger("mouseover");
      frame().xpath(this.elements.input_TransactionName).type("Test demo");
      frame().xpath(this.elements.input_price).type("10");
      frame().xpath(this.elements.input_materialNumber).type("BB021354");
      frame()
        .xpath(this.elements.input_description)
        .type("DEMO PURPOSLEY ADDED CAN BE DELETED AGAIN");
      frame().xpath(this.elements.btn_store).click();
    });
  }

  editTransactions() {
    cy.frameLoaded(this.elements.embeddedIFrame).invoke(
      "attr",
      "style",
      "width: 800px; height: 600px"
    );
    cy.enter(this.elements.embeddedIFrame).then((frame) => {
      frame().xpath(this.elements.txt_firstRow).click();
    });

    cy.frameLoaded(this.elements.embeddedIFrame).invoke(
      "attr",
      "style",
      "width: 800px; height: 600px"
    );
    cy.enter(this.elements.embeddedIFrame).then((frame) => {
      frame().xpath(this.elements.input_price).type("10");
      frame().xpath(this.elements.input_materialNumber).type("BB021354");
      frame()
        .xpath(this.elements.input_description)
        .type("DEMO PURPOSLEY ADDED CAN BE DELETED AGAIN");
    });
  }

  sortTransactions() {}
}
export default Transactions;