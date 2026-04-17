class MyData {
  elements = {
    tab_myAOSCss: "[aria-label='My AOS']",
    tab_Mydata: "//div[contains(text(),' My data ')]",//"#myData-li",
    tab_MyOrganisation: "//div[contains(text(),' My organisation ')]",//"#myOrganisation-li",
    tab_MyTicket: "//div[contains(text(),' My tickets ')]",//"#myTickets-li",
    tab_OngoingTicket: "//div[contains(text(),' Ongoing tickets ')]",//"#ongoingTickets-li",
    tab_History: "//div[contains(text(),' History ')]",
    tab_MyInvoices: "//div[contains(text(),' My invoices ')]",
    tab_MyPaymentsMethod: "//div[contains(text(),' My payment methods ')]",
    txt_Userdata: "//h1[contains(text(),'User data') or contains(text(),'사용자 데이터')]",
    txt_Permission: "//span[contains(text(),'Permission') or contains(text(),'권한')]",
    aosIFrame: "#app aos-iframe-page iframe",
    option_TitleMr: "//*[@id='MALE']/div/div/span",
    input_Lastname: "//input[@id='lastName']",
    input_Firstname: "//input[@id='firstName']",
    input_phonenumber: "//input[@id='phoneNumber']",
    Selectdropdown_Title: "//button[@id='title-open-button']",
    Selectdropdown_Language: "//button[@id='language-open-button']",
    Selectdropdown_TimeZone: "//button[@id='timezone-open-button']",
    txt_ChangeEmailButton: "//span[contains(text(),'Change e-mail') or contains(text(),'이메일 변경')]",
    txt_Attentiontext: "//span[contains(text(),'Attention')]",
    txt_NewEmailAddressfield: "//input[@formcontrolname='email']",
    btn_Confirm: "//*[contains(text(),'Attention')]//following::span[contains(text(),'Store')]",
    txt_EmailField: "//form[@id='user-details:user-form']/div[2]/div[2]",
    btn_Store: "//ds-button//span[contains(text(),'Store')]",
    ErrorMessage: "//span[contains(text(),'Mandatory field')]",
    txt_EESU: "//h2[contains(text(),'New e-mail address successfully entered')]",
    txt_Title: "//label[contains(text(),'Title')]",
    txt_Lastnamefield: "//label[contains(text(),'Last name')]",
    txt_Firstnamefield: "//label[contains(text(),'First name')]",
    txt_Phonenumberfield: "//input[@formcontrolname='phoneNumber']",
    txt_Languagefield: "//label[contains(text(),'Language')]",
    txt_TImezonefield: "//label[contains(text(),'Time zone')]",
    txt_Organisations: "//div[contains(text(),'Organisation')]",
    link_hyperlinkclick: "//*[@id='user-details:user-form']/div[1]/div[2]/a",
    txt_myorganisationheadline: "/html/body/header/h1[contains(text(),'My organisation')]",
    txt_Emailcheck: "//div[@class='container-header']//h2",
    select_title: "//select[@id='administered-user-details:user-form:salutation']",
    input_Lastnameadmin: "//input[@id='administered-user-details:user-form:last-name']",
    input_Firstnameadmin: "//input[@id='administered-user-details:user-form:first-name']",
    input_phonenumberadmin: "//input[@id='administered-user-details:user-form:user-phone']",
    btn_Reset: "//button[@id='user-roles-form:reset-user-roles-button']//span[contains(text(),'Reset')]",
    btn_Secondstore: "(//span[contains(text(),'Store')])[2]",
    btn_Deleteuser: "//span[contains(text(),'Delete user')]",
    btn_Ok: "//button[@id='dialog-ok-button-form:ok-button']/span",
    Dropdown_Title:"//select[@id='user-details:user-form:salutation']/option",
    txt_email: '//*[@id="email"]',
    txt_emailUpdatedMessage: "//p[contains(text(), \"The user's email address was successfully updated.\")]",
  };

  should_ClickOnMyDataTab() {
    cy.xpath(this.elements.tab_Mydata).should("be.visible").click({ force: true });
    cy.wait(15000);
  }
  should_phoneNumber_isPrefilled() {
  cy.xpath(this.elements.txt_Phonenumberfield)
    .invoke("val")
    .should("not.be.empty");
}
 
   should_VerifyStoreButtonDisabled() {
    cy.xpath(this.elements.btn_Store)
      .should("exist")
      .and("be.visible")
      .and("be.disabled");
  }
  should_VerifyStoreButtonEnabled() {
    cy.xpath(this.elements.btn_Store)
      .should("exist")
      .and("be.visible")
      .and("not.have.attr",'disabled')
      
  }

  should_MyOrgHeadLineCheck() {
    cy.frameLoaded(this.elements.aosIFrame);
    cy.wait(5000);
    cy.enter(this.elements.aosIFrame).then((p) => {
      p().xpath(this.elements.txt_myorganisationheadline).should("be.visible").invoke("text").then(cy.log);
    });
  }

  should_EmailCheck() {
    cy.frameLoaded(this.elements.aosIFrame);
    cy.wait(5000);
    cy.enter(this.elements.aosIFrame).then((p) => {
      p().xpath(this.elements.select_title).select("Ms");
      p().xpath(this.elements.input_Firstnameadmin).clear().type("test");
      p().xpath(this.elements.input_Lastnameadmin).clear().type("testtest");
      p().xpath(this.elements.input_phonenumberadmin).clear().type("447911123456");
    });
  }

  should_CheckButtons() {
    cy.frameLoaded(this.elements.aosIFrame);
    cy.wait(5000);
    cy.enter(this.elements.aosIFrame).then((p) => {
      p().xpath(this.elements.btn_Secondstore).should("be.visible").invoke("text").then(cy.log);
      p().xpath(this.elements.btn_Reset).should("be.visible").invoke("text").then(cy.log);
    });
  }

  should_DataFillingThrowAdminPage() {
    cy.frameLoaded(this.elements.aosIFrame);
    cy.wait(5000);
    cy.enter(this.elements.aosIFrame).then((p) => {
      p().xpath(this.elements.txt_Emailcheck).should("be.visible").invoke("text").then(cy.log);
    });
  }

  should_CheckAOSOverview(label) {
    cy.get(this.elements.tab_myAOSCss).should("be.visible").click({ force: true });
    cy.wait(15000);

    cy.xpath(this.elements.tab_Mydata).should("be.visible").invoke("text").then(cy.log);
    cy.xpath(this.elements.tab_MyTicket).should("be.visible").invoke("text").then(cy.log);
   

    if (label === "||KR_Legal_User||") {
      cy.xpath(this.elements.tab_History).should("be.visible").invoke("text").then(cy.log);
    }

    if (label !== "||Standard_User||" && label !== "||KR_Standard_User||") {
      cy.xpath(this.elements.tab_MyOrganisation).should("be.visible").invoke("text").then(cy.log);
      cy.xpath(this.elements.tab_MyInvoices).should("be.visible").invoke("text").then(cy.log);
      cy.xpath(this.elements.tab_MyPaymentsMethod).should("be.visible").invoke("text").then(cy.log);
       cy.xpath(this.elements.tab_OngoingTicket).should("be.visible").invoke("text").then(cy.log);
    }
  }

  should_CheckMyDataPage() {
    cy.xpath(this.elements.txt_Userdata).should("be.visible").invoke("text").then(cy.log);
    cy.xpath(this.elements.txt_Permission).should("be.visible").invoke("text").then(cy.log);
  }

  should_SeriesNameCheck(Title) {
    cy.frameLoaded(this.elements.aosIFrame);
    cy.wait(5000);
    cy.enter(this.elements.aosIFrame).then((p) => {
      p().xpath(this.elements.Dropdown_Title).each(($el, index) => {
        p().wrap($el).should("have.text", Title[index]);
      });
    });
  }

  should_EditingAndChangingTheData() {
    cy.xpath(this.elements.Selectdropdown_Title).click();
    cy.wait(3000);
    cy.xpath(this.elements.option_TitleMr).click();
    cy.xpath(this.elements.input_Lastname).clear().type("Pushparaj");
    cy.xpath(this.elements.input_Firstname).clear().type("Bathu");
    cy.xpath(this.elements.input_phonenumber).clear().type("+447911123456");
  }
  validateMandatoryFields() {
  cy.xpath(this.elements.Selectdropdown_Title)
    .should("contain.text", "Mr");

  cy.xpath(this.elements.input_Lastname)
    .should("have.value", "Pushparaj");

  cy.xpath(this.elements.input_Firstname)
    .should("have.value", "Bathu");

  cy.xpath(this.elements.input_phonenumber)
    .should("have.value", "+447911123456");
}

  should_CleartheData() {
    cy.xpath(this.elements.input_Lastname).clear();
    cy.xpath(this.elements.input_Firstname).clear();
    cy.xpath(this.elements.input_phonenumber).clear();
  }

  should_HyperLinkClick() {
    cy.frameLoaded(this.elements.aosIFrame);
    cy.wait(5000);
    cy.enter(this.elements.aosIFrame).then((p) => {
      p().xpath(this.elements.link_hyperlinkclick).click();
    });
  }

  should_CheckingEmailField(emailId) {
    cy.xpath(this.elements.txt_email).should("have.value", emailId);
  }

  should_CheckingMandatoryFieldsFilledWithCorrectData() {
    cy.xpath(this.elements.txt_EmailField).should("have.text","pushparajb@achalasolutions.com");
  }

  should_ClickOnStoreButton() {
    cy.xpath(this.elements.btn_Store).should("be.visible").click({ force: true });
    cy.wait(7000);
  }
  should_Check_ChangeEmail_Button() {
    cy.xpath(this.elements.txt_ChangeEmailButton).should("be.visible")
  }
  should_ClickOnChangeEmailbutton() {
    cy.xpath(this.elements.txt_ChangeEmailButton).should("be.visible").click({ force: true });
    cy.wait(4000);
  }

  should_CheckNewemailAddressField() {
    cy.xpath(this.elements.txt_Attentiontext).should("be.visible").invoke("text").then(cy.log);
    cy.xpath(this.elements.txt_NewEmailAddressfield).clear()
      .type("aostestmail" + Math.round(Math.random() * 1000) + "@gmail.com");
    cy.xpath(this.elements.btn_Confirm).click({ force: true });
  }
 should_CheckEnterExistingemailAddress() {
  cy.xpath(this.elements.txt_Attentiontext).should("be.visible").invoke("text").then(cy.log);
    cy.xpath(this.elements.txt_NewEmailAddressfield).clear()
      .type("aostester114@gmail.com");
    cy.xpath(this.elements.btn_Confirm).click({ force: true });

 }
  should_CheckbygivingblankemailAddressField() {
    cy.xpath(this.elements.txt_Attentiontext).should("be.visible").invoke("text").then(cy.log);
    cy.xpath(this.elements.txt_NewEmailAddressfield).clear();
    cy.xpath(this.elements.ErrorMessage).should("be.visible");
  }

  should_NewEmailConfirmtext() {
    cy.xpath(this.elements.txt_emailUpdatedMessage).should("be.visible").invoke("text").then(cy.log);
  }
}

export default MyData;