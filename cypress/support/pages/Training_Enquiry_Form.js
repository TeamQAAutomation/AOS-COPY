class TrainingEnquiry {
  elements = {
    /*-------- XPATHS/ELEMENT LOCATORS ------------ */
    tab_help: "//ds-list-item[@aria-label='Help']",
    tab_trainingEnquiry: "//div[contains(text(),' Training enquiry')]",
    helpIFrame: "#app aos-help-iframe-page iframe",
    txt_trainingEnquiryHeading: '//h1[contains(text(),"Training enquiry")]',
    txt_enquiriesAboutTrainingHead: '//p[contains(text(),"Enquiries about training")]',
    txt_requestToTHDSideHeading: "//*[contains(text(),'Request to the Technical Help Desk')]",
    txt_brandSelectionSideHead: '//p[contains(text(),"Brand selection")]',
    txt_brandSelection: '//*[contains(text(),"Brand selection")]',
    Dropdown_initialBrandSelection: "//span[normalize-space()='Please select']",
    select_brand: "//cdk-virtual-scroll-viewport//li[.//span[normalize-space()='BMW']]",
    txt_infoAboutRequest: '//h3[contains(text(),"Information about your request")]',
    checkbox_marketingTraining: "//input[@value='MARKETING_TRAINING']",
    checkbox_systemTrainingBTN: "//input[@value='SYSTEM_TRAINING']",
    input_noOfAttendees: "//input[@id='attendees']",
    input_ticketCreationDescription: "//textarea[@id='myTextarea']",
    txt_input_informationAboutReq: '//p[contains(text(),"Information about your request")]',
    txt_userDataSideHead: '//h2[contains(text(),"User data")]',
    txt_organisationDataHead: '//h2[contains(text(),"Organisation data")]',
    btn_send: "//button/span[normalize-space()='Send']",
    txt_trainingEnquiry: "//*[contains(text(),'Training enquiry')]",
    txt_enquirySuccess: "//*[contains(text(), 'Your enquiry has been successfully sent')]",
    txt_YourInterIN: "//span[contains(text(),'You are interested in:')]",
    txt_NOofattendees: '//span[contains(text(),"Number of attendees:")]',
    txt_commentswishes: '//span[contains(text(),"Comments/wishes:")]',
    btn_Title: "//button[@id='title-open-button']",
    btn_TitleSelectMs: "//div[@class='ds-list-item__content']/span[text()='Ms']",
    input_Firstname: "//input[contains(@id,'firstName')]",
    input_Lastname: "//input[contains(@id,'lastName')]",
    input_Phonenumber: '//input[contains(@id,"phone")]',
    input_Email: '//span[contains(text(),"Email")]',
    input_Language: '//span[contains(text(),"Language")]',
    lbl_Organisation: '//label[contains(text(),"Organisation")]',
    lbl_CustomerNumber: '//label[contains(text(),"Customer number")]',
    lbl_Country: '//label[contains(text(),"Country")]',
    txt_errorMessage: "//span[contains(@class,'error-message') or ancestor::ds-hint[@tone='critical']]",
    input_emailField: "//input[@id='email']",
    input_organization: "//input[@id='organisation']",
    input_interestedIn: "//input[@id='MARKETING_TRAINING']",
    input_interestedinProcess: "//input[@id='SYSTEM_TRAINING']",
    input_attendees: "//input[@id='attendees']",
    input_comments: "//textarea[@id='myTextarea']",
  };

  /*-------- METHODS ------------ */

  should_Click_TrainingEnquiryForm() {
    cy.xpath(this.elements.tab_help).click({ force: true });
    cy.wait(5000);
    cy.xpath(this.elements.tab_trainingEnquiry).click({ force: true });
    cy.wait(20000);
  }

  //Clicks on drop down and select Brand
  should_Check_ListOfBrands_And_SelectABrand() {
    cy.xpath(this.elements.txt_trainingEnquiryHeading).should("be.visible");
    cy.xpath(this.elements.txt_enquiriesAboutTrainingHead).should("be.visible");
    cy.xpath(this.elements.txt_brandSelectionSideHead).should("be.visible");
    cy.xpath(this.elements.Dropdown_initialBrandSelection).click();
    cy.xpath(this.elements.select_brand).click();
  }

  //Verifies the sections after selecing brand
  should_Check_Sections_After_BrandSelection() {
    cy.xpath(this.elements.txt_input_informationAboutReq).should("be.visible");
    cy.xpath(this.elements.txt_userDataSideHead).should("be.visible");
    cy.xpath(this.elements.txt_organisationDataHead).scrollIntoView().should("be.visible");
  }

  //Verifies the fields under Information about your request section
  should_Check_Fileds_Under_InfoAboutYourReq() {
    cy.xpath(this.elements.txt_YourInterIN).scrollIntoView().should("be.visible");
    cy.xpath(this.elements.txt_commentswishes).scrollIntoView().should("be.visible");
    cy.xpath(this.elements.txt_NOofattendees).scrollIntoView().should("be.visible");
  }

  //Verifies the Organisation Data
  should_Check_Organisariondata() {
    cy.frameLoaded(this.elements.helpIFrame);
    cy.enter(this.elements.helpIFrame).then((p) => {
      p().xpath(this.elements.lbl_Organisation).should("be.visible");
      p().xpath(this.elements.lbl_CustomerNumber).should("be.visible");
      p().xpath(this.elements.lbl_Country).should("be.visible");
    });
  }

  //Fill the details in Information about your request section
  should_Fill_Details_Under_InfoAboutYourReq() {
    cy.xpath(this.elements.checkbox_marketingTraining).scrollIntoView().click();
    cy.xpath(this.elements.checkbox_systemTrainingBTN).scrollIntoView().click();
    cy.xpath(this.elements.input_noOfAttendees).type("04");
    cy.xpath(this.elements.input_ticketCreationDescription).type("test automation");
  }

  //Clciks on Send button
  should_Click_SendButton() {
    cy.xpath(this.elements.btn_send).scrollIntoView().click();
    cy.wait(25000);
  }

  //Validate the User data section anf fill the details
  should_Update_UserData_Section() {
    cy.xpath(this.elements.btn_Title).scrollIntoView().should("be.visible");
    cy.xpath(this.elements.input_Firstname)
      .should("be.visible").scrollIntoView().clear().type("Tester");
    cy.xpath(this.elements.input_Lastname).should("be.visible").clear().type("Test");
    cy.xpath(this.elements.input_Phonenumber).scrollIntoView().should("be.visible").clear();
    cy.xpath(this.elements.input_Phonenumber).scrollIntoView().type("+447911123456");
    cy.xpath(this.elements.input_Email).scrollIntoView().should("be.visible");
    cy.xpath(this.elements.input_Language).should("be.visible");
    cy.xpath(this.elements.btn_Title).click();
    cy.xpath(this.elements.btn_TitleSelectMs).click();
  }
  //Veriifes the error messgaes for each field dispalying properly or not
  should_Verify_Error_Messages() {
    const expectedErrors = [
      "Incorrect input: Select at least one type of training that you are interested in.",
      "Incorrect input: Enter a valid number of attendees.",
      "Incorrect input: Your input must contain between 2 and 1024 characters.",
      "Invalid input: The first name must contain between 1 and 40 characters.",
      "Invalid input: The last name must contain between 1 and 40 characters.",
      // "Invalid input: Please enter a valid international phone number.", // commenting this out as the field is optional now
      "Invalid input: The email address must have between 2 and 100 characters.",
      "Invalid input: The company name must contain between 1 and 100 characters",
    ];
    // cy.frameLoaded(this.elements.helpIFrame);
    // cy.enter(this.elements.helpIFrame).then((p) => {
    //   p().xpath(this.elements.Firsttime).should("be.visible").clear();
    //   p().xpath(this.elements.input_Lastname).should("be.visible").clear();
    //   p().xpath(this.elements.input_Phonenumber).should("be.visible").clear();
    //   p().xpath(this.elements.input_emailField).should("be.visible").clear();
    //   p().xpath(this.elements.input_organization).should("be.visible").clear();
    //   p().xpath(this.elements.input_interestedIn).click();
    //   p().xpath(this.elements.input_interestedinProcess).click();
    //   p().xpath(this.elements.attendees).clear();
    //   p().xpath(this.elements.comments).clear();
    //   p().xpath(this.elements.btn_send).should("be.visible").click();
    //   cy.wait(15000);
    // });
    // cy.enter(this.elements.helpIFrame).then((p) => {
    //   p()
    //     .xpath(this.elements.txt_errorMessage)
    //     .should("have.length.greaterThan", 0);

    //   p()
    //     .xpath(this.elements.txt_errorMessage)
    //     .then(($els) => {
    //       const actualErrors = Cypress.$($els)
    //         .map((i, el) => el.innerText.trim())
    //         .get();
    //       expectedErrors.forEach((expected) => {
    //         expect(actualErrors).to.include(expected);
    //       });

    //       expect(actualErrors.length).to.eq(expectedErrors.length);
    //     });
    // });

    cy.xpath(this.elements.input_Firstname).should("be.visible").clear();
    cy.xpath(this.elements.input_Lastname).should("be.visible").clear();
    cy.xpath(this.elements.input_Phonenumber).should("be.visible").clear();
    cy.xpath(this.elements.input_emailField).should("be.visible").clear();
    cy.xpath(this.elements.input_organization).should("be.visible").clear();

    // Select dropdown/options
    cy.xpath(this.elements.input_interestedIn).click();
    cy.xpath(this.elements.input_interestedinProcess).click();

    // Clear remaining fields
    cy.xpath(this.elements.input_attendees).clear();
    cy.xpath(this.elements.input_comments).clear();

    // Click Send
    cy.xpath(this.elements.btn_send).scrollIntoView().should("be.visible").click();

    // Temporary wait (replace with proper condition if possible)
    cy.wait(15000);

    // --------------------
    // Validate error messages
    // --------------------
    cy.xpath(this.elements.txt_errorMessage).should("have.length.greaterThan", 0).then(($els) => {
      const actualErrors = Cypress.$($els).map((i, el) => el.innerText.trim()).get();
      expectedErrors.forEach((expected) => {
        expect(actualErrors).to.include(expected);
      });

      expect(actualErrors.length).to.eq(expectedErrors.length);
    });
  }

  //Validate the success messge after successfull submission
  should_Validate_Ticket_Success_Message() {
    cy.xpath(this.elements.txt_trainingEnquiry).should("be.visible");
    cy.wait(50000);
    cy.xpath(this.elements.txt_enquirySuccess).should("be.visible");
  }
}
export default TrainingEnquiry;