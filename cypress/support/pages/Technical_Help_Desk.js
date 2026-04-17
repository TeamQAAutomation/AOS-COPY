class TechnicalHelpDesk {
  elements = {
    /*-------- XPATHS/ELEMENT LOCATORS ------------ */
    tab_help: "//ds-list-item[@aria-label='Help']",
    tab_technicalHelpDesk: "//div[contains(text(),'Technical Help Desk')]",
    aosIFrame: "#app aos-iframe-page iframe",
    txt_thdHeading: "//h1[contains(text(),'Technical Help Desk')]",
    txt_thdheadingkorea: "//h1[contains(text(),' 기술 지원 문의 (유료) ')]",
    txt_requestToTHDSideHeading: "//*[contains(text(),'Request to the Technical Help Desk')]",
    txt_requestToTHDSideHeadingkorea: "//h2[contains(text(),'기술 헬프 데스크에 문의')]",
    txt_brandSelection: '//*[contains(text(),"Brand selection")]',
    txt_brandSelectionkorea: "//*[contains(text(),'브랜드 선택')]",
    Dropdown_initialBrandSelection: "//span[normalize-space()='Please select']",
    txt_generalDescriptionSideHead: '//*[contains(text(),"General description")]',
    txt_generalDescriptionSideHeadkorea: "//h3[contains(text(),'일반 설명')]",
    input_subjOfRequest: "//input[contains(@id,'requestSubject')]",
    select_or_input_dateRequest: "//input[@placeholder='Date of the request']",
    input_reachabilityFromAndTo: "//input[contains(@id,'availability')]",
    txt_vehicleInfoSideHead: '//*[contains(text(),"Vehicle information")]',
    txt_vehicleInfoSideHeadkorea: "//h3[contains(text(),'차량 정보')]",
    input_vin17Digits: "//input[contains(@id,'vin')]",
    input_kmsReadingOrMileage: "//input[contains(@formcontrolname,'mileage')]",
    Dropdown_mileageUnit: "//button[@id='mileageUnit-open-button']",
    input_workshopVisits: "//input[contains(@id,'garageVisits')]",
    txt_infoOfPerception: '//*[contains(text(),"Information on perception")]',
    txt_inforofperceptionkorea: "//h3[contains(text(),'인지 관련 정보')]",
    Dropdown_placeOfPerception: "//button[contains(@id,'perceptionLocation-open-button')]",
    list_placeOfPerception: "//li[contains(@class,'ds-select-list__list_placeOfPerception')]//input[@type='text' and @placeholder='Filter']",
    select_PlaceofPerception: "//ds-list-item[@id='BODY']",
    Dropdown_typeOfPerception: "//button[contains(@id,'perceptionType-open-button')]",
    select_TypeofPerception: "//span[normalize-space()='Functional failure']",
    Dropdown_marginalCondition: "//button[contains(@id,'condition')]",
    select_marginalCondition: "//span[normalize-space()='Engine operation']",
    txt_diagnosisSideHead: '//p[contains(text(),"Diagnosis")]',
    txt_diagnosisSideHeadkorea: "//h3[contains(text(),'진단')]",
    Dropdown_mainGroup: "//ds-select[contains(@formcontrolname,'mainGroup')]",
    select_Maingroup: "//span[normalize-space()='10 Engine (general)']",
    Dropdown_specialistDept: "//ds-select[contains(@formcontrolname,'department')]",
    select_Specialist: "(//span[normalize-space()='Body'])[2]",
    input_customerComplaint: "//textarea[contains(@formcontrolname,'customerComplaint')]",
    input_workshopFaultDescription: "//textarea[contains(@formcontrolname,'garageDiagnosis')]",
    input_workPerformed: "//textarea[contains(@formcontrolname,'performedRepairs')]",
    Dropdown_measuringDevice: "//ds-select[contains(@formcontrolname,'tester')]",
    select_MeasuringDevice: "//span[normalize-space()='ICOM']",
    input_measuringDeviceUsed: "//input[contains(@formcontrolname,'usedTester')]",
    Dropdown_urgency: "//ds-select[contains(@formcontrolname,'priority')]",
    select_Urgency: "//span[normalize-space()='Answer requested']",
    txt_userDataSideHead: '//h2[contains(text(),"User data")]',
    txt_userDataSideHeadkorea: "//h3[contains(text(),'사용자 데이터')]",
    input_phoneNum: '//input[contains(@id,"phone")]',
    txt_organisationDataSideHead: '//h2[contains(text(),"Organisation data")]',
    txt_organisationDataSideHeadkorea: "//h3[contains(text(),'조직에 대한 데이터')]",
    btn_continue: "//span[contains(text(),'Continue')]",
    txt_paymentHeading: '//h1[contains(text(),"Payment")]',
    txt_purchaseOrderOverviewHeading: '//h2[contains(text(),"Overview of the purchase order")]',
    txt_invoiceAddressHeading: '//h3[contains(text(),"Invoice address")]',
    txt_transactionDetailsHeading: '//h3[contains(text(),"Transaction details")]',
    txt_paymentMethodsHeading: '//h3[contains(text(),"Payment methods")]',
    radio_btn_first: "(//*[@type='radio'])[1]",
    txt_successful: "//h3[contains(text(),'Successful')]",
    btn_bmwPayProceed: '//button[contains(text(),"Proceed")]',
    input_cvv: '//input[@placeholder="3 digits"]',
    btn_purchaseNow: "//button[span[text()='Purchase now']]",
    txt_ticketingSystemHeading: "//h1[contains(text(),'Ticketing System')]",
    txt_koreaSuccessMessage: "//*[normalize-space(text())='귀하의 문의가 성공적으로 전송되었습니다.']",
    txt_successMessage: "//*[contains(text(), 'Your enquiry has been successfully sent')]",
    aosPageIFrame: "#app aos-page aos-iframe-page iframe",
    Passwordframe: "#three-ds2-placeholder iframe",
    input_password:
      "//span[contains(text(),'Password')]//..//following-sibling::div//input[@class='input-field']",
    btn_ok: "//button[contains(text(),'OK')]",
    input_firstname: "//input[contains(@id,'firstName')]",
    input_lastname: "//input[contains(@id,'lastName')]",
    input_email: "//input[contains(@id,'email')]",
    input_orgName: "//input[@id='organisation']",
    txt_errorMessage: "//div[@class='error-message ng-star-inserted']",
    select_Brand: "//cdk-virtual-scroll-viewport//li[.//span[normalize-space()='BMW']]",
    btn_select_miles: "//ds-list-item[@id='MILES']",
    select_timeZone: "//button[contains(@id,'timeZoneId-open-button')]",
    selectTimezone: "//span[normalize-space()='(UTC -06:00) Central Standard Time']",
    input_dateofReq: "//input[@placeholder='Date of the request']",
    iframeCVV: "#component-container > div > div > div.adyen-checkout__loading-input__form.LoadingWrapper-module_loading-input__form__ffCKa > div.adyen-checkout__card__form > div.adyen-checkout__card__exp-cvc.adyen-checkout__field-wrapper > div.adyen-checkout__field.adyen-checkout__field--50.adyen-checkout__field__cvc.adyen-checkout__field--securityCode > div.adyen-checkout__input-wrapper > span.adyen-checkout__input.adyen-checkout__input--small.adyen-checkout__card__cvc__input.CardInput-module_adyen-checkout__input__11tlB > iframe",
    txt_userDataNote: '//*[@id="user-data"]/span/following-sibling::text()[1]',
    txt_userDataPopulated: "//*[@id='user-data']",
    Button: "(//*[@icon='arrow_left_small' and @role='button'])[1]",
  };

  /*-------- METHODS ------------ */

  should_Click_TechnicalHelpDesk() {
    cy.xpath(this.elements.Button).should("be.visible").click({ force: true });
    cy.wait(5000);
    cy.xpath(this.elements.tab_help).should("be.visible").click({ force: true });
    cy.wait(15000);
    cy.xpath(this.elements.tab_technicalHelpDesk).should("be.visible").click({ force: true });
    cy.wait(20000);
  }

  //Payment process for technical help desk
  should_Submit_TechnicalHelpDesk_Form() {
    //cy.xpath(this.elements.btn_continue).click();
    cy.wait(20000);
    cy.xpath(this.elements.btn_purchaseNow).click();
    cy.wait(40000);
    cy.frameLoaded("#three-ds2-placeholder iframe");
    cy.enter("#three-ds2-placeholder iframe").then((body) => {
      // Interact with the content
      body().xpath(this.elements.input_password).click();
      body().xpath(this.elements.input_password).type("password");
      body().xpath(this.elements.btn_ok).click();
    });
  }

  //Verify error messages by click on continue with mandatory fields empty
  should_Verify_Errors_With_EmptyFields_In_TechnicalHelpDesk() {
    const expectedErrors = [
      "Incorrect input: Please enter the subject of your request.",
      "Incorrect input: Please select the date of the request.",
      "Incorrect input: Please specify when you can be reached.",
      "Incorrect input: Please specify the 17-digit vehicle identification number.",
      "Incorrect input: Please specify the usage of the vehicle.",
      "Incorrect input: Please enter the service visits with the same complaint.",
      "Incorrect input: Please enter the customer complaint (customer's own words).",
      "Incorrect input: Please enter the workshop fault description and suspected cause.",
      "Incorrect input: Please specify the repairs already performed.",
      "Incorrect input: Please specify which measuring device you used.",
      "Invalid input: The first name must contain between 1 and 40 characters.",
      "Invalid input: The last name must contain between 1 and 40 characters.",
      "Invalid input: The email address must have between 2 and 100 characters.",
      "Invalid input: The company name must contain between 1 and 100 characters",
    ];

    this.should_Fill_TechnicalHelpDesk_Form();
    // Clear all mandatory fields to simulate empty submission
    const fieldsToClear = [
      this.elements.input_subjOfRequest,
      this.elements.select_or_input_dateRequest,
      this.elements.input_reachabilityFromAndTo,
      this.elements.input_vin17Digits,
      this.elements.input_kmsReadingOrMileage,
      this.elements.input_workshopVisits,
      this.elements.input_customerComplaint,
      this.elements.input_workshopFaultDescription,
      this.elements.input_workPerformed,
      this.elements.input_measuringDeviceUsed,
      this.elements.input_firstname,
      this.elements.input_lastname,
      this.elements.input_phoneNum,
      this.elements.input_email,
      this.elements.input_orgName,
    ];
    fieldsToClear.forEach((selector) => {
      cy.xpath(selector).clear();
    });
    // Click Continue button to trigger validation
    cy.xpath(this.elements.btn_continue).click();
    cy.wait(15000);
    // Verify all error messages appear
    cy.xpath(this.elements.txt_errorMessage).then(($els) => {
      const actualErrors = $els
        .map((i, el) => Cypress.$(el).text().trim())
        .get();
      // Assert each expected error message is present in the actual errors
      expectedErrors.forEach((expected) => {
        expect(actualErrors).to.include(expected);
      });
    });
  }

  // Fills the Technical Help Desk form for Korea
  should_Fill_TechnicalHelpDesk_For_Korea() {
    cy.xpath(this.elements.txt_thdheadingkorea).should("be.visible");
    cy.frameLoaded(this.elements.aosIFrame, { timeout: 30000 });
    cy.enter(this.elements.aosIFrame).then((p) => {
      p()
        .xpath(this.elements.txt_requestToTHDSideHeadingkorea)
        .should("be.visible");
      p().xpath(this.elements.txt_brandSelectionkorea).should("be.visible");
      p().xpath(this.elements.Dropdown_initialBrandSelection).select("BMW");
      //Verifies General Description section  and fill the details
      p().xpath(this.elements.txt_generalDescriptionSideHeadkorea).should("be.visible");
      p().xpath(this.elements.input_subjOfRequest).type("test");
      p().xpath(this.elements.input_reachabilityFromAndTo).type("test");
      //Verifies Vehicle Information section  and fill the details
      p().xpath(this.elements.txt_vehicleInfoSideHeadkorea).should("be.visible");
      p().xpath(this.elements.input_vin17Digits).type("BSDS43543yu666777");
      p().xpath(this.elements.input_kmsReadingOrMileage).type("2");
      p().xpath(this.elements.input_workshopVisits).type("22");
      //Verifies Information on Perception section  and fill the details
      p().xpath(this.elements.txt_inforofperceptionkorea).should("be.visible");
      p().xpath(this.elements.Dropdown_placeOfPerception).select("차체");
      p().xpath(this.elements.Dropdown_typeOfPerception).select("기능장애");
      p().xpath(this.elements.Dropdown_marginalCondition).select("엔진운전");
      //Verifies Diagnosis section  and fill the details
      p().xpath(this.elements.txt_diagnosisSideHeadkorea).should("be.visible");
      p().xpath(this.elements.Dropdown_mainGroup).select("01 전체 차량");
      p().xpath(this.elements.Dropdown_specialistDept).select("차체");
      p().xpath(this.elements.input_customerComplaint).type("test automation");
      p().xpath(this.elements.input_workshopFaultDescription).type("test automation");
      p().xpath(this.elements.input_workPerformed).type("test automation");
      p().xpath(this.elements.Dropdown_measuringDevice).select("ICOM");
      p().xpath(this.elements.input_measuringDeviceUsed).type("22");
      p().xpath(this.elements.Dropdown_urgency).select("LOW");
      //Verifies User Data section  and fill the details
      p().xpath(this.elements.txt_userDataSideHeadkorea).should("be.visible");
      p().xpath(this.elements.input_phoneNum).clear().type("0049 893820");
      //Verifies Organisation Data section  and fill the details
      p().xpath(this.elements.txt_organisationDataSideHeadkorea).should("be.visible");
      p().xpath(this.elements.btn_continue).click();
      cy.wait(20000);
    });
  }

  //Purchasing ticket in korea
  should_Complete_TechnicalHelpdesk_Payment_Korea() {
    cy.frameLoaded(this.elements.aosIFrame, { timeout: 30000 });
    cy.enter(this.elements.aosIFrame).then((p) => {
      p().xpath(this.elements.btn_purchaseNow).click();
      cy.wait(3000);
    });
  }

  //Validate the Success message for ROW
  should_Validate_Ticket_Successfulmessage() {
    cy.xpath(this.elements.txt_successMessage).should("be.visible");
  }

  //Validate the Success message for Korea
  should_Validate_Korea_SuccessMessage() {
    cy.frameLoaded(this.elements.aosIFrame, { timeout: 30000 });
    cy.enter(this.elements.aosIFrame).then((p) => {
      p().xpath(this.elements.txt_koreaSuccessMessage).should("be.visible");
    });
  }

  //Purchase Ticket via BMW Pay
  should_Complete_Form_Payment_With_BMWPay() {
    cy.frameLoaded(this.elements.aosIFrame, { timeout: 20000 }).invoke(
      "attr",
      "style",
      "width: 1000px; height: 1300px"
    );
    // Verify headings and select the first payment method
    cy.enter(this.elements.aosIFrame).then((q) => {
      q().xpath(this.elements.txt_paymentHeading).should("be.visible");
      q().xpath(this.elements.txt_purchaseOrderOverviewHeading).should("be.visible");
      q().xpath(this.elements.txt_invoiceAddressHeading).should("be.visible");
      q()
        .xpath(this.elements.txt_transactionDetailsHeading)
        .should("be.visible");
      q().xpath(this.elements.txt_paymentMethodsHeading).should("be.visible");
      // Select the first radio button for payment method
      q().xpath(this.elements.radio_btn_first).click({ force: true });
      cy.wait(60000);
    });
    // Navigate to add card page for BMW Pay
    cy.visit(
      "https://aos-portal-qa2.bmwgroup.com/payment/page/#/payment/add-card?langLong=en-GB&client=RoW&onlyCVV=true",
      { timeout: 60000 }
    );

    cy.wait(10000);
    // Load the CVV for card verification
    cy.frameLoaded(this.elements.iframeCVV,{ timeout: 20000 });
    // Enter CVV
    cy.enter(this.elements.iframeCVV).then((frame) => {
      frame().xpath(this.elements.input_cvv).type("737");
    });
    // Click Proceed button to continue BMW Pay
    cy.xpath(this.elements.btn_bmwPayProceed).click();
    cy.wait(20000);
    //click on "Purchase Now"
    cy.frameLoaded(this.elements.aosPageIFrame);
    cy.enter(this.elements.aosPageIFrame).then((iframe) => {
      iframe().xpath(this.elements.btn_purchaseNow).click({ force: true });
      cy.wait(20000);
    });
  }

  //Verifies the Email for Admin user
  should_Check_Email_For_AdminUser() {
    cy.frameLoaded(this.elements.aosIFrame);
    cy.enter(this.elements.aosIFrame).then((q) => {
      const xpathforNote = this.elements.txt_userDataNote;
      q().xpath(xpathforNote).then(($textNode) => {
        const textContent = $textNode[0].nodeValue;
        const textInBracketsMatch = textContent.match(/\((.*?)\)/);
        if (textInBracketsMatch) {
          const textInBrackets = textInBracketsMatch[1].trim();
          expect(textInBrackets).to.contain(
            Cypress.env("int_Admin_username")
          );
        }
      });
    });
  }
  //Verifies the email for Standard user
  should_Check_Email_For_StandardUser() {
    cy.frameLoaded(this.elements.aosIFrame);
    cy.enter(this.elements.aosIFrame).then((q) => {
      // XPath targeting the text node after the span with id "user-data"
      const xpathforNote = this.elements.txt_userDataNote;

      q()
        .xpath(xpathforNote)
        .then(($textNode) => {
          const textContent = $textNode[0].nodeValue;
          // Extract the text inside parentheses
          const textInBracketsMatch = textContent.match(/\((.*?)\)/);
          if (textInBracketsMatch) {
            const textInBrackets = textInBracketsMatch[1].trim();
            // Assert that the extracted text contains the standard username from environment variables
            expect(textInBrackets).to.contain(Cypress.env("Username"));
          }
        });
    });
  }
  //Verify the input_email in technical help desk
  should_Verify_Email_Populated_In_TechnicalHelpDesk() {
    cy.xpath(this.elements.txt_userDataPopulated).contains(Cypress.env("Username"), 
      {
        matchCase: false,
      }).should("be.visible");
  }
  
  //Technical help desk form filling without payment
  should_Fill_TechnicalHelpDesk_Form() {
    // cy.visit({
    //   url: "https://aos-q2.bmwgroup.com/help/technical-help-desk",
    //   headers: { "Accept-Encoding": "*" },
    //   method: "GET",
    //   Connection: "Keep-Alive",
    //   retryOnNetworkFailure: true,
    //   retryOnStatusCodeFailure: false,
    //   timeout: 40000,
    //   failOnStatusCode: false,
    //   onLoad: () => {
    //     cy.url().should("include", "technical-help-desk");
    //   },
    // }).then((response) => {
      cy.xpath(this.elements.txt_thdHeading).should("be.visible");
      cy.xpath(this.elements.txt_requestToTHDSideHeading).should("be.visible");
      cy.xpath(this.elements.txt_brandSelection).should("be.visible");
      //cy.xpath(this.elements.Dropdown_initialBrandSelection).select("BMW");
      cy.xpath(this.elements.Dropdown_initialBrandSelection).click();
      cy.xpath(this.elements.select_Brand).click();
     
      // Verify and fill the General Description section
      cy.xpath(this.elements.txt_generalDescriptionSideHead).should("be.visible");
      cy.xpath(this.elements.input_subjOfRequest).type("test");
       cy.xpath(this.elements.select_or_input_dateRequest)
     .click().clear({ force: true }).type('2024-12-12T12:30');
      cy.xpath(this.elements.input_reachabilityFromAndTo).type("test");
      // Verify and fill the Vehicle Information section
      cy.xpath(this.elements.txt_vehicleInfoSideHead).should("be.visible");
      cy.xpath(this.elements.input_vin17Digits).type("BSDS43543yu666777");
      cy.xpath(this.elements.input_kmsReadingOrMileage).type("2");
      //cy.xpath(this.elements.Dropdown_mileageUnit).select("Kilometres");
      cy.xpath(this.elements.Dropdown_mileageUnit).click();
      cy.xpath(this.elements.btn_select_miles).click();
      cy.xpath(this.elements.input_workshopVisits).type("22");
      // Verify and fill the Information on Perception section
      cy.xpath(this.elements.txt_infoOfPerception).should("be.visible");
      cy.xpath(this.elements.Dropdown_placeOfPerception).click();
      cy.xpath(this.elements.select_PlaceofPerception).click();
      cy.xpath(this.elements.Dropdown_typeOfPerception).click();
      cy.xpath(this.elements.select_TypeofPerception).click();
      //.select("FAILS_TO_OPERATE");
      cy.xpath(this.elements.Dropdown_marginalCondition).click();
      cy.xpath(this.elements.select_marginalCondition).click();
      // Verify and fill the Diagnosis section
      cy.xpath(this.elements.txt_diagnosisSideHead).should("be.visible");
      cy.xpath(this.elements.Dropdown_mainGroup).click();
      cy.xpath(this.elements.select_Maingroup).click();
      cy.xpath(this.elements.Dropdown_specialistDept).click();
      cy.xpath(this.elements.select_Specialist).click();
      cy.xpath(this.elements.input_customerComplaint).type("test automation");
      cy.xpath(this.elements.input_workshopFaultDescription).type("test automation");
      cy.xpath(this.elements.input_workPerformed).type("test automation");
      cy.xpath(this.elements.Dropdown_measuringDevice).click();
      cy.xpath(this.elements.select_MeasuringDevice).click();
      cy.xpath(this.elements.input_measuringDeviceUsed).type("22");
      cy.xpath(this.elements.Dropdown_urgency).scrollIntoView().click();
      cy.xpath(this.elements.select_Urgency).click();
      // Verify and fill the USer Data section
      cy.xpath(this.elements.txt_userDataSideHead).should("be.visible");
      cy.xpath(this.elements.input_phoneNum).clear().type("0049 893820");
      // Verify and fill the Organisation Data section
      cy.xpath(this.elements.txt_organisationDataSideHead).should("be.visible");

      cy.xpath(this.elements.btn_continue).click();
      cy.wait(20000);
    //});
  }
}
export default TechnicalHelpDesk;