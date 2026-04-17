export default class WorkOrder_cartPage {
  elements = {
    txt_WorkOrder_Cart: "//span[contains(text(),' Work order ')]",
    txt_cart_title: "//p[contains(text(),' Task order')]",
    txt_conditionbasedService_title:
      "//h3[contains(text(),'Condition Based Services (CBS)')]",
    txt_repairrequirement_title:
      "//h3[contains(text(),'CC message, repair requirements & other activities')]",
    repair_btn_edit: "[data-qa='aos-edit-activity-in-work-order-button']",
    btn_delete: "[data-qa='aos-remove-activity-from-work-order-button']",
    btn_removeall: "[data-qa='remove-all-activities-button']",
    btn_confirm_remove_all: "[data-qa='confirm-remove-all-activities-button']",
    btn_parts_delete_workOrder: "[data-qa='remove-part-from-activity']",
    icon_expand: "//ds-icon[contains(@class,'cursor-pointer')]",
    btn_add_parts_workorder: "[data-qa='work-order-add-parts-button']",
    btn_export_workorder_csv: "[data-qa='export-work-order-csv-button']",
    btn_print_work_order: "[data-qa='open-write-service-history-btn']",
  
  };

  verify_activity_removed(title) {
    cy.contains("[data-qa='activity-name']", title).should("not.exist");
  }

  verify_activity_present_in_workorder(title) {
    cy.contains("[data-qa='activity-name']", title).should("be.visible");
  }

  click_add_parts_workorder() {
    cy.get(this.elements.btn_add_parts_workorder).should("be.visible").click();
  }
  click_export_workorder_csv() {
    cy.get(this.elements.btn_export_workorder_csv).should("be.visible").click();
  }
  click_print_work_order() {
    cy.get(this.elements.btn_print_work_order).should("be.visible").click();
  }

  click_expand_icon() {
    cy.get(this.elements.icon_expand).eq(0).should("be.visible").click();
  }
   
   delete_parts_on_workordercart(){
    cy.get(this.elements.btn_parts_delete_workOrder).click();
    
  }
  confirm_remove_all() {
    cy.get(this.elements.btn_confirm_remove_all).should("be.visible").click();
  }

  click_remove_all_activities() {
    cy.get(this.elements.btn_removeall).should("be.visible").click();
    this.confirm_remove_all();
  }

  clickOnWorkOrder_Cart() {
    cy.xpath(this.elements.txt_WorkOrder_Cart).should("be.visible").click();
  }
  

  verifyWorkOrder_Titlevisibility() {
    cy.get(this.elements.cart_title).should("be.visible");
  }
  verifyCBS_TitleVisibility() {
    cy.get(this.elements.conditionbasedService_title).should("be.visible");
  }
  verify_RepairRequirementTitle_Visibility() {
    cy.get(this.elements.repairrequirement_title).should("be.visible");
  }
  click_edit_activity() {
    cy.get(this.elements.repair_btn_edit).should("be.visible").click();
  }
  click_delete_activity(title) {
    cy.get(this.elements.btn_delete).should("be.visible").click();
  }
  should_delete_all_activities() {
    cy.get("body").then(($body) => {
      const buttons = $body.find(this.elements.btn_delete);

      if (buttons.length > 0) {
        cy.get(this.elements.btn_delete)
          .first()
          .should("be.visible")
          .click({ force: true });

        // Recursively call until no buttons left
        this.should_delete_all_activities();
      }
    });
  }

  should_Check_PartAddedToReqCBS_In_WorkOrder(workOrder, partCount) {
    cy.xpath(
      `//p[   span[contains(text(),'${workOrder}')]   and span[contains(text(),'${partCount}')] ]`,
    ).should("be.visible");
  }
}
