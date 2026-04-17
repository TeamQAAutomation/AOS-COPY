class DiagnosticsArticles {
  //XPaths or Element selectors for Diagnostics Articles
  elements = {
    /*-------- XPATHS/ELEMENT LOCATORS ------------ */
    tab_Service:
      "//div[@class='ds-list-item__content'][normalize-space()='Service']",
    tab_DiagnosticArticle: "//div[contains(text(),'Diagnostics articles')]",
    txt_DiagArticleHeadLine: "//h1[normalize-space(text())='Diagnostics articles']",
    txt_RequestAboutDiagnosisItemsSubHeadline:
      "//*[contains(text(),'Request about diagnosis items')]",
    overView_CheckdignosticIteaminContainer: "//*[@class='overview-container']",
    btn_ISSNextDetailButton:
      "//h2[contains(normalize-space(.), 'ISSS Next')]/button[normalize-space(text())='(Details)']",

    btn_BackToOverviewButton: "//button[contains(text(),'Back to overview')]",
    btn_RequestingOrderInfo:
      "//button[contains(normalize-space(.), 'Requesting order information')]",
    lbl_ICOMNextA:
      "//label[contains(text(),' Integrated Communication Optical Module A (ICOM Next A) ')]",
    btn_PassThruTool:"//h2[contains(normalize-space(.), 'Pass Thru Tool')]/button",
    input_comment: "//textarea[@id='comment']",
    txt_UserData: "//h2[normalize-space(text())='User data']",
    btn_Radiobutton: "//input[@id='consent' and @formcontrolname='consent']",
    btn_SendButton: "//button[normalize-space(text())='Send']",
    txt_SuccessfullyMessage: "//*[contains(text(), 'Thank you for your request.')]",
    container: "//main[@class='container']",
    conatiner2: "//div[@class='container-content']",
    iFrame: "#app aos-iframe-page iframe",
    Button: "(//*[@icon='arrow_left_small' and @role='button'])[1]",
    input_firstName:
      "//input[@id='firstName']",
    input_lastName:
      "//input[@id='lastName']",
    input_phoneNumber: "//div//input[contains(@id,'phone')]",
    input_email: "//input[@id='email']",
    input_orgName:
      "//input[@id='organisation']",
    txt_errorMessages: "//div[@class='error-message ng-star-inserted']",
    ISSStext:"//h2[contains(normalize-space(.), 'ISSS Next')]",
    questionorcomments:"//textarea[@id='comment']",
    PassThruToolText:"//h2[contains(normalize-space(.), 'Pass Thru Tool')]",
    checkboxDiagnosisItem: (diagnosisitem) => `//label[contains(normalize-space(.),"${diagnosisitem}")]//input[@type="checkbox"]`,
    btn_DiagnosisItem: (diagnosisitem) =>`//h2[contains(normalize-space(.), "${diagnosisitem}")]/button`,
    txt_DiagnosisItemHeader: (diagnosisitem) => `//h2[contains(normalize-space(.), "${diagnosisitem}")]`,
    toolOption: (toolName) => `//span[contains(@class,'ds-checkbox-wrapper')]//input/following::text()[contains(.,'${toolName}')]/preceding::input[1]`,
};
  /*-------- METHODS ------------ */
  should_displayDiagnosticsAriticleTitle(){
    cy.wait(3000);
    cy.xpath(this.elements.txt_DiagArticleHeadLine).should("be.visible");
  }

  should_ClickOnMyDiagnosticArticles() {
    cy.xpath(this.elements.Button).should("be.visible").click({ force: true });
    cy.wait(6000);
    cy.xpath(this.elements.tab_Service).should("be.visible").click({ force: true });
    cy.xpath(this.elements.tab_DiagnosticArticle)
      .should("be.visible")
      .click({ force: true });
    cy.wait(15000);
  }
  // Check diagnostic article details and navigate back to overview
  Should_Click_on_DiagArticlesISSNextDetails() {
    cy.xpath(this.elements.txt_DiagArticleHeadLine).should("be.visible");

    cy.wait(10000);

    cy.xpath(this.elements.txt_RequestAboutDiagnosisItemsSubHeadline).should(
      "be.visible"
    );
    cy.xpath(this.elements.overView_CheckdignosticIteaminContainer).should("be.visible");

    cy.xpath(this.elements.btn_ISSNextDetailButton)
      .should("be.visible")
      .click({ force: true });
    cy.wait(10000);
    cy.xpath(this.elements.ISSStext)
      .should("be.visible")
  }
  should_Click_on_PassThruTool() {
    cy.xpath(this.elements.txt_DiagArticleHeadLine).should("be.visible");

    cy.wait(10000);

    cy.xpath(this.elements.txt_RequestAboutDiagnosisItemsSubHeadline).should(
      "be.visible"
    );
    cy.xpath(this.elements.overView_CheckdignosticIteaminContainer).should("be.visible");
    cy.xpath(this.elements.btn_PassThruTool).scrollIntoView().click({ force: true });
    cy.wait(10000);
    cy.xpath(this.elements.PassThruToolText)
      .should("be.visible")
  }
    should_Click_on_BackToOverviewButton(){
    cy.xpath(this.elements.btn_BackToOverviewButton)
      .should("be.visible")
      .click({ force: true });
    cy.wait(10000);
  }
  // Check diagnostic item visibility and click the requesting order info button
  should_Click_On_RequestingOrderInformationbutton() {
    cy.xpath(this.elements.btn_RequestingOrderInfo)
      .scrollIntoView()
      .should("be.visible");

    cy.xpath(this.elements.btn_RequestingOrderInfo)
      .scrollIntoView()
      .click({ force: true });
    cy.wait(15000);
  }
  should_ClickonDiagnosisIteamAndcheckText(diagnosisitem) {

  cy.xpath(this.elements.txt_DiagArticleHeadLine)
    .should("be.visible");

  cy.xpath(this.elements.txt_RequestAboutDiagnosisItemsSubHeadline)
    .should("be.visible");

  cy.xpath(this.elements.overView_CheckdignosticIteaminContainer)
    .should("be.visible");

  // Click dynamic button
  cy.xpath(this.elements.btn_DiagnosisItem(diagnosisitem))
    .scrollIntoView()
    .click({ force: true });

  // Validate text after click
  cy.xpath(this.elements.txt_DiagnosisItemHeader(diagnosisitem))
    .should("be.visible");
}
  // Verify request order information page elements, fill out the form, and submit it
  should_CheckReqOrderInformation() {
    cy.xpath(this.elements.txt_RequestAboutDiagnosisItemsSubHeadline)
      .scrollIntoView()
      .should("be.visible");
    cy.xpath(this.elements.btn_BackToOverviewButton).should("be.visible");
    cy.xpath(this.elements.lbl_ICOMNextA)
      .should("be.visible")
      .click({ force: true });
    cy.xpath(this.elements.input_comment).should("be.visible");
    cy.xpath(this.elements.input_comment).type("testing purpose");
    cy.xpath(this.elements.input_phoneNumber).clear();
    cy.xpath(this.elements.input_phoneNumber).type("0049893821");
    cy.xpath(this.elements.txt_UserData).scrollIntoView().should("be.visible");
    cy.xpath(this.elements.btn_Radiobutton).scrollIntoView().click({ force: true });
    cy.xpath(this.elements.btn_SendButton).scrollIntoView().click();
    cy.wait(10000);
  }

  // Fill in the required order information form  and verify all fields are visible
  should_fillReqOrderInformation() {

    // Elements are not inside an iframe – interact directly with DOM
    cy.xpath(this.elements.txt_DiagArticleHeadLine).scrollIntoView()
      .should("be.visible");

    cy.xpath(this.elements.txt_RequestAboutDiagnosisItemsSubHeadline)
      .should("be.visible");

    cy.xpath(this.elements.btn_BackToOverviewButton)
      .should("be.visible");

    cy.xpath(this.elements.lbl_ICOMNextA)
      .should("be.visible")
      .click({ force: true });

    cy.xpath(this.elements.input_comment)
      .should("be.visible")
      .type("testing purpose");

    cy.xpath(this.elements.input_phoneNumber)
      .clear()
      .type("0049893821");

    cy.xpath(this.elements.txt_UserData).scrollIntoView()
      .should("be.visible");

    cy.xpath(this.elements.btn_Radiobutton)
      .click({ force: true });

    // Temporary wait (replace with condition if possible)
    cy.wait(5000);

  }

  // Verify that proper error messages appear when submitting an empty request order form
  should_VerifyErrorForReqOrderInformation() {
    const expectedErrors = [
      "At least one diagnostic item must be selected",
      "Invalid input: Please enter a question or a comment.",
      "Invalid input: The first name must contain between 1 and 40 characters.",
      "Invalid input: The last name must contain between 1 and 40 characters.",
      "Invalid input: The email address must have between 2 and 100 characters.",
      "Invalid input: The company name must contain between 1 and 100 characters",
      "Please accept the data protection notice.",
    ];

    // Elements are not inside an iframe – interact directly with DOM
    cy.xpath(this.elements.lbl_ICOMNextA).scrollIntoView()
      .should("be.visible")
      .click({ force: true });

    cy.xpath(this.elements.input_comment).clear();
    cy.xpath(this.elements.input_firstName).clear();
    cy.xpath(this.elements.input_lastName).clear();
    cy.xpath(this.elements.input_phoneNumber).clear();
    cy.xpath(this.elements.input_email).clear();
    cy.xpath(this.elements.input_orgName).clear();

    cy.xpath(this.elements.btn_Radiobutton)
      .click({ force: true });

    cy.xpath(this.elements.btn_SendButton)
      .click({ force: true });

    cy.log("Clicked on Send button");

    // Temporary wait (replace with proper wait if possible)
    cy.wait(5000);

    cy.log("Checking error messages after reload...");

    cy.xpath(this.elements.txt_errorMessages).should("exist");

    // Loop through each error message and verify against expected text
    cy.xpath(this.elements.txt_errorMessages)
      .each(($el, index) => {
        const actualText = $el.text().trim();

        cy.log(`Error ${index + 1}: ${actualText}`);
        console.log(`Error ${index + 1}: ${actualText}`);

        expect(actualText).to.equal(expectedErrors[index]);
      });

  }
  should_CheckSentRequest() {
    cy.xpath(this.elements.txt_RequestAboutDiagnosisItemsSubHeadline).should("be.visible");
    cy.xpath(this.elements.txt_SuccessfullyMessage).should("be.visible");
  }

  // Verify that the "Diagnostics articles" section opens correctly and displays the expected headline
  should_DiagArticleClickAndCheck() {
    const DiagArt = "Diagnostics articles";
    cy.xpath(this.elements.tab_DiagnosticArticle)
      .should("be.visible")
      .click({ force: true });
    cy.xpath(this.elements.txt_DiagArticleHeadLine)
      .should("be.visible")
      .invoke("text")
      .then((actualText) => {
        expect(actualText.trim()).to.equal(DiagArt);
      });
    cy.xpath(this.elements.Button).should("be.visible").click({ force: true });
    cy.wait(5000);
  }
should_CheckandfillallthedetailsAndSubmit(diagnosisitem) {

 cy.xpath(this.elements.checkboxDiagnosisItem(diagnosisitem)).should('exist').check({ force: true }).should('be.checked');
 cy.xpath(this.elements.questionorcomments).should("be.visible").type("testing purpose");
  //Accept it and click on Send button
  cy.xpath(this.elements.btn_Radiobutton).scrollIntoView().click({ force: true });
  cy.xpath(this.elements.btn_SendButton).scrollIntoView().click();
}
//checking is it navigating to another page
should_Check_navigatesToanotherpageForISSSNext() {
  cy.visit('https://ga.acslworld.com/ga2/#/login')
  cy.url().should('include', '/login')
}
//checking is it navigating to anotherpge for passthrutool
should_Check_navigatesToanotherpageForPassthruTool() {
  cy.visit('https://ime-actia.de/')
  cy.url().should('include', 'ime-actia.de')
}
}
export default DiagnosticsArticles;