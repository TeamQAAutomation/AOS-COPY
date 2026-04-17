import guest from "./Guest_UserPage";

class SupportForm {
  /*-------- XPATHS/ELEMENT LOCATORS ------------ */
  locators = {
    tab_helpTab: "[aria-label='Help']" ,//"#help-li",
    tab_supportRequest: "//ds-list-item[@aria-label='Support request']",//"//div[normalize-space(text())='Support request']",
    theIFrame: "#app aos-iframe-page iframe",
    txt_supportRequest : "//h1[normalize-space(text())='Support request']",
    txt_requestToSupport: '//*[contains(text(),"Request to Support")]',
    txt_descriptionOfProblem: "//h2[normalize-space(text())='Description of problem']",
    btn_affectedApplicationDropdown: "(//button[.//span[text()='Please select ']])[1]",
    btn_typeOfProblemDropdown: 
      "//span[normalize-space()='Please select the previously affected application']",
    //"//div[contains(@class,'col')]/child::select[contains(@id,'problem-type')]",
    btn_frequencyDropdown: "//ds-select[@formcontrolname='frequency']",
    btn_abilityToWorkDropdown: "//ds-select[@formcontrolname='workAbility']",
    textArea_descriptionOfProblem: "//textarea[contains(@formcontrolname,'problemDescription')]",
    txt_technicalDataHeading: "//*[contains(text(),'Technical data') or contains(text(),'기술자료') ]",
    btn_OSDropdown: "//ds-select[@formcontrolname='operatingSystem']",
    btn_browserDropdown: "//ds-select[@formcontrolname='browser']",
    btn_browserVersionDropdown: "//input[@formcontrolname='version']",
    btn_javaVersionDropdown: "//ds-select[@formcontrolname='javaVersion']",
    input_problemOccurenceDate: "//input[contains(@formcontrolname,'date')]",
    input_problemOccurenceTime: "//input[contains(@formcontrolname,'time')]",
    txt_userDataHeading: "//*[contains(text(),'User data') or contains(text(),'사용자 데이터')]",
    txt_organisationDataHeading: "//*[contains(text(),'Organisation data')]",
    btn_send: "//span[contains(text(),'Send')]",
    //txt_errorMessages: "//span[contains(@class,'error-message') or ancestor::ds-hint[@tone='critical']]",

    txt_myData: "//*[contains(text(),'Ticketing Systems') or contains(text(),'내 데이터')]",
    txt_enquirySuccess:
      "//*[contains(text(), 'Your enquiry has been successfully sent') or contains(text(),'귀하의 문의가 성공적으로 전송되었습니다.')]",
    btn_salutation: "//ds-select[contains(@formcontrolname,'salutation')]",
    input_userdata_firstname: "//input[contains(@formcontrolname,'firstName')]",
    input_userdata_lastname: "//input[contains(@formcontrolname,'lastName')]",
    input_userdata_phonenumber: "//input[contains(@formcontrolname,'phone')]",
    input_userdata_email: "//input[contains(@formcontrolname,'email')]",
    btn_userdata_language: "//ds-select[contains(@formcontrolname,'language')]",
    btn_userdata_timezone: "//ds-select[contains(@formcontrolname,'timeZoneId')]",
    input_userdata_organization: "//input[contains(@id,'organisation')]",
    btn_userdata_country: "//button[@id='country-open-button']",
    userdata_checkbox: "//input[contains(@id,'licenceConditions')]",
    txt_supportReqTextkorea: "//h2[contains(text(),'지원 센터에 요청')]",
    txt_requestToSupportTextkorea: "//div//h2[contains(text(),'지원 센터에 요청')]",
    txt_descriptionOfProblemtextkorea: "//div//h3[contains(text(),'문제 설명')]",
    txt_technicalDataHeadingTextkorea: "//h3[contains(text(),'기술자료')]",
    txt_userDataHeadingTextkorea: "//h3[contains(text(),'사용자 데이터')]",
    txt_organisationDataHeadingText: "//h2[contains(text(),'Organisation data')]",
    txt_organisationDataHeadingTextkorea: "//h3[contains(text(),'조직에 대한 데이터')]",
    txt_enquirySuccessTextkorea: "//h2[contains(text(),'귀하의 문의가 성공적으로 전송되었습니다.')]",
    input_clickonDate: "//span[contains(@id,'sf-protected:ticket-creation-form:occurred-at-hint')]",
    input_filterSearch: "//input[@placeholder='Filter']",
    btn_timeZone: "(//span[contains(normalize-space(.), 'Central European Time')])[1]",
    btn_attachments: "//div//button[@role='button'][.//span[contains(text(),'Attachments')]]",
    txt_errorMessages: "//div[@class='error-message ng-star-inserted']",
    btn_salutationContent: '.ds-list-item__content-wrapper',
    btn_timeZoneContent: '.ds-list-item__content'
  };

  /*-------- METHODS ------------ */

  // Creates a support request either as a standard/Leagal user or a guest user
  should_Create_Support_Request() {
    const guestuser = new guest();
    cy.url().then((currentUrl) => {
      if (currentUrl.includes("startpage")) {
        this.should_Click_SupportRequest();
        this.should_Fill_Description_Of_Problem_Section();
        this.should_Fill_TechnicalData_Section();
        this.should_Update_UserData_Section_For_ROW();
        this.should_Click_SendButton();
        cy.wait(10000);
      } else {
        cy.wait(2000);
        this.should_Click_SupportRequest();
        this.should_Fill_Description_Of_Problem_Section();
        this.should_Fill_TechnicalData_Section();
        this.should_Update_UserData_Section_For_ROW();
        this.should_Fill_OrganisationData_Section_For_ROW();
        this.should_AcceptConditions_As_Guest();
        this.should_Click_SendButton();
        cy.wait(10000);
      }
    });
  }

  // Verifies the error messages for support request
  should_Verify_SupportRequest_Error_Messages() {
    const guestuser = new guest();

    cy.url().then((currentUrl) => {
      if (currentUrl.includes("startpage")) {
        this.should_Click_SupportRequest();
        this.should_Fill_Description_Of_Problem_Section();
        this.should_Fill_TechnicalData_Section();
        this.should_Update_UserData_Section_For_ROW();
       // cy.frameLoaded(this.locators.theIFrame, { timeout: 60000 });
        // cy.enter(this.locators.theIFrame).then((p) => {
          // clear mandatory fields
         cy.xpath(this.locators.textArea_descriptionOfProblem).clear();
          cy.xpath(this.locators.btn_browserVersionDropdown).clear();
          cy.xpath(this.locators.input_problemOccurenceDate).clear();
          cy.xpath(this.locators.input_userdata_firstname).clear();
          cy.xpath(this.locators.input_userdata_lastname).clear();
          cy.xpath(this.locators.input_userdata_phonenumber).clear();
          cy.xpath(this.locators.input_userdata_email).clear();
          cy.xpath(this.locators.input_userdata_organization).clear();
       // });
        // Click the send button to submit empty fields
        this.should_Click_SendButton();
        cy.wait(2000);
        // Expected error messages for validation
        const expectedErrors = [
          "Invalid input: The description must contain between 2 and 1024 characters.",
          "Invalid input: Please indicate when the problem occurred.",
          "Invalid input: The first name must contain between 1 and 40 characters.",
          "Invalid input: The last name must contain between 1 and 40 characters.",
          // "Invalid input: Please enter a valid international phone number.", //optional field now
          "Invalid input: The email address must have between 2 and 100 characters.",
          "Invalid input: The company name must contain between 1 and 100 characters",
        ];
        // Verify that the displayed errors match the expected errors
        this.should_Verify_Errors_In_SupportRequest(expectedErrors);
      } else {
        // Guest user flow
        cy.wait(2000);
        this.should_Click_SupportRequest();
        this.should_Fill_Description_Of_Problem_Section();
        this.should_Fill_TechnicalData_Section();
        this.should_Update_UserData_Section_For_ROW();
        this.should_Fill_OrganisationData_Section_For_ROW();
        this.should_AcceptConditions_As_Guest();
        cy.frameLoaded(this.locators.theIFrame, { timeout: 60000 });
        cy.enter(this.locators.theIFrame).then((p) => {
          // clear mandatory fields for guest
          p().xpath(this.locators.textArea_descriptionOfProblem).clear();
          p().xpath(this.locators.btn_browserVersionDropdown).clear();
          p().xpath(this.locators.input_problemOccurenceDate).clear();
          p().xpath(this.locators.input_userdata_organization).clear();
          p().xpath(this.locators.input_userdata_firstname).clear();
          p().xpath(this.locators.input_userdata_lastname).clear();
          p().xpath(this.locators.input_userdata_phonenumber).clear();
          p().xpath(this.locators.input_userdata_email).clear();
        });
        this.should_Click_SendButton();
        cy.wait(2000);
        /*const expectedErrors = [
        "Invalid input: The description must contain between 2 and 1024 characters.",
        "Invalid input: Please indicate when the problem occurred.",
        "Invalid input: The first name must contain between 1 and 40 characters.",
        "Invalid input: The last name must contain between 1 and 40 characters.",
        "Invalid input: Please enter a valid international phone number.",
        "Invalid input: The email address must have between 2 and 100 characters.",
      ];
      this.verifyErrorsMatch(expectedErrors);*/
      }
    });
  }

  //  Compare actual vs expected error messages
  should_Verify_Errors_In_SupportRequest(expectedErrors) {
    // cy.enter(this.locators.theIFrame).then((p) => {
    //   p()
    cy.xpath(this.locators.txt_errorMessages).then(($els) => {
      const actualErrors = [...$els].map((el) => el.innerText.trim());
      expect(actualErrors).to.deep.equal(expectedErrors);
    });
   // });
  }

  // Creates a support request for the given application and problem type (ROW)
  should_Create_SupportRequest_BasedOn_ProblemType(affectedApplication, problemtype) {
    const guestuser = new guest();
    cy.url().then((currentUrl) => {
      if (currentUrl.includes("public")) {
        guestuser.click_on_navigation_bar();
        cy.wait(2000);
        this.should_Click_SupportRequest();
        this.should_Fill_Description_Of_Problem_Section_For_ROW(affectedApplication, problemtype);
        this.should_Fill_TechnicalData_Section();
        this.should_Update_UserData_Section_For_ROW();
        this.should_Fill_OrganisationData_Section_For_ROW();
        this.should_AcceptConditions_As_Guest();
        this.should_Click_SendButton();
        cy.wait(20000);
      } else {
        cy.log('Reached before description-of-problem method');
        this.should_Click_SupportRequest();
        this.should_Fill_Description_Of_Problem_Section_For_ROW(affectedApplication, problemtype);
        this.should_Fill_TechnicalData_Section();
        this.should_Update_UserData_Section_For_ROW();
        //  this.should_Fill_OrganisationData_Section_For_ROW();
        this.should_Click_SendButton();
        cy.wait(20000);
      }
      // cy.frameLoaded(this.locators.theIFrame, { timeout: 30000 });
      // cy.enter(this.locators.theIFrame).then((q) => {
      //   //Verify the success message after creating support request
      //   q().xpath(this.locators.enquirySuccessText).should("be.visible");
      // });

      // Verify the success message after creating support request
      cy.xpath(this.locators.txt_enquirySuccess)
        .should("be.visible");

    });
  }
  // Creates a support request for the given application and problem type (KR)
  should_Create_SupportRequest_For_KR_BasedOn_ProblemType(affectedApplication, problemtype) {
    const guestuser = new guest();
    cy.url().then((currentUrl) => {
      if (currentUrl.includes("startpage")) {
        this.should_Click_SupportRequest();
        this.should_Fill_Description_Of_Problem_Section_For_Korea(affectedApplication, problemtype);
        this.should_Fill_TechnicalData_Section_For_Korea();
        this.should_Update_UserData_Section_For_Korea();
        this.should_Click_SendButton();
        cy.wait(20000);
      } else {
        cy.wait(2000);
        this.should_Click_SupportRequest();
        this.should_Fill_Description_Of_Problem_Section_For_Korea(affectedApplication, problemtype);
        this.should_Fill_TechnicalData_Section_For_Korea();

        this.should_Fill_OrganisationData_Section_For_Korea();
        this.should_Update_UserData_Section_For_Korea();
        this.should_AcceptConditions_As_Guest();
        this.should_Click_SendButton();
        cy.wait(20000);
      }
      cy.frameLoaded(this.locators.theIFrame, { timeout: 30000 });
      cy.enter(this.locators.theIFrame).then((q) => {
        //Verify the success message after creating support request
        q().xpath(this.locators.txt_enquirySuccessTextkorea).should("be.visible");
      });
    });
  }

  // Fills the support request form  for Korea
  should_Fill_Description_Of_Problem_Section_For_Korea(affectedApplication, problemtype) {
    cy.frameLoaded(this.locators.theIFrame, { timeout: 60000 });
    cy.enter(this.locators.theIFrame).then((p) => {
      p().xpath(this.locators.txt_supportReqTextkorea).should("be.visible");
      p().xpath(this.locators.txt_requestToSupportTextkorea).should("be.visible");
      p().xpath(this.locators.txt_descriptionOfProblemtextkorea).should("be.visible");
      p().xpath(this.locators.btn_affectedApplicationDropdown).select(affectedApplication);
      cy.wait(10000);
      p().xpath(this.locators.btn_typeOfProblemDropdown).select(problemtype);
      p().xpath(this.locators.btn_frequencyDropdown)
        .select("PERMANENTLY").should("have.value", "PERMANENTLY");
      p().xpath(this.locators.btn_abilityToWorkDropdown)
        .select("COMPLETELY").should("have.value", "COMPLETELY");
      p().xpath(this.locators.textArea_descriptionOfProblem).type("testing purpose");
    });
  }

  // Fills the Description of the Problem section for ROW
  should_Fill_Description_Of_Problem_Section_For_ROW(affectedApplication, problemtype) {
    // cy.frameLoaded(this.locators.theIFrame, { timeout: 60000 });
    // cy.enter(this.locators.theIFrame).then((p) => {
    //   p().xpath(this.locators.requestToSupportText).should("be.visible");
    //   p().xpath(this.locators.descriptionOfProblem).should("be.visible");
    //   p()
    //     .xpath(this.locators.affectedApplicationDropdown)
    //     .select(affectedApplication);
    //   cy.wait(30000);
    //   p().xpath(this.locators.typeOfProblemDropdown).select(problemtype);

    //   p()
    //     .xpath(this.locators.frequencyDropdown)
    //     .select("PERMANENTLY")
    //     .should("have.value", "PERMANENTLY");
    //   p()
    //     .xpath(this.locators.abilityToWorkDropdown)
    //     .select("COMPLETELY")
    //     .should("have.value", "COMPLETELY");
    //   p().xpath(this.locators.descriptionOfProbTexArea).type("testing purpose");
    // });

    // Verify texts are visible
    cy.xpath(this.locators.txt_requestToSupport).should("be.visible");

    cy.xpath(this.locators.txt_descriptionOfProblem).should("be.visible");

    // Select affected application
    // cy.xpath(this.locators.affectedApplicationDropdown)
    //   .select(affectedApplication);

    // Open affected application dropdown
    // cy.xpath(this.locators.affectedApplicationDropdown)
    //   .should('be.visible')
    //   .click();

    cy.xpath(this.locators.btn_affectedApplicationDropdown).should('be.visible').type(affectedApplication);

    // click the option that CONTAINS the searched text
    cy.contains('span', affectedApplication).should('be.visible').click();


    // Temporary wait (replace with condition if possible)
    cy.wait(30000);

    // Select problem type
    // cy.xpath(this.locators.typeOfProblemDropdown)
    //   .select(problemtype);

    cy.xpath(this.locators.btn_typeOfProblemDropdown).should('be.visible').type(problemtype);

    // click the option that CONTAINS the searched text
    cy.contains('span', problemtype).should('be.visible').click();

    // Select frequency and verify
    // cy.xpath(this.locators.frequencyDropdown)
    //   .select("PERMANENTLY")
    //   .should("have.value", "PERMANENTLY");

    cy.xpath(this.locators.btn_frequencyDropdown).should('be.visible').type("Permanently");

    // click the option that CONTAINS the searched text
    cy.contains('span', "Permanently").should('be.visible').click();

    // Select ability to work and verify
    // cy.xpath(this.locators.abilityToWorkDropdown)
    //   .select("COMPLETELY")
    //   .should("have.value", "COMPLETELY");

    cy.xpath(this.locators.btn_abilityToWorkDropdown).should('be.visible').type("Completely");

    // click the option that CONTAINS the searched text
    cy.contains('span', "Completely").should('be.visible').click();

    // Enter problem description
    cy.xpath(this.locators.textArea_descriptionOfProblem)
      .type("testing purpose");

  }
  //Create Support Request for US
  should_Create_SupportRequest_For_USPortal(affectedApplication, problemtype) {
    const guestuser = new guest();
    cy.url().then((currentUrl) => {
      if (currentUrl.includes("startpage")) {
        this.should_Click_SupportRequest();
        this.should_Fill_Description_Of_Problem_Section_For_ROW(affectedApplication, problemtype);
        this.should_Fill_TechnicalData_Section();
        this.should_Update_PhoneNumber_In_UserData_Section();
        this.should_Click_SendButton();
        cy.wait(20000);
      } else {
        cy.wait(2000);
        this.should_Click_SupportRequest();
        this.should_Fill_Description_Of_Problem_Section_For_ROW(affectedApplication, problemtype);
        this.should_Fill_TechnicalData_Section();
        this.should_Update_UserData_Section_For_US();
        this.should_Fill_OrganisationData_Section_For_ROW();
        this.should_AcceptConditions_As_Guest();
        this.should_Click_SendButton();
        cy.wait(20000);
      }
      cy.frameLoaded(this.locators.theIFrame, { timeout: 30000 });
      cy.enter(this.locators.theIFrame).then((q) => {
        q().xpath(this.locators.txt_enquirySuccess).should("be.visible");
      });
    });
  }
  // // Fills the Description of the Problem section
  // should_Fill_Description_Of_Problem_Section_For_ROW(affectedApplication, problemtype) {
  //   cy.frameLoaded(this.locators.theIFrame, { timeout: 60000 });
  //   cy.enter(this.locators.theIFrame).then((p) => {
  //     p().xpath(this.locators.requestToSupportText).should("be.visible");
  //     p().xpath(this.locators.descriptionOfProblem).should("be.visible");
  //     p()
  //       .xpath(this.locators.affectedApplicationDropdown)
  //       .select(affectedApplication);
  //     cy.wait(30000);
  //     p().xpath(this.locators.typeOfProblemDropdown).select(problemtype);

  //     p()
  //       .xpath(this.locators.frequencyDropdown)
  //       .select("PERMANENTLY")
  //       .should("have.value", "PERMANENTLY");
  //     p()
  //       .xpath(this.locators.abilityToWorkDropdown)
  //       .select("COMPLETELY")
  //       .should("have.value", "COMPLETELY");
  //     p().xpath(this.locators.descriptionOfProbTexArea).type("testing purpose");
  //   });
  // }

  //Clicks on Support Request
  should_Click_SupportRequest() {
    cy.wait(10000);
    cy.get(this.locators.tab_helpTab).should("be.visible").click({ force: true });
    cy.wait(10000);
    cy.xpath(this.locators.tab_supportRequest).should("be.visible").click({ force: true });
    cy.wait(10000);
  }

  //Verify and fill the Description section in Support request page
  should_Fill_Description_Of_Problem_Section() {
    cy.xpath(this.locators.txt_requestToSupport).should("be.visible");
    cy.log("support text displayed");
    cy.xpath(this.locators.txt_descriptionOfProblem).should("be.visible");
    cy.log("description text text displayed");
    cy.xpath(this.locators.btn_affectedApplicationDropdown).click();
    cy.contains("Portal").click();
    cy.wait(10000);
    cy.xpath(this.locators.btn_typeOfProblemDropdown).click();
    cy.contains("General enquiry").click();
    cy.xpath(this.locators.btn_frequencyDropdown).click();
    cy.contains("Permanently").click();
    cy.xpath(this.locators.btn_abilityToWorkDropdown).click();
    cy.contains("Completely").click();
    cy.xpath(this.locators.textArea_descriptionOfProblem).type("testing purpose");
  }

  //Verify and fill the Technical Data section in Support request page
  should_Fill_TechnicalData_Section() {
    cy.xpath(this.locators.txt_technicalDataHeading).should("be.visible");
    cy.wait(1000);
    cy.xpath(this.locators.btn_OSDropdown).should("contain.text", "Windows 10");
    cy.xpath(this.locators.btn_browserDropdown).should("contain.text", "Chrome");
    cy.xpath(this.locators.btn_browserVersionDropdown).type("10.0.0.0");
    cy.wait(1000);
    cy.xpath(this.locators.btn_javaVersionDropdown).click();
    cy.contains("Java 6.5 or higher").click();
    cy.xpath(this.locators.input_problemOccurenceDate).type("2024-05-29");
    cy.xpath(this.locators.input_problemOccurenceTime).clear().type("10:45");
  }

  //Verify and fill the Technical Data section in Support request page for Korea
  should_Fill_TechnicalData_Section_For_Korea() {
    cy.frameLoaded(this.locators.theIFrame, { timeout: 30000 });
    cy.enter(this.locators.theIFrame).then((p) => {
      // p().xpath(this.locators.technicalDataHeadingTextkorea).should("be.visible");
      // p()
      //   .xpath(this.locators.OSDropdown)
      //   .select("WINDOWS_10")
      //   .should("have.value", "WINDOWS_10");
      // p()
      //   .xpath(this.locators.browserDropdown)
      //   .select("CHROME")
      //   .should("have.value", "CHROME");
      // p().xpath(this.locators.browserVersionDropdown).type("10.0.0.0");
      // p()
      //   .xpath(this.locators.javaVersionDropdown)
      //   .select("JAVA_6_DOT_5_OR_HIGHER")
      //   .should("have.value", "JAVA_6_DOT_5_OR_HIGHER");
      //p().xpath("//div[contains(@class,'col')]/child::select[contains(@id,'local-admin-rights')]").select('No').should('have.value','No')
      p().xpath(this.locators.input_problemOccurenceDate).type("2024-05-29 10:45");
      p().xpath(this.locators.input_clickonDate).click();
    });
  }

  //Updates teh user data
  should_Update_PhoneNumber_In_UserData_Section() {
    cy.frameLoaded(this.locators.theIFrame, { timeout: 30000 });
    cy.enter(this.locators.theIFrame).then((p) => {
      p().xpath(this.locators.txt_userDataHeading).should("be.visible");
      p().xpath(this.locators.input_userdata_phonenumber)
        .should("be.visible").clear().type("0049 893820");
    });
  }

  // Verify and fill the User Data section in Support request page for ROW
  should_Update_UserData_Section_For_ROW() {
    cy.xpath(this.locators.txt_userDataHeading).should("be.visible");
    cy.xpath(this.locators.btn_salutation).should('be.visible').type("Mr");
    cy.contains('mark', "Mr").parents(this.locators.btn_salutationContent).should('be.visible').click();
    //cy.xpath(this.locators.salutation).should("contain.text", "Mr");

    cy.xpath(this.locators.input_userdata_firstname)
      .should("be.visible").clear().type("tester");
    cy.xpath(this.locators.input_userdata_lastname)
      .should("be.visible").clear().type("balaga");
    cy.xpath(this.locators.input_userdata_phonenumber)
      .should("be.visible").clear().type("0049 893820");
    cy.xpath(this.locators.input_userdata_email)
      .should("be.visible").clear().type("jaga.sample@bmw.com");
    cy.xpath(this.locators.btn_userdata_language).click();
    cy.contains("Deutsch").click();
    cy.xpath(this.locators.btn_userdata_timezone).click();
    cy.xpath(this.locators.input_filterSearch)
      .should("be.visible").clear().type("(UTC +01:00) Central European Time");
    //cy.xpath(this.locators.timeZone).closest('.ds-select__fake-input').should("be.visible").click();
    cy.contains('mark', 'Central European Time').scrollIntoView()
      .closest(this.locators.btn_timeZoneContent).should('be.visible').click();
  }

  // Verify and fill the User Data section in Support request page for US
  should_Update_UserData_Section_For_US() {
    cy.frameLoaded(this.locators.theIFrame, { timeout: 30000 });
    cy.enter(this.locators.theIFrame).then((p) => {
      p().xpath(this.locators.txt_userDataHeading).should("be.visible");

      p().xpath(this.locators.btn_salutation).select("Mr").should("have.value", "MISTER");
      p().xpath(this.locators.input_userdata_firstname).should("be.visible").type("tester");
      p().xpath(this.locators.input_userdata_lastname).should("be.visible").type("balaga");
      p().xpath(this.locators.input_userdata_phonenumber)
        .should("be.visible").clear().type("0049 893820");
      p().xpath(this.locators.input_userdata_email)
        .should("be.visible").type("jaga.sample@bmw.com");
      p().xpath(this.locators.btn_userdata_language).select("Deutsch").should("have.value", "GERMAN");
      p().xpath(this.locators.btn_userdata_timezone)
        .select("(UTC +01:00) Central European Time").should("have.value", "CET");
    });
  }

  // Verify and fill the User Data section in Support request page for Korea
  should_Update_UserData_Section_For_Korea() {
    cy.frameLoaded(this.locators.theIFrame, { timeout: 30000 });
    cy.enter(this.locators.theIFrame).then((p) => {
      p().xpath(this.locators.txt_userDataHeadingTextkorea).should("be.visible");
      p().xpath(this.locators.btn_salutation).select("미스터(Mr.)").should("have.value", "MISTER");
      p().xpath(this.locators.input_userdata_firstname).should("be.visible").type("tester");
      p().xpath(this.locators.input_userdata_lastname).should("be.visible").type("balaga");
      p().xpath(this.locators.input_userdata_phonenumber).should("be.visible")
        .clear().type("0049893820");
      p().xpath(this.locators.input_userdata_email).should("be.visible")
        .clear().type("jaga.sample@bmw.com");
      // p().xpath(this.locators.userdata_language)
      //   .select("Deutsch")
      //   .should("have.value", "GERMAN");
      // p().xpath(this.locators.userdata_timezone)
      //   .select("(UTC +01:00) Central European Time")
      //   .should("have.value", "CET");
    });
  }

  //Verify  and fill the Organization data for ROW
  should_Fill_OrganisationData_Section_For_ROW() {
    // cy.frameLoaded(this.locators.theIFrame, { timeout: 30000 });
    // cy.enter(this.locators.theIFrame).then((p) => {
    //   p().xpath(this.locators.organisationDataHeadingText).should("be.visible");
    //   p()
    //     .xpath(this.locators.userdata_organization_name)
    //     .should("be.visible")
    //     .type("Sampleorg");
    //   p()
    //     .xpath(this.locators.userdata_country)
    //     .select("Germany")
    //     .should("have.value", "DE");

    //   cy.wait(25000);
    // });

    // Verify organisation data heading
    cy.xpath(this.locators.txt_organisationDataHeading).should("be.visible");

    // Enter organisation name
    cy.xpath(this.locators.input_userdata_organization).should("be.visible").type("Sampleorg");

    // Select country and verify
    cy.xpath(this.locators.btn_userdata_country).click();
    cy.xpath(this.locators.input_filterSearch).should("be.visible").clear().type("Germany");
    cy.contains('mark', 'Germany').closest(this.locators.btn_timeZoneContent).should('be.visible').click();

    // Temporary wait (replace with proper condition if possible)
    cy.wait(25000);
  }

  //Verify and fill the Organization data for Korea
  should_Fill_OrganisationData_Section_For_Korea() {
    cy.frameLoaded(this.locators.theIFrame, { timeout: 30000 });
    cy.enter(this.locators.theIFrame).then((p) => {
      p().xpath(this.locators.txt_organisationDataHeadingTextkorea).should("be.visible");
      p().xpath(this.locators.input_userdata_organization).should("be.visible").type("Sampleorg");
      // p().xpath(this.locators.userdata_country)
      //   .select("Germany")
      //   .should("have.value", "DE");

      cy.wait(25000);
    });
  }

  should_Click_SendButton() {
    cy.xpath(this.locators.btn_send).click();
  }

  //Accept the Terms and Conditions
  should_AcceptConditions_As_Guest() {
    cy.frameLoaded(this.locators.theIFrame, { timeout: 30000 });
    cy.enter(this.locators.theIFrame).then((p) => {
      p().xpath(this.locators.userdata_checkbox).should("be.visible").check();
    });
  }

  //Verify and fill the details and clicks on Send button in support request form
  should_Create_SupportRequest_Form() {
    cy.wait(5000);
    cy.get(this.locators.tab_helpTab).should("be.visible").click({ force: true });
    cy.wait(5000);
    cy.xpath(this.locators.tab_supportRequest).should("be.visible").click({ force: true });
    cy.wait(30000);
    cy.frameLoaded(this.locators.theIFrame, { timeout: 30000 });
    cy.enter(this.locators.theIFrame).then((p) => {
      p().xpath(this.locators.txt_supportRequest).should("be.visible");
      p().xpath(this.locators.txt_requestToSupport).should("be.visible");
      p().xpath(this.locators.txt_descriptionOfProblem).should("be.visible");
      p().xpath(this.locators.btn_affectedApplicationDropdown)
        .select("Portal").should("have.value", "AOS-PORTAL-ANONYMOUS");
      cy.wait(20000);
      p().xpath(this.locators.btn_typeOfProblemDropdown)
        .select("Technical problem").should("have.value", "TECHNICAL_PROB");
      p().xpath(this.locators.btn_frequencyDropdown)
        .select("PERMANENTLY").should("have.value", "PERMANENTLY");
      p().xpath(this.locators.btn_abilityToWorkDropdown)
        .select("COMPLETELY").should("have.value", "COMPLETELY");
      p().xpath(this.locators.textArea_descriptionOfProblem).type("testing purpose");
      cy.wait(5000);
      p().xpath(this.locators.txt_technicalDataHeading).should("be.visible");
      p().xpath(this.locators.btn_OSDropdown).select("WINDOWS_10").should("have.value", "WINDOWS_10");
      p().xpath(this.locators.btn_browserDropdown).select("CHROME").should("have.value", "CHROME");
      p().xpath(this.locators.btn_browserVersionDropdown).type("10.0.0.0");
      p().xpath(this.locators.btn_javaVersionDropdown)
        .select("JAVA_6_DOT_5_OR_HIGHER").should("have.value", "JAVA_6_DOT_5_OR_HIGHER");
      p().xpath(this.locators.input_problemOccurenceDate).type("2024-05-29 10:45");
      p().xpath(this.locators.txt_userDataHeading).should("be.visible");
      p().xpath(this.locators.btn_salutation).select("Mr").should("have.value", "MISTER");
      p().xpath(this.locators.input_userdata_firstname).should("be.visible").type("tester");
      p().xpath(this.locators.input_userdata_lastname).should("be.visible").type("balaga");
      p().xpath(this.locators.input_userdata_phonenumber)
        .should("be.visible").clear().type("0049 893820");
      p().xpath(this.locators.input_userdata_email).should("be.visible").type("jaga.sample@bmw.com");
      p().xpath(this.locators.btn_userdata_language).select("Deutsch").should("have.value", "GERMAN");
      p().xpath(this.locators.btn_userdata_timezone).select("(UTC +01:00) Central European Time")
        .should("have.value", "CET");
      p().xpath(this.locators.txt_organisationDataHeading).should("be.visible");
      p().xpath(this.locators.input_userdata_organization).should("be.visible").type("Sampleorg");
      p().xpath(this.locators.btn_userdata_country).select("Germany").should("have.value", "DE");
      p().xpath(this.locators.userdata_checkbox).should("be.visible").check();
      p().xpath(this.locators.btn_send).click();
      cy.wait(15000);
    });

    cy.frameLoaded(this.locators.theIFrame, { timeout: 30000 });
    cy.enter(this.locators.theIFrame).then((q) => {
      q().xpath(this.locators.txt_myData).should("be.visible");
      q().xpath(this.locators.txt_enquirySuccess).should("be.visible");
    });
  }

  //Verify and fill the details and clicks on Send button in support request form for US
  should_Create_SupportRequest_Form_For_US() {
    cy.wait(5000);
    cy.get(this.locators.tab_helpTab).should("be.visible").click({ force: true });
    cy.wait(5000);
    cy.xpath(this.locators.tab_supportRequest).should("be.visible").click({ force: true });
    cy.wait(30000);
    cy.frameLoaded(this.locators.theIFrame, { timeout: 30000 });
    cy.enter(this.locators.theIFrame).then((p) => {
      p().xpath(this.locators.txt_supportRequest).should("be.visible");
      p().xpath(this.locators.txt_requestToSupport).should("be.visible");
      p().xpath(this.locators.txt_descriptionOfProblem).should("be.visible");
      p().xpath(this.locators.btn_affectedApplicationDropdown)
        .select("Portal").should("have.value", "AOS-PORTAL-ANONYMOUS");
      cy.wait(20000);
      p().xpath(this.locators.btn_typeOfProblemDropdown)
        .select("Technical problem").should("have.value", "TECHNICAL_PROB");
      p().xpath(this.locators.btn_frequencyDropdown)
        .select("PERMANENTLY").should("have.value", "PERMANENTLY");
      p().xpath(this.locators.btn_abilityToWorkDropdown)
        .select("COMPLETELY").should("have.value", "COMPLETELY");
      p().xpath(this.locators.textArea_descriptionOfProblem).type("testing purpose");
      cy.wait(5000);
      p().xpath(this.locators.txt_technicalDataHeading).should("be.visible");
      p().xpath(this.locators.btn_OSDropdown)
        .select("WINDOWS_10").should("have.value", "WINDOWS_10");
      p().xpath(this.locators.btn_browserDropdown).select("CHROME").should("have.value", "CHROME");
      p().xpath(this.locators.btn_browserVersionDropdown).type("10.0.0.0");
      p().xpath(this.locators.btn_javaVersionDropdown)
        .select("JAVA_6_DOT_5_OR_HIGHER").should("have.value", "JAVA_6_DOT_5_OR_HIGHER");
      p().xpath(this.locators.input_problemOccurenceDate).type("2024-05-29 10:45");
      p().xpath(this.locators.txt_userDataHeading).should("be.visible");
      p().xpath(this.locators.btn_salutation).select("Mr").should("have.value", "MISTER");
      p().xpath(this.locators.input_userdata_firstname).should("be.visible").type("tester");
      p().xpath(this.locators.input_userdata_lastname).should("be.visible").type("balaga");
      p().xpath(this.locators.input_userdata_phonenumber).should("be.visible")
        .clear().type("0049 893820");
      p().xpath(this.locators.input_userdata_email).should("be.visible").type("jaga.sample@bmw.com");
      p().xpath(this.locators.btn_userdata_language).select("Deutsch").should("have.value", "GERMAN");
      p().xpath(this.locators.btn_userdata_timezone)
        .select("(UTC +01:00) Central European Time").should("have.value", "CET");
      p().xpath(this.locators.txt_organisationDataHeading).should("be.visible");
      p().xpath(this.locators.input_userdata_organization).should("be.visible").type("Sampleorg");
      p().xpath(this.locators.btn_userdata_country).select("Germany").should("have.value", "DE");
      p().xpath(this.locators.userdata_checkbox).should("be.visible").check();
      p().xpath(this.locators.btn_send).click();

      cy.wait(15000);
    });

    cy.frameLoaded(this.locators.theIFrame, { timeout: 30000 });
    cy.enter(this.locators.theIFrame).then((q) => {
      q().xpath(this.locators.txt_myData).should("be.visible");
      q().xpath(this.locators.txt_enquirySuccess).should("be.visible");
    });
  }
  
  //Verify and fill the details and clicks on Send button in support request form for Korea
  should_Create_SupportRequest_Form_For_Korea() {
    cy.wait(5000);
    cy.get(this.locators.tab_helpTab).should("be.visible").click({ force: true });
    cy.wait(5000);
    cy.xpath(this.locators.tab_supportRequest).should("be.visible").click({ force: true });
    cy.wait(30000);
    cy.frameLoaded(this.locators.theIFrame, { timeout: 30000 });
    cy.enter(this.locators.theIFrame).then((p) => {
      p().xpath(this.locators.txt_supportRequest).should("be.visible");
      p().xpath(this.locators.txt_requestToSupport).should("be.visible");
      p().xpath(this.locators.txt_descriptionOfProblem).should("be.visible");
      p().xpath(this.locators.btn_affectedApplicationDropdown)
        .select("P code").should("have.value", "PCODE");
      cy.wait(20000);
      p().xpath(this.locators.btn_typeOfProblemDropdown).select("Operation")
      p().xpath(this.locators.btn_frequencyDropdown).select("지속적")
        .should("have.value", "PERMANENTLY");
      p().xpath(this.locators.btn_abilityToWorkDropdown)
        .select("Completely").should("have.value", "COMPLETELY");
      p().xpath(this.locators.textArea_descriptionOfProblem).type("testing purpose");
      cy.wait(5000);
      p().xpath(this.locators.txt_technicalDataHeading).should("be.visible");
      p().xpath(this.locators.btn_OSDropdown)
        .select("Windows 10").should("have.value", "WINDOWS_10");
      p().xpath(this.locators.btn_browserDropdown)
        .select("크롬(Chrome)").should("have.value", "CHROME");
      p().xpath(this.locators.btn_browserVersionDropdown).type("141.0.0.0");
      p().xpath(this.locators.btn_javaVersionDropdown)
        .select("JAVA_6_DOT_5_OR_HIGHER").should("have.value", "JAVA_6_DOT_5_OR_HIGHER");
      p().xpath(this.locators.input_problemOccurenceDate).type("2024-05-29 10:45");
      p().xpath(this.locators.txt_userDataHeading).should("be.visible");
      p().xpath(this.locators.btn_salutation).select("Mr").should("have.value", "MISTER");
      p().xpath(this.locators.input_userdata_firstname).should("be.visible").type("tester");
      p().xpath(this.locators.input_userdata_lastname).should("be.visible").type("balaga");
      p().xpath(this.locators.input_userdata_phonenumber).should("be.visible")
        .clear().type("0049 893820");
      p().xpath(this.locators.input_userdata_email).should("be.visible").type("jaga.sample@bmw.com");
      p().xpath(this.locators.btn_userdata_language).select("Deutsch").should("have.value", "GERMAN");
      p().xpath(this.locators.btn_userdata_timezone)
        .select("(UTC +01:00) Central European Time").should("have.value", "CET");
      p().xpath(this.locators.txt_organisationDataHeading).should("be.visible");
      p().xpath(this.locators.input_userdata_organization)
        .should("be.visible").type("Sampleorg");
      p().xpath(this.locators.btn_userdata_country).select("Germany").should("have.value", "DE");
      p().xpath(this.locators.userdata_checkbox).should("be.visible").check();
      p().xpath(this.locators.btn_send).click();

      cy.wait(15000);
    });

    cy.frameLoaded(this.locators.theIFrame, { timeout: 30000 });
    cy.enter(this.locators.theIFrame).then((q) => {
      q().xpath(this.locators.txt_myData).should("be.visible");
      q().xpath(this.locators.txt_enquirySuccess).should("be.visible");
    })
  }

  // Verify that the Attachments button is disabled
  verifyButtonDisabled() {
    cy.xpath(this.locators.btn_attachments).should('be.visible')
      .and('have.attr', 'aria-disabled', 'true');
  }

  // Uploading unsupported file format
  uploadUnsupportedFormatFile(selector) {
    cy.xpath(this.locators.btn_attachments).should('be.visible').click();
    cy.wait(1000);
    cy.xpath(selector).attachFile('Registration_config_row.json');
  }

  uploadThreeSupportedFormatFile(selector) {
    cy.xpath(this.locators.btn_attachments).click();
    cy.wait(1000);
    cy.xpath(selector).attachFile('RegistrationFileUpload.pdf');
    cy.wait(2000);
    cy.xpath(selector).attachFile('QASample.png');
    cy.wait(2000);
    cy.xpath(selector).attachFile('TestSample.png');
  }

  uploadFileOfSizeExceedingLimit(selector) {
    cy.xpath(this.locators.btn_attachments).should('be.visible').click();
    cy.wait(1000);
    cy.xpath(selector).attachFile('LargeFile_5MB.png');
  }
  Should_Check_Largetext_Errormessage_In_Support_Reuest(){
      cy.xpath(this.locators.txt_supportRequest).should("be.visible");
      cy.xpath(this.locators.txt_requestToSupport).should("be.visible");
       cy.xpath(this.locators.txt_descriptionOfProblem).should("be.visible");
     cy.xpath(this.locators.btn_affectedApplicationDropdown).click();
    cy.contains('AOS Portal', { timeout: 10000 }).should('be.visible').click();
  //     cy.xpath(this.locators.btn_affectedApplicationDropdown)
  // .should('contain.text', 'AOS Portal');
      cy.wait(20000);
      cy.xpath(this.locators.btn_typeOfProblemDropdown).click();
      cy.contains('Payment & invoicing', { timeout: 10000 }).should('be.visible').click();
      cy.xpath(this.locators.btn_frequencyDropdown).click();
      cy.contains('Permanently', { timeout: 10000 }).should('be.visible').click();
      cy.xpath(this.locators.btn_abilityToWorkDropdown).click();
      cy.contains('Completely', { timeout: 10000 }).should('be.visible').click();
       const largeText = 'A'.repeat(1100);
     cy.xpath(this.locators.textArea_descriptionOfProblem)
    .type(largeText, { delay: 0 })
    .blur();
    cy.xpath(`//div[contains(text(),"Invalid input: The description must contain between 2 and 1024 characters.")]`)
    .should('be.visible');
    }
  }
export default SupportForm;