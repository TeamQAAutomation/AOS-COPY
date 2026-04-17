class MyOrganisation {
  formElements = {
    tab_myAOSCss : "[aria-label='My AOS']",
    tab_myAos: "//ds-list-item[@aria-label='My AOS']",
    tab_myOrg: "//div[contains(text(),' My organisation ')]",
    input_NameAndLegalForm:
      "//*[contains(text(),'Invoice address')]//..//following-sibling::div[1]//input[@id='name']",
    input_streetAddress:
      "//*[contains(text(),'Invoice address')]//..//following-sibling::div[1]//input[@id='address']",
    input_Additional_address_line:
      "//*[contains(text(),'Invoice address')]//..//following-sibling::div[1]//input[@id='additionalAddressInfo']",
    input_postCode:
      "//*[contains(text(),'Invoice address')]//..//following-sibling::div[1]//input[@id='postcode']",
    input_Location:
      "//*[contains(text(),'Invoice address')]//..//following-sibling::div[1]//input[@id='location']",
    input_vat: "//*[@id='vat']",
    input_phoneNumber:
      "//*[contains(text(),'Contact details')]/following::input[@id='phoneNumber']",
    input_fax:
      "//*[contains(text(),'Contact details')]/following::input[@id='fax']",
    btn_state:
      "//select[@id='organization-details:organization-form:address-component:billing-address-component:address-sub-devision-component:organization-sub-division']",
    input_homePage:
      "//h3[contains(text(),'Invoice address')]/following::input[@id='homepage']",
    input_Homepagecontent:
      "//input[@id='organization-details:organization-form:homepage']",
    btn_saveButtom: "//*[contains(text(),'Store')]",
    btn_storebutton: "(//*[contains(text(),'Store')])[1]",
    btn_OKButton: "//*[@id='dialog-ok-button-form:ok-button']/span",
    btn_checkBox:
      "//*[@class='ui-chkbox-box ui-widget ui-corner-all ui-state-default']",
    btn_checkBoxActive:
      "//*[@class='ui-chkbox-box ui-widget ui-corner-all ui-state-default ui-state-active']",
    btn_check:
      '//*[@id="organization-details:organization-form:address-component:pg-business-premises-checkbox"]/div[2]',
    aosIFrame: "#app aos-my-aos iframe",
    adminIFrame: "#app aos-iframe-page iframe",
    txt_permissions: '//*[contains(text(),"Permission")]',
    txt_OrgAdministration:
      '//*[contains(text(),"Organisation administration")]',
    txt_UserManagement: '//*[contains(text(),"User management")]',
    btn_SortingButton:
      "/html/body/main/div[2]/div/div/div/div/table/thead/tr/th/span[2]",
    txt_AOSBillingAndPaymentaccess:
      '//td[contains(text(),"AOS billing & payment access")]',
    txt_WorkshopEqp: '//td[contains(text(),"Workshop equipment")]',
    frame: "#app aos-iframe-page ",
    txt_Organisation_administration:
      "//span//div[contains(text(),'Organisation administration')]",
    txt_OutletAddress: "//h4[contains(text(),'Outlet address')]",
    txt_Remarks:
      "//div[@id='organization-description-form:pg-description']//h3[contains(text(),'Remarks')]",
    txt_History: "//h3[contains(text(),'History')]",
    lbl_CustomerNumber:
      "(//label[contains(text(),'Customer number')]/following::span)[1]",
    txt_Country: "//span[@id='country']",
    btn_specifydifferentoutletcheckbox:
      "//div[@class='ui-chkbox-box ui-widget ui-corner-all ui-state-default']",
    input_NameAndLegalFormOutletadd:
      "//input[@id='organization-details:organization-form:address-component:business-premises-address-component:business-premises-organization-name']",
    input_StreetAddOutletadd:
      "(//input[@data-qa='organisation.form.street'])[1]",
    input_AdditonaladdressllineOutletadd:
      "//input[@id='organization-details:organization-form:address-component:business-premises-address-component:business-premises-organization-street-supplement']",
    input_PostalcodeOutletAdd:
      "(//input[@data-qa='organisation.form.post.code'])[1]",
    input_LocationOutletiframeadd:
      "//input[@id='organization-details:organization-form:address-component:business-premises-address-component:business-premises-organization-city']",
    input_VATregfield:
      "//h3[contains(text(),'Invoice address')]/following::input[@id='vat']",
    txt_ShowHistory: "//span[contains(text(),'Show history')]",
    txt_Storebutton: "//span[contains(text(),'Store')]",
    txt_OKbutton: "//span[contains(text(),'OK')]",
    txt_history:
      "/html/body/app-root/app-navigation/app-history/div/header/h1[contains(text(),'History')]",
    link_Loggedinuser: "//a[contains(text(),'pushparajb@achalasolutions.com')]",
    input_Firstname: "//input[@id='user-details:user-form:first-name']",
    input_Lastname: "//input[@id='user-details:user-form:last-name']",
    input_Phonenumber: "//input[@id='user-details:user-form:user-phone']",
    txt_Email: "(//span[contains(text(),'E-mail')])[1]",
    txt_Name: "//span[contains(text(),'NAME')]",
    txt_Emailaddress:
      "//span[contains(text(),'E-mail address confirmed by user')]",
    txt_Resendemail: "//span[contains(text(),'Resend e-mail confirmation')]",
    txt_Delete: "//span[contains(text(),'Delete')]",
    txt_Sortingbuttonusermanagement:
      "//*[@id='organization-roles-read-only-table:j_idt298']/span[2]",
    txt_Clickonuser: "//a[contains(text(),'pushparajb@achalasolutions.com')]",
    txt_Usercheck: "//h1[contains(text(),' My organisation ')]",
    txt_Deleteicon:
      "(//span[@class='ui-button-icon-left ui-icon ui-c bmw-act_delete-24'])[1]",
    txt_Nobutton: "//span[contains(text(),'No')]",
    btn_Newuser: "//button[@id='users-of-organization-form:new-user-button']",
    btn_NewuserTitle: "//select[@id='create-user-form:salutation']",
    input_NewuserLastname: "//input[@id='create-user-form:last-name']",
    input_NewuserFirstname: "//input[@id='create-user-form:first-name']",
    input_NewuserEmail: "//input[@id='create-user-form:email']",
    input_NewuserPhonenumber: "//input[@id='create-user-form:user-phone']",
    txt_Cancelbutton: "//span[contains(text(),'Cancel')]",
    btn_NewuserDeleteicon:
      "//*[@id='users-of-organization-form:user-table:5:j_idt246']/span[1]",
    btn_Yesbutton: "//*[@id='j_idt302:j_idt304']/span",
    txt_vouchermanagement: "//h3[contains(text(),'Voucher management')]",
    txt_Deleteorganisation: "//h3[contains(text(),'Delete organisation')]",
    txt_actdecorg:
      "//h3[contains(text(),'Activate / deactivate organisation')]",
    txt_customernumberadmin:
      "//*[@id='organization-details:organization-form']/div[2]/div[2]",
    btn_usergroup:
      "//select[@id='organization-details:organization-form:userGroup']",
    txt_countryadmin: "//div[contains(text(),'Germany')]",
    txt_managevochercheck: "//span[contains(text(),'Manage vouchers')]",
    btn_confirmokbutton:
      "//button[@id='dialog-ok-button-form:ok-button']//span[contains(text(),'OK')]",
    txt_Organisationdataofchangereq: "//form[@id='change-request-form']/h4",
    txt_InvoicesAddress: "//h4[contains(text(),'Invoice address')]",
    txt_VATinformation: "//h4[contains(text(),'VAT information')]",
    txt_ContactDetails: "//h4[contains(text(),'Contact details')]",
    link_hyperlinkorg:
      "//tbody[@id='users-of-organization-form:user-table_data']/tr/td[1]",
    btn_Newuserbutton:
      "//button[@id='users-of-organization-form:new-user-button']",
    btn_userManagement:
      '//*[@id="organization-user-overview-tab:link-to-organization-users"]',
    txt_userName:
      " //*[@id='app']/div/aos-header/header/div[2]/aos-header-user/div/div[2]/div[1]",
    btn_arrow: "//ds-list-item[@icon='arrow_left_small']",
    txt_customerNumber:
      "//label[normalize-space()='Customer number:']/following-sibling::span",
    btn_handleCheckBox: "//*[contains(@class, 'ui-chkbox-box')]",
    txt_fieldError1: "(//aos-field-error//div/span)[1]",
    txt_fieldError2: "(//aos-field-error//div/span)[2]",
    txt_fieldError3: "(//aos-field-error//div/span)[3]",
    txt_fieldError4: "(//aos-field-error//div/span)[4]",
    txt_name: "//aos-header-user/*/*[2]/*[2]",
  };

  should_Verify_DifferingPlacesForm = {
    input_BP_NameAndLegalForm:
      "//*[@id='organization-details:organization-form:address-component:business-premises-address-component:business-premises-organization-name']",
    input_BP_streetAddress:
      "//*[@id='organization-details:organization-form:address-component:business-premises-address-component:business-premises-organization-street']",
    input_BP_Additional_address_line:
      "//*[@id='organization-details:organization-form:address-component:business-premises-address-component:business-premises-organization-street-supplement']",
    input_BP_postCode:
      "//*[@id='organization-details:organization-form:address-component:business-premises-address-component:business-premises-organization-postal-code']",
    input_BP_town:
      "//*[@id='organization-details:organization-form:address-component:business-premises-address-component:business-premises-organization-city']",
    input_BP_state:
      "//select[@id='organization-details:organization-form:address-component:business-premises-address-component:address-sub-devision-component:organization-sub-division']",
  };

  should_Verify_RequestedChanges = {
    input_BA_NameAndLegalForm:
      "//*[@id='organization-details:organization-form:address-component:billing-address-component:change-request-name']",
    input_BA_streetAddress:
      "//*[@id='organization-details:organization-form:address-component:billing-address-component:change-request-street']",
    input_BA_Additional_address_line:
      "//*[@id='organization-details:organization-form:address-component:billing-address-component:change-request-street-supplement']",
    input_BA_postCodeAndTown:
      "//*[@id='organization-details:organization-form:address-component:billing-address-component:change-request-postal-code-and-city']",
    input_BA_vat:
      "//*[@id='organization-details:organization-form:change-request-vat-id']",
    input_BA_state:
      "//*[@id='organization-details:organization-form:address-component:billing-address-component:address-sub-devision-component:change-request-state']",
  };

  should_Verify_DiffPlacesChanges = {
    input_CR_NameAndLegalForm:
      "//*[@id='organization-details:organization-form:address-component:business-premises-address-component:change-request-name']",
    input_CR_streetAddress:
      "//*[@id='organization-details:organization-form:address-component:business-premises-address-component:change-request-street']",
    input_CR_Additional_address_line:
      "//*[@id='organization-details:organization-form:address-component:business-premises-address-component:change-request-street-supplement']",
    input_CR_postCodeAndTown:
      "//*[@id='organization-details:organization-form:address-component:business-premises-address-component:change-request-postal-code-and-city']",
    input_CR_state:
      "//*[@id='organization-details:organization-form:address-component:billing-address-component:address-sub-devision-component:change-request-state']",
  };

  changeData = "1";

  newValues = {
    NameAndLegalForm: "Pushparaj B" + this.changeData,
    streetAddress: "AOS Area" + this.changeData,
    Additional_address_line: "Germany" + this.changeData,
    postCode: "56452" + this.changeData,
    town: "Berlin" + this.changeData,
    vat: "DE12345678" + this.changeData,
    phoneNumber: "0049893820" + this.changeData,
    fax: "01149351" + this.changeData,
  };
  newValuesadmin = {
    NameAndLegalForm: "TestCompany 22024697" + this.changeData,
    streetAddress: "AOS Area" + this.changeData,
    Additional_address_line: "Germany" + this.changeData,
    postCode: "22024697" + this.changeData,
    town: "TestCity" + this.changeData,
    phoneNumber: "0049893820" + this.changeData,
  };

  newValuesForDiffPlaces = {
    NameAndLegalForm: "Nandan" + this.changeData,
    streetAddress: "Automation" + this.changeData,
    Additional_address_line: "Europe" + this.changeData,
    postCode: "45868" + this.changeData,
    town: "berlin" + this.changeData,
  };

  should_ClickOnMyOrgThrowmyAos() {
    cy.xpath(this.formElements.tab_myAos).click({ force: true });
    cy.wait(3000);
    cy.xpath(this.formElements.tab_myOrg).click();
    cy.wait(15000);
  }

  should_ClickOnUserMangement() {
    cy.frameLoaded(this.formElements.aosIFrame);
    cy.wait(5000);
    cy.enter(this.formElements.aosIFrame).then((p) => {
      p().xpath(this.formElements.btn_userManagement).click();
      cy.wait(8000);
    });
  }

  should_ClickOnMyOrg() {
    // cy.xpath(this.formElements.myAos).click({force:true})
    // cy.wait(3000)
    cy.xpath(this.formElements.tab_myOrg).click();
    cy.wait(15000);
  }

  should_ClickOnUserManagement() {
    cy.frameLoaded(this.formElements.adminIFrame);
    cy.wait(5000);
    cy.enter(this.formElements.adminIFrame).then((p) => {
      p().xpath(this.formElements.txt_UserManagement).click();
      cy.wait(15000);
    });
  }

  should_ClickOnMyOrgPermissions() {
    // cy.xpath(this.formElements.myAos).click({force:true})
    // cy.wait(3000)
    // cy.frameLoaded(this.formElements.aosIFrame)
    // cy.wait(5000)
    // cy.enter(this.formElements.aosIFrame).then(p =>{
    cy.xpath(this.formElements.txt_permissions).click();
    cy.wait(15000);
    //})
  }

  should_MyOrgFormFilling() {
    cy.frameLoaded(this.formElements.aosIFrame);
    cy.wait(5000);
    cy.enter(this.formElements.aosIFrame).then((p) => {
      p()
        .xpath(this.formElements.input_NameAndLegalForm)
        .clear()
        .type(this.newValues.NameAndLegalForm);
      p()
        .xpath(this.formElements.input_streetAddress)
        .clear()
        .type(this.newValues.streetAddress);
      p()
        .xpath(this.formElements.input_Additional_address_line)
        .clear()
        .type(this.newValues.Additional_address_line);
      p()
        .xpath(this.formElements.input_postCode)
        .clear()
        .type(this.newValues.postCode);
      p().xpath(this.formElements.town).clear().type(this.newValues.town);
      // Handle checkbox interactions
      this.should_HandleCheckBox();
      cy.wait(10000);
      // Fill additional form sections
      this.should_DiffPlacesFormFilling();
      // Fill remaining fields
      p().xpath(this.formElements.input_vat).clear().type(this.newValues.vat);
      p()
        .xpath(this.formElements.input_phoneNumber)
        .clear()
        .type(this.newValues.phoneNumber);
      //p().xpath(this.formElements.fax).clear().type(this.newValues.fax)
      p().xpath(this.formElements.btn_saveButtom).click({ force: true });
    });

    cy.frameLoaded(this.formElements.aosIFrame);
    cy.wait(5000);
    cy.enter(this.formElements.aosIFrame).then((p) => {
      p()
        .xpath(this.formElements.btn_OKButton)
        .invoke("text")
        .should("be.equal", "OK");
      p().xpath(this.formElements.btn_OKButton).click({ force: true });
    });
  }
  // Fills out the "My Organization" form and click on Save with  Admin login
  should_MyOrgFormFillingAdmin() {
    cy.frameLoaded(this.formElements.adminIFrame);
    cy.wait(5000);
    cy.enter(this.formElements.adminIFrame).then((p) => {
      p()
        .xpath(this.formElements.input_NameAndLegalForm)
        .clear()
        .type(this.newValuesadmin.NameAndLegalForm);
      p()
        .xpath(this.formElements.input_streetAddress)
        .clear()
        .type(this.newValuesadmin.streetAddress);
      p()
        .xpath(this.formElements.input_Additional_address_line)
        .clear()
        .type(this.newValuesadmin.Additional_address_line);
      p()
        .xpath(this.formElements.input_postCode)
        .clear()
        .type(this.newValuesadmin.postCode);
      p().xpath(this.formElements.town).clear().type(this.newValuesadmin.town);
      this.should_HandleCheckBox();
      cy.wait(10000);
      // Fill additional form sections
      this.should_DiffPlacesFormFilling();
      p().xpath(this.formElements.input_Homepagecontent).clear();
      p().xpath(this.formElements.btn_storebutton).click({ force: true });
      cy.wait(2000);
      p().xpath(this.formElements.btn_confirmokbutton).click({ force: true });
      cy.wait(2000);
    });
  }

  // Handles checking a checkbox inside the admin
  should_HandleCheckBox() {
    cy.frameLoaded(this.formElements.adminIFrame);
    cy.wait(5000);
    cy.enter(this.formElements.adminIFrame).then((p) => {
      p()
        .xpath(this.formElements.btn_handleCheckBox)
        .then(($checkbox) => {
          if ($checkbox.hasClass("ui-state-active")) {
            cy.log("Checkbox is already checked.");
          } else {
            p()
              .xpath(this.formElements.btn_handleCheckBox)
              .click({ force: true });
            cy.log("Checkbox is now checked.");
          }
        });
    });
  }
  //Additonal fields form filling
  should_DiffPlacesFormFilling() {
    cy.frameLoaded(this.formElements.adminIFrame);
    cy.wait(5000);
    cy.enter(this.formElements.adminIFrame).then((p) => {
      p()
        .xpath(this.should_Verify_DifferingPlacesForm.input_BP_NameAndLegalForm)
        .clear()
        .type(this.newValuesForDiffPlaces.NameAndLegalForm);
      p()
        .xpath(this.should_Verify_DifferingPlacesForm.input_BP_streetAddress)
        .clear()
        .type(this.newValuesForDiffPlaces.streetAddress);
      p()
        .xpath(
          this.should_Verify_DifferingPlacesForm
            .input_BP_Additional_address_line
        )
        .clear()
        .type(this.newValuesForDiffPlaces.Additional_address_line);
      p()
        .xpath(this.should_Verify_DifferingPlacesForm.input_BP_postCode)
        .clear()
        .type(this.newValuesForDiffPlaces.postCode);
      p()
        .xpath(this.should_Verify_DifferingPlacesForm.input_BP_town)
        .clear()
        .type(this.newValuesForDiffPlaces.town);
    });
  }

  // Verifies that requested changes in the organization form are correctly displayed
  should_CheckRequestedChanges() {
    cy.frameLoaded(this.formElements.aosIFrame);
    cy.wait(5000);
    cy.enter(this.formElements.aosIFrame).then((p) => {
      p()
        .xpath(this.should_Verify_RequestedChanges.input_BA_NameAndLegalForm)
        .invoke("text")
        .should("be.equal", this.newValues.NameAndLegalForm);
      p()
        .xpath(this.should_Verify_RequestedChanges.input_BA_streetAddress)
        .invoke("text")
        .should("be.equal", this.newValues.streetAddress);
      p()
        .xpath(
          this.should_Verify_RequestedChanges.input_BA_Additional_address_line
        )
        .invoke("text")
        .should("be.equal", this.newValues.Additional_address_line);
      p()
        .xpath(this.should_Verify_RequestedChanges.input_BA_postCodeAndTown)
        .invoke("text")
        .should(
          "be.equal",
          this.newValues.postCode + " " + this.newValues.town
        );
      p()
        .xpath(this.should_Verify_RequestedChanges.input_BA_vat)
        .invoke("text")
        .should("be.equal", this.newValues.vat);
      //p().xpath(this.formElements.checkBox).click({force:true})
      cy.wait(10000);
      this.should_CheckDiffPlacesChanges();
    });
  }

  // Verifies that the changes in the additional form section have been applied correctly
  should_CheckDiffPlacesChanges() {
    cy.frameLoaded(this.formElements.aosIFrame);
    cy.wait(5000);
    cy.enter(this.formElements.aosIFrame).then((p) => {
      p()
        .xpath(this.should_Verify_DiffPlacesChanges.input_CR_NameAndLegalForm)
        .invoke("text")
        .should("be.equal", this.newValuesForDiffPlaces.NameAndLegalForm);
      p()
        .xpath(this.should_Verify_DiffPlacesChanges.input_CR_streetAddress)
        .invoke("text")
        .should("be.equal", this.newValuesForDiffPlaces.streetAddress);
      p()
        .xpath(
          this.should_Verify_DiffPlacesChanges.input_CR_Additional_address_line
        )
        .invoke("text")
        .should(
          "be.equal",
          this.newValuesForDiffPlaces.Additional_address_line
        );
      p()
        .xpath(this.should_Verify_DiffPlacesChanges.input_CR_postCodeAndTown)
        .invoke("text")
        .should("contains", this.newValuesForDiffPlaces.postCode);
      p()
        .xpath(this.should_Verify_DiffPlacesChanges.input_CR_postCodeAndTown)
        .invoke("text")
        .should("contains", this.newValuesForDiffPlaces.town);
    });
  }

  // Verifies that the main form fields reflect the accepted changes after submission
  should_CheckAfterAccept() {
    cy.frameLoaded(this.formElements.aosIFrame);
    cy.wait(5000);
    cy.enter(this.formElements.aosIFrame).then((p) => {
      p()
        .xpath(this.formElements.input_NameAndLegalForm)
        .invoke("val")
        .should("be.equal", this.newValues.NameAndLegalForm);
      p()
        .xpath(this.formElements.input_streetAddress)
        .invoke("val")
        .should("be.equal", this.newValues.streetAddress);
      p()
        .xpath(this.formElements.input_Additional_address_line)
        .invoke("val")
        .should("be.equal", this.newValues.Additional_address_line);
      p()
        .xpath(this.formElements.input_postCode)
        .invoke("val")
        .should("be.equal", this.newValues.postCode);
      p()
        .xpath(this.formElements.town)
        .invoke("val")
        .should("be.equal", this.newValues.town);
      p()
        .xpath(this.formElements.input_vat)
        .invoke("val")
        .should("be.equal", this.newValues.vat);
      // p().xpath(this.formElements.checkBox).click({force:true})
      cy.wait(10000);
      this.should_CheckDiffPlacesAccept();
    });
  }

  // Verifies that the Additional form fields reflect the accepted changes
  should_CheckDiffPlacesAccept() {
    cy.frameLoaded(this.formElements.aosIFrame);
    cy.wait(5000);
    cy.enter(this.formElements.aosIFrame).then((p) => {
      p()
        .xpath(this.should_Verify_DifferingPlacesForm.input_BP_NameAndLegalForm)
        .invoke("val")
        .should("be.equal", this.newValuesForDiffPlaces.NameAndLegalForm);
      p()
        .xpath(this.should_Verify_DifferingPlacesForm.input_BP_streetAddress)
        .invoke("val")
        .should("be.equal", this.newValuesForDiffPlaces.streetAddress);
      p()
        .xpath(
          this.should_Verify_DifferingPlacesForm
            .input_BP_Additional_address_line
        )
        .invoke("val")
        .should(
          "be.equal",
          this.newValuesForDiffPlaces.Additional_address_line
        );
      p()
        .xpath(this.should_Verify_DifferingPlacesForm.input_BP_postCode)
        .invoke("val")
        .should("be.equal", this.newValuesForDiffPlaces.postCode);
      p()
        .xpath(this.should_Verify_DifferingPlacesForm.input_BP_town)
        .invoke("val")
        .should("be.equal", this.newValuesForDiffPlaces.town);
    });
  }

  should_CheckMyOrgForm() {
    cy.frameLoaded(this.formElements.aosIFrame);
    cy.wait(5000);
    cy.enter(this.formElements.aosIFrame).then((p) => {
      p()
        .xpath(this.formElements.input_NameAndLegalForm)
        .invoke("val")
        .then((text) => {
          this.savedValuesMap.set("NameAndLegalForm", text);
          cy.log(this.savedValuesMap.get("NameAndLegalForm"));
        });
    });
  }

  should_CheckMyOrganisation() {
    // cy.frameLoaded(this.formElements.adminIFrame)
    // cy.enter(this.formElements.adminIFrame).then(p => {
    cy.xpath(this.formElements.txt_OrgAdministration).click({force:true})
    cy.xpath(this.formElements.txt_OrgAdministration)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.formElements.txt_UserManagement)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.formElements.txt_permissions)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    // })
  }

  should_CheckPermissionsoptions() {
    // cy.frameLoaded(this.formElements.aosIFrame)
    // cy.enter(this.formElements.aosIFrame).then(p => {
    p().xpath(this.formElements.btn_SortingButton).should("be.visible");
    p()
      .xpath(this.formElements.txt_AOSBillingAndPaymentaccess)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    p()
      .xpath(this.formElements.txt_WorkshopEqp)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    //})
  }

  should_CheckBydefaultOrgadmintab() {
    // cy.frameLoaded(this.formElements.aosIFrame)
    //     cy.enter(this.formElements.aosIFrame).then(p => {
    cy.xpath(this.formElements.txt_Organisation_administration)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
        // })
      });
  }

  should_CheckOrgAdminTabSections() {
    cy.frameLoaded(this.formElements.aosIFrame);
    cy.enter(this.formElements.aosIFrame).then((p) => {
      p()
        .xpath(this.formElements.txt_Organisationdataofchangereq)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      p()
        .xpath(this.formElements.txt_InvoicesAddress)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      p()
        .xpath(this.formElements.txt_OutletAddress)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      p()
        .xpath(this.formElements.txt_VATinformation)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      p()
        .xpath(this.formElements.txt_ContactDetails)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      p()
        .xpath(this.formElements.txt_History)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
    });
  }
  should_CheckorgthrowAdminpage() {
    cy.frameLoaded(this.formElements.adminIFrame);
    cy.enter(this.formElements.adminIFrame).then((p) => {
      p()
        .xpath(this.formElements.txt_Organisationdataofchangereq)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      p()
        .xpath(this.formElements.txt_InvoicesAddress)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      p()
        .xpath(this.formElements.txt_VATinformation)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      p()
        .xpath(this.formElements.txt_ContactDetails)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      p()
        .xpath(this.formElements.txt_History)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      p()
        .xpath(this.formElements.txt_Remarks)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      p()
        .xpath(this.formElements.txt_vouchermanagement)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      p()
        .xpath(this.formElements.txt_Deleteorganisation)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      p()
        .xpath(this.formElements.txt_actdecorg)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
    });
  }

  should_CheckPrepopulateddataAdmin() {
    cy.frameLoaded(this.formElements.adminIFrame);
    cy.enter(this.formElements.adminIFrame).then((p) => {
      p()
        .xpath(this.formElements.txt_customernumberadmin)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      p()
        .xpath(this.formElements.btn_usergroup)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      p()
        .xpath(this.formElements.txt_countryadmin)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
    });
  }

  should_CheckCustomerNumberandcountry() {
    // cy.frameLoaded(this.formElements.aosIFrame)
    //     cy.enter(this.formElements.aosIFrame).then(p => {
    cy.xpath(this.formElements.txt_customerNumber).contains("b2io");
    cy.xpath(this.formElements.txt_Country).contains("United Kingdom");

    //})
  }
  should_VerifyOrgnisationAdminFieldsCheck() {
    cy.xpath(this.formElements.input_NameAndLegalForm).should(
      "contain",
      "Pushparaj B2"
    );
    cy.xpath(this.formElements.input_streetAddress).should(
      "have.value",
      "AOS Area2"
    );
    cy.xpath(this.formElements.input_Additional_address_line).should(
      "have.value",
      "Germany2"
    );
    cy.xpath(this.formElements.input_postCode).should("have.value", "564522");
    cy.xpath(this.formElements.town).should("have.value", "Berlin2");
    cy.xpath(this.formElements.input_VATregfield).should(
      "have.value",
      "FR1236565834"
    );
    cy.xpath(this.formElements.input_phoneNumber).should(
      "have.value",
      "+00498938206"
    );
    cy.xpath(this.formElements.input_fax).should("be.visible");
    cy.xpath(this.formElements.input_homePage).should("be.visible");
  }

  //   validateAndClearLegalFormInput() {
  //   cy.xpath(this.formElements.txt_name)
  //     .invoke("text")
  //     .then((text) => {
  //       const valueToCompare = text.trim();

  //       cy.xpath(this.formElements.input_NameAndLegalForm)
  //         .should("have.value", valueToCompare)
  //         .clear();
  //     });
  // }

  should_MyOrganisationFieldsClear() {
    cy.xpath(this.formElements.input_NameAndLegalForm)
      .should("have.value", "Pushparaj B2")
      .clear();
    cy.xpath(this.formElements.txt_fieldError1).should("be.visible");
    cy.xpath(this.formElements.input_streetAddress)
      .should("have.value", "AOS Area2")
      .clear();
    cy.xpath(this.formElements.txt_fieldError2).should("be.visible");
    cy.xpath(this.formElements.input_Additional_address_line).should(
      "have.value",
      "Germany2"
    );
    cy.xpath(this.formElements.input_postCode)
      .should("have.value", "564522")
      .clear();
    cy.xpath(this.formElements.txt_fieldError3).should("be.visible");
    cy.xpath(this.formElements.input_Location)
      .should("have.value", "Berlin2")
      .clear();
    cy.xpath(this.formElements.txt_fieldError4).should("be.visible");
  }

  should_LU_MyOrganisationFieldsClear() {
    cy.xpath(this.formElements.input_NameAndLegalForm)
      .should("have.value", "TestIndividual")
      .clear();
    cy.xpath(this.formElements.txt_fieldError1).should("be.visible");
    cy.xpath(this.formElements.input_streetAddress)
      .should("have.value", "street no 7")
      .clear();
    cy.xpath(this.formElements.txt_fieldError2).should("be.visible");
    cy.xpath(this.formElements.input_postCode)
      .should("have.value", "56734")
      .clear();
    cy.xpath(this.formElements.txt_fieldError3).should("be.visible");
    cy.xpath(this.formElements.input_Location)
      .should("have.value", "munich")
      .clear();
    cy.xpath(this.formElements.txt_fieldError4).should("be.visible");
  }

  should_ClickOnStoreButton() {
    // cy.frameLoaded(this.formElements.aosIFrame)
    //         cy.enter(this.formElements.aosIFrame).then(p => {
    cy.xpath(this.formElements.btn_storebutton).click();
    cy.wait(5000);
    //})
  }

  should_PopUpcheck() {
    cy.frameLoaded(this.formElements.aosIFrame);
    cy.enter(this.formElements.aosIFrame).then((p) => {
      p().xpath(this.formElements.btn_OKButton).click();
    });
  }

  should_ClickOnShowHistory() {
    cy.frameLoaded(this.formElements.aosIFrame);
    cy.enter(this.formElements.aosIFrame).then((p) => {
      p().xpath(this.formElements.txt_ShowHistory).click();
      cy.wait(10000);
    });
  }

  should_CheckHistorypage() {
    cy.frameLoaded(this.formElements.aosIFrame);
    cy.enter(this.formElements.aosIFrame).then((p) => {
      p()
        .xpath(this.formElements.txt_History)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
    });
  }

  should_UpdateLoggedInUserDetailsandSave() {
    cy.frameLoaded(this.formElements.aosIFrame);
    cy.enter(this.formElements.aosIFrame).then((p) => {
      p()
        .xpath(this.formElements.link_Loggedinuser)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      p().xpath(this.formElements.link_Loggedinuser).click();
      cy.wait(10000);
      p().xpath(this.formElements.input_Firstname).clear().type("Pushparaj");
      cy.wait(2000);
      p().xpath(this.formElements.input_Lastname).clear().type("Bathu");
      cy.wait(2000);
      p()
        .xpath(this.formElements.input_phoneNumber)
        .clear()
        .type("+447911123456");
      cy.wait(2000);
      p().xpath(this.formElements.input_phoneNumber);
      cy.wait(2000);
    });
  }

  should_Verify_PermissionsSorting() {
    cy.frameLoaded(this.formElements.aosIFrame);
    cy.enter(this.formElements.aosIFrame).then((getBody) => {
      let allDataBeforeSorting = []; // Data from all pages before sorting
      let allDataAfterSorting = []; // Data from all pages after sorting

      // Selectors
      const dataSelector = "//tr//td"; // Column selector (adjust if needed)

      // Function to capture data from the current page
      const captureData = (dataArray) => {
        return getBody()
          .xpath(dataSelector)
          .each(($cell) => {
            const cellText = $cell.text().trim();
            dataArray.push(cellText);
            cy.log(cellText);
          });
      };

      // Step 1: Capture data before sorting
      captureData(allDataBeforeSorting).then(() => {
        cy.log("Data before sorting:", allDataBeforeSorting);
        console.log("Data before sorting:", allDataBeforeSorting);

        // Sort the data manually
        const expectedSortedData = [...allDataBeforeSorting].sort();
        cy.log("Expected sorted data:", expectedSortedData);
        console.log("Expected sorted data:", expectedSortedData);

        // Step 2: Click the sorting button
        getBody()
          .xpath(this.formElements.txt_Sortingbuttonusermanagement)
          .should("be.visible") // Ensure the sort button is visible
          .click({ force: true })
          .wait(2000);

        // Step 3: Capture data after sorting
        captureData(allDataAfterSorting).then(() => {
          cy.log("Data after sorting:", allDataAfterSorting);
          cy.log("Data before sorting:", allDataBeforeSorting);
          console.log("Data after sorting:", allDataAfterSorting);
        });
      });
    });
  }

  should_Checktableofusermanagement() {
    cy.frameLoaded(this.formElements.aosIFrame);
    cy.enter(this.formElements.aosIFrame).then((p) => {
      p()
        .xpath(this.formElements.txt_Email)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      p()
        .xpath(this.formElements.txt_Name)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      p()
        .xpath(this.formElements.txt_Emailaddress)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      p()
        .xpath(this.formElements.txt_Resendemail)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      p()
        .xpath(this.formElements.txt_Delete)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
    });
  }

  should_ClickonUserandcheck() {
    cy.frameLoaded(this.formElements.aosIFrame);
    cy.enter(this.formElements.aosIFrame).then((p) => {
      p().xpath(this.formElements.txt_Clickonuser).click();
      cy.wait(3000);
    });
  }

  should_Checkmyorgpage() {
    cy.xpath(this.formElements.txt_Usercheck)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
  }

  should_Deleteicon() {
    cy.frameLoaded(this.formElements.aosIFrame);
    cy.enter(this.formElements.aosIFrame).then((p) => {
      p().xpath(this.formElements.txt_Deleteicon).click();
      cy.wait(3000);
      p().xpath(this.formElements.txt_Nobutton).click();
      cy.wait(3000);
    });
  }

  should_NewuserTableCheck() {
    cy.frameLoaded(this.formElements.aosIFrame);
    cy.enter(this.formElements.aosIFrame).then((p) => {
      p().xpath(this.formElements.btn_Newuser).click();
      cy.wait(2000);
      p()
        .xpath(this.formElements.btn_NewuserTitle)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      cy.wait(2000);
      p()
        .xpath(this.formElements.input_NewuserFirstname)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      cy.wait(2000);
      p()
        .xpath(this.formElements.input_NewuserLastname)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      cy.wait(2000);
      p()
        .xpath(this.formElements.input_NewuserEmail)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      cy.wait(2000);
      p()
        .xpath(this.formElements.input_NewuserPhonenumber)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      cy.wait(2000);
      p()
        .xpath(this.formElements.btn_storebutton)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      cy.wait(2000);
    });
  }

  should_NewuserTableCheckAdmin() {
    cy.frameLoaded(this.formElements.adminIFrame);
    cy.enter(this.formElements.adminIFrame).then((p) => {
      p().xpath(this.formElements.btn_Newuser).click();
      cy.wait(2000);
      p()
        .xpath(this.formElements.btn_NewuserTitle)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      cy.wait(2000);
      p()
        .xpath(this.formElements.input_NewuserFirstname)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      cy.wait(2000);
      p()
        .xpath(this.formElements.input_NewuserLastname)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      cy.wait(2000);
      p()
        .xpath(this.formElements.input_NewuserEmail)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      cy.wait(2000);
      p()
        .xpath(this.formElements.input_NewuserPhonenumber)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      cy.wait(2000);
      p()
        .xpath(this.formElements.btn_storebutton)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      cy.wait(2000);
    });
  }

  should_NewuserAddandClickCancelButton() {
    cy.frameLoaded(this.formElements.aosIFrame);
    cy.enter(this.formElements.aosIFrame).then((p) => {
      p().xpath(this.formElements.btn_NewuserTitle).select("Mr");
      cy.wait(2000);
      p().xpath(this.formElements.input_NewuserFirstname).type("test");
      cy.wait(2000);
      p().xpath(this.formElements.input_NewuserLastname).type("lasttest");
      cy.wait(2000);
      p()
        .xpath(this.formElements.input_NewuserEmail)
        .type("Aostesterssss@gmail.com");
      cy.wait(2000);
      p()
        .xpath(this.formElements.input_NewuserPhonenumber)
        .type("+447911123456");
      cy.wait(2000);
      p().xpath(this.formElements.txt_Cancelbutton).click();
      cy.wait(2000);
    });
  }
  should_NewuserAddandClickCancelButtonAdmin() {
    cy.frameLoaded(this.formElements.adminIFrame);
    cy.enter(this.formElements.adminIFrame).then((p) => {
      p().xpath(this.formElements.btn_NewuserTitle).select("Mr");
      cy.wait(2000);
      p().xpath(this.formElements.input_NewuserFirstname).type("test");
      cy.wait(2000);
      p().xpath(this.formElements.input_NewuserLastname).type("lasttest");
      cy.wait(2000);
      p()
        .xpath(this.formElements.input_NewuserEmail)
        .type("Aostester@gmail.com");
      cy.wait(2000);
      p()
        .xpath(this.formElements.input_NewuserPhonenumber)
        .type("+447911123456");
      cy.wait(2000);
      p().xpath(this.formElements.txt_Cancelbutton).click();
      cy.wait(2000);
    });
  }

  should_Newuseraddandclickstorebutton() {
    cy.frameLoaded(this.formElements.aosIFrame);
    cy.enter(this.formElements.aosIFrame).then((p) => {
      p().xpath(this.formElements.btn_Newuser).click();
      cy.wait(2000);
      p().xpath(this.formElements.btn_NewuserTitle).select("Mr");
      cy.wait(2000);
      p().xpath(this.formElements.input_NewuserFirstname).type("test");
      cy.wait(2000);
      p().xpath(this.formElements.input_NewuserLastname).type("lasttest");
      cy.wait(2000);
      p()
        .xpath(this.formElements.input_NewuserEmail)
        .type("Aostester@gmail.com");
      cy.wait(2000);
      p()
        .xpath(this.formElements.input_NewuserPhonenumber)
        .type("+447911123456");
      cy.wait(2000);
      p().xpath(this.formElements.btn_storebutton).click();
      cy.wait(2000);
      p().xpath(this.formElements.btn_OKButton).click();
      cy.wait(2000);
    });
  }

  should_GetUserName() {
    cy.xpath(this.formElements.txt_userName)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.wrap(text.trim()).as("userName");
      });
  }

  should_click_arror() {
    cy.xpath(this.formElements.btn_arrow).click({ force: true });
  }

  should_Get_OrganizationId() {
    cy.wait(3000);
    cy.log("Fetching Organization ID from My Organisation tab...");
        cy.get(this.formElements.tab_myAOSCss)
      .should("be.visible")
      .click({ force: true });
    cy.wait(3000);

    cy.xpath(this.formElements.tab_myOrg)
      .should("be.visible")
      .click({ force: true });
    cy.wait(3000);

    return cy
      .xpath(this.formElements.lbl_CustomerNumber)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        const orgId = text.trim();
        cy.log(`Fetched Organization ID: ${orgId}`);
        Cypress.env("orgId", orgId);
        return cy.wrap(orgId, { log: false });
      });
  }

  should_GetOrganisationAddress() {
    cy.xpath(this.formElements.input_StreetAddOutletadd)
      .invoke("val")
      .then((address) => {
        cy.wrap(address.trim()).as("streetAddress");
      });
    cy.xpath(this.formElements.input_PostalcodeOutletAdd)
      .invoke("val")
      .then((address) => {
        cy.wrap(address.trim()).as("postalAddress");
      });
    cy.xpath(this.formElements.txt_Country)
      .invoke("text")
      .then((address) => {
        cy.wrap(address.trim()).as("country");
      });
  }

  should_NewUserAddandClickStoreButtonAdmin() {
    cy.frameLoaded(this.formElements.adminIFrame);
    cy.enter(this.formElements.adminIFrame).then((p) => {
      p().xpath(this.formElements.btn_Newuser).click();
      cy.wait(2000);
      p().xpath(this.formElements.btn_NewuserTitle).select("Mr");
      cy.wait(2000);
      p().xpath(this.formElements.input_NewuserFirstname).type("test");
      cy.wait(2000);
      p().xpath(this.formElements.input_NewuserLastname).type("lasttest");
      cy.wait(2000);
      p()
        .xpath(this.formElements.input_NewuserEmail)
        .type("Aostester@gmail.com");
      cy.wait(2000);
      p()
        .xpath(this.formElements.input_NewuserPhonenumber)
        .type("+447911123456");
      cy.wait(2000);
      p().xpath(this.formElements.btn_storebutton).click();
      cy.wait(2000);
      p().xpath(this.formElements.btn_OKButton).click();
      cy.wait(2000);
    });
  }

  should_DeleteAddedNewUser() {
    cy.frameLoaded(this.formElements.aosIFrame);
    cy.enter(this.formElements.aosIFrame).then((p) => {
      p().xpath(this.formElements.btn_NewuserDeleteicon).click();
      cy.wait(2000);
      p().xpath(this.formElements.btn_Yesbutton).click();
      cy.wait(2000);
    });
  }

  should_DeleteAddedNewUserAdmin() {
    cy.frameLoaded(this.formElements.adminIFrame);
    cy.enter(this.formElements.adminIFrame).then((p) => {
      p().xpath(this.formElements.btn_NewuserDeleteicon).click();
      cy.wait(2000);
      p().xpath(this.formElements.btn_Yesbutton).click();
      cy.wait(2000);
    });
  }
}
export default MyOrganisation;
