class ReplacementPartsSearch {

    // Locators
    elements = {

        // XPath locators
        lbl_ReplacementPartsSearch: "//p[normalize-space()='Replacement parts search']",
        tab_TechnicalLiterature: "//p[normalize-space()='Technical Literature']",
        input_Description: "//input[@id='activityDescription']",
        btn_Ok: "//*[@data-qa='activity-form-button-submit']",
        txt_headingTaskOrder: "//p[normalize-space()='Task order']",
        txt_activityCreated: "//p[contains(text(),'Activity created']",
        btn_plusIconPopup:"//button[@icon='add']",
        tab_workOrder:"//div[@data-qa='open-work-order-tab']",
        txt_activityName:"//input[@name='activityName']",
        txtOrdername:"//p[@class='text-xs leading-3 font-semibold']",

        // shadow-root elements 
        tab_TechnicalLiterature: ".pps-graphical-tile-text",
        lbl_GraphicalTileText: "p.pps-graphical-tile-text",
        lbl_ProductList: ".article-description",
        btn_addIcons: ".line-item-part-box-wrapper",
        tab_dialogBox: '[role="dialog"]',
        lbl_DialogName: "[role='dialog'] .name",
        txt_ProductTable: ".part-box-header.narrow .part",
        btn_workOrder: "//span[contains(text(),' Work order ')]",
        select_optionForPosition: '//*[@id="activity"]',
        

    }


    // Unified element locator (supports XPath and CSS)
    getElement(locator) {
        if (locator.startsWith('//') || locator.startsWith('(//')) {
            return cy.xpath(locator);
        }
        return cy.get(locator);
    }

    // Actions
    clickReplacementPartsSearch() {
        this.getElement(this.elements.lbl_ReplacementPartsSearch, { timeout: 20000 })
            .should("be.visible")
            .click();
    }


    clickTechnicalLiterature() {

        cy.url().should('include', 'activeTab=parts', { timeout: 30000 })

        cy.get('.pps-graphical-tile-text', {
            timeout: 20000,
            includeShadowDom: true
        })
            .should('have.length.greaterThan', 0)

        cy.contains('.pps-graphical-tile-text', 'Technical Literature', {
            includeShadowDom: true
        })
            .click()
    }
    //Verify Activity Created success message
    should_VerifyActivated_SuccessMessage() {
        cy.xpath(this.elements.txt_activityCreated).should("be.visible");
    }

    // In ReplacementPartsSearch class
    selectedTileName = null;  // Add this at the top of the class

    selectFirstTileUntilProductTableAppears() {
        cy.log(` Clicking first visible tile...`);

        cy.get('.pps-graphical-tile-text', { includeShadowDom: true })
            .filter(':visible')
            .first()
            .then(($tile) => {
                const tileName = $tile.text().trim();

                cy.wrap($tile).click();
                cy.wait(500);

                cy.get('.part-box-header.narrow .part', {
                    includeShadowDom: true,
                    timeout: 1500
                }).then(($headers) => {
                    const found = $headers
                        .toArray()
                        .some(el => el.innerText.trim().toUpperCase() === 'PRODUCT');

                    if (!found) {
                        cy.log(' Product table not found. Retrying...');
                        this.selectFirstTileUntilProductTableAppears();
                    } else {
                        cy.log('Product table found!');
                        cy.wrap(tileName).as('selectedTileName') // Store in class property
                    }
                });
            });
    }

    addProductAndVerifyCart() {
        const descriptionText = "Test Automation";
        cy.viewport(2560, 1440)
        cy.get('@selectedTileName').then((tileName) => {
            // Validate article description contains tile name
            cy.get(this.elements.lbl_ProductList, { includeShadowDom: true })
                .should("contain", tileName);

            // Click the add icon on the first product
            cy.get(this.elements.btn_addIcons, { includeShadowDom: true })
                .first()
                .find('svg[data-id="add"]')
                .click();

            // Validate modal is visible and shows correct name
            cy.get(this.elements.tab_dialogBox, { includeShadowDom: true })
                .should("be.visible");

        cy.get(this.elements.lbl_DialogName, { includeShadowDom: true })
            .should("contain", tileName);

        // Enter description and submit
        // this.getElement(this.elements.input_Description)
        //     .clear()
        //     .type(descriptionText);

        this.getElement(this.elements.btn_Ok)
            .click();
         this.Should_checkWorkOrderIsEnabled();

        // Verify navigation to Task Order
        this.getElement(this.elements.txt_headingTaskOrder)
            .should("be.visible");})
         cy.xpath(this.elements.txtOrdername)
            .should('contain.text', descriptionText)
    
        
        
     }

        should_ClickOn_WorkOrder(){
            cy.xpath(this.elements.tab_workOrder).should("be.visible").click();
        }
        should_AddActivityName(){
            cy.xpath(this.elements.txt_activityName).should("be.visible").clear().type("Testing");
        }

     addMultipleProductAndVerifyCart() {

        const descriptionText = "Automation";
        cy.viewport(2560,1440)
        cy.get('@selectedTileName').then((tileName)=>{
        // Validate article description contains tile name
        cy.get(this.elements.lbl_ProductList, { includeShadowDom: true })
            .should("contain", tileName);

        // Click the add icon on the first product
        cy.get(this.elements.btn_addIcons, { includeShadowDom: true })
            .first()
            .find('svg[data-id="add"]')
            .click();
            

        // Validate modal is visible and shows correct name
        cy.get(this.elements.tab_dialogBox, { includeShadowDom: true })
            .should("be.visible");
        

        cy.get(this.elements.lbl_DialogName, { includeShadowDom: true })
            .should("contain", tileName);

        cy.xpath(this.elements.btn_plusIconPopup).should("be.visible").click();
        this.should_AddActivityName();

            // Enter description and submit
            // this.getElement(this.elements.input_Description)
            //     .clear()
            //     .type(descriptionText);

            this.getElement(this.elements.btn_Ok)
                .click();

            this.Should_checkWorkOrderIsEnabled();

            // Verify navigation to Task Order
            this.getElement(this.elements.txt_headingTaskOrder)
                .should("be.visible");
            cy.xpath(this.elements.txtOrdername)
            .should('contain.text', descriptionText)
        })
    }

    addProductToCBSAndVerifyCart(workOrder) {
        const descriptionText = "Test Automation";
        cy.viewport(2560, 1440)
        cy.get('@selectedTileName').then((tileName) => {
            // Validate article description contains tile name
            cy.get(this.elements.lbl_ProductList, { includeShadowDom: true })
                .should("contain", tileName);

            // Click the add icon on the first product
            cy.get(this.elements.btn_addIcons, { includeShadowDom: true })
                .first()
                .find('svg[data-id="add"]')
                .click();

            // Validate modal is visible and shows correct name
            cy.get(this.elements.tab_dialogBox, { includeShadowDom: true })
                .should("be.visible");

            cy.get(this.elements.lbl_DialogName, { includeShadowDom: true })
                .should("contain", tileName);

            this.selectPositionToWorkOrder(workOrder);

            // Enter description and submit
            // this.getElement(this.elements.input_Description)
            //     .clear()
            //     .type(descriptionText);

            this.getElement(this.elements.btn_Ok)
                .click();

            this.Should_checkWorkOrderIsEnabled();

            // Verify navigation to Task Order
            this.getElement(this.elements.txt_headingTaskOrder)
                .should("be.visible");
        cy.xpath(this.elements.txtOrdername)
            .should('contain.text', descriptionText)
        })
            


    }

    selectPositionToWorkOrder(workOrder) {
        cy.xpath(this.elements.select_optionForPosition).click();
        cy.wait(3000);
        cy.xpath(`//ds-list-item//span[contains(text(),'${workOrder}')]`).click({force:true});
    }

    Should_checkWorkOrderIsEnabled() {
        cy.get('body', { includeShadowDom: true }).then(($body) => {
            if ($body.find('p:contains("Task order")', { includeShadowDom: true }).length > 0) {
                // Task order exists
                cy.log('Task order found')
            } else {
                // Not found → click fallback element
                cy.xpath(this.elements.btn_workOrder).click()
            }
        })
    }


}

export default ReplacementPartsSearch;