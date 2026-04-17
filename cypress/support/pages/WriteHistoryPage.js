import { count } from "console";

export default class WriteHistory {
  /* ============================================
     LOCATORS
  ============================================ */

  elements = {
    lbl_writehistory: "//p[normalize-space()='Write history']",
    h2_writevehiclehistory: "//h2[normalize-space()='Write vehicle history']",
    btn_writingrepairreport:
      "(//span[contains(text(),'Writing repair history')])[2]",
    heading_editactivity: "//h2[normalize-space()='Edit activity']",
    btn_closepopup: "//button[@aria-label='Dismiss']",
    txt_activitytitle: "//input[@placeholder='Activity title']",
    txt_activitydescription: "//textarea[@id='description']",
    txt_AdditionalInformationOnTheRepairProcedure:
      "//textarea[@placeholder='Additional information on the repair procedure']",
    btn_updateactivity: "//span[normalize-space()='Update activity']",
    lbl_newrepairhistory: "//h2[normalize-space()='New repair history']",
    date_dateofrepair:
      "//*[@data-qa='service-repair-form-maintenance-date-input']",
    txt_currentodometer: "//input[@placeholder='Current odometer reading']",
    txt_repairdescription: "//textarea[@formcontrolname='details']",
    checkbox_accept: "//input[@id='repairConsent']",
    btn_cancel: "//button[@data-qa='cancel-repair-history-btn']",
    btn_newrepairhistory: "//button[@data-qa='save-repair-history-btn']",
    txt_repairhistorySuccessButton:
      "//p[contains(text(),'Repair history entry was added')]",
    btn_savehistory: "[data-qa='save-repair-history-btn']",
    btn_repair: (repairName) =>
      cy.xpath(`
      //div[contains(@class,'repair-name') 
      and contains(normalize-space(),'${repairName}')]
      /ancestor::*[self::div or self::tr][1]
      //button[@icon='edit']
    `),

    checkbox_repair: (repairName) =>
      cy.xpath(`
      //div[contains(@class,'repair-name') 
      and contains(normalize-space(),'${repairName}')]
      /ancestor::*[self::div or self::tr][1]
      //input[@type='checkbox']
    `),

    repair_by_name: (repairName) =>
      `//p[normalize-space()='${repairName}']
`,

    edit_button_inside_row: ".//button[@icon='edit']",

    checkbox_repair_consent: "//input[@id='repairConsent']",

    btn_writing_repair_history:
      "(//span[contains(normalize-space(),'Writing repair history')])[2]",

    lbl_RepairName: "//div[@class='repair-name']",
  };

  /* ============================================
     COMMON GETTER
  ============================================ */

  get_element(locator) {
    if (locator.startsWith("//") || locator.startsWith("(")) {
      return cy.xpath(locator);
    }
    return cy.get(locator);
  }

  should_display_writehistory_label() {
    this.get_element(this.elements.lbl_writehistory).should("be.visible");
  }
  should_click_writehistory_label() {
    this.get_element(this.elements.lbl_writehistory).click();
  }

  should_display_edit_activity_heading() {
    this.get_element(this.elements.heading_editactivity).should("be.visible");
  }

  should_display_repair_by_name(repairName) {
    cy.xpath(this.elements.repair_by_name(repairName)).should("be.visible");
  }

  /* ============================================
     ACTION METHODS
  ============================================ */

  click_edit_by_repair_name(repairName) {
    this.elements.btn_repair(repairName).should("be.visible").click();
  }

  check_checkbox_by_repair_name(repairName) {
    this.elements
      .checkbox_repair(repairName)
      .should("exist")
      .check({ force: true });
  }
  click_WritingRepairHistoryButton() {
    cy.xpath(this.elements.btn_writing_repair_history)
      .should("be.visible")
      .click();
  }

  enter_activity_title(title) {
    this.get_element(this.elements.txt_activitytitle).clear().type(title);
  }

  enter_repair_description(description) {
    this.get_element(this.elements.txt_repairdescription)
      .clear()
      .type(description);
  }

  click_update_activity() {
    this.get_element(this.elements.btn_updateactivity).click();
  }
  accept_repair_consent() {
    this.get_element(this.elements.checkbox_repair_consent)
      .should("exist")
      .check({ force: true });
  }
  click_writing_repair_history() {
    this.get_element(this.elements.btn_writing_repair_history)
      .should("be.visible")
      .click();
  }
  verify_repair_history(repairName) {
    this.get_element(this.elements.repair_by_name(repairName))
      .should("exist")
      .and("be.visible");
  }
  // -------------------------------------------------------------------------------------
  verify_and_edit_repair_history(repairName) {
    this.should_display_repair_by_name(repairName);
    this.click_edit_by_repair_name(repairName);
    this.accept_repair_consent();
    this.click_writing_repair_history();
  }
  should_Fill_New_Repair_HistoryDetails_And_checkSuccessMessage() {
    cy.xpath(this.elements.txt_currentodometer).clear().type("10");
    cy.xpath(this.elements.checkbox_accept).should("be.visible").click();
    cy.xpath(this.elements.btn_newrepairhistory).should("be.visible").click();
    cy.xpath(this.elements.txt_repairhistorySuccessButton).should("be.visible");
  }

  should_Check_Items_Count_In_WriteHistory(repairName) {
    cy.xpath(this.elements.lbl_RepairName).should("contain", repairName);
  }
  Odometer_Validation() {
  // Value below 10000 
  cy.xpath(this.elements.txt_currentodometer).clear().type('9000');
  cy.xpath(this.elements.checkbox_accept).check({ force: true });
  cy.xpath(this.elements.btn_newrepairhistory).should('exist').and('not.be.disabled');
  //Value greater than 10000
  cy.xpath(this.elements.txt_currentodometer).clear().type('15000');
  cy.xpath(this.elements.checkbox_accept).check({ force: true });
  cy.xpath(this.elements.btn_newrepairhistory).should('exist').and('be.disabled');
  //Only characters
  cy.xpath(this.elements.txt_currentodometer).clear().type('abcde');
  cy.xpath(this.elements.checkbox_accept).check({ force: true });
  cy.xpath(this.elements.btn_newrepairhistory).should('exist').and('be.disabled');
  //Special characters
  cy.xpath(this.elements.txt_currentodometer).clear().type('!@#$%');
  cy.xpath(this.elements.checkbox_accept).check({ force: true });
  cy.xpath(this.elements.btn_newrepairhistory).should('exist').and('be.disabled');
}
AdditionalInformation_Validation() {
  //Minimum text 
  cy.xpath(this.elements.txt_AdditionalInformationOnTheRepairProcedure).clear().type('A'.repeat(999)); 
  cy.xpath(this.elements.checkbox_accept).check({ force: true });
  cy.xpath(this.elements.btn_newrepairhistory).should('exist').and('not.be.disabled');
  //Maximum text
  cy.xpath(this.elements.txt_AdditionalInformationOnTheRepairProcedure).clear().type('A'.repeat(1000));
  cy.xpath(this.elements.checkbox_accept).check({ force: true });
  cy.xpath(this.elements.btn_newrepairhistory).should('exist').and('be.disabled');
  //Only numbers
  cy.xpath(this.elements.txt_AdditionalInformationOnTheRepairProcedure).clear().type('1234567890');
  cy.xpath(this.elements.checkbox_accept).check({ force: true });
  cy.xpath(this.elements.btn_newrepairhistory).should('exist').and('be.disabled');
  //Special characters
  cy.xpath(this.elements.txt_AdditionalInformationOnTheRepairProcedure).clear().type('!@#$%^&*()_+-={}[]|;:"<>,.?/~`');
  cy.xpath(this.elements.checkbox_accept).check({ force: true });
  cy.xpath(this.elements.btn_newrepairhistory).should('exist').and('be.disabled');
}
}
