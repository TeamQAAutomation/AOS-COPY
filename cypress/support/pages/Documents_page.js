export default class DocumentsPage {
  /* ============================================
     LOCATORS
  ============================================ */

  elements = {
    lblDocuments: "//p[normalize-space()='Documents']",
    headingAIR: "//h2[normalize-space()='Aftersales Information Research']",
    btnStart: "//a[normalize-space()='Start']",
    linkUserGuide: "//a[normalize-space()='AIR user guide']",
    linkFlyer: "//a[normalize-space()='AIR-Flyer']",
    lblSearchPage: "//span[normalize-space()='Search for the vehicle']",
    txtVinSearch: "(//*[@placeholder='Start new search'])[1]",
    txtTypeCodeSearch: "(//*[@placeholder='Start new search'])[2]",
    ddlBasicFeature: "select.air-typschluessel-merkmalsearch-dropdown",
  };

  //  ============================================ */

      // Unified element locator (supports XPath and CSS)
    getElement(locator) {
        if (locator.startsWith('//') || locator.startsWith('(//')) {
            return cy.xpath(locator);
        }
        return cy.get(locator);
    }
  should_display_documents_label() {
    this.getElement(this.elements.lblDocuments).should("be.visible");
  }

  should_click_documents_label() {
    this.getElement(this.elements.lblDocuments).should("be.visible").click();
  }

  should_display_air_heading() {
    this.getElement(this.elements.headingAIR).should("be.visible");
    this.getElement(this.elements.btnStart).scrollIntoView().should("be.visible");
  }

  should_display_search_page() {
    this.getElement(this.elements.lblSearchPage).should("be.visible");
  }

  should_contain_text_in_documents_label(expectedText) {
    this.getElement(this.elements.lblDocuments).should(
      "contain.text",
      expectedText,
    );
  }

  /* ============================================
     ACTION METHODS
  ============================================ */

  click_start() {
    this.getElement(this.elements.btnStart).click();
  }

  click_user_guide() {
    this.getElement(this.elements.linkUserGuide).click();
  }

  click_flyer() {
    this.getElement(this.elements.linkFlyer).click();
  }

  enter_vin(vin) {
    this.getElement(this.elements.txtVinSearch).clear().type(vin);
  }

  enter_type_code(typeCode) {
    this.getElement(this.elements.txtTypeCodeSearch).clear().type(typeCode);
  }

  select_basic_feature(option) {
    this.getElement(this.elements.ddlBasicFeature).select(option);
  }

  add_parts_in_repair_requirements(title, description) {
    // Ensure Repair Requirements section is visible
    this.get_element(this.elements.heading_repair_requirement).should(
      "be.visible",
    );

    // Enter Title
    this.get_element(this.elements.txt_title)
      .should("be.visible")
      .clear()
      .type(title);

    // Enter Description
    this.get_element(this.elements.txt_description)
      .should("be.visible")
      .clear()
      .type(description);

    // Click Add Parts Button
    this.get_element(this.elements.btn_add_parts).should("be.visible").click();
  }
}
