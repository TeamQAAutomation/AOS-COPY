import Login from "../pages/Login_Page";
class registration {
  user_data = {
    Dealer_Dropdown: "Independent workshop/dealer",
    Dealer_Drop_Down_value: "FREE_OUTLET",
    Country_Dropdown: "Germany",
    Country_Dropdown_Value: "DE",
    Organization_name: "test123",
    Street_address: "123 Road no 7",
    Postal_Code: "65434",
    organization_city: "Munich",
    Salutation: "Mr",
    Salutaion_Value: "MALE",
    Last_name: "testlast12",
    First_name: "testfirst34",
    registration_form_language: "한국어",
    registration_form_language_value: "KOREAN",
    Timezone: "(UTC +01:00) Central European Time",
    Timezone_Value: "CET",
  };

  /*-------- XPATHS/ELEMENT LOCATORS ------------ */
  locators = {
    frame_id: "#app aos-iframe-page iframe",
    input_filterSearchBar: "//input[@name='filterInput']",
    txt_koreaRecordOrganisation: "//h3[contains(text(),'조직 데이터의 수집')]",
    txt_Record_organisation_data:
      '//*[contains(text(),"Record organisation data")]',
    txt_koreaGeneralOrganisation: "//h4[contains(text(),'회사 데이터')]",
    txt_General_organisation_data:
      '//*[contains(text(),"General organisation data")]',
    txt_userGroup: "//*[contains(text(),'User group')]",
    btn_user_group_dropdown: "//button[@id='userGroup-open-button']",
    btn_country_dropdown: '//button[@id="country-open-button"]',
    btn_okButton: "//button[text()='OK']",
    txt_korea_details_of_the_organisation: "//h4[contains(text(),'회사 정보')]",
    txt_Details_about_the_organisation:
      "//h4[contains(text(),'Details about organisation')]",
    lbl_korea_invoice_address:
      "//div[@class='form-row']/label[text()='청구서 주소']",
    lbl_invoice_address: '//label[contains(text(),"Invoice address")]',
    btn_Attachmentsbutton:
      '//button[contains(text(),"Attachments")] | //button[contains(text(),"첨부하기")]',
    btn_organization_name: '//*[@id="name"]',
    lbl_FileName: "//*[contains(text(),'File name')]",

    input_country_dropdown: "input.ds-select-list__filter__input",
    select_country_dropdown: "ds-list-item",

    btn_street: '//*[@id="street"]',
    btn_postalcode: '//*[@id="postCode"]',
    btn_organization_city: '//*[@id="location"]',
    lbl_korea_VAT_Information:
      "//div[@class='form-row']/label[text()='부가가치세 정보']",
    lbl_VAT_information: "//label[contains(text(),'VAT information')]",
    input_VAT_Reg_Num: '//*[@id="vat"]',
    input_VAT_Rate: '//*[@id="vatRate"]',
    txt_Details_about_legal_representative:
      "//h4[contains(text(),'Details about statutory agent')]",
    txt_koreaDetails_about_legal_representative:
      "//h4[contains(text(),'Details about statutory agent')]",
    txt_remarks_label: "//label[@for='remarks']",
    txt_remarks_input: "//input[@formcontrolname='remarks']",

    input_salutation: '//*[@id="title-open-button"]',
    input_lastname: '//*[@id="lastName"]',
    input_firstname: '//*[@id="firstName"]',
    input_registration_form_language: '//*[@id="language-open-button"]',
    input_timezone: '//*[@id="timeZone-open-button"]',
    lbl_Logon_data: "//label[contains(text(),'Logon data')]",
    lbl_Korea_Logon_data: "//label[contains(., '로그인 데이터')]",
    btn_korea_attachfile: "//button[contains(text(),'첨부하기')]",

    input_email: '//*[@id="email"]',
    input_password: '//input[contains(@name,"password")]',
    input_confirm_password: '//input[contains(@name,"confirm-pwd")]',
    lbl_korea_conditions_of_use: "//label[contains(., '사용자 약관')]",
    input_conditions_of_use: '//*[@id="use"]',
    input_terms_of_use_checkbox:
      "//input[contains(@name,'terms-of-use-checkbox')]",
    input_requirements_checkbox: '//*[@id="tech"]',
    input_privacy_checkbox: '//*[@id="data"]',
    btn_save_button: "//button[contains(text(),'Send registration')]",
    txt_phoneNumber: "//input[@formcontrolname='phoneNumber']",
    btn_korea_save_button: "//button[contains(text(),'등록 전송')]",
    txt_record_successful_message:
      "//*[contains(text(),'Organisation data recorded successfully')]",
    txt_korea_success_message:
      "//p[contains(text(),'제공해 주신 정보에 감사드립니다.')]",
    btn_Registernow: "//*[@title='Register now']",
    txt_errorMessage:
      "//div[@class='ng-star-inserted' and contains(@style, 'color: red')]",
    btn_cookiesButton: () =>
      cy.xpath("//div[@class='cookie-banner']//button[text()='OK']", {
        timeout: 10000,
      }),

    input_phone_number: "//*[@id='number']",
    input_latinName:
      '//*[@id="registration-form:address-component:latin1-billing-address-component:latin-name"]',
    input_latinStreet:
      '//*[@id="registration-form:address-component:latin1-billing-address-component:latin-street"]',
    input_latinPostalCode:
      '//*[@id="registration-form:address-component:latin1-billing-address-component:latin-postal-code"]',
    input_latinCity:
      '//*[@id="registration-form:address-component:latin1-billing-address-component:latin-city"]',
    txt_vatIDHeading: '//*[@id="registration-form:pg-vat-id-title"]/div/div/h4',
    input_VAT_ID: '//*[@id="registration-form:vat-id"]',
    input_VAT_salutation: '//*[@id="registration-form:salutation"]',
    btn_addressValidationConfirmYes:
      '//*[@id="address-validation-component:address-dialog-form:confirm-modify-address-dialog-yes"]/span',
    btn_fileInput: 'input[type="file"]',
    btn_usergroupOptions: ".ds-list-item__content",
    btn_ListItems: ".ds-list-item",
    input_file: "//span/input[@type='file']",
  };

  /*-------- METHODS ------------ */

  should_verifyRecord_OrgData_Visible() {
    cy.xpath(this.locators.txt_Record_organisation_data).should("be.visible");
  }
  should_verifyUsergroup_Visible() {
    cy.xpath(this.locators.txt_userGroup).should("be.visible");
  }
  should_verifyGeneral_Orgdata_Visible() {
    cy.xpath(this.locators.txt_General_organisation_data).should("be.visible");
  }

  verifyRemarksBehavior(userGroup) {
    // Clear remarks field
    cy.xpath(this.locators.txt_remarks_input).clear().blur();
    if (userGroup === "Other (please justify your request)") {
      //  Mandatory case
      cy.xpath(this.locators.txt_remarks_label).should(
        "have.class",
        "required",
      );
      cy.xpath(this.locators.txt_remarks_input).should(
        "have.class",
        "ng-invalid",
      );

      cy.xpath(this.locators.btn_save_button).should("be.disabled");

      cy.xpath(this.locators.txt_remarks_input).type("Test remarks").blur();

      cy.xpath(this.locators.txt_remarks_input).should(
        "not.have.class",
        "ng-invalid",
      );

      cy.xpath(this.locators.btn_save_button).should("be.enabled");
    } else {
      //Optional case
      cy.xpath(this.locators.txt_remarks_label).should(
        "not.have.class",
        "required",
      );

      cy.xpath(this.locators.txt_remarks_input).should(
        "not.have.class",
        "ng-invalid",
      );

      cy.xpath(this.locators.btn_save_button).should("be.enabled");
    }
  }
  should_Get_Userdata() {
    return this.user_data;
  }

  should_create_mail(email_address) {
    return email_address + Math.round(Math.random() * 10000) + "@gmail.com";
  }

  // US Registration flow – fills all required fields and submits the form
  should_USregister(
    email,
    Dealer_Dropdown,
    Dealer_Drop_Down_value,
    Country_Dropdown,
    Country_Dropdown_Value,
    Organization_name,
    Street_address,
    Postal_Code,
    Organization_city,
    Salutation,
    Salutation_Value,
    Last_name,
    First_name,
    Registration_form_language,
    Registration_form_language_value,
    Timezone,
    Timezone_Value,
  ) {
    cy.wait(5000);
    cy.frameLoaded(this.locators.frame_id);
    cy.enter(this.locators.frame_id).then((getBody) => {
      // Verify organisation data sections are visible
      getBody()
        .xpath(this.locators.txt_Record_organisation_data)
        .should("be.visible");
      getBody()
        .xpath(this.locators.txt_General_organisation_data)
        .should("be.visible");
      // Select User Group (Dealer)
      getBody()
        .xpath(this.locators.btn_user_group_dropdown)
        .select(Dealer_Dropdown)
        .should("have.value", Dealer_Drop_Down_value);
      cy.wait(8000);
      // Select Country (only for BMW group URLs)
      cy.url().then((url) => {
        if (url.includes("bmwgroup")) {
          getBody()
            .xpath(this.locators.btn_country_dropdown)
            .should("exist")
            .and("be.visible")
            .select(Country_Dropdown)
            .should("have.value", Country_Dropdown_Value);
        } else {
          cy.log("Country dropdown does not exist on this URL");
        }
      });

      // Select Country (only for BMW group URLs)
      getBody().xpath(this.locators.input_latinName).type(Organization_name);
      getBody().xpath(this.locators.input_latinStreet).type(Street_address);
      getBody().xpath(this.locators.input_latinPostalCode).type(Postal_Code);
      getBody().xpath(this.locators.input_latinCity).type(Organization_city);

      cy.wait(10000);
      // Verify VAT section and enter VAT ID
      getBody().xpath(this.locators.txt_vatIDHeading).should("be.visible");
      getBody().xpath(this.locators.input_VAT_ID).type("vat14575");
      // Select salutation
      getBody()
        .xpath(this.locators.input_VAT_salutation)
        .select(Salutation)
        .should("have.value", Salutation_Value);
      // Enter personal name fields
      getBody().xpath(this.locators.input_lastname).should("be.visible");
      getBody().xpath(this.locators.input_lastname).click();
      getBody().xpath(this.locators.input_lastname).type(Last_name);
      getBody().xpath(this.locators.input_firstname).should("be.visible");
      getBody().xpath(this.locators.input_firstname).click();
      getBody().xpath(this.locators.input_firstname).type(First_name);
      // Select timezone (only for BMW group URLs)
      cy.url().then((url) => {
        if (url.includes("bmwgroup")) {
          getBody()
            .xpath(this.locators.input_timezone)
            .select(Timezone)
            .should("have.value", Timezone_Value);
        } else {
          cy.log("Time zone  dropdown does not exist on this URL");
        }
      });
      // Enter logon/email information
      getBody().xpath(this.locators.lbl_Logon_data).should("be.visible");
      getBody()
        .xpath(this.locators.input_email)
        .type(this.should_create_mail(email));
      // Accept terms and conditions
      getBody().xpath(this.locators.input_terms_of_use_checkbox).click();
      getBody().xpath(this.locators.input_requirements_checkbox).click();

      getBody().xpath(this.locators.btn_save_button).dblclick({ force: true });
      cy.wait(10000);
      // Confirm address validation popup
      getBody().xpath(this.locators.btn_addressValidationConfirmYes).click();
      cy.wait(4000);
      // Save again after address confirmation
      getBody().xpath(this.locators.btn_save_button).dblclick({ force: true });
    });
  }

  // Korea Registration flow – fills all required fields and submits the form
  should_Verify_KoreaRegister(
    email,
    Dealer_Dropdown,
    Dealer_Drop_Down_value,
    Country_Dropdown,
    Country_Dropdown_Value,
    Organization_name,
    Street_address,
    Postal_Code,
    Organization_city,
    Salutation,
    Salutation_Value,
    Last_name,
    First_name,
    Registration_form_language,
    Registration_form_language_value,
    Timezone,
    Timezone_Value,
  ) {
    cy.wait(5000);

    //cy.xpath(this.locators.btn_okButton).click();
    cy.wait(2000);
    // Verify  registration form sections are displayed
    cy.xpath(this.locators.txt_koreaRecordOrganisation).should("be.visible");
    cy.xpath(this.locators.txt_koreaGeneralOrganisation).should("be.visible");
    // Verify User Group (Dealer) Selection
    cy.xpath(this.locators.btn_user_group_dropdown).click();
    cy.contains(Dealer_Dropdown).click();
    //cy.xpath(this.locators.btn_user_group_dropdown).should("contain.text", Dealer_Drop_Down_value);
    // Clicks on Country Dropdown
    cy.xpath(this.locators.btn_country_dropdown).click();
    cy.contains(Country_Dropdown).click();
    cy.xpath(this.locators.btn_country_dropdown).should(
      "contain.text",
      Country_Dropdown_Value,
    );
    // Verify Organisation Details  section and fill data
    cy.xpath(this.locators.txt_korea_details_of_the_organisation).should(
      "be.visible",
    );
    cy.xpath(this.locators.lbl_korea_invoice_address).should("be.visible");
    cy.xpath(this.locators.btn_organization_name).click();
    cy.xpath(this.locators.btn_organization_name).type(Organization_name);
    cy.xpath(this.locators.btn_street).click();
    cy.xpath(this.locators.btn_street).type(Street_address);
    cy.xpath(this.locators.btn_postalcode).click();
    cy.xpath(this.locators.btn_postalcode).type(Postal_Code);
    cy.xpath(this.locators.btn_organization_city).click();
    cy.xpath(this.locators.btn_organization_city).type(Organization_city);
    cy.wait(10000);
    // Verify VAT Information section  & File Upload
    cy.xpath(this.locators.lbl_korea_VAT_Information).should("be.visible");
    cy.xpath(this.locators.btn_korea_attachfile).click();
    cy.wait(2000);
    // Upload a PDF document required for registration
    cy.get(this.locators.btn_fileInput).selectFile(
      "cypress/downloads/TestImage--.pdf",
      { force: true },
    );
    cy.wait(20000);
    // Verify Legal Representative Details
    cy.xpath(this.locators.txt_Details_about_legal_representative).should(
      "be.visible",
    );
    cy.xpath(this.locators.input_salutation).click();
    cy.contains(Salutation_Value).click();

    cy.xpath(this.locators.input_salutation).should(
      "contain.text",
      Salutation_Value,
    );
    // Enter personal details
    cy.xpath(this.locators.input_lastname).should("be.visible");
    cy.xpath(this.locators.input_lastname).click();
    cy.xpath(this.locators.input_lastname).type(Last_name);
    cy.xpath(this.locators.input_firstname).should("be.visible");
    cy.xpath(this.locators.input_firstname).click();
    cy.xpath(this.locators.input_firstname).type(First_name);
    // Select Registration Form Language
    cy.xpath(this.locators.input_registration_form_language).click();
    cy.contains(Registration_form_language).click();
    cy.xpath(this.locators.input_registration_form_language).should(
      "contain.text",
      Registration_form_language_value,
    );
    // Select Timezone
    cy.xpath(this.locators.input_timezone).click();
    cy.contains(Timezone).click();
    cy.xpath(this.locators.input_timezone).should(
      "contain.text",
      Timezone_Value,
    );

    cy.xpath(this.locators.lbl_Korea_Logon_data).should("be.visible");
    // Generate and input email address
    cy.xpath(this.locators.input_email).type(this.should_create_mail(email));
    cy.xpath(this.locators.lbl_korea_conditions_of_use).should("be.visible");
    // Accept terms and conditions &  Submit the Form
    cy.xpath(this.locators.input_conditions_of_use).click();
    cy.xpath(this.locators.input_requirements_checkbox).click();
    cy.xpath(this.locators.input_privacy_checkbox).click();
    cy.xpath(this.locators.btn_korea_save_button).click({ force: true });
    cy.wait(10000);
  }

  // Korea Registration flow – fills all required fields and submits the form
  should_Verify_KoreaRegister_kr(
    userGroup_dropdown,
    Country_dropdown,
    NameAndLegalForm,
    StreetAddress,
    PostCode,
    Location,
    LastName,
    FirstName,
    Language_dropdown,
    TimeZone_dropdown,
    Email,
  ) {
    cy.wait(2000);
    cy.xpath(this.locators.txt_koreaRecordOrganisation).should("be.visible");
    cy.xpath(this.locators.txt_koreaGeneralOrganisation).should("be.visible");
    cy.xpath(this.locators.btn_user_group_dropdown).click();
    cy.contains(userGroup_dropdown).click();
    cy.xpath(this.locators.btn_country_dropdown).click();
    cy.get(this.locators.input_country_dropdown)
      .should("be.visible")
      .type("대한민국");
    cy.contains(this.locators.select_country_dropdown, Country_dropdown)
      .should("be.visible")
      .click();
    cy.xpath(this.locators.btn_organization_name)
      .click()
      .type(NameAndLegalForm);
    cy.xpath(this.locators.btn_street).click().type(StreetAddress);
    cy.xpath(this.locators.btn_postalcode).click().type(PostCode);
    cy.xpath(this.locators.btn_organization_city).click().type(Location);
    cy.xpath(this.locators.btn_Attachmentsbutton).click();
    cy.wait(3000);
    cy.get(this.locators.btn_fileInput).selectFile(
      "cypress/fixtures/RegistrationFileUpload.pdf",
      { force: true },
    );
    cy.wait(2000);

    // Enter personal  details
    cy.xpath(this.locators.input_lastname).click().type(LastName);
    cy.xpath(this.locators.input_firstname).click().type(FirstName);
    cy.xpath(this.locators.input_registration_form_language).click();
    cy.wait(2000);
    cy.contains(Language_dropdown).click();
    cy.xpath(this.locators.input_timezone).click();
    cy.contains(TimeZone_dropdown).click();
    cy.wait(2000);
    cy.xpath(this.locators.input_email).click().type(Email);
    cy.wait(2000);
    cy.xpath(this.locators.input_conditions_of_use).click();
    cy.xpath(this.locators.input_requirements_checkbox).click();
    cy.xpath(this.locators.input_privacy_checkbox).click();
    cy.wait(2000);
    cy.xpath(this.locators.btn_korea_save_button).click({ force: true });
    cy.wait(10000);
  }

  //Registration flow (ROW)
  should_Register(
    email,
    Dealer_Dropdown,
    Dealer_Drop_Down_value,
    Country_Dropdown,
    Country_Dropdown_Value,
    Organization_name,
    Street_address,
    Postal_Code,
    Organization_city,
    Salutation,
    Salutation_Value,
    Last_name,
    First_name,
    Registration_form_language,
    Registration_form_language_value,
    Timezone,
    Timezone_Value,
    submit = true,
  ) {
    cy.wait(5000);
    const login = new Login();
    login.should_Click_CookiesButton();
    // this.locators.btn_cookiesButton().click({ force: true });
    // Verify  registration form sections are displayed
    cy.xpath(this.locators.txt_Record_organisation_data)
      .scrollIntoView()
      .should("be.visible");
    cy.xpath(this.locators.txt_General_organisation_data).should("be.visible");
    // Selects User Group
    cy.xpath(this.locators.btn_user_group_dropdown)
      .click()
      .get(this.locators.btn_usergroupOptions)
      .contains(Dealer_Dropdown)
      .click();

    cy.wait(8000);
    // Selects country
    cy.xpath(this.locators.btn_country_dropdown)
      .should("exist")
      .and("be.visible")
      .click()
      .get(this.locators.btn_ListItems)
      .contains(Country_Dropdown)
      .click();
    // Verify Organisation Details and fill data
    cy.xpath(this.locators.txt_Details_about_the_organisation).should(
      "be.visible",
    );
    cy.xpath(this.locators.lbl_invoice_address).should("be.visible");
    cy.xpath(this.locators.btn_organization_name).click();
    cy.xpath(this.locators.btn_organization_name).type(Organization_name);
    cy.xpath(this.locators.btn_street).click();
    cy.xpath(this.locators.btn_street).type(Street_address);
    cy.xpath(this.locators.btn_postalcode).click();
    cy.xpath(this.locators.btn_postalcode).type(Postal_Code);
    cy.xpath(this.locators.btn_organization_city).click();
    cy.xpath(this.locators.btn_organization_city).type(Organization_city);
    cy.wait(10000);
    //Verify VAT Information & File Upload
    cy.xpath(this.locators.lbl_VAT_information).should("be.visible");
    cy.xpath(this.locators.input_phone_number).clear();
    cy.xpath(this.locators.btn_Attachmentsbutton).click();
    cy.wait(20000);
    // Upload required PDF document
    cy.get(this.locators.btn_fileInput).selectFile(
      "cypress/fixtures/RegistrationFileUpload.pdf",
      { force: true },
    );
    cy.wait(20000);
    // Verify Legal Representative Details
    cy.xpath(this.locators.txt_Details_about_legal_representative).should(
      "be.visible",
    );
    cy.xpath(this.locators.input_salutation)
      .and("be.visible")
      .click()
      .get(this.locators.btn_ListItems)
      .contains(Salutation)
      .click();
    // Enter personal  details
    cy.xpath(this.locators.input_lastname).should("be.visible");
    cy.xpath(this.locators.input_lastname).click();
    cy.xpath(this.locators.input_lastname).type(Last_name);
    cy.xpath(this.locators.input_firstname).should("be.visible");
    cy.xpath(this.locators.input_firstname).click();
    cy.xpath(this.locators.input_firstname).type(First_name);
    // Verify Logon Data Section
    cy.xpath(this.locators.lbl_Logon_data).should("be.visible");
    cy.wait(2000);
    // Generate and enter email address
    cy.xpath(this.locators.input_email).type(this.should_create_mail(email));
    cy.wait(2000);
    // Accept Terms & Conditions
    cy.xpath(this.locators.input_conditions_of_use).should("be.visible");
    cy.wait(2000);
    cy.xpath(this.locators.input_conditions_of_use).click();
    cy.xpath(this.locators.input_requirements_checkbox).click();
    cy.xpath(this.locators.input_privacy_checkbox).click();
    //Submit registration
    if (submit) {
      cy.xpath(this.locators.btn_save_button).click({ force: true });
      cy.wait(10000);
    }
  }

  //Verify the error messages in Registration page
  should_VerifyErrorMessages() {
    const expectedErrors = [
      "Invalid input: The company name must contain between 1 and 100 characters",
      "Invalid input: The street address must contain between 2 and 94 characters",
      "Invalid input: The postcode must contain between 2 and 15 characters",
      "Invalid input: The name of the town must be between 2 and 80 characters in length.",
      "Invalid input: The last name of the statutory agent must contain between 1 and 40 characters",
      "Invalid input: The first name of the statutory agent must contain between 1 and 40 characters",
      "Invalid input: The e-mail address is invalid",
    ];
    cy.xpath(this.locators.btn_organization_name).clear();
    cy.xpath(this.locators.btn_street).clear();
    cy.xpath(this.locators.btn_postalcode).clear();
    cy.xpath(this.locators.btn_organization_city).clear();
    cy.xpath(this.locators.input_lastname).clear();
    cy.xpath(this.locators.input_firstname).clear();
    cy.xpath(this.locators.input_email).clear();
    cy.xpath(this.locators.txt_errorMessage).then(($els) => {
      const actualErrors = $els
        .map((i, el) => Cypress.$(el).text().trim())
        .get();
      expectedErrors.forEach((expected) => {
        expect(actualErrors).to.include(expected);
      });
    });
    cy.wait(10000);
  }

  //Verify Save button is disabled
  should_VerifySaveButtonDisabled() {
    cy.xpath(this.locators.btn_save_button)
      .should("exist")
      .and("be.visible")
      .and("be.disabled");
  }
  should_VerifySaveButtonEnabledbled() {
    cy.xpath(this.locators.btn_save_button)
      .should("be.visible")
      .and("be.enabled");
  }
  // Verify with valid numbers and click on Save button
  should_enterValidPhoneNumber() {
    const validNumbers = [
      "+1234567",
      "+491234567890",
      "+1 234567890",
      "+91 98765 43210",
      "+44 20 1234 5678",
      "+123 456 789 012 345",
    ];

    cy.wrap(validNumbers).each((number) => {
      cy.xpath(this.locators.txt_phoneNumber)
        .clear()
        .type(number)
        .blur()
        .should("not.have.class", "ng-invalid");
      cy.xpath(this.locators.btn_save_button).should("be.enabled");
    });

    // Click only once after all validations
    cy.xpath(this.locators.btn_save_button).should("be.enabled").click();
  }
  should_verifyPhoneNumber_NotMandatory() {
    cy.xpath(this.locators.txt_phoneNumber)
      .clear()
      .blur()
      .should("not.have.class", "ng-invalid");
    cy.xpath(this.locators.btn_save_button).should("be.enabled");
  }

  should_verifyErrorMessage_invalidPhone() {
    const invalidNumbers = [
      "123456789",
      "+12",
      "+12345678901234567",
      "+12-345678",
      "+123 4567 ",
      "+ 1234567",
    ];

    invalidNumbers.forEach((number) => {
      cy.xpath(this.locators.txt_phoneNumber).clear().type(number).blur();

      cy.contains(
        "Invalid input: The phone number is invalid. Please specify the phone number in international format.",
        { matchCase: false },
      ).should("be.visible");
    });
  }
  should_verifyPhoneNumberFormat(phoneNumber) {
    cy.xpath(this.locators.txt_phoneNumber).clear().type(phoneNumber).blur();

    const digitsOnly = phoneNumber.replace(/\D/g, "");

    const isValidFormat =
      phoneNumber.startsWith("+") &&
      digitsOnly.length >= 7 &&
      digitsOnly.length <= 15;

    if (isValidFormat) {
      // Valid case
      cy.xpath(this.locators.txt_phoneNumber).should("have.class", "ng-valid");

      // Safe check: error should NOT exist
      cy.get("body").then(($body) => {
        if ($body.text().includes("Invalid input")) {
          throw new Error("Error message is visible for valid phone number");
        }
      });
    } else {
      // Invalid case
      cy.xpath(this.locators.txt_phoneNumber).should(
        "have.class",
        "ng-invalid",
      );

      // Error should be visible
      cy.contains(
        "Invalid input: The phone number is invalid. Please specify the phone number in international format.",
      ).should("be.visible");
    }
  }

  //China registration flow
  should_VerifyBFASchinaregister(
    email,
    Dealer_Dropdown,
    Dealer_Drop_Down_value,
    Country_Dropdown,
    Country_Dropdown_Value,
    Organization_name,
    Street_address,
    Postal_Code,
    Organization_city,
    Salutation,
    Salutation_Value,
    Last_name,
    First_name,
    Registration_form_language,
    Registration_form_language_value,
    Timezone,
    Timezone_Value,
  ) {
    cy.wait(5000);
    // Verify registration page headers
    cy.xpath(this.locators.txt_Record_organisation_data).should("be.visible");
    cy.xpath(this.locators.txt_General_organisation_data).should("be.visible");
    // Select dealer from user group dropdown
    cy.xpath(this.locators.btn_user_group_dropdown)
      .click()
      .get(this.locators.btn_usergroupOptions)
      .contains(Dealer_Dropdown)
      .click();
    // Select country using search filter
    cy.wait(8000);
    cy.xpath(this.locators.btn_country_dropdown)
      .should("exist")
      .and("be.visible")
      .click();
    cy.xpath(this.locators.input_filterSearchBar).type(Country_Dropdown);
    cy.xpath(
      `//mark[contains(text(),"${Country_Dropdown}")]/ancestor::div[contains(@class, "ds-list-item__content")]`,
    )
      .first()
      .click();
    // Verify Organisation Information and fill details
    cy.xpath(this.locators.txt_Details_about_the_organisation).should(
      "be.visible",
    );
    cy.xpath(this.locators.lbl_invoice_address).should("be.visible");
    cy.xpath(this.locators.btn_organization_name).click();
    cy.xpath(this.locators.btn_organization_name).type(Organization_name);
    cy.xpath(this.locators.btn_street).click();
    cy.xpath(this.locators.btn_street).type(Street_address);
    cy.xpath(this.locators.btn_postalcode).click();
    cy.xpath(this.locators.btn_postalcode).type(Postal_Code);
    cy.xpath(this.locators.btn_organization_city).click();
    cy.xpath(this.locators.btn_organization_city).type(Organization_city);

    cy.wait(10000);
    //Verify VAT Information Section and fill details
    cy.xpath(this.locators.lbl_VAT_information).should("be.visible");
    cy.xpath(this.locators.input_VAT_Reg_Num).should("be.visible").click();
    cy.wait(2000);
    cy.xpath(this.locators.input_VAT_Reg_Num).type("CN98756453");

    cy.xpath(this.locators.input_VAT_Rate).should("be.visible").click();
    cy.wait(2000);
    cy.xpath(this.locators.input_VAT_Reg_Num).type("20");
    // Upload attachment
    cy.xpath(this.locators.btn_Attachmentsbutton).click();
    cy.wait(2000);
    cy.get(this.locators.btn_fileInput).selectFile(
      "cypress/fixtures/RegistrationFileUpload.pdf",
      { force: true },
    );
    // Verify Legal Representative details
    cy.xpath(this.locators.txt_Details_about_legal_representative).should(
      "be.visible",
    );
    cy.xpath(this.locators.input_salutation)
      .and("be.visible")
      .click()
      .get(this.locators.btn_ListItems)
      .contains(Salutation)
      .click();
    // Enter personal details
    cy.xpath(this.locators.input_lastname).should("be.visible");
    cy.xpath(this.locators.input_lastname).click();
    cy.xpath(this.locators.input_lastname).type(Last_name);
    cy.xpath(this.locators.input_firstname).should("be.visible");
    cy.xpath(this.locators.input_firstname).click();
    cy.xpath(this.locators.input_firstname).type(First_name);
    cy.xpath(this.locators.Logon_data).should("be.visible");
    cy.wait(2000);
    // Enter generated email address
    cy.xpath(this.locators.input_email).type(this.should_create_mail(email));
    cy.wait(2000);
    // Accept terms and conditions
    cy.xpath(this.locators.input_conditions_of_use).should("be.visible");
    cy.wait(2000);
    cy.xpath(this.locators.input_conditions_of_use).click();
    cy.xpath(this.locators.input_requirements_checkbox).click();
    cy.xpath(this.locators.input_privacy_checkbox).click();
    // Submit registration form
    cy.xpath(this.locators.btn_save_button).click({ force: true });
    cy.wait(10000);
  }
  //Verify the Regstration success messgae for Korea
  should_VerifyKoreaVerifySuccessRegistration() {
    cy.wait(15000);
    cy.xpath(this.locators.txt_korea_success_message).should("be.visible");
  }

  //Verify the Regstration success messgae for ROW
  should_Verify_Registration() {
    cy.wait(15000);
    cy.xpath(this.locators.txt_record_successful_message).should("be.visible");
  }

  //Clicks on Regsiter now button
  should_ClickRegisterNow() {
    cy.xpath(this.locators.btn_Registernow)
      .invoke("attr", "style", "width: 1000px; height: 1300px")
      .click({ force: true });
    cy.wait(5000);
  }

  //Uploads the file
  should_AttachFiles() {
    cy.frameLoaded(this.locators.frame_id);
    cy.wait(5000);
    cy.enter(this.locators.frame_id).then((p) => {
      // Locate the file input and upload the file
      p()
        .xpath(this.locators.input_file)
        .selectFile("cypressscreenshotsTestImage--.PNG", {
          force: true,
        });
    });
  }

  EnterTheUserDetails(
    {
      Dealer_Dropdown,
      Country_Dropdown,
      Organization_name,
      Street_address,
      Postal_Code,
      organization_city,
    } = this.user_data,
  ) {
    cy.wait(5000);
    this.locators.btn_cookiesButton().click({ force: true });
    // Verify  registration form sections are displayed
    cy.xpath(this.locators.txt_Record_organisation_data).should("be.visible");
    cy.xpath(this.locators.txt_General_organisation_data).should("be.visible");
    // Selects User Group
    cy.xpath(this.locators.btn_user_group_dropdown)
      .click()
      .get(this.locators.btn_usergroupOptions)
      .contains(Dealer_Dropdown)
      .click();

    cy.wait(8000);
    // Selects country
    cy.xpath(this.locators.btn_country_dropdown)
      .should("exist")
      .and("be.visible")
      .click()
      .get(this.locators.btn_ListItems)
      .contains(Country_Dropdown)
      .click();
    // Verify Organisation Details and fill data
    cy.xpath(this.locators.txt_Details_about_the_organisation).should(
      "be.visible",
    );
    cy.xpath(this.locators.lbl_invoice_address).should("be.visible");
    cy.xpath(this.locators.btn_organization_name).click();
    cy.xpath(this.locators.btn_organization_name).type(Organization_name);
    cy.xpath(this.locators.btn_street).click();
    cy.xpath(this.locators.btn_street).type(Street_address);
    cy.xpath(this.locators.btn_postalcode).click();
    cy.xpath(this.locators.btn_postalcode).type(Postal_Code);
    cy.xpath(this.locators.btn_organization_city).click();
    cy.xpath(this.locators.btn_organization_city).type(organization_city);
    cy.wait(10000);
    //Verify VAT Information & File Upload
    cy.xpath(this.locators.lbl_VAT_information).should("be.visible");
    cy.xpath(this.locators.input_phone_number).clear();
    cy.wait(20000);

    //   // // Upload required PDF document
    //   // cy.get('input[type="file"]').selectFile(
    //   //   "cypress/fixtures/RegistrationFileUpload.pdf",
    //   //   { force: true }
    //   // );
  }

  uploadThreeSupportedFormatFile(selector) {
    cy.xpath(this.locators.btn_Attachmentsbutton).click();
    cy.wait(1000);
    cy.xpath(selector).attachFile("RegistrationFileUpload.pdf");
    cy.wait(2000);
    cy.xpath(selector).attachFile("QASample.png");
    cy.wait(2000);
    cy.xpath(selector).attachFile("TestSample.png");
  }

  // Verify that the Attachments button is disabled
  verifyButtonDisabled() {
    cy.xpath(this.locators.btn_Attachmentsbutton)
      .should("exist")
      .and("be.disabled");
  }

  uploadFileOfSizeExceedingLimit(selector) {
    cy.wait(1000);
    cy.xpath(this.locators.btn_Attachmentsbutton).should("be.visible").click();
    cy.wait(1000);
    cy.xpath(selector).attachFile("LargeFile_5MB.png");
    cy.wait(2000);
    cy.xpath(this.locators.lbl_FileName).scrollIntoView({
      block: "center",
      inline: "center",
    });
  }

  uploadUnsupportedFormatFile(selector) {
    cy.xpath(this.locators.btn_Attachmentsbutton).should("be.visible").click();
    cy.wait(1000);
    cy.xpath(selector).attachFile("Registration_config_row.json");
  }
}
export default registration;
