import MyOrganisation from "./My_Organisation";

class changeRequets {
  /*-------- XPATHS/ELEMENT LOCATORS ------------ */
  changeReqForm = {
    administartion:
      "//nav[@class='nav-top']/ul/li/a[contains(text(),'Administration')]",
    ChangeRequest:
      "//nav[@class='nav-left']/ul/li/a[contains(text(),'Change requests')]",
    NameAndLegalForm:
      "//*[@id='change-request-form:address-component:billing-address-component:organization-name']",
    streetAddress:
      "//*[@id='change-request-form:address-component:billing-address-component:organization-street']",
    Additional_address_line:
      "//*[@id='change-request-form:address-component:billing-address-component:organization-street-supplement']",
    postCode:
      "//*[@id='change-request-form:address-component:billing-address-component:organization-postal-code']",
    town: "//*[@id='change-request-form:address-component:billing-address-component:organization-city']",
    vat: "//*[@id='change-request-form:vat-id']",
    phoneNumber: "//*[@id='change-request-form:phone']",
    fax: "//*[@id='change-request-form:fax']",
    AcceptButton: "//*[@id='change-request-form:change-request-radio-accept']",
    RefuseButton: "//*[@id='change-request-form:change-request-radio-refuse']",
    mailBox: "//*[@id='change-request-form:mail-address-legal-rep-checkbox']",
    userEmail: "//*[@id='change-request-form:leg-rep-mail-address']",
    send: '//*[@id="change-request-form:send-change-request-btn"]',
    embedIFrame: "#embedded-iframe"
  };

  DifferingPlacesForm = {
    NameAndLegalForm:
      "//*[@id='change-request-form:address-component:business-premises-address-component:business-premises-organization-name']",
    streetAddress:
      "//*[@id='change-request-form:address-component:business-premises-address-component:business-premises-organization-street']",
    Additional_address_line:
      "//*[@id='change-request-form:address-component:business-premises-address-component:business-premises-organization-street-supplement']",
    postCode:
      "//*[@id='change-request-form:address-component:business-premises-address-component:business-premises-organization-postal-code']",
    town: "//*[@id='change-request-form:address-component:business-premises-address-component:business-premises-organization-city']",
    state:
      "//select[@id='change-request-form:address-component:business-premises-address-component:address-sub-devision-component:organization-sub-division']"
  };

  /*-------- METHODS ------------ */

  should_Click_MyOrganisation() {
    cy.xpath(this.changeReqForm.administartion).click({ force: true });
    cy.wait(5000);
    cy.xpath(this.changeReqForm.ChangeRequest).click({ force: true });
    cy.wait(8000);
  }

  should_Click_SelectRequest(userName) {
    cy.frameLoaded(this.changeReqForm.embedIFrame);
    cy.enter(this.changeReqForm.embedIFrame).then((p) => {
      p()
        .xpath('//*[@id="j_idt16_data"]')
        .find("tr")
        .its("length")
        .then((numberOfRows) => {
          cy.log(`Number of rows: ${numberOfRows}`);
          let i = 1;
          for (i = 1; i <= numberOfRows; i++) {
            p()
              .xpath(`//*[@id="j_idt16_data"]/tr[${i}]/td[1]/a`)
              .then((name) => {
                let user = name.text();
                if (user.includes(userName, { matchCase: false })) {
                  let num = i - 1;
                  p()
                    .xpath(`//*[@id="j_idt16_data"]/tr[${num}]/td[1]/a`)
                    .click({ force: true });
                }
              });
          }
        });
    });
  }

  should_Click_CheckRequestedData() {
    const myOrg = new MyOrganisation();
    const newValue = myOrg.newValues;

    cy.frameLoaded(this.changeReqForm.embedIFrame);
    cy.wait(10000);
    cy.enter(this.changeReqForm.embedIFrame).then((p) => {
      p()
        .xpath(this.changeReqForm.NameAndLegalForm)
        .invoke("val")
        .should("be.equal", newValue.NameAndLegalForm);
      p()
        .xpath(this.changeReqForm.streetAddress)
        .invoke("val")
        .should("be.equal", newValue.streetAddress);
      p()
        .xpath(this.changeReqForm.Additional_address_line)
        .invoke("val")
        .should("be.equal", newValue.Additional_address_line);
      p()
        .xpath(this.changeReqForm.postCode)
        .invoke("val")
        .should("be.equal", newValue.postCode);
      p()
        .xpath(this.changeReqForm.town)
        .invoke("val")
        .should("be.equal", newValue.town);
      p()
        .xpath(this.changeReqForm.vat)
        .invoke("val")
        .should("be.equal", newValue.vat);
      p()
        .xpath(this.changeReqForm.phoneNumber)
        .invoke("val")
        .should("be.equal", newValue.phoneNumber);
      this.should_CheckDiffPlacesData();
    });
  }

  should_CheckDiffPlacesData() {
    const myOrg = new MyOrganisation();
    const DiffValues = myOrg.newValuesForDiffPlaces;

    cy.frameLoaded(this.changeReqForm.embedIFrame);
    cy.wait(10000);
    cy.enter(this.changeReqForm.embedIFrame).then((p) => {
      p()
        .xpath(this.DifferingPlacesForm.NameAndLegalForm)
        .invoke("val")
        .should("be.equal", DiffValues.NameAndLegalForm);
      p()
        .xpath(this.DifferingPlacesForm.streetAddress)
        .invoke("val")
        .should("be.equal", DiffValues.streetAddress);
      p()
        .xpath(this.DifferingPlacesForm.Additional_address_line)
        .invoke("val")
        .should("be.equal", DiffValues.Additional_address_line);
      p()
        .xpath(this.DifferingPlacesForm.postCode)
        .invoke("val")
        .should("be.equal", DiffValues.postCode);
      p()
        .xpath(this.DifferingPlacesForm.town)
        .invoke("val")
        .should("be.equal", DiffValues.town);
    });
  }

  should_AcceptRequest() {
    cy.frameLoaded(this.changeReqForm.embedIFrame);
    cy.wait(4000);
    cy.enter(this.changeReqForm.embedIFrame).then((p) => {
      p().xpath(this.changeReqForm.AcceptButton).click();
      p().xpath(this.changeReqForm.send).click();
    });
  }

  should_RefuseRequest() {
    cy.frameLoaded(this.changeReqForm.embedIFrame);
    cy.wait(4000);
    cy.enter(this.changeReqForm.embedIFrame).then((p) => {
      p().xpath(this.changeReqForm.RefuseButton).click();
      //p().xpath(this.changeReqForm.send).click()
    });
  }
}
export default changeRequets;
