class WorkOrderStatusPage {
  //LOCATORS
  elements = {
    /* ---------- Work Order Status section ---------- */
    lbl_WorkOrderStatus: "//p[normalize-space()='Work order status']",
    heading_WorkOrderStatus: "//h2[normalize-space()='Work order status']",
    heading_Requirements: "//div//h3[contains(text(),'Requirements')]",
    link_Identification: "//div//p[contains(text(),'Identification')]",
    lblAddedToWorkOrder: "//div//p[contains(text(),' Added to work order ')]",
    lblOrderParts: "//div//h3[contains(text(),'Order parts')]",
    link_lblPartsSelection: "//div//p[contains(text(),'Parts selection')]",
    lblTransferredToPartsLink24:
      "//div//p[contains(text(),'Transferred to Partslink24')]",
    lblOrderBeingProcessed:
      "//div//p[contains(text(),'Order being processed')]",
    btnGoToShoppingBasket: "//*[contains(text(),'Go to shopping basket')]",
    btnOrderOverview: "//*[contains(text(),'Order overview')]",
    lblVehicleHistory: "//div//h3[contains(text(),'Vehicle history')]",
    lblServiceHistories_HyperLink:
      "//div//p[contains(text(),'Service histories')]",
    lblRepairHistory_HyperLink: "//div//p[contains(text(),'Repair history')]",
    lblDashboardWorkOrderStatus:
      "//div//p[contains(text(),'dashboard.work-order-status.activity-media.label')]",
    lblFinalisation: "//div//h3[contains(text(),'Finalisation')]",
    lblWriteHistory:
      "//div//p[contains(text(),'Write history back into the vehicle')]",
    btnOpenIsta: "//a[@data-qa='open-ista-button']",
    btnCloseWorkOrder: "//*[contains(text(),'Close work order')]",
    btncloseworkorderpopup:
      "button[data-qa='finalize-work-order-button']",
      
    lbl_VehicleRequirements: "//p[normalize-space()='Vehicle requirements']",
    lbl_ReplacementPartsSearch:
      "//p[normalize-space()='Replacement parts search']",
    heading_WriteVehicleHistory:
      "//div//h2[contains(text(),'Write vehicle history')]",
    heading_PreFilledFromWorkOrder:
      "//div//p[contains(text(),'Pre-filled from the work order')]",
    heading_NoRequirements: "//div[contains(text(),'No requirements')]",
    heading_ServiceRequirementsAndRepairRequirements:
      "//div//h2[contains(text(),'Service requirements & repair requirements')]",
    btn_ToDealerSearch:
      "//*[contains(text(),'To be able to send an order, please select a dealer first.')]",

    heading_FinalizeWorkOrder:
      "//div//h2[contains(text(),'Finalize work order')]",
    text_WorkOrderNote:
      "//div//span[contains(text(),'Please make sure that the service history entry in the vehicle has been updated.')]",

    txtDealerMessage: "p.copytext-grey",
    btnToDealerSearch: "button.btn.btn-primary",
    linkLogout: "a[href*='logout']",
    lbl_success:
      "//p[normalize-space()='The work order for this vehicle is complete.']",
    lbl_campaignnumber:
      "//h3[normalize-space()='Campaign number']/following-sibling::p[1]",
  };

  // Unified element locator (supports XPath and CSS)
  getElement(locator) {
    if (locator.startsWith("//") || locator.startsWith("(//")) {
      return cy.xpath(locator);
    }
    return cy.get(locator);
  }

  // ACTION METHODS

  // Click on Work Order Status tab
  clickWorkOrderStatus() {
    this.getElement(this.elements.lbl_WorkOrderStatus)
      .should("be.visible")
      .click();
  }

  // Click on Identification Hyperlink
  clickIdentificationLink() {
    this.getElement(this.elements.link_Identification).click();

    this.getElement(this.elements.lbl_VehicleRequirements).should(
      "have.attr",
      "aria-selected",
      "true",
    );

    this.getElement(
      this.elements.heading_ServiceRequirementsAndRepairRequirements,
    ).should("be.visible");
  }

  getSelectionStatus(labelText) {
    return cy
      .contains("aos-work-order-status-list-item", labelText)
      .find("svg[data-id]")
      .first()
      .invoke("attr", "data-id")
      .then((val) => val?.trim());
  }

  // Click on Parts Selection Hyperlink
  clickPartsSelectionLink() {
    this.getElement(this.elements.link_lblPartsSelection).click();

    cy.contains('[role="tab"]', "Replacement parts search").should(
      "have.attr",
      "aria-selected",
      "true",
    );

    cy.contains("Technical Literature", { timeout: 10000 }).should(
      "be.visible",
    );
  }

  // Click on Go To Shopping Basket button
  clickGoToShoppingBasket() {
    this.getElement(this.elements.btnGoToShoppingBasket).click();

    this.getElement(this.elements.txtDealerMessage).should("be.visible");

    this.getElement(this.elements.btnToDealerSearch).should("be.visible");

    this.getElement(this.elements.linkLogout).should("be.visible");
  }

  // Click on Service Histories Hyperlink
  clickServiceHistoriesLink() {
    this.getElement(this.elements.lblServiceHistories_HyperLink).click();

    cy.contains('[role="tab"]', "Vehicle requirements").should(
      "have.attr",
      "aria-selected",
      "true",
    );

    cy.contains("Condition Based Services (CBS)", { timeout: 10000 }).should(
      "be.visible",
    );
  }

  // Click on Repair History link
  clickRepairHistoryLink() {
    this.getElement(this.elements.lblRepairHistory_HyperLink).click();

    cy.contains('[role="tab"]', "Write history").should(
      "have.attr",
      "aria-selected",
      "true",
    );

    this.getElement(this.elements.heading_WriteVehicleHistory).should(
      "be.visible",
    );

    this.getElement(this.elements.heading_PreFilledFromWorkOrder).should(
      "be.visible",
    );
  }

  // Click on Open ISTA and verify URL
  clickOpenIstaAndVerifyUrl(expectedUrl) {
    this.getElement(this.elements.btnOpenIsta)
      .invoke("removeAttr", "target")
      .click();

    cy.url({ timeout: 20000 }).should("include", expectedUrl);
  }

  // Click Close Work Order
  clickCloseWorkOrder() {
    cy.xpath(this.elements.btnCloseWorkOrder).click();

    cy.xpath(this.elements.heading_FinalizeWorkOrder).should("be.visible");
  }

  /* =====================================================
        ASSERTION METHODS
     ===================================================== */

  verifyWorkOrderStatus_lbl_Displayed() {
    this.getElement(this.elements.lbl_WorkOrderStatus).should("be.visible");
  }

  verifyWorkOrderStatus_header_Displayed() {
    this.getElement(this.elements.heading_WorkOrderStatus).should("be.visible");
  }

  verifyRequirements_header() {
    this.getElement(this.elements.heading_Requirements).should("be.visible");
  }

  verifyLblAddedToWorkOrder() {
    this.getElement(this.elements.lblAddedToWorkOrder).should("be.visible");
  }

  verifyLblOrderParts() {
    this.getElement(this.elements.lblOrderParts).should("be.visible");
  }

  verifyLblTransferredToPartsLink24() {
    this.getElement(this.elements.lblTransferredToPartsLink24).should(
      "be.visible",
    );
  }

  verifyLblOrderBeingProcessed() {
    this.getElement(this.elements.lblOrderBeingProcessed).should("be.visible");
  }

  verifyLblVehicleHistory() {
    this.getElement(this.elements.lblVehicleHistory).should("be.visible");
  }

  verifyLblDashboardWorkOrderStatus() {
    this.getElement(this.elements.lblDashboardWorkOrderStatus).should(
      "be.visible",
    );
  }

  verifyLblFinalisation() {
    this.getElement(this.elements.lblFinalisation).should("be.visible");
  }

  verifyLblWriteHistory() {
    this.getElement(this.elements.lblWriteHistory).should("be.visible");
  }

  pressEnter() {
    cy.focused().type("{enter}");
  }
  accept_finalworkorder() {
    cy.get(this.elements.btncloseworkorderpopup).click();
  }
  should_verify_workorder_complete_message() {
    cy.xpath(this.elements.lbl_success, { timeout: 20000 }).should(
      "be.visible",
    );
  }

  should_close_workorder() {
    this.clickWorkOrderStatus();
    this.clickCloseWorkOrder();
    cy.wait(5000);
    this.accept_finalworkorder();

    this.should_verify_workorder_complete_message();
  }
}

export default WorkOrderStatusPage;
