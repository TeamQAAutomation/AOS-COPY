export default class VehicleInformationPage {
  /* =====================================================
     LOCATORS
  ===================================================== */

  elements = {
    /* ---------- Vehicle Information Section ---------- */

    lblVehicleInformation: "//p[normalize-space()='Vehicle information']",
    lblVin: "//p[normalize-space()='VIN']",
    lblShortVin: "//p[normalize-space()='Short VIN (last 7 characters)']",
    lblVehicleType: "//p[normalize-space()='Vehicle type']",
    lblBodyPrimary: "(//p[normalize-space()='Body'])[1]",
    lblBodySecondary: "(//p[normalize-space()='Body'])[2]",
    lblTransmission: "//p[normalize-space()='Transmission']",
    lblTransmissionNumber: "//p[normalize-space()='Transmission number']",
    lblCurrentILevel: "//p[normalize-space()='Current I level']",
    lblIntegrationLevel:
      "//p[normalize-space()='Integration level, factory installed']",
    lblProductionDate: "//p[normalize-space()='Production date']",
    lblWarrantyStartDate: "//p[normalize-space()='Warranty start date']",
    lblFirstRegistration: "//p[normalize-space()='First registration']",
    lblCountry: "//p[normalize-space()='Country/Region']",
    lblColour: "//p[normalize-space()='Colour']",
    lblColourCode: "//p[normalize-space()='Colour code']",
    lblUpholstery: "//p[normalize-space()='Upholstery']",
    lblUpholsteryCode: "//p[normalize-space()='Upholstery code']",
    lblModelCode: "//p[normalize-space()='Model code']",
    lblVehicleTypeLabel: "//p[normalize-space()='Type']",
    lblControlType: "//p[normalize-space()='Control type']",
    lblDiagnoseProgramming: "//p[contains(text(),' Diagnose & Programming ')]",
    lblTicketStatus: "//p[contains(text(),'Ticket Status')]",   
    lblOdometerReading: "//span[contains(text(),'Odometer reading')]",
    lblDate: "//span[contains(text(),'Date')]",
    lblHistoryType: "//span[contains(text(),'Type')]",
    lblNumberOfJobs: "//span[contains(text(),'Number of jobs')]",
    lblRetailer: "//span[contains(text(),'Retailer')]",
    lblActionColumn: "//th[contains(@class,'actions')]",
    lblvehicleinfo: "//ds-tabs-content[@id='vehicle-information']",
    lblTechnicalApplication : "//h1[contains(text(),'Technical applications')]",
    lblMyTickets: "//h1[contains(text(),'My tickets')]",
    iconFirstService: "//div[contains(@class,'cbs-columns')]/div[1]/div[1]",
    lblServiceItem: "//div[contains(@class,'inline-flex space-x-4')]",
    txtServiceNote:
      "//p[contains(@class,'text-xs') and not(contains(@class,'grey'))]",
    txtAlertMessage: "//p[contains(@class,'text-color-ds-color-grey-600')]",

    /* ---------- Edit Popup ---------- */

    lblEditPopupHeading: "//h2[normalize-space()='Edit service history']",
    btnPopupClose: "//button[@aria-label='Dismiss']",
    btnCancelPopup: "//button[contains(@class,'ds-button--outline')]",
    btnWriteServiceHistory: "//button[contains(@class,'ds-button--primary')]",
    txtDescription: "//textarea[@id='description']",
    chkServiceConsent: "//input[@id='serviceConsent']",
    lblServiceDate: "//label[normalize-space()='Servicing date']",
    lblCurrentOdometer: "//label[normalize-space()='Current odometer reading']",
    txtWorkshopReference: "//input[@id='workshop']",
    txt_description: "//textarea[@id='description']",
    checkbox_accept: "//input[@id='serviceConsent']",
    btn_writehistory: "//span[normalize-space()='Write service history']",
    btn_deleteentry: "//button[@data-qa='history-delete-modal-confirm']",
    lbl_vinnumber: "//p[normalize-space()='VIN']/following-sibling::p[1]",

    /* ---------- Action Buttons ---------- */

    btnShowOptionalEquipment:
      "//span[normalize-space()='Show optional equipment']",
    btnViewAsTimeline: "//ds-segmented-control-item[@id='timeline']",
    btnViewAsList: "//ds-segmented-control-item[@id='list']",
    btnTimeSpanRegistration: "//ds-segmented-control-item[@id='registration']",
    btnTimeSpanLast10Years: "//ds-segmented-control-item[@id='10years']",
    btnTimeSpanLast5Years: "//ds-segmented-control-item[@id='5years']",
    btnTimeSpanLast2Years: "//ds-segmented-control-item[@id='2years']",
    btnTimeSpanLast1Year: "//ds-segmented-control-item[@id='1year']",
    btnTimeSpanCustom: "//ds-segmented-control-item[@id='custom']",
    btnNewHistoryEntry: "//span[normalize-space()='New history entry']",
    btnDelete: "(//button[@icon='bin'])[1]",
    btnEdit: "(//button[@icon='edit'])[1]",
    btnShowHistory:
      "//button[@data-qa='vehicle-summary-open-vehicle-history-btn']",
    btnOpenISTA: "//span[normalize-space()='Open ISTA']",
    btnTicketPurchase: "(//span[normalize-space()='Ticket purchase'])[1]",
    btnRequestRemoteKeyRead: "(//span[normalize-space()='Ticket purchase'])[2]",
    btn_deleteservice: "[data-qa^='history-table-button-delete-']",
    btn_editservice: "[data-qa^='history-table-button-edit-']",

    /* ---------- Checkboxes ---------- */

    chkWorkshopService: "//ds-checkbox-group[1]//div[1]",
    chkWorkshopRepair: "//ds-checkbox-group[2]//div[1]",
    chkWorkshopKeyRead: "//ds-checkbox-group[3]//div[1]",

    /* ---------- Charts & Tables ---------- */

    chartHistoryTable: "//aos-nifty-chart//canvas",
    tblAosHistory: "//aos-service-history//aos-history-table",

    /* ---------- Images ---------- */

    imgVehicle:
      "//div[contains(@class,'images flex flex-column')]/aos-cosy-image[contains(@size,'w-full')]/img[1]",
    imgVehicleExterior: "//div[contains(@class,'interior-wrapper')]",
  };

  /* =====================================================
     ACTION METHODS
  ===================================================== */
  should_ClickVehicleInformationPage() {
    cy.xpath(this.elements.lblVehicleInformation).should("be.visible").click();
  }

  clickShowOptionalEquipment() {
    cy.xpath(this.elements.btnShowOptionalEquipment).click();
  }

  checkDiagnoseProgramming(){
    cy.xpath(this.elements.lblDiagnoseProgramming).should("be.visible");
  }
  clickAndCheckOpenIsta(){

    cy.window().then((win) => {
  cy.stub(win, 'open').as('windowOpen')
})

 cy.xpath(this.elements.btnOpenISTA).invoke('removeAttr', 'target').click();

cy.get('@windowOpen').then((stub) => {
  const url = stub.getCall(0).args[0]
  cy.visit(url)
})
   
    cy.wait(10000);
    cy.xpath(this.elements.lblTechnicalApplication).should('be.visible');
  }

  checkTicketStatus(){
    cy.xpath(this.elements.lblTicketStatus).should("be.visible");
  }
  clickAndCheckTicketPurchase(){

    cy.window().then((win) => {
  cy.stub(win, 'open').as('windowOpen')
})

 cy.xpath(this.elements.btnTicketPurchase).invoke('removeAttr', 'target').click();

cy.get('@windowOpen').then((stub) => {
  const url = stub.getCall(0).args[0]
  cy.visit(url)
})
   
    cy.wait(10000);
    cy.xpath(this.elements.lblMyTickets).should('be.visible');
  }
  clickViewAsTimeline() {
    cy.xpath(this.elements.btnViewAsTimeline).click();
  }

  clickViewAsList() {
    cy.xpath(this.elements.btnViewAsList).click();
  }

  clickTimeSpanLast5Years() {
    cy.xpath(this.elements.btnTimeSpanLast5Years).click();
  }

  clickNewHistoryEntry() {
    cy.xpath(this.elements.btnNewHistoryEntry).click();
  }

  clickEdit() {
    cy.xpath(this.elements.btnEdit).click();
  }

  clickDelete() {
    cy.xpath(this.elements.btnDelete).click();
  }

  selectWorkshopService() {
    cy.xpath(this.elements.chkWorkshopService).click();
  }
  clickShowHistoryButton() {
    cy.xpath(this.elements.btnShowHistory).should("be.visible").click();
  }
  clickdeltebutton() {
    cy.xpath(this.elements.btn_deleteentry).should("be.visible").click();
  }

  /* =====================================================
     ASSERTION METHODS
  ===================================================== */

  verifyVehicleInformationDisplayed() {
    cy.xpath(this.elements.lblVehicleInformation).should("be.visible");
  }

  verifyVinDisplayed() {
    cy.xpath(this.elements.lblVin).should("be.visible");
  }

  verifyHistoryTableDisplayed() {
    cy.xpath(this.elements.tblAosHistory).should("be.visible");
  }

  verifyChartDisplayed() {
    cy.xpath(this.elements.chartHistoryTable).should("be.visible");
  }

  verifyEditPopupDisplayed() {
    cy.xpath(this.elements.lblEditPopupHeading).should("be.visible");
  }

  should_display_vin(expectedVin) {
    cy.xpath(this.elements.lbl_vinnumber)
      .should("be.visible")
      .and("have.text", expectedVin);
  }
  should_VerifyHistoryRow(kms, type) {
    // Get current date in dd/MM/yyyy format
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-GB");

    cy.get("aos-history-table").scrollTo("bottom");

    cy.contains("td", `${kms} Kilometres`)
      .parents("tr")
      .within(() => {
        // Verify Kilometres
        cy.contains("td", `${kms} Kilometres`).should("be.visible");

        // Verify Current Date
        cy.contains("td", formattedDate).should("be.visible");

        // Verify Type (Repair / Service)
        cy.contains("ds-tag", type).should("be.visible");
      });
  }

  should_verify_vehicle_info(expectedVin) {
    // Click Vehicle Information tab
    this.get_element(this.elements.lblVehicleInformation).click();

    // Verify Images
    this.get_element(this.elements.imgVehicle).should("be.visible");

    this.get_element(this.elements.imgVehicleExterior).should("be.visible");

    // Verify VIN
    this.should_display_vin(expectedVin);

    // Verify Vehicle Information Section
    cy.xpath_element(this.elements.lblvehicleinfo).should("be.visible");

    // Verify New History Entry Button
    this.get_element(this.elements.btnNewHistoryEntry).should("be.visible");

    // Verify History Table
    this.verify_history_table_displayed();

    // Verify Chart
    this.verify_chart_displayed();
  }
  click_edit_for_today_service() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;

    cy.log("Looking for date:", formattedDate);

    cy.get("tr.history-row").each(($row) => {
      const rowText = $row.text();

      if (rowText.includes(formattedDate) && rowText.includes("Service")) {
        cy.wrap($row).find(this.elements.btn_editservice).click();

        return false; // break loop
      }
    });
  }
  click_delete_for_today_service() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;

    cy.log("Looking for date:", formattedDate);

    cy.get("tr.history-row").each(($row) => {
      const rowText = $row.text();

      if (rowText.includes(formattedDate) && rowText.includes("Service")) {
        cy.wrap($row).find(this.elements.btn_deleteservice).click();

        return false; // break loop
      }
      cy.wait(2000);
      this.clickdeltebutton();
    });
  }
  update_service_history_comment(comment) {
    cy.wait(50000);
    // Type description
    cy.xpath(this.elements.txt_description)
      .should("be.visible")
      .clear()
      .type(comment);

    // Check the checkbox (only if not already checked)
    cy.xpath(this.elements.checkbox_accept)
      .should("exist")
      .then(($checkbox) => {
        if (!$checkbox.is(":checked")) {
          cy.wrap($checkbox).check({ force: true });
        }
      });

    // Click button
    cy.xpath(this.elements.btn_writehistory).should("be.visible").click();
  }
}
