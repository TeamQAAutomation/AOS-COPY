class BMWAPI {
  // XPaths or Element selectors for BMW API page
  elements = {
    /*-------- XPATHS/ELEMENT LOCATORS ------------ */
    txt_vehicleIdentification: "//div[contains(text(),'Vehicle Identification')]",
    txt_repairAndMaintenance: "//div[contains(text(),'Repair & Maintenance')]",
    txt_partsInformation: "//div[contains(text(),'Parts Information')]",
    txt_technicalCampaignAndMapStatus: "//div[contains(text(),'Technical Campaign & Map Status')]",
    txt_flatRates: "//div[contains(text(),'Flat Rates')]",
    txt_BMWCardata: "//div[contains(text(),'BMW CarData')]",
    txt_RISPortal: "//div[@class='p-card-title' and contains(text(),'RIS Portal ')]",
    txt_smartMaintenance: "//div[contains(text(),'Smart Maintenance')]",
    btn_moreButton: "//span[contains(text(), 'More')]",
    txt_textContainer: "//h2[1] | //h1[1]",
    txt_bmwTextContainer: "//h1[1]",
    frame_id: "#app aos-iframe-page iframe",
    btn_vehicleIdentificationMoreButton:
      "//*[normalize-space()='Vehicle Identification']/following::ds-button[1]//span[normalize-space()='More']",
    link_vehicleIdentificationHyperlink:
      "//a[@href='assets/basic/authentication.yaml']",
    link_smartMaintenanceHyperlink:
      "//a[@href= 'assets/basic/smartMaintenance-spec.yaml']",
    link_technicalCampaignHyperlink:
      "//a[@href = 'assets/basic/technicalcampaignmapstatus-spec.yaml']",
    link_flatRatesHyperlink:
      "//a[@href ='assets/basic/flatrate-spec.yaml']",
    link_bmwAPIAuthenticationHyperlink:
      "//a[@href='assets/basic/authentication.yaml']",
    txt_vehicleIdenticationDescription: "//*[contains(text(),'Vehicle Identification')]//..//following-sibling::div[@class='description']",
    txt_bmwAPIAuthenticationDescription: "//*[contains(text(),'BMW API Authentication')]//..//following-sibling::div[@class='description']",
    txt_smartMaintenanceDescription : "//*[contains(text(),'Smart Maintenance')]//..//following-sibling::div[@class='description']",
    txt_flatRatesDescription: "//*[contains(text(),'Flat Rates')]//..//following-sibling::div[@class='description']",
    txt_repairAndMaintenanceBMWAPIDescription:
      "//*[contains(text(),'Repair & Maintenance')]//..//following-sibling::div[@class='description']",
    txt_technicalCampaignMapStatusDescription:
      "//*[contains(text(),'Technical Campaign & Map Status')]//..//following-sibling::div[@class='description']",
    btn_AuthorizeUnlockButton:
      "//button[@class='btn authorize unlocked']/span[contains(text(),'Authorize')]",
    txt_availableAuthorizationText:
      "//div[@class='modal-ux-header']/h3[contains(text(),'Available authorizations')]",
    btn_authorizeButtonApi:
      "//*[contains(text(),'apiKey')]//ancestor::div[2]//following-sibling::div//button[contains(text(),'Authorize')]",
    btn_closeButtonApi:
      "//*[contains(text(),'apiKey')]//ancestor::div[2]//following-sibling::div//button[contains(text(),'Close')]",
    btn_AuthorizeButtonBearer:
      "//*[contains(text(),'(http, Bearer)')]//parent::div//following-sibling::div//button[contains(text(),'Authorize')]",
    btn_closeButtonBearer:
      "//*[contains(text(),'(http, Bearer)')]//parent::div//following-sibling::div//button[contains(text(),'Close')]",
    txt_apiKeyPopup: "//h4/code[contains(text(),'apiKey')]",
    input_apiKeyInputField: "//input[@id='api_key_value']",
    input_bearerInputField: "//input[@id='auth-bearer-value']",
    txt_codedTextapi: "//label[@for='api_key_value']//following-sibling::code",
    txt_codedTextBearer: "//label[@for='auth-bearer-value']//following-sibling::code",
    btn_crossIcon: "//button[@class='close-modal']",
    btn_AuthorizelockedButton: "//button[@class='btn authorize locked']",
    txt_VehicleOptions: " //h3[@class='opblock-tag no-desc']",
    btn_LogoutButtonPopup: "//button[@class='btn modal-btn auth button' and contains(text(),'Logout')]",
    txt_vehicleIdentificationschemas: 
     "//*[text()='Vehicle Identification']//ancestor::div[@class='information-container wrapper']//following-sibling::div//span[contains(text(),'Schemas')]",
    txt_bmwAPIAuthenticationSchemas: "//div[@id='authentication-information']//span[contains(text(),'Schemas')]",
    txt_flatRatesSchemas: "//*[text()='Flat Rates']//ancestor::div[@class='information-container wrapper']//following-sibling::div//span[contains(text(),'Schemas')]",
    txt_smartMaintenanceSchemas : "//*[text()='Smart Maintenance']//ancestor::div[@class='information-container wrapper']//following-sibling::div//span[contains(text(),'Schemas')]",
    txt_repairAndMaintenanceSchemas: 
     "//*[text()='Repair & Maintenance']//ancestor::div[@class='information-container wrapper']//following-sibling::div//span[contains(text(),'Schemas')]",
    txt_technicalCampaignAndMapStatusSchemas: 
     "//*[text()='Technical Campaign & Map Status']//ancestor::div[@class='information-container wrapper']//following-sibling::div//span[contains(text(),'Schemas')]",
    btn_AuthenticationDropdown: "//h3[@id='operations-tag-Authentication']/button",
    txt_bmwAPIAuthentication: "//h2[@class='title' and contains(text(),'BMW API Authentication')]",
    btn_VehicleIdentificationServerDropdown: "//div[@id='swagger-ui']//select",
    btn_BMWAPIAuthenticationServerDropdown: "//div[@id='authentication-information']//select",
    btn_repairAndMaintenanceMoreButton:
      "//*[normalize-space()='Repair & Maintenance']//..//span[normalize-space()='More']",
    btn_PartsinfoMoreButton:
      "//*[normalize-space()='Parts Information']//..//span[normalize-space()='More']",
    btn_technicalCampaignMoreButton:
      "//*[normalize-space()='Technical Campaign & Map Status']//..//span[normalize-space()='More']",
    btn_flatRatesMoreButton:
      "//*[normalize-space()='Flat Rates']//..//span[normalize-space()='More']",
    btn_bmwCarDataMoreButton:
      "//*[normalize-space()='BMW CarData']//..//span[normalize-space()='More']",
    txt_flatRateOption: "//span[contains(text(),'Flatrates')]",
    txt_smartMaintenanceOption: "//h2[contains(text(),'Smart Maintenance')]",
    btn_bmwCarDataMoreButtonguest:
      "//*[normalize-space()='BMW CarData']//..//span[normalize-space()='More']",
    txt_bmwCarDataHeadline:
      "//div[@class='contain']//h1[contains(text(),'BMW CarData')]",
    txt_startingtheApplication:
      "//h2[@class='sub-heading' and contains(text(),'Starting the application.')]",
    txt_environmentConfigurationText:
      "//h3[contains(text(),'Environment configuration')]",
    txt_importantInfoText:
      "//div[@class='desc-container']/h3[contains(text(),'Important information')]",
    txt_bmwCarDataDescription:
      "//p[@class='translated-content']/p[contains(text(),'Welcome to BMW CarData')]",
    link_Start : "//a[contains(text(),'Start')]",
    link_bmwCarDataStartLink: "//a[@id='startlink' and @class='button']",
    link_RISPortalMoreButton: "//a[@href='https://aos-q2.bmwgroup.com/applications/ris-portal']",
    btn_smartMaintenanceMoreButton:
      "//*[normalize-space()='Smart Maintenance']//..//span[normalize-space()='More']",
    link_repairMaintenanceHyperlink:
      "//a[@href='assets/basic/repairmaintenance-spec.yaml']",
    link_partsInformationHyperlink:
      "//a[@href='/basic/api/specification/partsinformation-spec.yaml']",
    txt_Risportalheadline:
      "//*[contains(text(),' Retail Integration Service Portal ')]",
  };
  expectedTexts = [
    "Vehicle Identification",
    "Repair & Maintenance",
    "Parts Information",
    "Technical Campaign & Map Status",
    "Flat Rates",
    "BMW CarData",
    "RIS Portal",
    "Smart Maintenance",
  ];
  vehicleOptionsList = [
    "Vehicle Basic",
    "Vehicle Options",
    "Vehicle Type Research",
  ];
  repairAndMaintenanceList = [
    "Technical Document",
    "Measures",
    "Maintenance Schedule",
  ];
  technicalCampaignOptions = ["Navigation Map Status", "Technical Campaign"];

  /*-------- METHODS ------------ */

  // Verify Schemas is displaying
  should_Check_Vehicle_Identification_Schemas_Displayed() {
    cy.xpath(this.elements.txt_vehicleIdentificationschemas).scrollIntoView().should("be.visible");
  }

  should_Check_SmartMaintenance_Schemas_Displayed(){
    cy.xpath(this.elements.txt_smartMaintenanceSchemas).scrollIntoView().should("be.visible");
  }

  // Verify BMWCar data descrition is visible
  should_Check_BMWCarData_Description() {
    cy.xpath(this.elements.txt_bmwCarDataDescription).scrollIntoView().should("be.visible");
  }

  // Click on  BMWCar data Start link
  should_Click_BMWCarData_StartLink() {
    cy.xpath(this.elements.link_Start).invoke("attr", "target", "_self");
    cy.xpath(this.elements.link_Start).should("be.visible").click({ force: true });
  }

  should_Check_FlateRatesSchemas_Displayed(){
    cy.xpath(this.elements.txt_flatRatesSchemas).scrollIntoView().should("be.visible");
  }

  should_Check_RepairAndMaintenanceSchemas_Displayed() {
    cy.xpath(this.elements.txt_repairAndMaintenanceSchemas).scrollIntoView().should("be.visible");
  }

  should_Check_TechnicalCampaignMapStatusSchemas_Displayed() {
    cy.xpath(this.elements.txt_technicalCampaignAndMapStatusSchemas).scrollIntoView().should("be.visible");
  }

  should_Check_BMWAPIAuthenticationSchemas_Displayed() {
    cy.xpath(this.elements.txt_bmwAPIAuthenticationSchemas).scrollIntoView().should("be.visible");
  }

  should_Check_AuthenticationDropdown_Displayed() {
    cy.xpath(this.elements.btn_AuthenticationDropdown).scrollIntoView().should("be.visible");
  }

  should_Check_bmwAPIAuthentication_Text() {
    cy.xpath(this.elements.txt_bmwAPIAuthentication).scrollIntoView().should("be.visible");
  }

  should_Click_AuthenticationDropdown() {
    cy.xpath(this.elements.btn_AuthenticationDropdown)
      .scrollIntoView().should("be.visible").click({ force: true });
  }

  should_Click_VehicleIdentificationSchemas() {
    cy.xpath(this.elements.txt_vehicleIdentificationschemas)
      .scrollIntoView().should("be.visible").click({ force: true });
  }

  should_Click_SmartMaintenanceSchemas() {
    cy.xpath(this.elements.txt_smartMaintenanceSchemas)
    .scrollIntoView().should("be.visible").click({force: true});
  }

  should_Click_RepairAndMaintenanceSchemas() {
    cy.xpath(this.elements.txt_repairAndMaintenanceSchemas)
      .scrollIntoView().should("be.visible").click({ force: true });
  }

  should_Click_FlatRatesSchemas() {
    cy.xpath(this.elements.txt_flatRatesSchemas)
      .scrollIntoView().should("be.visible").click({ force: true });
  }

  should_Click_TechnicalCampaignMapStatusSchemas() {
    cy.xpath(this.elements.txt_technicalCampaignAndMapStatusSchemas)
      .scrollIntoView().should("be.visible").click({ force: true });
  }

  should_Click_BMWAPIVehicleAuthenticationSchemas() {
    cy.xpath(this.elements.txt_bmwAPIAuthenticationSchemas)
      .scrollIntoView().should("be.visible").click({ force: true });
  }

  should_Check_VehicleOptions() {
    this.vehicleOptionsList.forEach((option) => {
      const xpath = `//h3[@data-tag='${option}']`;
      cy.xpath(xpath).should("be.visible");
    });
  }

  should_Check_RepairAndMaintenanceOptions() {
    this.repairAndMaintenanceList.forEach((option) => {
      const xpath = `//h3[@data-tag='${option}']`;
      cy.xpath(xpath).should("be.visible");
    });
  }

  should_Check_TechnicalCampaignOptions() {
    this.technicalCampaignOptions.forEach((option) => {
      const xpath = `//h3[@data-tag='${option}']`;
      cy.xpath(xpath).should("be.visible");
    });
  }

  should_Check_FlatRateOptions() {
    cy.xpath(this.elements.txt_flatRateOption).should("be.visible");
  }

  should_Check_SmartMaintenanceOptions() {
    cy.xpath(this.elements.txt_smartMaintenanceOption).scrollIntoView().should("be.visible");
  }

  // Verify BMW Car Data page texts
  should_Verify_Text_On_BMWCarData() {
    cy.xpath(this.elements.txt_bmwCarDataHeadline).scrollIntoView().should("be.visible");
    cy.log("BMW headline displayed");
    cy.xpath(this.elements.txt_startingtheApplication).scrollIntoView().should("be.visible");
    cy.wait(10000);
    cy.xpath(this.elements.txt_importantInfoText).scrollIntoView().should("be.visible");
  }

  should_Verify_Texts_On_RISportal() {
    cy.xpath(this.elements.txt_Risportalheadline).should("be.visible");
  }

  should_Click_CrossIconPopup() {
    cy.xpath(this.elements.btn_crossIcon)
      .scrollIntoView().should("be.visible").click({ force: true });
  }

  should_Click_VehicleIdentification() {
    cy.xpath(this.elements.btn_vehicleIdentificationMoreButton)
      .scrollIntoView().click({ force: true });
  }

  should_Click_RepairAndMaintenance() {
    cy.xpath(this.elements.btn_repairAndMaintenanceMoreButton).click({
      force: true,
    });
  }

  should_Click_partsinfo() {
    cy.xpath(this.elements.btn_PartsinfoMoreButton).click({ force: true });
  }

  should_Click_TechnicalMaintenanceMapStatus() {
    cy.xpath(this.elements.btn_technicalCampaignMoreButton).click({ force: true });
  }

  should_Click_FlatRates() {
    cy.xpath(this.elements.btn_flatRatesMoreButton).click({ force: true });
  }
  // Click BMW CarData link and verify content based on user type
  should_Click_BMWCardata(user) {
    cy.xpath(this.elements.btn_bmwCarDataMoreButtonguest)
      .click({ force: true });
      //.scrollIntoView();
    cy.wait(15000);
    // Verify text for Guest user
    if (user === "||Guest_User||") {
      cy.xpath(this.elements.txt_bmwCarDataDescription).contains(
        "Welcome to BMW CarData"
      );
    }
    // Verify text for Legal user
    else {
      cy.xpath(this.elements.txt_bmwCarDataHeadline).contains("BMW CarData");
      cy.xpath(this.elements.txt_startingtheApplication).contains(
        "Starting the application"
      );
    }
  }

  should_Click_SmartMaintenance() {
    cy.xpath(this.elements.btn_smartMaintenanceMoreButton).click({ force: true });
  }

  should_Click_RISPortal() {
    cy.xpath(this.elements.link_RISPortalMoreButton).click({ force: true });
    cy.wait(4000);
  }

  should_Click_LogoutPopup() {
    cy.xpath(this.elements.btn_LogoutButtonPopup).click({ force: true });
  }

  should_Check_VehicleIdentificationHyperlink() {
    cy.xpath(this.elements.link_vehicleIdentificationHyperlink)
      .scrollIntoView().should("be.visible");
  }

  should_Check_RepairAndMaintenanceHyperlink() {
    cy.xpath(this.elements.link_repairMaintenanceHyperlink)
      .scrollIntoView().should("be.visible");
  }

  should_Check_partsinfoHyperlink() {
    cy.xpath(this.elements.link_partsInformationHyperlink)
      .scrollIntoView().should("be.visible");
  }

  should_Check_TechnicalCampaignHyperlink() {
    cy.xpath(this.elements.link_technicalCampaignHyperlink).should("be.visible");
  }

  should_Check_FlatRatesHyperlink() {
    cy.xpath(this.elements.link_flatRatesHyperlink)
      .scrollIntoView().should("be.visible");
  }

  should_Check_BMWAPIAuthenticationHyperlink() {
    cy.xpath(this.elements.link_bmwAPIAuthenticationHyperlink)
      .scrollIntoView().should("be.visible");
  }

  should_Click_BMWAPIAuthenticationHyperlink() {
    cy.xpath(this.elements.link_bmwAPIAuthenticationHyperlink)
      .scrollIntoView().should("be.visible").click({ force: true });
  }

  should_Check_SmartMaintenanceHyperlink() {
    cy.xpath(this.elements.link_smartMaintenanceHyperlink)
      .scrollIntoView().should("be.visible");
    cy.wait(5000);
  }
  // Validate Vehicle Identification server dropdown options
  should_Validate_VehicleIdentification_ServerDropdownOptions() {
    cy.xpath(this.elements.btn_VehicleIdentificationServerDropdown).within(() => {
      cy.get("option").then((options) => {
        // Validate the first option
        expect(options[0].value).to.equal(
          "https://apim.bmwgroup.com/aftersales"
        );
        expect(options[0].innerText.trim()).to.equal(
          "https://apim.bmwgroup.com/aftersales - Production Environment"
        );
      });
    });
  }
  // Validate Vehicle Identification server dropdown options
  should_Validate_VehicleIdentification_ServerDropdownOptions2() {
    cy.xpath(this.elements.btn_BMWAPIAuthenticationServerDropdown).within(() => {
      cy.get("option").then((options) => {
        // Validate the first option
        expect(options[0].value).to.equal("https://auth.bmwgroup.com/");
        expect(options[0].innerText.trim()).to.equal(
          "https://auth.bmwgroup.com/ - Production Environment"
        );
      });
    });
  }
  // Validate BMW API Authentication server dropdown options
  should_Validate_BMWAPI_ServerDropdownOptions() {
    cy.xpath(this.elements.btn_BMWAPIAuthenticationServerDropdown).within(() => {
      cy.get("option").then((options) => {
        // Validate the first option
        expect(options[0].value).to.equal("https://auth.bmwgroup.com/");
        expect(options[0].innerText.trim()).to.equal(
          "https://auth.bmwgroup.com/ - Production Environment"
        );
      });
    });
  }
  // Validate Repair and Maintenance server dropdown options
  should_Validate_RepairAndMaintenanceServer_DropdownOptions() {
    cy.xpath(this.elements.btn_VehicleIdentificationServerDropdown).within(() => {
      cy.get("option").then((options) => {
        // Validate the first option
        expect(options[0].value).to.equal(
          "https://apim.bmwgroup.com/aftersales"
        );
        expect(options[0].innerText.trim()).to.equal(
          "https://apim.bmwgroup.com/aftersales - Production Environment"
        );
      });
    });
  }
  // Validate Flat Rates server dropdown options
  should_Validate_FlatRatesServer_DropdownOptions() {
    cy.xpath(this.elements.btn_VehicleIdentificationServerDropdown).within(() => {
      cy.get("option").then((options) => {
        // Validate the first option
        expect(options[0].value).to.equal(
          "https://apim.bmwgroup.com/aftersales/eu-858-2018"
        );
        expect(options[0].innerText.trim()).to.equal(
          "https://apim.bmwgroup.com/aftersales/eu-858-2018 - Production Environment"
        );
      });
    });
  }

  should_Check_AutorizeUnlockbutton() {
    cy.xpath(this.elements.btn_AuthorizeUnlockButton)
      .scrollIntoView().should("be.visible");
  }

  should_check_LockedAuthorizeButton() {
    cy.xpath(this.elements.btn_AuthorizelockedButton)
      .scrollIntoView().should("be.visible");
  }

  should_Click_LockedAuthorizeButton() {
    cy.xpath(this.elements.btn_AuthorizelockedButton)
      .scrollIntoView().should("be.visible").click({ force: true });
  }

  should_Click_AuthorizeUnlockButton() {
    cy.xpath(this.elements.btn_AuthorizeUnlockButton)
      .scrollIntoView().should("be.visible").click({ force: true });
  }
  // Enter API key, authorize, and verify the encoded text is displayed
  should_EntervalueAndValidateAPIInputField() {
    cy.xpath(this.elements.input_apiKeyInputField).type("1234");
    cy.xpath(this.elements.btn_authorizeButtonApi).should("be.visible")
      .click({ force: true });
    // Verify that encoded text (with **) is displayed
    cy.xpath(this.elements.txt_codedTextapi).should("be.visible").invoke("text").then((text) => {
        expect(text.trim()).to.include("**");
      });
    // Click logout and close buttons
    cy.xpath(this.elements.btn_LogoutButtonPopup).click({ force: true });
    cy.xpath(this.elements.btn_closeButtonApi)
      .should("be.visible").click({ force: true });
    }
  // Enter Bearer token, authorize, and verify the encoded text is displayed
  should_EntervalueAndValidateBearerInputField() {
    cy.xpath(this.elements.btn_AuthorizeUnlockButton).click({ force: true });

    cy.xpath(this.elements.input_bearerInputField).type("1234");
    cy.xpath(this.elements.btn_AuthorizeButtonBearer).click({ force: true });
    // Verify that encoded text (with **) is displayed
    cy.xpath(this.elements.txt_codedTextBearer)
      .scrollIntoView().should("be.visible").invoke("text").then((text) => {
        expect(text.trim()).to.include("**");
      });
  }
  // Check that all texts/buttons in the Authorization popup are visible and functional
  should_Check_AuthorizationPopup() {
    cy.xpath(this.elements.txt_availableAuthorizationText)
      .scrollIntoView().should("be.visible");
    cy.xpath(this.elements.btn_authorizeButtonApi)
      .scrollIntoView().should("be.visible");
    cy.xpath(this.elements.btn_closeButtonApi)
      .scrollIntoView().should("be.visible");
    cy.xpath(this.elements.txt_apiKeyPopup)
      .scrollIntoView().should("be.visible");
    cy.xpath(this.elements.input_apiKeyInputField)
      .scrollIntoView().should("be.visible")
      .should("not.be.disabled").clear().type("Test Input")
      .should("have.value", "Test Input").clear();
    cy.xpath(this.elements.btn_crossIcon).click({ force: true });
  }

  should_Check_VehicleIdentification_Description() {
    cy.xpath(this.elements.txt_vehicleIdenticationDescription)
      .scrollIntoView().should("be.visible");
  }

  should_Check_SmartMaintenance_Description() {
    cy.xpath(this.elements.txt_smartMaintenanceDescription)
      .scrollIntoView().should("be.visible");
  }

  should_Check_BMWAPIAuthentication_Description() {
    cy.xpath(this.elements.txt_bmwAPIAuthenticationDescription)
      .scrollIntoView().should("be.visible");
  }

  should_Check_RepairAndMaintenanceBMWAPIAuthentication_Description() {
    cy.xpath(this.elements.txt_repairAndMaintenanceBMWAPIDescription)
      .scrollIntoView().should("be.visible");
  }

  should_Check_RepairAndMaintenance_Description() {
    cy.xpath(this.elements.txt_repairAndMaintenanceBMWAPIDescription)
      .scrollIntoView().should("be.visible");
  }

  should_Check_TechnicalMaintenance_Description() {
    cy.xpath(this.elements.txt_technicalCampaignMapStatusDescription)
      .scrollIntoView().should("be.visible");
  }

  should_Check_FlatRatesDescription() {
    cy.xpath(this.elements.txt_flatRatesDescription)
      .scrollIntoView().should("be.visible");
  }

  should_Download_VehicleIdentification_Yaml() {
    cy.xpath(this.elements.link_vehicleIdentificationHyperlink)
      .scrollIntoView().should("be.visible").click({ force: true });
  }
  should_Download_SmartMaintenance_Yaml() {
    cy.xpath(this.elements.link_smartMaintenanceHyperlink)
      .scrollIntoView().should("be.visible").click({ force: true });
  }
  should_Download_RepairAndMaintenance_Yaml() {
    cy.xpath(this.elements.link_repairMaintenanceHyperlink).click({ force: true });
    cy.wait(6000);
  }
  should_Download_TechnicalCampaignAndMaintenace_Yaml() {
    cy.xpath(this.elements.link_technicalCampaignHyperlink).click({ force: true });
  }
  should_Download_FlatRate_Yaml() {
    cy.xpath(this.elements.link_flatRatesHyperlink).click({ force: true });
  }
  //Verify that all BMW API sections are visible on the page and log their text values
  should_Check_All_BMWAPIs() {
    cy.xpath(this.elements.txt_vehicleIdentification).should("be.visible").invoke("text").then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.txt_repairAndMaintenance).should("be.visible").invoke("text").then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.txt_partsInformation).should("be.visible").invoke("text").then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.txt_technicalCampaignAndMapStatus)
      .should("be.visible").invoke("text").then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.txt_flatRates).should("be.visible").invoke("text").then((text) => {
        cy.log(text);
      });

    cy.xpath(this.elements.txt_BMWCardata).should("be.visible").invoke("text").then((text) => {
        cy.log(text);
      });

    cy.xpath(this.elements.txt_smartMaintenance).should("be.visible").invoke("text").then((text) => {
        cy.log(text);
      });
  }
  should_Check_MoreButton() {
    cy.xpath(this.elements.btn_moreButton).should("have.lengthOf", 7);
  }
  //Click the app, check the expected text, then go back
  should_Click_On_All_Apps(element, assertionValue, expectedValue) {
    // Alias the assertion element and verify its text
    cy.xpath(element)
      .as("targetButton") // Alias for the button to click
      .click({ force: true });
    cy.wait(20000);

    cy.xpath(assertionValue)
      .should("be.visible")
      .as("textContainer") // Alias for the text container
      .invoke("text")
      .should("include", expectedValue);

    cy.go("back");
    cy.wait(10000);
  }
  // Click each "More" button and verify the related page text
  should_Click_All_MoreButtons_And_Verify_Text(user) {
    this.should_Click_On_All_Apps(
      this.elements.btn_vehicleIdentificationMoreButton,
      this.elements.txt_textContainer,
      "Vehicle Identification"
    );
    this.should_Click_On_All_Apps(
      this.elements.btn_repairAndMaintenanceMoreButton,
      this.elements.txt_textContainer,
      "Repair & Maintenance"
    );
    this.should_Click_On_All_Apps(
      this.elements.btn_technicalCampaignMoreButton,
      this.elements.txt_textContainer,
      "Technical Campaign & Map Status"
    );
    this.should_Click_On_All_Apps(
      this.elements.btn_flatRatesMoreButton,
      this.elements.txt_textContainer,
      "Flat Rates"
    );
    this.should_Click_On_All_Apps(
      this.elements.btn_smartMaintenanceMoreButton,
      this.elements.txt_textContainer,
      "Smart Maintenance"
    );

    Cypress.config("pageLoadTimeout");
    // If user is a guest user, visit the BMW CarData public home page and verify the welcome message
    if (user == "||Guest_User||") {
      cy.visit({
        url: "https://bmwcardata-e2e.bmwgroup.com/thirdparty/public/home",
        headers: {
          "Accept-Encoding": "*",
          "Content-Type": "text/html",
          "Accept-Ranges": "bytes",
          "Strict-Transport-Security": "includeSubDomains",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "operationId, timestamp, X-rgw-applicationid",
          Vary: "Accept-Encoding",
        },
        method: "GET",
        Connection: "Keep-Alive",
        retryOnNetworkFailure: true,
        retryOnStatusCodeFailure: false,
        timeout: 90000,
        failOnStatusCode: false,
        onLoad: () => {
          cy.url().should("include", "home");
        },
      });

      cy.contains("h1", "Welcome to BMW CarData");
    }
    //If user is Legal user then click on "BMW CarData" and verify the related text
    else {
      this.should_Click_On_All_Apps(
        this.elements.btn_bmwCarDataMoreButton,
        this.elements.txt_textContainer,
        "BMW CarData"
      );
    }
  }
}

export default BMWAPI;
