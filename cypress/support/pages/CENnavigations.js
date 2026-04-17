/// <reference types="cypress" />

class CENnavigations {
  /*-------- XPATHS/ELEMENT LOCATORS ------------ */
  elements = {
    link_CENnavigationMenu: () =>
      cy.xpath('//footer//a[contains(text(),"Standardised navigation")]'),
    link_AllCENnavigationList: () =>
      cy.xpath(
        "//h1[contains(text(),'Standardised navigation')]//following::div[@class='p-4 hero-title']"
      ),
    link_Userauthentication: () =>
      cy.xpath(
        '//div[contains(text(),"1. User authentication, authorisation and management")]//following::span[contains(text(),"Please select")][1]'
      ),
    link_PaymentofRMI: () =>
      cy.xpath(
        '//div[contains(text()," 2. Payment for RMI")]//following::span[contains(text(),"Please select")][1]'
      ),
    link_Vehicleidentification: () =>
      cy.xpath(
        '//div[contains(text(),"3. Vehicle identification")]//following::span[contains(text(),"Please select")][1]'
      ),
    link_MethodsforRMI: () =>
      cy.xpath(
        '//div[contains(text(),"4. Selection method for RMI")]//following::span[contains(text(),"Please select")][1]'
      ),
    link_Informationpackages: () =>
      cy.xpath(
        '//div[contains(text(),"5. Requesting information packages")]//following::span[contains(text(),"Please select")][1]'
      ),
    link_Vehiclediagnosis: () =>
      cy.xpath(
        '//div[contains(text(),"6. Vehicle diagnosis")]//following::span[contains(text(),"Please select")][1]'
      ),
    link_UpdatingECU: () =>
      cy.xpath(
        '//div[contains(text(),"7. Updating and replacing modules")]//following::span[contains(text(),"Please select")][1]'
      ),
    link_Electronicservicebooklet: () =>
      cy.xpath(
        '//div[contains(text(),"8. Electronic service booklet")]//following::span[contains(text(),"Please select")][1]'
      ),
    link_Assistance: () =>
      cy.xpath(
        '//div[contains(text(),"9. Assistance for repairs, technical support")]//following::span[contains(text(),"Please select")][1]'
      ),
    link_SpecialRMI: () =>
      cy.xpath(
        '//div[contains(text(),"10. Requesting a contact for special RMI")]//following::span[contains(text(),"Please select")][1]'
      ),
    link_Vocationaltraining: () =>
      cy.xpath(
        '//div[contains(text(),"11. Information on training and advanced training courses ")]//following::span[contains(text(),"Please select")][1]'
      ),
    button_back: () =>
      cy.xpath(
        '//ds-button[@class="mb-6 ds-button ds-button--outline has-icon"]'
      ),
  };

  // Xpaths or Locators for section headers used in assertions
  assertElements = {
    txt_UserAuthentication:
      "//h2[contains(text(),'1. User authentication, authorisation and management')]",
    txt_PaymentofRMI: "//h2[contains(text(),' 2. Payment for RMI access ')]",
    txt_VehicleIdentification: "//h2[contains(text(),'3. Vehicle identification')]",
    txt_MethodsforRMI: "//h2[contains(text(),'4. Selection method for RMI')]",
    txt_InformationPackages:
      "//h2[contains(text(),'5. Requesting information packages')]",
    txt_VehicleDiagnosis: "//h2[contains(text(),'6. Vehicle diagnosis')]",
    txt_UpdatingECU: "//h2[contains(text(),'7. Updating and replacing modules')]",
    txt_ElectronicServiceBooklet:
      "//h2[contains(text(),' 8. Electronic service booklet ')]",
    txt_Assistance:
      "//h2[contains(text(),' 9. Assistance for repairs, technical support ')]",
    txt_SpecialRMI:
      "//h2[contains(text(),'10. Requesting a contact for special RMI')]",
    txt_InformationTraining:
      "//h2[contains(text(),' 11. Information on training and advanced training courses ')]",
  };

  /*-------- METHODS ------------ */

  should_Click_CENnavigationMenu() {
    this.elements.link_CENnavigationMenu().click({ force: true });
  }

  // Get all CEN navigation list items, log them, and verify they match the expected list
  should_GetCENnavigationList() {
    const CENnavigationList = [];
    this.elements
      .link_AllCENnavigationList()
      .each(($a) => CENnavigationList.push($a.text()))
      .then(() => {
        cy.log(CENnavigationList.join(", "));
      });
    cy.wrap(CENnavigationList).should("deep.equal", [
      " 1. User authentication, authorisation and management ",
      " 2. Payment for RMI access ",
      " 3. Vehicle identification ",
      " 4. Selection method for RMI ",
      " 5. Requesting information packages ",
      " 6. Vehicle diagnosis ",
      " 7. Updating and replacing modules ",
      " 8. Electronic service booklet ",
      " 9. Assistance for repairs, technical support ",
      " 10. Requesting a contact for special RMI ",
      " 11. Information on training and advanced training courses ",
    ]);

    cy.wait(5000);
  }

  // Click each CEN navigation link and verify the page text
  should_CheckAllCENnavigations() {
    this.should_ClickOnApps(
      this.elements.link_Userauthentication(),
      this.assertElements.txt_UserAuthentication,
      "User authentication, authorisation"
    );
    this.elements.button_back().click();
    this.should_ClickOnApps(
      this.elements.link_PaymentofRMI(),
      this.assertElements.txt_PaymentofRMI,
      "Payment for RMI"
    );
    this.elements.button_back().click();
    this.should_ClickOnApps(
      this.elements.link_Vehicleidentification(),
      this.assertElements.txt_VehicleIdentification,
      "Vehicle identification"
    );
    this.elements.button_back().click();
    this.should_ClickOnApps(
      this.elements.link_MethodsforRMI(),
      this.assertElements.txt_MethodsforRMI,
      "4. Selection method for RMI"
    );
    this.elements.button_back().click();
    this.should_ClickOnApps(
      this.elements.link_Informationpackages(),
      this.assertElements.txt_InformationPackages,
      "5. Requesting information packages"
    );
    this.elements.button_back().click();
    this.should_ClickOnApps(
      this.elements.link_Vehiclediagnosis(),
      this.assertElements.txt_VehicleDiagnosis,
      "Vehicle diagnosis"
    );
    this.elements.button_back().click();
    this.should_ClickOnApps(
      this.elements.link_UpdatingECU(),
      this.assertElements.txt_UpdatingECU,
      "7. Updating and replacing modules"
    );
    this.elements.button_back().click();
    this.should_ClickOnApps(
      this.elements.link_Electronicservicebooklet(),
      this.assertElements.txt_ElectronicServiceBooklet,
      " 8. Electronic service booklet "
    );

    this.elements.button_back().click();
    this.should_ClickOnApps(
      this.elements.link_Assistance(),
      this.assertElements.txt_Assistance,
      "Assistance for repairs, technical support"
    );
    this.elements.button_back().click();
    this.should_ClickOnApps(
      this.elements.link_SpecialRMI(),
      this.assertElements.txt_SpecialRMI,
      "Requesting a contact for special RMI"
    );
    this.elements.button_back().click();
    this.should_ClickOnApps(
      this.elements.link_Vocationaltraining(),
      this.assertElements.txt_InformationTraining,
      " 11. Information on training and advanced training courses "
    );
  }

  // Click the element and verify it contains the expected text
  should_ClickOnApps(element, assertionValue, expectedValue) {
    cy.wait(5000);
    element.click();
    cy.wait(5000);
    cy.xpath(assertionValue).should("contain.text", expectedValue, {
      matchCase: false,
    });
  }
}
export default CENnavigations;
