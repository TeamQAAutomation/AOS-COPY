import MyOrganisation from "./My_Organisation";
class myTickets {
  elements = {
    tab_myAOS:
     "//div[contains(text(),' My AOS ')]",
      //"//div[@class='ds-list-item__content'][normalize-space()='My AOS']",
    tab_MyTickets:
      "//div[contains(text(),' My tickets ')]|//div[text()=' 나의 쿠폰 ']", //added Korea xpath with or condition
    lbl_tarrif: "//input[@type='radio']/following::label",
    tab_myOrganisation: "//*[@id='myOrganisation-li']",
    txt_customerNumber:
      "//label[normalize-space()='Customer number:']/following-sibling::span",
    icon_arrow: "//ds-navigation-bar//ds-list-item[@icon='arrow_left_small']/div",
    btn_continue:
      " //div[@id='purchaseTicketCalculation']//span[contains(text(),'Continue')]",
    txt_InvoiceAddress: "//h2[contains(text(),'Invoice address')]",
    txt_TransactionDetails: "//h2[contains(text(),'Transaction details')]",
    txt_PaymentMethods: "//h3[contains(text(),'Payment methods')]",
    txt_OverviewPurchaseOrder:
      "//h4[contains(text(),'Overview of the purchase order')]",
    theIFrame: "#app aos-my-aos iframe",
    purchaseIframe: "aos-iframe-page > div > iframe",
    msg_successful: "//h3[contains(text(),'Payment successful')]",
    btn_bmwPayProceed: '//button[contains(text(),"Proceed")]',
    input_cvv: '//input[@placeholder="3 digits"]',
    btn_eDiag_Popup_Continue: "(//button/span[contains(text(),'Continue')])[2]",
    btn_firstRadio:
      "//table//tbody/tr/td[1]/p-tableradiobutton//following-sibling::div",
    btn_purchaseNow: "//span[contains(text(), 'Purchase now')]",
    btn_cancel: "//button[contains(text(),' Cancel ')]",
    purchaseIFrame: "#app aos-page aos-iframe-page iframe",
    Passwordframe: "#three-ds2-placeholder iframe",
    input_password: "//input[@class='input-field']",
    btn_OK: "//button[contains(text(),'OK')]",
    btn_SuccessOK: "//button[contains(text(),'OK')]",
    txt_KR_titleof_myCoupons: "//h1[contains(text(),'나의 쿠폰')]",
    txt_KR_currenttickets: "//h3[contains(text(),'현재의 티켓')]",
    txt_KR_noTickets:
      "//p[contains(text(),'귀하는 현재 유효한 티켓이 없습니다.')]",
    iframe: "aos-iframe-page iframe",
    txt_KR_availableVouchers: "//h3[contains(text(),'사용할 수 있는 바우처')]",
    txt_KR_noVouchers:
      "//p[contains(text(),'여러분은 현재 바우처를 보유하고 있지 않습니다.')]",
    txt_KR_buyTickets: "//h3[contains(text(),'티켓 구매')]",
    txt_KR_buyTickets_Headers: "//tr//th",
    txt_KR_buyTicketsData: "//tr//td",
    txt_userDataEmail: "//*[@id='user-data']",
    txt_Organisation: "//span[contains(text(),'Organisation')]",
    txt_Address: "//span[contains(text(),'Address')]",
    txt_Country: "//span[contains(text(),'Country')]",
    txt_vatID: "//span[contains(text(),'vat.id')]",
    addressXPath:
      "(//h2[.='Invoice address']/following::div[contains(@class,'details')]//span[.='Address:']/following-sibling::div[1])/div[1]",
    countryXPath:
      "(//h2[.='Invoice address']/following::div[contains(@class,'details')][1]//span[.='Country:']/following-sibling::span[1])",
    vatXPath:
      "(//h2[.='Invoice address']/following::div[contains(@class,'details')][1]//span[contains(normalize-space(.),'VAT Reg.No.:')]/following-sibling::div[1]//span[1])",
    organisationNameXPath:
      "(//h2[.='Invoice address']/following::div[contains(@class,'details')][1]//span[.='Organisation:']/following-sibling::span[1])",
    txt_transactionText: "//span[contains(text(),'Transaction')]",
    txt_PriceNetText: "//span[contains(text(),'Price (net)')]",
    txt_PlusValueAddedText: "//span[contains(text(),'Plus value added tax (0%)')]",
    txt_TotalAmountGrossText: "//span[contains(text(),'Total amount (gross)')]",
    txt_CouponAmountListData: '//*[@id="couponAmountList"]/tbody/tr//td[1]',
    img_mastercard: "img[src*='mastercard.png']",
    txt_cardNumber: "div[col-id='cardNumber']",
    txt_purchaseTicketFirstChild: 'table>tbody > tr>td:nth-child(1)',
    txt_purchaseTicketThirdChild: 'table>tbody > tr>td:nth-child(3)',
    txt_currentTicketsRate: 
      "//h2[contains(text(),'Current tickets')]/..//descendant::th[contains(text(),'Rate')]",
    txt_currentTicketsServicesContained: 
      "//h2[contains(text(),'Current tickets')]/..//descendant::th[contains(text(),'Services contained')]",
    txt_currentTicketsValiduntil: 
      "//h2[contains(text(),'Current tickets')]/..//descendant::th[contains(text(),'Valid until')]",  
  };

  should_Verify_CurrentTickets_TableHeadings () {
    this.should_ClickOnMyTickets();
    cy.xpath(this.elements.txt_currentTicketsRate).should("be.visible");
    cy.xpath(this.elements.txt_currentTicketsServicesContained).should("be.visible");
    cy.xpath(this.elements.txt_currentTicketsValiduntil).should("be.visible");
  }

  should_ClickOnMyTickets() {
    this.clickArrow()
    cy.wait(5000);
    cy.xpath(this.elements.tab_myAOS).click({ force: true });
    cy.wait(5000);
    cy.xpath(this.elements.tab_MyTickets).click({ force: true });
    cy.wait(15000);
  }
  should_ClickOnMyAos() {
    cy.xpath(this.elements.tab_myAOS).click({ force: true });
    cy.wait(5000);
  }
  should_MyTicketsTabClick() {
    cy.xpath(this.elements.tab_MyTickets)
      .should("be.visible")
      .click({ force: true });
    cy.wait(40000);
  }
  should_VerifyBuyTickets_KR() {
    cy.frameLoaded(this.elements.iframe);
    cy.enter(this.elements.iframe).then((body) => {
      body().xpath(this.elements.txt_KR_buyTickets).should("be.visible");
      body()
        .xpath(this.elements.txt_KR_buyTickets_Headers)
        .then(($headers) => {
          expect($headers.eq(0).text().trim()).to.eq("요율");
          expect($headers.eq(1).text().trim()).to.eq("포함된 서비스");
          expect($headers.eq(2).text().trim()).to.eq("기간");
        });
      body()
        .xpath(this.elements.txt_KR_buyTicketsData)
        .each(($el, index) => {
          cy.wrap($el).scrollIntoView().should("be.visible");
        });
    });
  }
  should_VerifyCurrentTickets_KR() {
    cy.xpath(this.elements.txt_KR_titleof_myCoupons).should("be.visible");
    // Wait for iframe to load
    cy.frameLoaded(this.elements.iframe);
    cy.enter(this.elements.iframe).then((getBody) => {
      getBody().xpath(this.elements.txt_KR_currenttickets).should("be.visible");
      getBody()
        .xpath(this.elements.txt_KR_noTickets)
        .then(($content) => {
          const text = $content.text().trim();
          if (text.includes("귀하는 현재 유효한 티켓이 없습니다.")) {
            cy.log("No tickets available");
            cy.wrap($content).should("be.visible");
          } else {
            cy.log("Tickets are available");
            cy.wrap($content).should("be.visible");
          }
        });
    });
  }

  should_VerifyAvailableTickets_KR() {
    cy.frameLoaded(this.elements.iframe);
    cy.enter(this.elements.iframe).then((getBody) => {
      getBody()
        .xpath(this.elements.txt_KR_availableVouchers)
        .should("be.visible");
      getBody()
        .xpath(this.elements.txt_KR_noVouchers)
        .then(($content) => {
          const text = $content.text().trim();
          if (text.includes("여러분은 현재 바우처를 보유하고 있지 않습니다")) {
            cy.log("No Vouchers available");
            cy.wrap($content).should("be.visible");
          } else {
            cy.log("Vouchers are available");
            cy.wrap($content).should("be.visible");
          }
        });
    });
  }

  should_Select_Ticket_Without_Purchase(document, time) {
    cy.viewport(1600, 1000).then((response) => {
      cy.xpath(this.elements.lbl_tarrif).should("be.visible");
      cy.xpath(this.elements.lbl_tarrif).each(($label) => {
        let text = $label.text();
        let b = String(text).includes(String(document));
        if (b == true) {
          if (String(text).includes(String(time))) {
            cy.wrap($label).click();
            cy.log(text, "is clicked");
          }
        }
      });

      cy.xpath(this.elements.btn_continue).click({ force: true });

      if (document === "Electrical diagnosis and programming") {
        cy.xpath(this.elements.btn_eDiag_Popup_Continue).click({ force: true });
        cy.wait(20000);
      }
    });
  }

  should_Verify_Email_PaymentConfirmation() {
    //cy.frameLoaded("aos-payment-confirmation  iframe");
    //cy.iframe("aos-payment-confirmation  iframe").within(() => {
      cy.wait(5000);

      cy.xpath(this.elements.txt_userDataEmail).contains(Cypress.env("Username"), {
        matchCase: false,
      }).should("be.visible");
    //});
  }

  should_Check_Invoice_Address() {
    // cy.frameLoaded("aos-payment-confirmation  iframe");
    // cy.iframe("aos-payment-confirmation  iframe").within(() => {
      cy.wait(5000);
      cy.xpath(this.elements.txt_OverviewPurchaseOrder).should("be.visible");
      cy.xpath(this.elements.txt_InvoiceAddress).should("be.visible");
      cy.xpath(this.elements.txt_Organisation).should("be.visible");
      cy.xpath(this.elements.txt_Address).should("be.visible");
      cy.xpath(this.elements.txt_Country).should("be.visible");
      cy.xpath(this.elements.txt_vatID).should("be.visible");
    //});
  }

  should_GetInvoiceAddressDetails() {
    
    cy.xpath(this.elements.countryXPath)
      .invoke("text")
      .then((country) => {
        const formattedCountry = country.replace(/\s+/g, " ").trim();
        cy.wrap(formattedCountry).as("country"); // save as alias
      });

    cy.xpath(this.elements.addressXPath)
      .invoke("text")
      .then((invoiceAddress) => {
        const formattedAddress = invoiceAddress.replace(/\s+/g, " ").trim();
        cy.wrap(formattedAddress).as("invoiceAddress"); // save as alias
      });

    cy.xpath(this.elements.vatXPath)
      .invoke("text")
      .then((vatId) => {
        const formattedVatId = vatId.replace(/\s+/g, " ").trim();
        cy.wrap(formattedVatId).as("vatId"); // save as alias
      });

    cy.xpath(this.elements.organisationNameXPath)
      .invoke("text")
      .then((orgName) => {
        const formattedOrganisationName = orgName.replace(/\s+/g, " ").trim();
        cy.wrap(formattedOrganisationName).as("orgName"); // save as alias
      });
  }

  should_Check_Transaction_Details() {
    // cy.frameLoaded("aos-payment-confirmation  iframe");
    // cy.iframe("aos-payment-confirmation  iframe").within(() => {
      cy.wait(5000);
      cy.xpath(this.elements.txt_OverviewPurchaseOrder).should("be.visible");
      cy.xpath(this.elements.txt_TransactionDetails).should("be.visible");
      cy.xpath(this.elements.txt_transactionText).should("be.visible");
      cy.xpath(this.elements.txt_PriceNetText).should("be.visible");
      cy.xpath(this.elements.txt_PlusValueAddedText).should("be.visible");
      cy.xpath(this.elements.txt_TotalAmountGrossText).should("be.visible");
   // });
  }

  should_CheckVoucherName(voucherName) {
    // Load the iframe and wait for it to be fully loaded
    cy.frameLoaded(this.elements.purchaseIframe, { timeout: 60000 });

    // Enter the iframe and interact with its content
    cy.enter(this.elements.purchaseIframe).then((frame) => {
      // Access the table inside the iframe
      frame()
        .xpath(this.elements.txt_CouponAmountListData)
        .then(($cells) => {
          // Combine all cell texts into one string
          const allTexts = [...$cells].map((cell) =>
            cell.innerText.replace(/\s+/g, " ").trim()
          );

          // Normalize the voucher name for comparison
          const normalizedVoucherName = voucherName.replace(/\s+/g, " ").trim();

          // Assert that the normalized voucher name is included in the list of cell texts
          expect(allTexts).to.include(normalizedVoucherName);
        });
    });
  }

  // Enter Invalid Password while purchasing ticket
  should_Purchase_Ticket_InvalidPWD(document, time) {
    cy.viewport(1600, 1000).then((response) => {
      cy.xpath(this.elements.lbl_tarrif).should("be.visible");
      cy.xpath(this.elements.lbl_tarrif).each(($label) => {
        let text = $label.text();
        let b = String(text).includes(String(document));
        if (b == true) {
          if (String(text).includes(String(time))) {
            cy.wrap($label).click();
            cy.log(text, "is clicked");
            cy.log(text, "is clicked");
          }
        }
      });

      cy.xpath(this.elements.btn_continue).click({ force: true });
      Cypress.config("pageLoadTimeout");

      if (document === "Electrical diagnosis and programming") {
        cy.xpath(this.elements.btn_eDiag_Popup_Continue).click({ force: true });
        cy.wait(20000);
      }
      cy.get(this.elements.img_mastercard)
        .invoke("attr", "alt")
        .then((cardType) => {
          cy.wrap(cardType).as("cardType"); // alias it
        });
      cy.get(this.elements.txt_cardNumber)
        .eq(1)
        .invoke("text")
        .then((cardText) => {
          const last4 = cardText.slice(-4);
          cy.wrap(last4).as("cardLast4"); // save as alias
          cy.wait(5000);

          this.should_GetInvoiceAddressDetails();
          cy.wait(5000);

          // Log the fetched details
          cy.get("@country").then((country) => {
            cy.log(` Invoice Country: ${country}`);
          });

          cy.get("@invoiceAddress").then((invoiceAddress) => {
            cy.log(`Address in Invoice : ${invoiceAddress}`);
          });

          cy.get("@vatId").then((vatId) => {
            cy.log(` VAT ID: ${vatId}`);
          });

          cy.get("@orgName").then((orgName) => {
            cy.log(` Organisation Name: ${orgName}`);
          });
        });

      cy.xpath(this.elements.btn_purchaseNow).should("be.visible").click();

      cy.wait(20000);
      cy.get(this.elements.Passwordframe).should("exist");
      cy.iframe(this.elements.Passwordframe).within(() => {
        cy.xpath(this.elements.input_password).click().type("test");
        cy.xpath(this.elements.btn_OK).click();
      });
    });
  }

  should_Purchase_Ticket(document, time) {
    cy.viewport(1600, 1000).then((response) => {
      cy.xpath(this.elements.lbl_tarrif).should("be.visible");
      cy.xpath(this.elements.lbl_tarrif).each(($label) => {
        let text = $label.text();
        let b = String(text).includes(String(document));
        if (b == true) {
          if (String(text).includes(String(time))) {
            cy.wrap($label).click();
            cy.log(text, "is clicked");
            cy.log(text, "is clicked");
          }
        }
      });

      cy.xpath(this.elements.btn_continue).click({ force: true });
      // Cypress.config("pageLoadTimeout");
      Cypress.config("pageLoadTimeout", 60000);


      if (document === "Electrical diagnosis and programming") {
        cy.xpath(this.elements.btn_eDiag_Popup_Continue).click({ force: true });
        cy.wait(20000);
      }
      cy.get(this.elements.img_mastercard)
        .invoke("attr", "alt")
        .then((cardType) => {
          cy.wrap(cardType).as("cardType"); // alias it
        });
      cy.get(this.elements.txt_cardNumber)
        .eq(1)
        .invoke("text")
        .then((cardText) => {
          const last4 = cardText.slice(-4);
          cy.wrap(last4).as("cardLast4"); // save as alias
          cy.wait(5000);

          this.should_GetInvoiceAddressDetails();
          cy.wait(5000);

          // Log the fetched details
          cy.get("@country").then((country) => {
            cy.log(` Invoice Country: ${country}`);
          });

          cy.get("@invoiceAddress").then((invoiceAddress) => {
            cy.log(`Address in Invoice : ${invoiceAddress}`);
          });

          cy.get("@vatId").then((vatId) => {
            cy.log(` VAT ID: ${vatId}`);
          });

          cy.get("@orgName").then((orgName) => {
            cy.log(` Organisation Name: ${orgName}`);
          });
        });
      // cy.xpath(this.elements.btn_purchaseNow).scrollIntoView().should("be.visible").click();
      cy.xpath(this.elements.btn_purchaseNow, { timeout: 60000 })
        .should('be.visible')
        .and('not.be.disabled')
        .scrollIntoView()
        .click({ force: true });

      cy.wait(20000);
      cy.get(this.elements.Passwordframe).should("exist");
      cy.iframe(this.elements.Passwordframe).within(() => {
        cy.xpath(this.elements.input_password).click().type("password");
        cy.xpath(this.elements.btn_OK).click();
      });
    });

    // cy.frameLoaded('aos-payment-confirmation  iframe');
    //   cy.iframe('aos-payment-confirmation  iframe').within(() => {
    //   cy.wait(5000);

    cy.xpath(this.elements.msg_successful)
      .invoke("text")
      .should("equal", "Payment successful");
    cy.xpath(this.elements.btn_SuccessOK).click();
    cy.wait(10000);
    // })
    //cy.visit("https://aos-q2.bmwgroup.com/");

  }

  should_Purchase_Ticket_for_Engine_Oil() {
    cy.viewport(1600, 1000);

    const startTime = new Date().toISOString(); // capture start timestamp
    cy.wait(5000);

    // 1. Capture card brand
    cy.get(this.elements.img_mastercard)
      .should("exist")
      .invoke("attr", "alt")
      .then((cardType) => {
        cy.wrap((cardType || "").trim()).as("cardTypeOil");
      });

    // 2. Capture last 4 of card
    cy.get(this.elements.txt_cardNumber)
      .eq(1)
      .should("exist")
      .invoke("text")
      .then((cardText) => {
        const last4 = (cardText || "").trim().slice(-4);
        cy.wrap(last4).as("cardLast4Oil");
      });

    // 3. Click PURCHASE NOW
    cy.xpath(this.elements.btn_purchaseNow)
      .should("be.visible")
      .click({ force: true });

    cy.wait(10000);

    // 4. 3DS Authentication
    cy.get(this.elements.Passwordframe, { timeout: 30000 }).should("exist");
    cy.iframe(this.elements.Passwordframe).within(() => {
      cy.xpath(this.elements.input_password)
        .should("be.visible")
        .type("password");
      cy.xpath(this.elements.btn_OK).click();
    });

    // 5. Combine all data after payment
    cy.get("@cardTypeOil").then((cardTypeOil) => {
      cy.get("@cardLast4Oil").then((cardLast4Oil) => {
        const endTime = new Date().toISOString();
        const durationSeconds = (
          (new Date(endTime) - new Date(startTime)) /
          1000
        ).toFixed(2);

        const purchaseInfoOil = {
          startTime,
          endTime,
          durationSeconds: Number(durationSeconds),
          cardType: cardTypeOil,
          cardLast4: cardLast4Oil,
        };

        // Make this accessible outside
        cy.wrap(purchaseInfoOil).as("purchaseInfoOil");

        cy.log(
          "Purchase Info (Engine Oil): " + JSON.stringify(purchaseInfoOil)
        );
      });
    });
  }

  should_Measure_TicketPurchase_Duration(document, time) {
    let last4dig = "";
    let cardType = "";

    const currentDate = new Date();
    cy.log(` Current Date: ${currentDate.toLocaleDateString()}`);
    const startTime = new Date().getTime();
    cy.log(
      ` Ticket purchase started at: ${new Date(startTime).toLocaleString()}`
    );
    this.should_Purchase_Ticket(document, time);
    cy.get("@cardType").then((type) => {
      cy.get("@cardLast4").then((last4) => {
        cardType = type;
        last4dig = last4;
      });
    });

    cy.wait(20000);
    cy.then(() => {
      const endTime = new Date().getTime();
      cy.log(`Ticket purchase ended at: ${new Date(endTime).toLocaleString()}`);
      const durationSeconds = ((endTime - startTime) / 1000).toFixed(2);
      cy.log(` Total purchase duration: ${durationSeconds} seconds`);
      const info = {
        date: currentDate.toLocaleDateString(),
        startTime: new Date(startTime).toISOString(),
        endTime: new Date(endTime).toISOString(),
        durationSeconds,
        cardType,
        last4dig,
      };
      cy.wrap(info).as("purchaseInfo");
    });
  }

  /*get_OrganizationId() {
  cy.xpath(this.elements.arrow).click({ force: true });
  cy.wait(3000);
  cy.log("Fetching Organization ID from My Organisation tab...");

  cy.xpath(this.elements.myOrganisation)
    .should('be.visible')
    .click({ force: true });

  cy.wait(3000);

  return cy.xpath(this.elements.customerNumber)
    .should('be.visible')
    .invoke('text')
    .then((text) => {
  const orgId = text.trim();
  Cypress.env('orgId', orgId); 
   return cy.wrap(orgId, { log: false });
  });
}*/

  should_GetRefundInvoiceIDfromAPI() {
    return new MyOrganisation().should_Get_OrganizationId().then((orgId) => {
      const startTime = new Date().getTime();
      const endTime = new Date().getTime();
      const startISO = new Date(
        new Date(startTime).getTime() - 2 * 60 * 1000
      ).toISOString();
      const endISO = new Date(new Date(startTime).getTime()).toISOString();
      const url =
        `https://aos-q2.bmwgroup.com/payment/invoice/timed-fetch?` +
        `organizationId=${orgId}&startDate=${encodeURIComponent(
          startISO
        )}&endDate=${encodeURIComponent(endISO)}`;
      cy.log(`Fetching invoice with URL: ${url}`);

      // Make API request
      return cy
        .request({
          method: "GET",
          url,
          headers: {
            Authorization:
              "Basic YXByaWw6ZmZwcHRYWnpFd3l6NmpjVnQ2TUltd0s2VWxDMktsSW0=",
          },
          failOnStatusCode: false,
        })
        .then((response) => {
          expect(response.status).to.eq(200);
          const invoices = response.body;

          if (Array.isArray(invoices) && invoices.length > 0) {
            const apiInvoiceId = invoices[0].invoiceId || invoices[0].id;
            const TicketPrice = invoices[0].invoiceAmount;

            // Convert cents to euros if needed
            const convertedPrice = (TicketPrice / 100).toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            });

            cy.log(`Refund API Invoice ID: ${apiInvoiceId}`);

            //  Return both orgId and invoiceId
            return cy.wrap({ apiInvoiceId, orgId, convertedPrice });
          } else {
            throw new Error("No invoices found in API response.");
          }
        });
    });
  }

  //Post man hit and get the Invoice id
  should_GetInvoiceIDfromAPI(document, time) {
    return new MyOrganisation().should_Get_OrganizationId().then((orgId) => {
      return cy.get("@purchaseInfo").then((purchaseInfo) => {
        cy.log(`Purchase started at: ${purchaseInfo.startTime}`);
        cy.log(`Purchase ended at: ${purchaseInfo.endTime}`);
        cy.log(`Duration: ${purchaseInfo.durationSeconds}`);
        cy.log(`Using dynamic Organization ID: ${orgId}`);
        // Adjust time window for API query
        // Use exact start time
        const startISO = new Date(purchaseInfo.startTime).toISOString();
        const endISO = new Date(
          new Date(purchaseInfo.endTime).getTime() + 60 * 1000
        ).toISOString();
        const url =
          `https://aos-q2.bmwgroup.com/payment/invoice/timed-fetch?` +
          `organizationId=${orgId}&startDate=${encodeURIComponent(
            startISO
          )}&endDate=${encodeURIComponent(endISO)}`;

        cy.log(`Fetching invoice with URL: ${url}`);

        // Make API request
        return cy
          .request({
            method: "GET",
            url,
            headers: {
              Authorization:
                "Basic YXByaWw6ZmZwcHRYWnpFd3l6NmpjVnQ2TUltd0s2VWxDMktsSW0=",
            },
            failOnStatusCode: false,
          })
          .then((response) => {
            expect(response.status).to.eq(200);
            const invoices = response.body;

            if (Array.isArray(invoices) && invoices.length > 0) {
              const apiInvoiceId = invoices[0].invoiceId || invoices[0].id;
              const TicketPrice = invoices[0].invoiceAmount;

              // Convert cents to euros if needed
             /* const convertedPrice = (TicketPrice / 100).toLocaleString(

                "en-US",
                {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }
              );*/
              const convertedPrice = TicketPrice / 100; // number

              cy.log(`API Invoice ID: ${apiInvoiceId}`);
              // Cypress.env('invoiceId', apiInvoiceId);
              const last4 = purchaseInfo.last4dig;
              const cardType = purchaseInfo.cardType;
              //  Return both orgId and invoiceId
              return cy.wrap({
                apiInvoiceId,
                orgId,
                convertedPrice,
                last4,
                cardType,
              });
            } else {
              throw new Error("No invoices found in API response.");
            }
          });
      });
    });
  }

  should_getInvoiceIDfromAPI_for_EngineOilTickets() {
    return new MyOrganisation().should_Get_OrganizationId().then((orgId) => {
      return cy.get("@purchaseInfoOil").then((purchaseInfo) => {
        cy.log(`Purchase started at: ${purchaseInfo.startTime}`);
        cy.log(`Purchase ended at: ${purchaseInfo.endTime}`);
        cy.log(`Duration: ${purchaseInfo.durationSeconds}`);
        cy.log(`Using dynamic Organization ID: ${orgId}`);

        // Build time window for API
        const startISO = new Date(purchaseInfo.startTime).toISOString();
        const endISO = new Date(
          new Date(purchaseInfo.endTime).getTime() + 60 * 1000
        ).toISOString();

        const url =
          `https://aos-q2.bmwgroup.com/payment/invoice/timed-fetch?` +
          `organizationId=${orgId}&startDate=${encodeURIComponent(
            startISO
          )}&endDate=${encodeURIComponent(endISO)}`;

        cy.log(`Fetching invoice with URL: ${url}`);

        // Call API
        return cy
          .request({
            method: "GET",
            url,
            headers: {
              Authorization:
                "Basic YXByaWw6ZmZwcHRYWnpFd3l6NmpjVnQ2TUltd0s2VWxDMktsSW0=",
            },
            failOnStatusCode: false,
          })
          .then((response) => {
            expect(response.status).to.eq(200);
            const invoices = response.body;

            if (Array.isArray(invoices) && invoices.length > 0) {
              const apiInvoiceId = invoices[0].invoiceId || invoices[0].id;
              const TicketPrice = invoices[0].invoiceAmount;

              const convertedPrice = (TicketPrice / 100).toLocaleString(
                "en-US",
                {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }
              );

              cy.log(`API Invoice ID: ${apiInvoiceId}`);

              return cy.wrap({
                apiInvoiceId,
                orgId,
                convertedPrice,
                last4: purchaseInfo.cardLast4,
                cardType: purchaseInfo.cardType,
              });
            } else {
              throw new Error("No invoices found in API response.");
            }
          });
      });
    });
  }

  should_AssertInvoiceIDs(uiInvoiceId, apiInvoiceId) {
    cy.log("Invoice Id3:" + apiInvoiceId);
    expect(uiInvoiceId).to.equal(apiInvoiceId);
  }
  clickArrow() {
    cy.xpath(this.elements.icon_arrow).click({ force: true });
  }

  should_Verify_Purchase_Ticket() {
    cy.wait(60000);
    cy.frameLoaded(this.elements.purchaseIframe, { timeout: 60000 });
    cy.enter(this.elements.purchaseIframe).then((frame) => {
      frame()
        .find(this.elements.txt_purchaseTicketFirstChild)
        .each(($td, index) => {
          const t = $td.text();
          if (t.includes("May 15, 2024")) {
            frame()
              .find(this.elements.txt_purchaseTicketFirstChild)
              .eq(index)
              .next()
              .then(function (d) {
                const r = d.text();
                expect(r).to.contains("Transaction complete");
                frame()
                  .find(this.elements.txt_purchaseTicketThirdChild)
                  .each(($td, index) => {
                    const p = $td.text();
                    if (p.includes("mungandla2@gmail.com")) {
                      frame()
                        .find(this.elements.txt_purchaseTicketThirdChild)
                        .eq(index)
                        .next()
                        .then(function (b) {
                          const s = b.text();
                          expect(s).to.contains("Hourly");
                        });
                    }
                  });
              });
          }
        });
    });
  }
}
export default myTickets;