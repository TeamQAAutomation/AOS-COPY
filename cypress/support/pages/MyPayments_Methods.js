class MyPaymentMethods {
  elements = {
    /*-------- XPATHS/ELEMENT LOCATORS ------------ */
    tab_myAOSCss: "#myAos-li",
    tab_Mydata: "//div[contains(text(),' My data ')]",
    tab_MyOrganisation: "//div[contains(text(),' My organisation ')]",
    tab_MyTicket: "//div[contains(text(),' My tickets ')]",
    tab_OngoingTicket: "//div[contains(text(),' Ongoing tickets ')]",
    tab_History: "//div[contains(text(),' History ')]",
    tab_MyInvoices: "//div[contains(text(),' My invoices ')]",
    tab_MyPaymentsMethod: "//div[contains(text(),' My payment methods ')]",
    Info_PaymentProcesssubheadline:
      "(//div//h2[contains(text(),'Information about entering information for payment processes')])[1]",
    Table: "//div[@data-ref='rootWrapperBody']",
    aosIFrame: "#app aos-iframe-page iframe",
    txt_CreditcardHeading: "//span[normalize-space()='Credit card']",
    txt_CardNumberHeading: "//span[normalize-space()='Card number']",
    txt_CardHolderHeading: "//span[normalize-space()='Cardholder']",
    txt_ExpirationDateHeading: "//span[normalize-space()='Expiration date']",
    txt_DeleteHeading: "//span[normalize-space()='Delete']",
    txt_SetPrefferedcreditCardHeading:
      "//span[normalize-space()='Set preferred credit card']",
    img_CreditCardName:
      "(//div[contains(@style,'visa.png') or contains(@style,'mastercard.png')])[1]",
    txt_CardNumber:
      "(//div[@col-id='cardNumber'])[2]",
    txt_CardHolderName:
      "(//div[@col-id='cardHolder'])[2]",
    txt_ExpirationDate: "(//div[@col-id='expirationDate'])[2]",
    icon_Delete: "(//div[contains(@class,'ag-cell-value')]//aos-custom-delete-cell//button)[1]",
    txt_SetPrefferedcreditCardOrPreferredcreditcard:
      "(//aos-custom-preferred-card-cell//span[contains(normalize-space(.),'Preferred credit card') or contains(normalize-space(.),'Set as preferred credit card')])[1]",
    btn_PreviousPage:
      "//span[@class='ag-icon ag-icon-first']",
    btn_Previous:
      "//span[@class='ag-icon ag-icon-previous']",
    btn_Next:
      "//span[@class='ag-icon ag-icon-next']",
    btn_NextPage:
      "//span[@class='ag-icon ag-icon-last']",
    txt_PageNumber:
      "/html/body/app-root/app-payment/app-payment-method-overview/div/div/div[2]/div[3]/div/p-paginator/div/span/button",
    btn_AddCreditCard:
      "//button[.//span[normalize-space()='Add credit card']]",
    FrameOfHoldername: "(//iframe[@class='js-iframe'])[1]",
    FrameOfExpiredate: "(//iframe[@class='js-iframe'])[2]",
    FrameOfSecurityCode: "(//iframe[@class='js-iframe'])[3]",
    input_Cardholdername:
      "//input[contains(@id,'adyen-checkout-encryptedCardNumber')]",
    input_ExpireDate:
      "//input[contains(@id,'adyen-checkout-encryptedExpiryDate')]",
    input_SecurityCode:
      "//input[contains(@id,'adyen-checkout-encryptedSecurityCode')]",
    btn_proceed: "//button[contains(text(),'Proceed')]",
    input_NameOnCard:
      "//input[contains(@class,'card__holderName')]",
    txt_AddedCreditCardNumber:
      "(//div[@col-id='cardNumber' and @aria-colindex='2'])[2]",
    txt_AddedHolderName:
     "(//div[@col-id='cardHolder' and @aria-colindex='3'])[2]",
    txt_AddedExpirationDate: "(//div[@col-id='expirationDate' and @aria-colindex='4'])[2]",

    txt_AddedCardSetPrefferedCard:
      "//td[contains(text(),'0000')]/following-sibling::td//div//span[contains(text(),'Set as preferred credit card') or contains(text(),'Preferred credit card')]",

    img_MasterCardLogo:
      "//table[@id='pn_id_1-table']/tbody/tr[2]/td[1]/div[@class='mastercard-logo']",
    btn_DeleteCreditCard:
      "//p-dialog//following-sibling::button[contains(text(),'Delete credit card')]",
    txt_CheckingPrefferedCard:
      "//td[contains(text(),'0000')]//following-sibling::td//div//span[contains(text(),'Set as preferred credit card')]",
    input_addCreditCardCardNumber: 
      '#component-container div.adyen-checkout__field.adyen-checkout__field--cardNumber iframe',
    iframe_addCreditCardCardNumber: 
      '#component-container div.adyen-checkout__field.adyen-checkout__field--cardNumber  span iframe',
    iframe_addCreditCardExpiryDate: 
      '#component-container div.adyen-checkout__field.adyen-checkout__field--50.adyen-checkout__field__exp-date iframe',
    input_addCreditCardEncryptedCardNumber: 'input[data-fieldtype="encryptedCardNumber"]',
    input_addCreditCardExpiryDate: 
      '.adyen-checkout__field__exp-date > .adyen-checkout__input-wrapper > .adyen-checkout__input',
    iframe_addCreditCVVSecurityCode:
      '#component-container div.adyen-checkout__field.adyen-checkout__field--50.adyen-checkout__field__cvc iframe',
    input_addCreditCVVSecurityCode: 
      '.adyen-checkout__field__cvc > .adyen-checkout__input-wrapper > .adyen-checkout__input',
    iframe_ClickOnProceed: '.adyen-checkout__iframe',
    input_answer: "input[name='answer']",
    btn_Submit: '#buttonSubmit'
    };

  /*-------- METHODS ------------ */

  // Checks My Payment Methods information
  should_ClickOnMypaymentmethods() {
    cy.wait(3000);
    cy.xpath(this.elements.tab_MyPaymentsMethod)
      .should("be.visible")
      .click({ force: true });
    cy.wait(10000);
   cy.xpath(this.elements.Info_PaymentProcesssubheadline)
  .should("be.visible")
  .invoke("text")
  .then((text) => {
    cy.log(text.trim());
  });

  }

  // Verifies tabs under MyAOS  and logs the text
  should_MYAOSOverview() {
    cy.get(this.elements.tab_myAOSCss).should("be.visible").click({ force: true });
    cy.wait(3000);
    cy.xpath(this.elements.tab_Mydata)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.tab_MyOrganisation)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.tab_MyTicket)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.tab_OngoingTicket)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });

    cy.xpath(this.elements.tab_MyInvoices)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.tab_MyPaymentsMethod)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
  }

  // Checks that payment process information and table are visible
  should_checkinformationaboutpaymentprocess() {
   cy.xpath(this.elements.Info_PaymentProcesssubheadline)
  .should("be.visible");

   cy.log("Payment process subheadline is displayed");

   cy.xpath(this.elements.Table)
  .should("be.visible");

   cy.log("Payments table is displayed");

  }

  // Checks the credit card details section
  should_CheckCreditCardDetails() {
    cy.frameLoaded(this.elements.aosIFrame);
    cy.enter(this.elements.aosIFrame).then((p) => {
      p().xpath(this.elements.img_CreditCardName).should("be.visible");
      // Check and validate the card number
      p()
        .xpath(this.elements.txt_CardNumber)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
          const trimmedText = text.trim();
          cy.log("Trimmed text:", trimmedText);

          // Extract the first 15 characters and log them
          const firstTwelveChars = trimmedText.substring(0, 15);
          cy.log("First 15 characters:", firstTwelveChars);

          // Extract the next 4 characters and log them
          const nextFourChars = trimmedText.substring(15, 19);
          cy.log("Next 4 characters:", nextFourChars);

          // Check that the first 12 characters (after trimming) are 'x'
          expect(firstTwelveChars).to.equal("XXXX-XXXX-XXXX-");

          // Check that the next 4 characters are digits (0-9)
          expect(nextFourChars).to.match(/^\d{4}$/);
        });
      p()
        .xpath(this.elements.txt_CardHolderName)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      p()
        .xpath(this.elements.txt_ExpirationDate)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
          const codes = [...text].map((char) => char.charCodeAt(0)).join(" ");
          cy.log("Character codes:", codes);
          // Normalize all spaces and trim the text
          const normalizedText = text.replace(/\s+/g, " ").trim();
          cy.log("Normalized text:", normalizedText);
        });
      p().xpath(this.elements.icon_Delete).should("be.visible");
      cy.log("Delete icon is visible");
      p()
        .xpath(this.elements.txt_SetPrefferedcreditCardOrPreferredcreditcard)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
    });
  }
 should_clickOnMyAOS() {
  cy.get(this.elements.tab_myAOSCss)
      .should("be.visible")
      .click({ force: true });
}


should_CheckPaginationAndAddCreditCardCheck() {
      cy.xpath(this.elements.btn_PreviousPage).scrollIntoView().should('be.visible')
      cy.xpath(this.elements.btn_Previous).should('be.visible')
      cy.xpath(this.elements.btn_Next).should('be.visible')
      cy.xpath(this.elements.btn_NextPage).should('be.visible') 
  }


  should_AddCard() {
    cy.frameLoaded(this.elements.aosIFrame);
    cy.enter(this.elements.aosIFrame).then((p) => {
      p()
        .xpath(this.elements.btn_AddCreditCard)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
          p().xpath(this.elements.btn_AddCreditCard).should("be.visible").click();
          cy.wait(30000);
        });
    });

    cy.get(this.elements.input_addCreditCardCardNumber).type("2222 4000 7000 0005");
  }

  // Opens Add Credit Card page and prepares to enter the card number
  should_AddCreditCard(cardnumber) {
    cy.frameLoaded(this.elements.aosIFrame);
    cy.enter(this.elements.aosIFrame).then((p) => {
      p()
        .xpath(this.elements.btn_AddCreditCard)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
          // Check and click the "Add Credit Card" button
          p().xpath(this.elements.btn_AddCreditCard).should("be.visible").click();
          cy.wait(30000);
          // Navigate directly to the Add Card page
          cy.visit(
            "https://aos-portal-qa2.bmwgroup.com/payment/page/#/payment/add-card?langLong=en-GB&client=RoW"
          );

          cy.wait(30000);
          cy.frameLoaded(this.elements.iframe_addCreditCardCardNumber);
          // Enter the card number
          cy.enter(this.elements.iframe_addCreditCardCardNumber).then((body) => {
            cy.get(
              "#component-container > div > div > div.adyen-checkout__loading-input__form.LoadingWrapper-module_loading-input__form__ffCKa > div.adyen-checkout__card__form > div.adyen-checkout__field.adyen-checkout__field--cardNumber > div.adyen-checkout__input-wrapper > span"
            ).click();
          });
        });
    });
  }
  // Adds a new credit card by visiting the payment page and entering card details
  should_VerifyAddingCreditCard(cardnumber) {
    // Visit the payment overview page
    cy.visit({
      url: "https://aos-portal-qa2.bmwgroup.com/public/wen/dispatch.html?redirectUrl=%2Fpayment%2Fpage%2F%23%2Fpayment%2Fpayment-method-overview%3Fclient%3DRoW&langLong=en-GB",
      headers: {
        "Content-Encoding": "gzip",
        "Content-Type": "text/html",
        "Accept-Ranges": "bytes",
        "Strict-Transport-Security": "includeSubDomains",
        Connection: "Keep-Alive",
      },
      method: "GET",

      retryOnNetworkFailure: true,
      retryOnStatusCodeFailure: false,
      timeout: 60000,
      failOnStatusCode: false,
      followRedirect: false,
      onLoad: () => {
        // Confirm that URL includes "payment"
        cy.url().should("include", "payment");
      },
    }).then((response) => {
      cy.wait(50000);
      // Ensure the document is fully loaded
      cy.document().should("have.property", "readyState", "complete");
      // Wait until get the  respose with 200 OK
      cy.waitUntil(() =>
        cy
          .request("https://aos-portal-qa2.bmwgroup.com")
          .then((response) => response.status === 200)
      );
      // Click the "Add Credit Card" button
      cy.xpath(this.elements.btn_AddCreditCard)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
          cy.xpath(this.elements.btn_AddCreditCard).should("be.visible").click();

          cy.waitUntil(() =>
            cy
              .request("https://aos-portal-qa2.bmwgroup.com")
              .then((response) => response.status === 200)
          );

          cy.wait(30000);

          cy.document().should("have.property", "readyState", "complete");
        });
      // Navigate to the Add Card page directly
      cy.visit(
        "https://aos-portal-qa2.bmwgroup.com/payment/page/#/payment/add-card?langLong=en-GB&client=RoW"
      );

      cy.wait(30000);
      cy.frameLoaded(this.elements.iframe_addCreditCardCardNumber);
      cy.enter(this.elements.iframe_addCreditCardCardNumber).then((body) => {
        // Enter card number
        cy.get(this.elements.input_addCreditCardEncryptedCardNumber).type(cardnumber);
      });
      cy.frameLoaded(this.elements.iframe_addCreditCardExpiryDate);

      // Enter expiration date
      cy.enter(this.elements.iframe_addCreditCardExpiryDate).then((body) => {
        cy.get(this.elements.input_addCreditCardExpiryDate).type("03/30");
      });
      // Enter CVC/security code inside iframe
      cy.frameLoaded(this.elements.iframe_addCreditCVVSecurityCode);
      cy.enter(this.elements.iframe_addCreditCVVSecurityCode).then((body) => {
        body().xpath(this.elements.input_SecurityCode).click();

        cy.get(this.elements.input_addCreditCVVSecurityCode).type("737");
      });
    });

    cy.wait(30000);
  }

  // Proceeds with card and authentication
  should_ClickOnProceed(name) {
    cy.xpath(this.elements.input_NameOnCard).type(name);
    cy.xpath(this.elements.btn_proceed).should("be.visible").click({ force: true });
    cy.wait(30000);
    cy.iframe(this.elements.iframe_ClickOnProceed);
    cy.frameLoaded(this.elements.iframe_ClickOnProceed);
    // Enter password and submit
    cy.enter(this.elements.iframe_ClickOnProceed).then((body) => {
      cy.wait(3000);
      body().find(".grid-container").should("be.visible");
      body().find(this.elements.input_answer).type("password");
      body().find(this.elements.btn_Submit).click({ force: true });
    });
  }

  // Verifies the details of the latest added credit card
  should_CheckingLatestAddedCardDetails(digits, cardname) {
    cy.wait(30000);
    // cy.frameLoaded(this.elements.aosIFrame);
    // cy.enter(this.elements.aosIFrame).then((p) => {
      const CreditCardNumber = "XXXX-XXXX-XXXX" + "-" + digits;
      const ExpirationDate = "03 /2030";
      const CardHolder = cardname;
      const SetPrefferedCard = "Preferred credit card";
      // Verify credit card number
      cy
        .xpath(this.elements.txt_AddedCreditCardNumber)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          const fetchedCardNumber = text.trim();
          cy.log(`Fetched card number: '${fetchedCardNumber}'`);
          cy.log(`Expected card number: '${CreditCardNumber}'`);

          if (fetchedCardNumber === CreditCardNumber) {
            cy.log(
              "CreditCardNumber is the same as given while adding the card: " +
                fetchedCardNumber
            );
          } else {
            cy.log("CreditCardNumber is different: " + fetchedCardNumber);
          }
        });
      // Verify card holder name
      cy
        .xpath(this.elements.txt_AddedHolderName)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          const fetchedHolderName = text.trim();
          cy.log(`Fetched holder name: '${fetchedHolderName}'`);
          cy.log(`Expected holder name: '${CardHolder}'`);

          if (fetchedHolderName === CardHolder) {
            cy.log(
              "Card Holder Name is the same as given while adding the card: " +
                fetchedHolderName
            );
          } else {
            cy.log("CreditCardNumber is different: " + fetchedHolderName);
          }
        });
      // Verify expiration date
      cy
        .xpath(this.elements.txt_AddedExpirationDate)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          const fetchedExpirationDate = text.trim();
          cy.log(`Fetched Expiration Date: '${fetchedExpirationDate}'`);
          cy.log(`Expected Expiration Date: '${ExpirationDate}'`);

          if (fetchedExpirationDate === ExpirationDate) {
            cy.log(
              "Card Holder Name is the same as given while adding the card: " +
                fetchedExpirationDate
            );
          } else {
            cy.log("CreditCardNumber is different: " + fetchedExpirationDate);
          }
        });
      // Verify that the delete icon is visible
      cy
        .xpath(
          `//*[contains(text(),'${digits}')]//following::div[3]`
        )
        .should("be.visible");
      cy.log("Added Card Delete icon is visible");
      cy
        .xpath(`(//*[contains(text(),'${digits}')]/following::span[contains(text(),'Set as preferred credit card') or contains(text(),'Preferred credit card')])[1]`)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          const fetchedAddedCradSetPreferredCard = text.trim();
          cy.log(
            `Fetched added Preferred card: '${fetchedAddedCradSetPreferredCard}'`
          );
          cy.log(`Expected added preffered acrd: '${SetPrefferedCard}'`);
          if (fetchedAddedCradSetPreferredCard === SetPrefferedCard) {
            cy.log(
              "Card Holder Name is the same as given while adding the card: " +
                fetchedAddedCradSetPreferredCard
            );
          } else {
            cy.log(
              "CreditCardNumber is different: " +
                fetchedAddedCradSetPreferredCard
            );
          }
        });
    //});
  }
  // Sets a credit card as preferred and verifies it
  should_MakingTheCardAsPrefferedCard(digits) {
    const precard = "Preferred credit card";
    cy.frameLoaded(this.elements.aosIFrame);
    cy.enter(this.elements.aosIFrame).then((p) => {
      // Click "Set as preferred credit card" for the given card
      p()
        .xpath(
          `//td[contains(text(),'${digits}')]//following-sibling::td//div//span[contains(text(),'Set as preferred credit card')]`
        )
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);

          p()
            .xpath(
              `//td[contains(text(),'${digits}')]//following-sibling::td//div//span[contains(text(),'Set as preferred credit card')]`
            )
            .click({ force: true });
          cy.wait(5000);
        });
      // Verify that the card is now marked as preferred
      p()
        .xpath(
          `//td[contains(text(),'${digits}')]//following-sibling::td//div//span[contains(text(),'Preferred credit card')]`
        )
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
    });
  }

  // Deletes a specified credit card and verifies it is removed
  should_DeleteAddedCard(digits) {
    cy.frameLoaded(this.elements.aosIFrame);
    cy.enter(this.elements.aosIFrame).then((p) => {
      // Click the delete icon for the given card
      p()
        .xpath(
          `//*[contains(text(),'${digits}')]//following-sibling::td/button[contains(@class,'delete-icon')]`
        )
        .should("be.visible")
        .click({ force: true });
      cy.log("DeleteIcon got clicked");
      cy.wait(10000);
      // Confirm deletion by clicking the delete button
      p()
        .xpath(this.elements.btn_DeleteCreditCard)
        .should("be.visible")
        .dblclick({ force: true });
      cy.log("Added Card Got Deleted");
      cy.wait(20000);
      // Verify the card no longer exists
      p()
        .xpath(
          `//*[contains(text(),'${digits}')]//following-sibling::td/button[contains(@class,'delete-icon')]`
        )
        .should("not.exist");
      cy.log("Added card successfully deleted");
    });
  }

  // Counts the number of credit cards listed
  should_VerifyIsCardExists() {
    let rowcount = 0;
    cy.frameLoaded(this.elements.aosIFrame);
    cy.enter(this.elements.aosIFrame).then((p) => {
      // Count the number of rows in the  payment table
      p()
        .find("table tbody tr")
        .then((rows) => {
          rowcount = rowcount + rows.length;
          cy.log(rowcount);
        });
    });
    return rowcount;
  }
  // Checks and logs the headings of the credit card table
  should_CheckTableHeadingsRelatedToCreditCard() {
    // cy.frameLoaded(this.elements.aosIFrame);
    // cy.enter(this.elements.aosIFrame).then((p) => {
      // Check and log "Credit Card" heading
      // cy.xpath(this.elements.txt_Creditcardheading)
      //   .should("be.visible")
      //   .invoke("text")
      //   .then((text) => {
      //     cy.log(text);
      //   });
      // Check and log "Card Holder" heading
      cy.xpath(this.elements.txt_CardHolderHeading)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      // Check and log "Expiration Date" heading
      cy.xpath(this.elements.txt_ExpirationDateHeading)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      // Check and log "Delete" heading
      cy.xpath(this.elements.txt_DeleteHeading)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      // Check and log "Set Preferred Card" heading
      cy.xpath(this.elements.txt_SetPrefferedcreditCardHeading)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
    //});
  }
}
export default MyPaymentMethods;