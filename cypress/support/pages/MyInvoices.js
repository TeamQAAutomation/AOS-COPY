class MyInvoices {
  elements = {
    tab_myAOSCss: "#myAos-li",
    tab_MyInvoices: "//div[contains(text(),' My invoices ')]",
    txt_InvoicesOverviewsubheadline:
      "//span[contains(text(),'Invoice overview')]",
    TableInInvoices: "//div[@aria-live='polite']/..",
    aosIFrame: "#app aos-iframe-page iframe",
    txt_TypeOfInvoices: "//span[normalize-space()='Type of invoice']",
    //"//table[@id='pn_id_1-table']/thead/tr/th[1][contains(text(),' Type of invoice ')]",
    txt_OrderName: "//span[normalize-space()='Order number']",
    //"//table[@id='pn_id_1-table']/thead/tr/th[2][contains(text(),' Order number ')]",
    txt_InvoicesNumber: "//span[normalize-space()='Invoice number']",
    //"//table[@id='pn_id_1-table']/thead/tr/th[3][contains(text(),' Invoice number ')]",
    txt_GrossAmount: "//span[normalize-space()='Gross amount']",
    //"//table[@id='pn_id_1-table']/thead/tr/th[4][contains(text(),' Gross amount ')]",
    txt_DateOfInvoices: "//span[normalize-space()='Date of invoice']",
    // "//table[@id='pn_id_1-table']/thead/tr/th[5][contains(text(),' Date of invoice ')]",
    txt_Download: "//span[normalize-space()='Download']",
    //"//table[@id='pn_id_1-table']/thead/tr/th[6][contains(text(),' Download ')]",
    txt_Payment: "//span[normalize-space()='Payment']",
    //"//table[@id='pn_id_1-table']/thead/tr/th[7][contains(text(),' Payment ')]",
    txt_TypeOfInvoicesData: "(//div[@col-id='type'])[2]",
    txt_OrderNameData: "(//div[@col-id='orderId'])[2]",
    txt_InvoiceID: "(//div[@col-id='invoiceNumber'])[2]",
    img_downloadLink: "(//div[@col-id='downloadLink'])[2]",
    txt_GrossAmountData: "(//*[@col-id='amount' or @col-id='grossAmount'])[1]",
    txt_DateOfInvoicesData: "(//div[@col-id='date'])[2]",
    DownloadData:
      "//*[@id='app']/div/div/aos-my-invoices/div/div/ag-grid-angular/div[3]/div[1]/div[2]/div[3]/div[1]/div[2]/div/div[1]/div[6]/download-invoice-cell",
    img_pdfdownload: "(//img[@class='ng-star-inserted'])[1]",
    txt_noEntriesinTable:
      "//tbody[@class='p-element p-datatable-tbody']//span[text()='No entries found']",
    txt_orderId: "(//div[@col-id='orderId'])[2]",
    txt_InformationResearchValidUntil:
      "(//td[contains(text(),'Information research')])[1]/following::td[2]",
    txt_electricalDiagnosisValidUntil:
      "(//td[contains(text(),'Electrical diagnosis and programming')])[1]/following::td[2]",
    txt_creditNote:
      "(//div[@col-id='type' and contains(text(),'Creditnote')])[1]",
    txt_InvoiceDate: "(//div[@col-id='date'])[2]",
    txt_TicketAmount: "(//div[@col-id='amount'])[2]",
    btn_paginationNext:
      "button.p-ripple.p-element.p-paginator-next.p-paginator-element.p-link",
    btn_paginatorLastBtn:
      "button.p-ripple.p-element.p-paginator-last.p-paginator-element.p-link.ng-star-inserted",
    txt_invoiceColumn: '[col-id="invoiceNumber"]',
    link_invoiceColumnDownload: '[col-id="downloadLink"]',
  };
  should_Get_InformationResearch_Ticket_Date() {
    cy.xpath(this.elements.txt_InformationResearchValidUntil)
      .should("be.visible")
      .invoke("text")
      .then((date) => {
        cy.wrap(date.trim()).as("infoResearchDate");
      });
  }
  should_Validate_Canceled_Ticket(startTime) {
    cy.xpath(this.elements.txt_InformationResearchValidUntil)
      .should("be.visible")
      .invoke("text")
      .then((date) => {
        expect(date.trim()).to.eq(startTime);
      });
  }

  should_Get_ElectricalDiagnosis_Date() {
    cy.xpath(this.elements.txt_electricalDiagnosisValidUntil)
      .should("be.visible")
      .invoke("text")
      .then((date) => {
        cy.wrap(date.trim()).as("electricalDiagnosisDate");
      });
  }

  should_Click_MyInvoicesTab() {
    cy.get(this.elements.tab_myAOSCss)
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
    cy.xpath(this.elements.tab_MyInvoices)
      .should("be.visible")
      .click({ force: true });
    cy.wait(15000);
  }
  should_Click_On_MyInvoicesTab() {
    cy.xpath(this.elements.tab_MyInvoices)
      .should("be.visible")
      .click({ force: true });
    cy.wait(15000);
  }
  should_Check_Type_CreditNote() {
    cy.xpath(this.elements.txt_creditNote).should("be.visible");
  }
  should_Verify_OrderId_Startswith() {
    cy.xpath(this.elements.txt_orderId)
      .should("be.visible")
      .invoke("text")
      .then((orderId) => {
        expect(orderId.trim().startsWith("r")).to.be.true;
      });
  }
  should_Verify_OrderId_Startswith_For_Postpay() {
    cy.xpath(this.elements.txt_orderId)
      .should("be.visible")
      .invoke("text")
      .then((orderIds) => {
        cy.log("Order ID " + orderIds);
        expect(orderIds.trim().startsWith("R")).to.be.true;
      });
  }

  should_Check_OrderId_Startswith_for_EngineOil_Tickets() {
    cy.xpath(this.elements.txt_orderId)
      .should("be.visible")
      .invoke("text")
      .then((orderId) => {
        expect(orderId.trim().startsWith("E")).to.be.true;
      });
  }

  should_Validate_Payment_MessageWithValues(
    expectedAmount,
    expectedLast4,
    expectedCardType,
    pdfFileName,
  ) {
    //const expectedMessage = `The total amount of ${expectedAmount} EUR will be charged to your ${expectedLast4} ${expectedCardType} Credit Card`;

    cy.task("readPdf", pdfFileName).then((text) => {
      const cleanText = text.replace(/\s+/g, " ");
      // Convert UI amount to PDF format for assertion
      const pdfAmount =
        this.should_ConvertUiAmount_To_PdfFormat(expectedAmount);
      expect(cleanText).to.include(pdfAmount);
      expect(cleanText).to.include(expectedLast4);
      expect(cleanText).to.include(expectedCardType.toUpperCase());
    });
  }
  should_Validate_CardTypeAndNumber(
    expectedcardNumber,
    expectedCardType,
    pdfFileName,
  ) {
    {
      cy.task("readPdf", pdfFileName).then((text) => {
        expect(text).to.include(expectedcardNumber);
        expect(text).to.include(expectedCardType.toUpperCase());
      });
    }
  }

  should_Verify_NonRefundInvoiceDetails(orgId, apiInvoiceId) {
    return cy
      .request({
        method: "GET",
        url: "https://aos-q2.bmwgroup.com/payment/api/refund/nonRefundInvoiceDetails",
        qs: {
          oid: orgId,
          page: 0,
          pageSize: 92,
        },
        headers: {
          Authorization: "Basic QU9TMkRFVjpSZWZ1bmRAMTIzNA==",
        },
      })
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.entries).to.be.an("array").that.is.not.empty;

        const firstItem = response.body.entries[0];

        expect(firstItem.invoiceId).to.be.a("string").and.not.be.empty;
        expect(firstItem.invoiceAmount).to.be.a("number").and.be.greaterThan(0);

        cy.log(`Invoice ID: ${firstItem.invoiceId}`);
        cy.log(`Invoice Amount: ${firstItem.invoiceAmount}`);
        expect(firstItem.invoiceId).to.include(apiInvoiceId);
        //  wrap the value
        //return cy.wrap(firstItem);
      });
  }
  should_Validate_CreditNoteSubject(pdfFileName) {
    cy.task("readPdf", pdfFileName).then((text) => {
      expect(text).to.include("Credit Note");
    });
  }

  should_Validate_CreditNoteJunkContent(pdfFileName) {
    cy.task("readPdf", pdfFileName).then((text) => {
      expect(text).not.to.include(
        "paymentInformation.AOS_PORTAL is not defined in configPath",
      );
    });
  }

  should_Validate_RefundMessage(pdfFileName) {
    cy.task("readPdf", pdfFileName).then((text) => {
      expect(text).to.include(
        "will be credited to your **** **** **** 5454  MASTERCARD Credit Card.",
      );
    });
  }
  should_Validate_CreditNote_FieldNames(pdfFileName) {
    cy.task("readPdf", pdfFileName).then((text) => {
      expect(text).to.include("Sender");
      expect(text).to.include("Contact");
      expect(text).to.include("Reference");
      expect(text).to.include("Subject");
      expect(text).to.include("AOS-Customer Id");
      expect(text).to.include("VAT-ID");
      expect(text).to.include("Date");
      expect(text).to.include("Cancellation-No.");
      expect(text).to.include("Invoice Date");
      expect(text).to.include("Invoice-Ref-No.");
    });
  }
  should_Validate_CreditNote_FieldNames_DE(pdfFileName) {
    cy.task("readPdf", pdfFileName).then((text) => {
      expect(text).to.include("Absender");
      expect(text).to.include("Kontakt");
      expect(text).to.include("Referenz");
      expect(text).to.include("Betreff");
      expect(text).to.include("AOS-Kundennummer");

      expect(text).to.include("Datum");
      expect(text).to.include("Rechnungskorrektur-Nr.");
      expect(text).to.include("Rechnungsdatum");
      expect(text).to.include("Rechnungs-Ref-Nr.");
    });
  }
  should_Validate_CreditNote_FieldValues(
    pdfFileName,
    orderId,
    orgId,
    //vatNumber,
    cancelNumber,
    InvoiceRefNumber,
  ) {
    cy.task("readPdf", pdfFileName).then((text) => {
      expect(text).to.include("BMW AOS");
      expect(text).to.include(
        "https://aos.bmwgroup.com/help/public/support-request",
      );
      expect(text).to.include(orderId);
      expect(text).to.include("Credit Note");
      expect(text).to.include(orgId);
      //expect(text).to.include(vatNumber);
      // const today = new Date();
      // const formattedDate = today
      //   .toLocaleDateString('en-GB')
      //   .replace(/\//g, '.');
      // expect(text).to.include(formattedDate);
      expect(text).to.include(InvoiceRefNumber);
      expect(text).to.include(cancelNumber);
    });
  }
  should_Validate_CreditNote_FieldValues_DE(pdfFileName, orgId, cancelNumber) {
    cy.task("readPdf", pdfFileName).then((text) => {
      expect(text).to.include("BMW AOS");
      expect(text).to.include(
        "https://aos.bmwgroup.com/help/public/support-request ",
      );

      expect(text).to.include("Gutschrift");
      expect(text).to.include(orgId);

      expect(text).to.include(cancelNumber);
    });
  }

  should_Validate_CreditNote(pdfFileName) {
    cy.task("readPdf", pdfFileName).then((text) => {
      expect(text).to.include("Credit Note");
    });
  }

  should_Validate_VATID_titleName(pdfFileName, vatIdTitle) {
    cy.task("readPdf", pdfFileName).then((text) => {
      expect(text).to.include(vatIdTitle);
    });
  }
  should_Validate_VatID_Title(pdfFileName, vatIdTitle, vatNumber) {
    cy.task("readPdf", pdfFileName).then((text) => {
      expect(text).to.include(vatIdTitle);
      expect(text).to.include(vatNumber);
    });
  }
  should_Validate_Subject_In_Invoices(subject, pdfFileName) {
    cy.task("readPdf", pdfFileName).then((text) => {
      expect(text).to.include(subject);
    });
  }

  should_Verify_DateRange(startDateStr, durationType, pdfFileName) {
    const startDate = new Date(startDateStr.replace(",", ""));
    let endDate = new Date(startDate);

    // Helper: format date to DD.MM.YYYY
    const formatDate = (date) => {
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
    };

    let dateText;

    // Duration logic
    switch (durationType.toLowerCase()) {
      case "hour":
        endDate.setHours(endDate.getHours() + 1);
        //  Only end date for hour
        dateText = formatDate(endDate);
        break;

      case "day":
        endDate.setDate(endDate.getDate() + 1);
        dateText = formatDate(endDate);
        break;

      case "week":
        //  Add 7 days for week range
        endDate.setDate(endDate.getDate() + 7);
        dateText = `${formatDate(startDate)} – ${formatDate(endDate)}`;
        break;

      case "month":
        endDate.setMonth(endDate.getMonth() + 1);
        dateText = `${formatDate(startDate)} – ${formatDate(endDate)}`;
        break;

      case "year":
        endDate.setFullYear(endDate.getFullYear() + 1);
        dateText = `${formatDate(startDate)} – ${formatDate(endDate)}`;
        break;

      default:
        throw new Error(
          "Invalid duration type. Use Hour, Day, Week, Month, or Year.",
        );
    }

    // Validate PDF contains the expected date or range
    cy.task("readPdf", pdfFileName).then((text) => {
      expect(text).to.include(dateText);
    });
    return cy.wrap(dateText).then((id) => id);
  }

  should_Verify_DateRange_for_Refund(startDateStr, durationType, pdfFileName) {
    const startDate = new Date(startDateStr.replace(",", ""));
    let endDate = new Date(startDate);

    // Helper: format date to DD.MM.YYYY
    const formatDate = (date) => {
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
    };

    let dateText;

    // Duration logic
    switch (durationType.toLowerCase()) {
      case "hour":
        endDate.setHours(endDate.getHours() - 1);
        //  Only end date for hour
        dateText = formatDate(endDate);
        break;

      case "day":
        endDate.setDate(endDate.getDate() - 1);
        dateText = `${formatDate(startDate)} – ${formatDate(endDate)}`;
        break;

      case "week":
        //  Add 7 days for week range
        endDate.setDate(endDate.getDate() - 7);
        dateText = `${formatDate(startDate)} – ${formatDate(endDate)}`;
        break;

      case "month":
        endDate.setMonth(endDate.getMonth() - 1);
        dateText = `${formatDate(startDate)} – ${formatDate(endDate)}`;
        break;

      case "year":
        endDate.setFullYear(endDate.getFullYear() - 1);
        dateText = `${formatDate(startDate)} – ${formatDate(endDate)}`;
        break;

      default:
        throw new Error(
          "Invalid duration type. Use Hour, Day, Week, Month, or Year.",

        );
    }

    // Validate PDF contains the expected date or range
    cy.task("readPdf", pdfFileName).then((text) => {
      expect(text).to.include(dateText);
    });
  }

  should_Check_InvoicesOverview_In_InvoicesTab() {
    cy.xpath(this.elements.txt_InvoicesOverviewsubheadline).should(
      "be.visible",
    );
    cy.wait(1000);
    cy.xpath(this.elements.TableInInvoices).should("be.visible");
  }
  should_Verify_InvoicesTable_Overview() {
    // cy.frameLoaded(this.elements.aosIFrame);
    // cy.enter(this.elements.aosIFrame).then((p) => {
    //   //  p().enter(this.elements.TableInInvoices).should('be.visible')

      cy
        .xpath(this.elements.txt_TypeOfInvoices)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      cy
        .xpath(this.elements.txt_OrderName)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      cy
        .xpath(this.elements.txt_InvoicesNumber)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      cy
        .xpath(this.elements.txt_GrossAmount)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      cy
        .xpath(this.elements.txt_DateOfInvoices)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      cy
        .xpath(this.elements.txt_Download)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      cy
        .xpath(this.elements.txt_Payment)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
  }
  /*InvoicesTableOverview() {
 cy.frameLoaded(this.elements.aosIFrame);
 cy.enter(this.elements.aosIFrame).then((p) => {
   // First check if "No entries found" is displayed
   p()
     .xpath(this.elements.noEntriesinTable, { timeout: 2000 })
     .then(($msg) => {
       if ($msg.length > 0) {
         // Case: No data available
         cy.wrap($msg)
           .should("be.visible")
           .invoke("text")
           .then((msgText) => {
             cy.log("Table message: " + msgText);
           });
       } else {
         // Case: Data available → validate columns
         p()
           .xpath(this.elements.TypeOfInvoices)
           .should("be.visible")
           .invoke("text")
           .then((text) => cy.log("Type: " + text));

         p()
           .xpath(this.elements.OrderName)
           .should("be.visible")
           .invoke("text")
           .then((text) => cy.log("Order: " + text));

         p()
           .xpath(this.elements.InvoicesNumber)
           .should("be.visible")
           .invoke("text")
           .then((text) => cy.log("Invoice: " + text));

         p()
           .xpath(this.elements.GrossAmount)
           .should("be.visible")
           .invoke("text")
           .then((text) => cy.log("Gross: " + text));

         p()
           .xpath(this.elements.DateOfInvoices)
           .should("be.visible")
           .invoke("text")
           .then((text) => cy.log("Date: " + text));

         p()
           .xpath(this.elements.Download)
           .should("be.visible")
           .invoke("text")
           .then((text) => cy.log("Download: " + text));

         p()
           .xpath(this.elements.Payment)
           .should("be.visible")
           .invoke("text")
           .then((text) => cy.log("Payment: " + text));
       }
     });
 });
}*/

  should_Verify_InvoicesTable_Sorting() {
    cy.frameLoaded(this.elements.aosIFrame);
    cy.enter(this.elements.aosIFrame).then((p) => {
      p()
        .xpath(this.elements.txt_TypeOfInvoices)
        .should("be.visible")
        .click({ force: true });
      cy.wait(5000);
      p()
        .xpath(this.elements.txt_OrderName)
        .should("be.visible")
        .click({ force: true });
      cy.wait(5000);
      p()
        .xpath(this.elements.txt_InvoicesNumber)
        .should("be.visible")
        .click({ force: true });
      cy.wait(5000);
      p()
        .xpath(this.elements.txt_GrossAmount)
        .should("be.visible")
        .click({ force: true });
      cy.wait(5000);
      p()
        .xpath(this.elements.txt_DateOfInvoices)
        .should("be.visible")
        .click({ force: true });
      cy.wait(5000);
      p()
        .xpath(this.elements.txt_Download)
        .should("be.visible")
        .click({ force: true });
      cy.wait(5000);
      p()
        .xpath(this.elements.txt_Payment)
        .should("be.visible")
        .click({ force: true });
      cy.wait(5000);
    });
  }
  should_Check_Pagination() {
    cy.frameLoaded(this.elements.aosIFrame);
    cy.enter(this.elements.aosIFrame).then((p) => {
      p()
        .find(this.elements.btn_paginatorLastBtn)
        .scrollIntoView()
        .wait(1000)
        .invoke("attr", "disabled")
        .then((disabled) => {
          if (disabled === "disabled") {
            cy.log("Last page reached");
            p().find(this.elements.btn_paginationNext).should("be.disabled");
          } else {
            p()
              .find(this.elements.btn_paginationNext)
              .should("be.enabled")
              .click()
              .then(() => {
                this.should_Check_Pagination();
              });
          }
        });
    });
  }

  should_Check_DataIsDisplaying_In_Table() {
    // cy.log("Entered");
    // cy.frameLoaded(this.elements.aosIFrame);
    // cy.enter(this.elements.aosIFrame).then((p) => {
      // cy
      //   .xpath(this.elements.txt_noEntriesinTable, { timeout: 4000 })
      //   .then(($noData) => {
      //     if ($noData.length > 0) {
      //       cy.wrap($noData)
      //         .should("be.visible")
      //         .invoke("text")
      //         .then((msg) => {
      //           cy.log("Table message: " + msg);
      //         });
      //     } else {
            cy
              .xpath(this.elements.txt_TypeOfInvoicesData)
              .should("be.visible")
              .invoke("text")
              .then((text) => {
                cy.log(text);
              });

            cy
              .xpath(this.elements.txt_OrderNameData)
              .should("be.visible")
              .invoke("text")
              .then((text) => {
                cy.log(text);
              });

            cy
              .xpath(this.elements.txt_InvoiceID)
              .should("be.visible")
              .invoke("text")
              .then((text) => {
                cy.log(text);
              });

            cy
              .xpath(this.elements.txt_GrossAmountData)
              .should("be.visible")
              .invoke("text")
              .then((text) => {
                cy.log(text);
              });

            cy
              .xpath(this.elements.txt_DateOfInvoicesData)
              .should("be.visible")
              .invoke("text")
              .then((text) => {
                cy.log(text);
              });

            cy.xpath(this.elements.DownloadData).should("be.visible");
          }
  

  /* CheckDataIsDisplayingInTable() {
     cy.frameLoaded(this.elements.aosIFrame);
     cy.enter(this.elements.aosIFrame).then((p) => {
       p()
         .xpath(this.elements.TypeOfInvoicesData)
         .should("be.visible")
         .invoke("text")
         .then((text) => {
           cy.log(text);
         });
       p()
         .xpath(this.elements.OrderNameData)
         .should("be.visible")
         .invoke("text")
         .then((text) => {
           cy.log(text);
         });
 
       p()
         .xpath(this.elements.InvoicesNumberData)
         .should("be.visible")
         .invoke("text")
         .then((text) => {
           cy.log(text);
         });
       p()
         .xpath(this.elements.GrossAmountData)
         .should("be.visible")
         .invoke("text")
         .then((text) => {
           cy.log(text);
         });
       p()
         .xpath(this.elements.DateOfInvoicesData)
         .should("be.visible")
         .invoke("text")
         .then((text) => {
           cy.log(text);
         });
       p().xpath(this.elements.DownloadData).should("be.visible");
     });
   }*/

  should_Get_InvoiceID() {
    return cy
      .xpath(this.elements.txt_InvoiceID)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        const invoiceId = text.trim();
        cy.log(`UI Invoice ID: ${invoiceId}`);
        return cy.wrap(invoiceId).then((id) => id);
      });
  }

  should_Get_ReferenceID() {
    return cy
      .xpath(this.elements.txt_orderId)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        const orderid = text.trim();
        cy.log(`UI Order ID:${orderid}`);
        return cy.wrap(orderid).then((id) => id);
      });
  }

  should_Download_InvoicePdf(invoiceId) {
    // Find the invoice number cell matching the given invoiceId
    cy.get(this.elements.txt_invoiceColumn)
      .contains(invoiceId)
      .parents(".ag-row") // Go to the row of that invoice
      .find(this.elements.link_invoiceColumnDownload) // Find the download link cell
      .should("be.visible")
      .click()
      .click();
  }

should_Verify_OrderId() {
  return cy.xpath(this.elements.txt_orderId)
    .should("be.visible")
    .invoke("text")
    .then((orderId) => {
      const trimmedOrderId = orderId.trim();
      expect(trimmedOrderId.startsWith("r")).to.be.true;
      return trimmedOrderId;
    });
}

  should_Get_InvoiceDate() {
    return cy
      .xpath(this.elements.txt_InvoiceDate)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        const txt_InvoiceDate = text.trim();
        cy.log(`UI Invoice Date: ${txt_InvoiceDate}`);
        return cy.wrap(txt_InvoiceDate).then((date) => date);
      });
  }

  should_Get_InvoiceAmount() {
    return cy
      .xpath(this.elements.txt_TicketAmount)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        const txt_TicketAmount = text.trim();
        cy.log(`UI Invoice amount: ${txt_TicketAmount}`);
        return cy.wrap(txt_TicketAmount).then((invoicePrice) => invoicePrice);
      });
  }

  should_ConvertUiAmount_To_PdfFormat(uiAmount) {
    const clean = uiAmount.replace(/[€\s]/g, ""); // remove € and spaces → "5,950.00"
    const [whole, decimals] = clean.split("."); // "5,950" and "00"
    // Replace comma thousand separator with dot → 5.950
    const pdfWhole = whole.replace(/,/g, ",");
    // PDF format: 5.950,00
    return `${pdfWhole},${decimals}`;
  }

  should_Check_InvoiceAmount_In_Ticket(pdfFileName, uiAmount) {
    const pdfAmount = this.should_ConvertUiAmount_To_PdfFormat(uiAmount);
    const expectedPdfValue = `${pdfAmount} EUR`; // PDF suffix format

    cy.log(`Converted Amount for PDF: ${expectedPdfValue}`);

    cy.task("readPdf", pdfFileName).then((text) => {
      expect(text).to.include(expectedPdfValue);
    });
  }

  should_InitiateRefund(invoiceId, orgId) {
    const referenceNo = Math.floor(10000000 + Math.random() * 90000000);
    const url = `https://aos-q2.bmwgroup.com/payment/api/refund/initiateRefund?oid=${orgId}&referenceNo=${referenceNo}&invoiceId=${invoiceId}`;

    const maxDuration = 20 * 60 * 1000; // 11 minutes
    const interval = 20 * 1000; // 20 seconds
    const startTime = Date.now();

    const poll = () => {
      return cy
        .request({
          method: "POST",
          url,
          headers: {
            Authorization: "Basic QU9TMkRFVjpSZWZ1bmRAMTIzNA==",
          },
          failOnStatusCode: false, // prevent Cypress from failing on non-2xx
        })
        .then((response) => {
          if (response.status === 200) {
            expect(response.body).to.have.property(
              "refundStatus",
              "REFUND_INITIATED",

            );
            expect(response.body).to.have.property("invoiceAmount");

            cy.log(` Refund initiated successfully for Invoice: ${invoiceId}`);
            cy.log(`Refund Status: ${response.body.refundStatus}`);
            cy.log(`Invoice Amount: ${response.body.invoiceAmount}`);

            //  Wrap the result in a Cypress chain
            return cy.wrap({
              invoiceAmount: response.body.invoiceAmount,
            });
          } else {
            const elapsed = Date.now() - startTime;
            if (elapsed < maxDuration) {
              cy.log(` Status ${response.status} — retrying in 20s...`);
              return cy.wait(interval).then(poll);
            } else {
              throw new Error(
                " Timeout: Did not get 200 status within 11 minutes.",
              );
            }
          }
        });
    };

    return poll();
  }

  should_Validate_VATDetails_In_PDF(pdfFileName, vatNumber) {
    cy.task("readPdf", pdfFileName).then((text) => {
      expect(text).to.include(vatNumber);
    });
  }

  should_Validate_OrganisationDetails_In_Invoice(
    pdfFileName,
    organisationName,
  ) {
    cy.task("readPdf", pdfFileName).then((text) => {
      expect(text).to.include(organisationName);
    });
  }

  should_Validate_Address_In_Invoice(pdfFileName, address) {
    cy.task("readPdf", pdfFileName).then((text) => {
      expect(text.replace(/\s+/g, " ").trim()).to.include(
        address.replace(/\s+/g, " ").trim(),

      );
    });
  }

  should_Validate_CountryName_In_Invoice(pdfFileName, countryName) {
    cy.task("readPdf", pdfFileName).then((text) => {
      expect(text).to.include(countryName);
    });
  }

  should_Verify_LatestTicket() {
    // cy.frameLoaded(this.elements.aosIFrame)
    //     cy.enter(this.elements.aosIFrame).then(p => {
    cy.xpath(this.elements.img_pdfdownload)
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
    //})
  }
  should_Validate_CA_Number(pdfFileName) {
    cy.task("readPdf", pdfFileName).then((text) => {
      expect(text).to.include("CA-534");
    });
  }
  should_Validate_URL_In_Ticket(pdfFileName) {
    cy.task("readPdf", pdfFileName).then((text) => {
      expect(text).to.include(
        "https://aos.bmwgroup.com/help/public/ support-request",
      );
    });
  }
  // checkTicketName(pdfFileName,ticketname){
  //   cy.task('readPdf',pdfFileName )
  //     .then((text) => {
  //        expect(text).to.include(ticketname);
  //     })

  // }
  should_Check_TicketName(pdfFileName, ticketName) {
    cy.task("readPdf", pdfFileName).then((text) => {
      const normalize = (str) => str.replace(/\s+/g, " ").trim();
      const normalizedText = normalize(text);
      const normalizedTicket = normalize(ticketName);

      expect(normalizedText).to.include(normalizedTicket);
    });
  }

  should_Verify_DEInvoice(pdfFileName) {
    cy.task("readPdf", pdfFileName).then((text) => {
      expect(text).to.include("Rechnung");
      expect(text).to.include("Rechnungsnummer");
    });
  }

  should_Verify_ENInvoice(pdfFileName) {
    cy.task("readPdf", pdfFileName).then((text) => {
      // expect(text).to.include("Invoice");
      expect(text).to.include("Invoice-No");
    });
  }

  should_CheckPrice_In_Invoice(pdfFileName, TicketPrice, locale) {
    cy.task("readPdf", pdfFileName).then((text) => {
      const normalized = text.replace(/\s+/g, "");

      const amount =
        typeof TicketPrice === "object"
          ? TicketPrice.invoiceAmount
          : TicketPrice;

      const formattedAmount = new Intl.NumberFormat(locale, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(Number(amount));

      cy.log(`Verifying price (${locale}): ${formattedAmount}`);

      expect(normalized).to.include(formattedAmount);
    });
  }

  should_Check_VATPercent_In_Invoice(pdfFileName, VATPercent) {
    cy.task("readPdf", pdfFileName).then((text) => {
      expect(text.trim()).to.include(VATPercent);
    });
  }
  should_Check_TotalAmount_In_Invoice(pdfFileName, TotalAmount) {
    cy.task("readPdf", pdfFileName).then((text) => {
      expect(text).to.include(TotalAmount);
    });
  }
  should_Check_Lineitem_In_Invoice(pdfFileName, Lineitem) {
    cy.task("readPdf", pdfFileName).then((text) => {
      expect(text.trim()).to.include(Lineitem);
    });
  }

  should_Check_Discount_In_Invoice(pdfFileName, Discount) {
    cy.task("readPdf", pdfFileName).then((text) => {
      expect(text.trim()).to.include(Discount);
    });
  }
  should_Check_InvoiceId_In_Invoice(pdfFileName, InvoiceID) {
    cy.task("readPdf", pdfFileName).then((text) => {
      expect(text).to.include(InvoiceID);
    });
  }
  should_Check_Username_In_Invoice(pdfFileName, userName) {
    cy.task("readPdf", pdfFileName).then((text) => {
      expect(text).to.include(userName);
    });
  }
  should_Check_EN_Salutation_In_Invoice(pdfFileName) {
    cy.task("readPdf", pdfFileName).then((text) => {
      expect(text).to.include("Dear Sir or Madam");
    });
  }

  should_Check_DE_Salutation_In_Invoice(pdfFileName) {
    cy.task("readPdf", pdfFileName).then((text) => {
      expect(text).to.include("Sehr geehrte Damen und Herren");
    });
  }

  should_Validate_Vat_In_Invoice(pdfFileName, expectedVat) {
    cy.task("readPdf", pdfFileName).then((text) => {
      const normalized = text.replace(/\s+/g, " ").trim();
      expect(normalized).to.include(expectedVat);
    });
  }

  should_Validate_Country_In_Invoice(pdfFileName, expectedCountry) {
    cy.task("readPdf", pdfFileName).then((text) => {
      const normalized = text.replace(/\s+/g, " ").trim();
      expect(normalized).to.include(expectedCountry);
    });
  }

  should_Validate_Address_In_Invoice(pdfFileName, expectedAddress) {
    cy.task("readPdf", pdfFileName).then((text) => {
      const normalized = text.replace(/\s+/g, " ").trim();
      const cleanedAddress = expectedAddress.replace(/\s+/g, " ").trim();
      expect(normalized).to.include(cleanedAddress);
    });
  }

  should_Check_ReverseMechanism_Message_In_Invoice(pdfFileName) {
    cy.task("readPdf", pdfFileName).then((text) => {
      expect(text.trim()).to.include(
        "The recipient is liable for VAT (Reverse-Charge mechanism)",
      );
    });
  }

  should_Check_OrgId_In_Invoice(pdfFileName, orgId) {
    cy.task("readPdf", pdfFileName).then((text) => {
      expect(text).to.include(orgId);
    });
  }
  should_Check_OrderId_In_Invoice(pdfFileName, orderId) {
    cy.task("readPdf", pdfFileName).then((text) => {
      expect(text).to.include(orderId);
    });
  }

  should_Check_German_message(pdfFileName) {
    cy.task("readPdf", pdfFileName).then((text) => {
      const normalizedText = text.replace(/\s+/g, " ").trim();
      expect(normalizedText).to.match(
        /Der Gesamtbetrag in Höhe von 1\.011,50 EUR wurde Ihrer VISA Kreditkarte mit der Nummer \*+\s+\*+\s+\*+\s+0000 belastet\./,
      );
    });
  }

  should_Check_Postpayment_GermanMessage_In_Invoice(pdfFileName) {
    cy.task("readPdf", pdfFileName).then((text) => {
      const expectedMessage = `Bitte bezahlen sie den Gesamtbetrag über das AOS Portal ( https://aos.bmwgroup.com/my-aos/my- invoices ) ohne Abzüge innerhalb der nächsten 14 Tage ab Rechnungsdatum`;

      // Normalize line breaks and spaces just in case PDF text is split across lines
      const normalizedText = text.replace(/\s+/g, " ");

      expect(normalizedText).to.include(expectedMessage);
    });
  }

  should_Check_Postpayment_Message_In_Invoice(pdfFileName) {
    cy.task("readPdf", pdfFileName).then((text) => {
      const expectedMessage = `Please pay the invoice amount via the AOS Portal ( https://aos.bmwgroup.com/my-aos/my-invoices ) without deductions within 14 days of the invoice date.`;

      // Normalize line breaks and spaces just in case PDF text is split across lines
      const normalizedText = text.replace(/\s+/g, " ");

      expect(normalizedText).to.include(expectedMessage);
    });
  }

  should_Check_Umlaute_DE_Invoice(pdfFileName) {
    cy.task("readPdf", pdfFileName).then((text) => {
      expect(text).to.include("Ausführliche");
    });
  }

  // very small helper to normalize PDF text for comparisons
  should_ConvertUiDate_To_PdfFormat(uiDate) {
    // uiDate: 11/21/25  (MM/DD/YY)
    const [mm, dd, yy] = uiDate.split("/");

    const day = dd.padStart(2, "0");
    const month = mm.padStart(2, "0");
    const year = "20" + yy; // 2-digit year -> 20YY

    return `${day}.${month}.${year}`;
  }

  should_Check_InvoiceDate_In_Invoice(pdfFileName, uiDate) {
    const pdfFormattedDate = this.should_ConvertUiDate_To_PdfFormat(uiDate);

    cy.log(`Converted date for PDF check: ${pdfFormattedDate}`);

    cy.task("readPdf", pdfFileName).then((text) => {
      expect(text).to.include(pdfFormattedDate);
    });
  }

  authHeader = "Basic YXByaWw6ZmZwcHRYWnpFd3l6NmpjVnQ2TUltd0s2VWxDMktsSW0=";

  /**
   * Generate unique callerId & referenceNumber
   */
  should_GenerateIdentifiers() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    const id = `ITA${timestamp}${random}`;
    return { callerId: id, referenceNumber: id };
  }
  /**
   * Start billing payment
   */
  should_StartBilling_Payment(callerId, referenceNumber, orgId) {
    const transactions = [
      { name: "CARDATA_DATA_KEY", count: 6, price: 29, discount: 10 },
      { name: "CARDATA_EVENT_KEY", count: 5, price: 9, discount: 0 },
      { name: "CARDATA_FULLY_RATED", count: 3, price: 500, discount: 0 },
    ];

    return cy
      .request({
        method: "POST",
        url: "https://aos-q2.bmwgroup.com/payment/process-service/transaction/startBillingPayment",
        headers: {
          Authorization: this.authHeader,
          "Content-Type": "application/json",
        },
        body: {
          callerId,
          referenceNumber,
          organizationId: orgId,
          deliveryDateStart: "2024-05-01T00:00:00.123Z",
          deliveryDateEnd: "2024-05-31T00:00:00.123Z",
          currency: "EUR",
          transactions,
        },
      })
      .then((response) => {
        expect(response.status).to.eq(200);
        return cy.wrap({ transactions });
      });
  }

  /**
   * Poll for invoice until found or timeout
   */
  should_Get_InvoiceId_Of_PostPay(startTime, orgId, attempt = 1) {
    const startISO = new Date(startTime - 5 * 60 * 1000).toISOString();
    const endISO = new Date().toISOString();

    const url = `https://aos-q2.bmwgroup.com/payment/invoice/timed-fetch?organizationId=${orgId}&startDate=${encodeURIComponent(
      startISO,
    )}&endDate=${encodeURIComponent(endISO)}`;

    return cy
      .request({
        method: "GET",
        url,
        headers: { Authorization: this.authHeader },
        failOnStatusCode: false,
      })
      .then((res) => {
        cy.log(`Attempt ${attempt} - Status: ${res.status}`);
        cy.log(`Response: ${JSON.stringify(res.body)}`);

        if (
          res.status === 200 &&
          Array.isArray(res.body) &&
          res.body.length > 0
        ) {
          const invoice = res.body[0];
          const invoiceId = invoice.invoiceId || invoice.id;
          const invoiceAmount = (invoice.invoiceAmount / 100).toFixed(2);

          cy.log(`Invoice found on attempt ${attempt}`);
          cy.log(`Invoice ID: ${invoiceId}`);
          cy.log(`Invoice Amount: €${invoiceAmount}`);

          //  wrap return value for Cypress chainability
          return cy.wrap({ InvoiceID: invoiceId, invoiceAmt: invoiceAmount });
        }

        if (attempt < 40) {
          cy.log(`Attempt ${attempt}: No invoice yet, retrying in 30s...`);
          return cy
            .wait(30000)
            .then(() =>
              this.should_Get_InvoiceId_Of_PostPay(
                startTime,
                orgId,
                attempt + 1,
              ),
            );
        } else {
          throw new Error("No invoice found after 10 minutes.");
        }
      });
  }
  should_Validate_CreditNote_MandatoryFields_DE(pdfFileName, invoiceId, orgId) {
    cy.task("readPdf", pdfFileName).then((pdfText) => {
      // 1. Sender
      expect(pdfText).to.include("Absender"); // Sender

      // 2. Contact
      expect(pdfText).to.include("Kontakt"); // Contact

      // 3. Reference
      expect(pdfText).to.include("Referenz"); // Reference

      // 4. Subject
      expect(pdfText).to.include("Betreff"); // Subject

      // 5. AOS Customer ID
      expect(pdfText).to.include(orgId);

      // 8. Cancellation No
      expect(pdfText).to.include(invoiceId); // Cancellation Number

      // 10. Invoice reference number
      expect(pdfText).to.include(invoiceId);
    });
  }

  verifyLineItemsInPdf(pdfFileName, lineItems) {
    cy.task("readPdf", pdfFileName).then((text) => {
      // normalize text (PDFs often have random newlines/spaces)
      const normalized = text.replace(/\s+/g, " ").trim();

      lineItems.forEach(({ name, count, price, discount }) => {
        cy.log(` Verifying line item: ${name}`);

        // Match name
        expect(normalized).to.include(name);

        // Match count
        const countPattern = new RegExp(`\\b${count}\\b`);
        expect(countPattern.test(normalized)).to.be.true;

        // Match price (allow "29" or "29.00" or "29.00 EUR")
        const pricePattern = new RegExp(`\\b${price}(?:\\.0+)?(?:\\s*EUR)?\\b`);
        expect(pricePattern.test(normalized)).to.be.true;

        // Match discount (optional, often 0 %)
        const discountPattern = new RegExp(`\\b${discount}\\b`);
        expect(discountPattern.test(normalized)).to.be.true;
      });
    });
  }
}
export default MyInvoices;
