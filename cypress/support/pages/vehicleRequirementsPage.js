import { drop } from "cypress/types/lodash";

export default class VehicleRequirementsPage {
  /* ============================================
     LOCATORS
  ============================================ */

  elements = {
    lbl_vehicle_requirements: "//p[normalize-space()='Vehicle requirements']",

    heading_service_requirements:
      "//h2[normalize-space()='Service requirements & repair requirements']",

    btn_show_tcm_info: "(//*[@data-qa='show-tcm-info-btn'])[1]",
    btn_hide: "cbs-dashboard-visibility-toggler",

    heading_tcdetails_popup: "//div[contains(text(),'Technical campaign')]",
    heading_TC: "//h2[normalize-space()='Technical Action']",

    btn_popup_close: "button.ds-box-header__item__close-button",

    btn_download_pdf: "button.mt-5.ds-button--outline",

    btn_ok: "//span[normalize-space()='OK']",

    heading_repair_requirement: "//h2[normalize-space()='Repair requirements']",

    txt_title: "//*[@id='name']",

    txt_description: "//*[@id='details']",
    txt_writehistory_description: "//*[@id='comment-field-']",
    lbl_service_date_span: ".service-date span",
    btn_edit_icon:".edit-history-entry",
    btn_add_parts: "button[data-qa='manual-activity-add-parts-button']",
    btn_writing_repair_report:
      "//span[normalize-space()='Writing repair history']",
    btn_add_to_work_order: "//span[normalize-space()='Add to work order']",
    txt_technicalaction:
      "//ds-box-content[@class='ds-box-content ds-box-content--accent-bar-critical ds-box-content--divider-none ds-box-content--spacing-md ds-box-content--with-accent-bar']",
    btn_tcconfirm: "(//button[@data-qa='confirm-customer-tcm-info-btn'])[1]",
    lbl_condition_based_services:
      "//h2[normalize-space()='Condition Based Services (CBS)']",
    lbl_distancecovered: "#distance-covered-unit-label",
    dropdown_service: "div.implementation-selection",
    dtn_service: "button.ds-select__fake-input",
    dropdown_service_list: "ds-select-list.ds-select-list",
    dropdown_serviceitem: "ds-list-item",
    service_date_text: ".service-date span",
    service_row_container: ".d-flex",
    edit_button: ".edit-history-entry",
    edit_mode_header: "h4.mb-2x",
    btn_datepicker: "#service-date-picker",
    calendar_container: "#service-date-picker-calendar",
    today_cell: ".ds-calendar-day-today",
    enabled_day_cells: ".ds-calendar-day:not(.ds-calendar-day-disabled)",

    dropdown_source: "#source",
    list_source_first: "//ds-list-item[@id='OVER_THE_AIR']",
    list_source_second: "//ds-list-item[@id='KEY_DATA']",
    list_source_third: "//ds-list-item[@id='MASTER_DATA']",
    btn_refresh: "button[icon='refresh']",

    btn_write_service: "button[data-testid='service-history-button']",

    btn_service_date: "#service-date-picker",

    lbl_cbs_dashboard: "cbs-dashboard",

    tbl_cbs_service_list: "ds-box-content",
    btn_datepicker: "#service-date-picker",
    work_order_card: "aos-work-order-card",

    lbl_ccm: "//h2[normalize-space()='Check Control messages (CCM)']",

    btn_ccm_source: "#ccm-source-open-button",

    btn_add_workorder: "#add-to-shopping-cart",
    btn_close: "#close-button-create-tab",
    btn_submit: "[data-qa='manual-activity-submit-button']",
    txt_writeServiceHistory_pop_title: "div.ds-box-header__label-wrapper",
    btn_createServiceHistory: "#create-service-history-button",
    chk_declaration: "#check-declaration-of-consent-",
    txt_service_description: "textarea.comment",
    checkbox_select_Service: "input.ds-checkbox",
    txt_distance_covered: "input.mileage",
    btn_update: "button#update-service-history-button",
    btn_edit: "button[aria-label='Edit'].edit-history-entry",
    btn_arrow: "ds-icon.ds-icon[data-id='arrow_up_small']",
    txt_service_date: "#date-field",
    lbl_service_history_overview: "#history-label",
    btn_delete_history_entry: "button.delete-history-entry",
    btn_confirm_delete: "button.ds-button.ds-button--primary",
    txt_noServicehistory_entry: "[aria-label='empty-state-heading']",
    txt_delete_confirm_message: ".ds-box-content__content-wrapper",
    btn_cbs_add_workOrder: "[data-testid='add-to-service-case-button']",
    btn_Restartserviceplanning: 'button[aria-label="Restart service plan"]',
    valueLabel: "div.implementation-selection div.value-label",
    dropdown_select_CBS_Service: "div.implementation-selection",
    dropdown_service_value: "button.ds-select__fake-input",
    dropdown_serivce_lists: "ds-select-list.ds-select-list",
    dropdown_list_values: "ds-list-item",
    lbl_distance_covered:"#distance-covered-unit-label",
    lbl_edited_description:"#comment",
    btn_Addtoworkorder: "[data-qa='manual-activity-submit-button']",
    btn_add_parts: '[data-qa="manual-activity-add-parts-button"]',
  };
  get_element(locator) {
    if (locator.startsWith("//") || locator.startsWith("(")) {
      return cy.xpath(locator);
    }
    return cy.get(locator);
  }
  /* ============================================
     ASSERTION METHODS 
  ============================================ */

  should_display_vehicle_requirements() {
    cy.xpath(this.elements.lbl_vehicle_requirements).should("be.visible");
  }

  should_display_service_requirements_heading() {
    cy.xpath(this.elements.heading_service_requirements).should("be.visible");
  }
  should_click_vehicle_requirement_tab() {
    cy.xpath(this.elements.lbl_vehicle_requirements).click();
    cy.wait(5000);
  }

  should_display_repair_requirements() {
    cy.xpath(this.elements.heading_repair_requirement).should("be.visible");
  }
  should_display_tcdetails() {
    cy.xpath(this.elements.heading_tcdetails_popup).should("be.visible");
  }
  should_display_heading_TC() {
    cy.xpath(this.elements.heading_TC).should("be.visible");
  }
  should_display_TC_cell() {
    cy.xpath(this.elements.txt_technicalaction).should("be.visible");
  }
  should_display_tcconfirm() {
    cy.xpath(this.elements.btn_tcconfirm)
      .should("be.visible")
      .and("be.enabled");
  }

  should_display_cbs_section() {
    cy.get(this.elements.lbl_condition_based_services).should("be.visible");
  }

  should_display_ccm_section() {
    cy.get(this.elements.lbl_ccm).should("be.visible");
  }

  should_display_vehicle_requirements() {
    cy.xpath(this.elements.lbl_vehicle_requirements).should("be.visible");
  }

  should_display_service_requirements_heading() {
    cy.xpath(this.elements.heading_service_requirements).should("be.visible");
  }

  should_display_repair_requirements() {
    cy.xpath(this.elements.heading_repair_requirement).should("be.visible");
  }
  should_display_tcdetails() {
    cy.xpath(this.elements.heading_tcdetails_popup).should("be.visible");
  }
  should_display_heading_TC() {
    cy.xpath(this.elements.heading_TC).should("be.visible");
  }
  should_display_TC_cell() {
    cy.xpath(this.elements.txt_technicalaction).should("be.visible");
  }
  should_display_tcconfirm() {
    cy.xpath(this.elements.btn_tcconfirm)
      .should("be.visible")
      .and("be.enabled");
  }

  should_display_cbs_section() {
    cy.get(this.elements.lbl_condition_based_services).should("be.visible");
  }

  should_display_ccm_section() {
    cy.get(this.elements.lbl_ccm).should("be.visible");
  }

  should_display_cbs_dashboard() {
    cy.get(this.elements.lbl_cbs_dashboard)
      .scrollIntoView()
      .should("be.visible");
  }
  should_notdisplay_cbs_dashboard() {
    cy.get(this.elements.lbl_cbs_dashboard).should("not.be.visible");
  }

  click_show_tcm_info() {
    cy.xpath(this.elements.btn_show_tcm_info).click();
  }

  click_download_pdf() {
    cy.get(this.elements.btn_download_pdf).click();
  }

  click_ok() {
    cy.xpath(this.elements.btn_ok).click();
  }

  click_add_parts() {
    cy.get(this.elements.btn_add_parts).click();
  }

  click_writing_repair_history() {
    cy.get(this.elements.btn_writing_repair_report).click();
  }
  verify_add_to_work_order() {
    cy.xpath(this.elements.btn_add_to_work_order).should("be.visible");
  }

  click_add_to_work_order() {
    cy.get(this.elements.btn_add_to_work_order).click();
  }

  verify_source_dropdown() {
    cy.get(this.elements.dropdown_source).should("be.visible");
  }
  click_source_dropdown() {
    cy.get(this.elements.dropdown_source).click();
  }

  verify_source_dropdown() {
    cy.get(this.elements.dropdown_source).should("be.visible");
  }
  click_source_dropdown() {
    cy.get(this.elements.dropdown_source).click();
  }

  select_source(value) {
    cy.get(this.elements.dropdown_source).select(value);
  }
  verify_refresh() {
    cy.get(this.elements.btn_refresh).should("be.visible");
  }
  verify_hideoverview() {
    cy.get(this.elements.btn_hide)
      .contains("button", "Hide overview")
      .scrollIntoView()
      .should("be.visible");
  }
  click_hideoverview() {
    cy.get(this.elements.btn_hide)
      .contains("button", "Hide overview")
      .scrollIntoView()
      .click();
  }
  verify_showoverview() {
    cy.get(this.elements.btn_hide)
      .contains("button", "Show overview")
      .should("be.visible");
  }
  click_showoverview() {
    cy.get(this.elements.btn_hide).contains("button", "Show overview").click();
  }
  click_refresh() {
    cy.get(this.elements.btn_refresh).click();
  }
  verify_write_service_history() {
    cy.get(this.elements.btn_write_service).should("be.visible");
  }
  click_write_service_history() {
    cy.wait(15000);
    cy.get(this.elements.btn_write_service).click();
  }

  should_display_Writerepair_history_popup_title() {
    cy.wait(10000);
    cy.get(this.elements.txt_writeServiceHistory_pop_title)
      .should("be.visible")
      .and("contain.text", "Write & Show service history");
  }
  getCurrentDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  }
  should_create_service_history() {
    cy.wait(5000);
    const formattedDate = this.getCurrentDate();
    const distance = "20000";
    cy.get(this.elements.txt_distance_covered).type(distance);
    cy.get(this.elements.checkbox_select_Service).first().click();
    cy.get(this.elements.txt_service_description).type("Description");
    cy.get(this.elements.chk_declaration).click();
    cy.get(this.elements.btn_createServiceHistory)
      .should("not.be.disabled")
      .click();
    cy.wait(7000);
    
    cy.get(this.elements.lbl_distance_covered)
      .parent()
      .invoke("text")
      .then((text) => {
        // Extract number from text
        const numberInUI = text.replace(/[^\d]/g, "");
        expect(numberInUI).to.equal(distance);
      });
    cy.get(this.elements.lbl_service_date_span).should(
      "contain.text",
      formattedDate,
    );
  }

  should_delete_Service_from_Overview() {
    cy.wait(5000);
    cy.xpath(this.elements.lbl_vehicle_requirements).click();
    cy.wait(5000);
    cy.get(this.elements.btn_write_service).click();
    cy.wait(5000);
    cy.get(this.elements.lbl_service_history_overview).click();
    this.should_click_delete_added_service_history_entry();
    this.should_click_confirm_delete_btn();
  }

  should_click_delete_added_service_history_entry() {
    const formattedDate = this.getCurrentDate();
    cy.contains(this.elements.lbl_service_date_span, formattedDate)
      .closest(".d-flex")
      .find(this.elements.btn_delete_history_entry)
      .click();
    cy.wait(2000);

    cy.get(this.elements.txt_delete_confirm_message)
      .should("be.visible")
      .and(
        "contain.text",
        "Do you really want to delete this service history entry?",
      );
  }
  should_click_confirm_delete_btn() {
    cy.wait(2000);
    cy.get(this.elements.btn_confirm_delete)
      .contains(this.elements.btn_delete_primary, "Delete")
      .click();
    cy.wait(5000);
    cy.get(this.elements.txt_noServicehistory_entry)
      .should("be.visible")
      .and(
        "contain.text",
        "There are no service history entries for this vehicle.",
      );
    this.should_click_Close_btn();
  }
  should_click_edit_button() {
    const formattedDate = this.getCurrentDate();
    // Verify edit mode  
    cy.contains(this.elements.lbl_service_date_span, formattedDate)
      .closest(".d-flex")
      .find(this.elements.btn_edit_icon)
      .click();

    // Remove hard wait — use assertion instead
    cy.get(this.elements.edit_mode_header)
      .should("be.visible")
      .and("contain.text", "You are editing an existing service history entry");
  }
  should_edit_Service_history_details() {
    cy.wait(5000);
    const distance = "5000";
    const description = "Edited description";
    const formattedDate = this.getCurrentDate();
    cy.get(this.elements.txt_distance_covered).clear().type(distance);
    cy.wait(1000);
    cy.get(this.elements.checkbox_select_Service).eq(2).click();
    cy.get(this.elements.txt_service_description).clear().type(description);
    cy.wait(2000);
    cy.contains("Accept").click();

    cy.get(this.elements.btn_update).click();
    cy.wait(10000);
    cy.get(this.elements.lbl_distance_covered, { timeout: 10000 })
      .parent()
      .invoke("text")
      .then((text) => {
        // Extract number from text
        const numberInUI = text.replace(/[^\d]/g, "");
        expect(numberInUI).to.equal(distance);
      });
    cy.get(this.elements.lbl_service_date_span).should(
      "contain.text",
      formattedDate,
    );
    // cy.get(this.elements.btn_arrow).click();
    cy.wait(2000);
    
    cy.get(this.elements.lbl_edited_description)
      .should("be.visible")
      .invoke("val")
      .then((text) => {
        expect(text.trim()).to.eq(description);
      });
    cy.wait(1000);
    this.should_click_Close_btn();
  }

  should_click_Close_btn() {
    cy.wait(5000);
    cy.get(this.elements.btn_close).click();
  }
  verify_cbstable() {
    cy.get(this.elements.tbl_cbs_service_list).should("be.visible");
  }
  verify_datefield() {
    cy.get(this.elements.btn_service_date).should("be.visible");
  }
  click_datefield() {
    cy.get(this.elements.btn_service_date).click;
  }
  verify_add_workorder() {
    cy.get(this.elements.btn_add_workorder).should("be.visible");
  }
  click_add_workorder() {
    cy.get(this.elements.btn_add_workorder).click();
  }
  should_click_Close_btn() {
    cy.wait(5000);
    cy.get(this.elements.btn_popup_close).click();
  }
  should_add_parts(title, description) {
    // Ensure Repair Requirements section is visible
    cy.xpath(this.elements.heading_repair_requirement)
      .scrollIntoView()
      .should("be.visible");

    // Enter Title
    cy.xpath(this.elements.txt_title).should("be.visible").clear().type(title);

    // Enter Description
    cy.xpath(this.elements.txt_description)
      .should("be.visible")
      .clear()
      .type(description);

    // Click Add Parts Button
    cy.get(this.elements.btn_add_parts).should("be.visible").click();
  }
  should_add_to_work_order(title, description) {
    // Ensure Repair Requirements section is visible
    cy.xpath(this.elements.heading_repair_requirement).should("be.visible");

    // Enter Title
    cy.xpath(this.elements.txt_title).should("be.visible").clear().type(title);

    // Enter Description
    cy.xpath(this.elements.txt_description)
      .should("be.visible")
      .clear()
      .type(description);

    // Click Add Parts Button
    cy.xpath(this.elements.btn_add_to_work_order).should("be.visible").click();
  }
  
  should_select_service_dropdown() {
    cy.get(this.elements.dropdown_select_CBS_Service)
      .find(this.elements.dropdown_service_value)
      .eq(0)
      .click();
    cy.wait(2000);
    cy.get(this.elements.dropdown_serivce_lists)
      .find( this.elements.dropdown_list_values)
      .first()
      .click();
    cy.wait(3000);
  }

  should_verify_cbs_section() {
    this.verify_source_dropdown();
    this.verify_refresh();
    this.verify_write_service_history();
    this.verify_add_to_work_order();
    this.verify_datefield();
    this.should_display_cbs_dashboard();
    this.verify_cbstable();
    this.verify_hideoverview();
  }

  should_Add_WorkOrder_In_CBS() {
    cy.get(this.elements.btn_cbs_add_workOrder)
      .scrollIntoView()
      .wait(1000)
      .should("be.visible")
      .click({ force: true });
    cy.wait(2000);
  }

  should_verify_source_list() {
    this.click_source_dropdown();

    cy.contains("Source: Over-the-air").should("exist");
    cy.contains("Source: Key data").should("exist");
    cy.wait(5000);
    cy.contains("Source: Master data").click({ force: true });
  }

  should_select_current_date() {
    const today = new Date();
    const day = today.getDate();
    const year = today.getFullYear();
    const month = today.toLocaleString("en-US", { month: "long" });

    cy.get(this.elements.btn_datepicker).should("be.visible").click();

    cy.get(`[aria-label="${month} ${day}, ${year}"]`, { timeout: 10000 })
      .should("be.visible")
      .click();
  }
  selectTodayDate() {
    cy.get(this.elements.btn_datepicker).should("be.visible").click();

    cy.get(this.elements.calendar_container)
      .should("be.visible")
      .find(this.elements.today_cell)
      .nextAll(this.elements.enabled_day_cells)
      .first()
      .click();
  }

  should_display_addedservice_inCart() {
    cy.get(this.elements.work_order_card).should("be.visible");
  }

  get_campaign_number() {
    return cy
      .xpath(this.elements.lbl_campaignnumber)
      .invoke("text")
      .then((text) => text.trim());
  }
  should_verify_Technicalcampaign_download() {
    this.should_display_heading_TC();
    this.should_display_TC_cell();
    this.click_show_tcm_info();
    this.should_display_tcdetails();

    return this.get_campaign_number().then((campaignNumber) => {
      return this.get_campaign_number().then((campaignNumber) => {
        this.click_download_pdf();
        this.click_ok();
        this.should_display_tcconfirm();

        return campaignNumber;
      });

      return campaignNumber;
    });
  }
  Title_And_Description_Validation() {
  //  Scenario 1: Minimum Valid Text
  cy.xpath(this.elements.txt_title).type('Valid');
  cy.xpath(this.elements.txt_description).type('GoodDesc');
  cy.get(this.elements.btn_add_parts).should('exist').and('not.be.disabled');
  cy.get(this.elements.btn_Addtoworkorder).should('exist').and('not.be.disabled');
  // Scenario 2: Maximum (>100)
  cy.xpath(this.elements.txt_title).clear().type('A'.repeat(101));
  cy.xpath(this.elements.txt_description).clear().type('B'.repeat(101));
  cy.get(this.elements.btn_add_parts).should('be.disabled');
  cy.get(this.elements.btn_Addtoworkorder).should('be.disabled');
  // Scenario 3: Only Numbers 
  cy.xpath(this.elements.txt_title).clear().type('1234567890');
  cy.xpath(this.elements.txt_description).clear().type('0987654321');
  cy.get(this.elements.btn_add_parts) .should('be.disabled');
  cy.get(this.elements.btn_Addtoworkorder).should('be.disabled');
  // Scenario 4: Only Special Characters
  cy.xpath(this.elements.txt_title).clear().type('!@#$%^&*()');
  cy.xpath(this.elements.txt_description).clear().type('!@#$%^&*()');
  cy.get(this.elements.btn_add_parts).should('be.disabled');
  cy.get(this.elements.btn_Addtoworkorder).should('be.disabled');
}
}
