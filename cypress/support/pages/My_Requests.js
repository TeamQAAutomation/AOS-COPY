import "cypress-file-upload";

class MyRequest {
  myReqElements = {
    tab_help: '//*[@id="help-li"]/div',
    tab_myRequest: '//ds-list-item[@aria-label="My requests"]',//'//*[@id="myRequests-li"]/div/div',
    table_myReq: '//*[@class="ui-datatable-tablewrapper"]/table',
    btn_AddToRequest: "(//*[contains(@class,'ui-fieldset-legend')])[1]",
    btn_AddRequest: "//span[normalize-space()='Add to request']",
    txt_descriptionBox: "//*[@id='td-protected:add-comment:description']",
    txt_description: "//textarea[@name='attachments']",
    btn_send: "//*[@type='submit']",
    aosHelpIFrame: "#app aos-help-iframe-page iframe",
    txt_ID: '(//div[@col-id="displayId"])[2]',
    txt_IDkorea: "//span[contains(text(),'ID')]",
    txt_Typeofreq: '(//div[@col-id="type"])[2]',
    txt_application: '(//div[@col-id="applicationName"])[2]',
    txt_Typeofcreation: '(//div[@col-id="creationDate"])[2]',
    txt_Status: '(//div[@col-id="status"])[2]',
    txt_latestchange: '(//div[@col-id="lastChange"])[2]',
    txt_changedby: '(//div[@col-id="changedBy"])[2]',
    btn_click: "//ds-list-item[@icon='arrow_left_small']",//'(//ds-icon[@class="icon-left ds-icon ds-icon--md ng-star-inserted"])[last()]',
    txt_IDtext: "//span[contains(text(),'ID')]",
    txt_TypeOfreqtext: "//span[contains(text(),'Type of request')]",
    txt_TypeOfreqtextkorea: "//span[contains(text(),'문의 유형')]",
    txt_applicationtext: "//span[contains(text(),'Application')]",
    txt_applicationtextkorea: "//span[contains(text(),'용도')]",
    txt_TimeOfcreation: "//span[contains(text(),'Time of creation')]",
    txt_TimeOfcreationkorea: "//span[contains(text(),'작성 시점')]",
    txt_Statustext: "//span[contains(text(),'Status')]",
    txt_Statustextkorea: "//span[contains(text(),'상태')]",
    txt_lastchangetext: "//span[contains(text(),'Last change')]",
    txt_lastchangetextkorea: "//span[contains(text(),'최근 변경')]",
    txt_Changedbytext: "//span[contains(text(),'Changed by')]",
    txt_Changedbytextkorea: "//span[contains(text(),'변경자')]",
    icon_sortingfunction: "//span[@data-ref='eSortNone' and contains(@class, 'ag-sort-none-icon')]",
    page: "//div[@class='ag-center-cols-viewport']",
    txt_Ticketinfo: "//div[@class='container-header']/h2",
    txt_FirstticketID: "//div[@role='rowgroup']//a[starts-with(normalize-space(text()), 'INC')]",
    txt_US_ID: "//*[@id='tickets-table_head']/tr/th[1]",
    txt_US_Typeofreq: "//*[@id='tickets-table_head']/tr/th[2]",
    txt_US_application: "//*[@id='tickets-table_head']/tr/th[3]",
    txt_US_typeofcreation: "//*[@id='tickets-table_head']/tr/th[4]",
    txt_US_Status: "//*[@id='tickets-table_head']/tr/th[5]",
    txt_US_lastchange: "//*[@id='tickets-table_head']/tr/th[6]",
    txt_US_Chnagedby: "//*[@id='tickets-table_head']/tr/th[7]",
    btn_OK: "//*[@id='user-dialog_content']//span[contains(text(),'OK')]",
    txt_userInformation: "//div[@id='dialog-text']/ul/li[contains(text(),'The addition to your request')]",
    txt_Comment: "//div[@class='show-line-breaks break-word']",
    attachment: "(//ul[contains(@id, 'td-protected:')]/li/a)[1]",
    btn_ClickonAddrequest: "(//legend[@class='ui-fieldset-legend ui-corner-all ui-state-default']//span)[1]",
    txt_RequestTicketInfo: "aos-request-overview-page p:nth-child(1)",
    txt_RequestTicketComment: "//h2[contains(text(),'Specification of problem')]/following::p[1]/span",
    textarea: "//textarea[@id='td-protected:add-comment:description']",
    btn_leftExpandCollapse: '//*[contains(@icon,"arrow_left_small")]/div/ds-icon',
    link_requestIds: '//*[@id="tickets-table_data"]/tr[1]/td[1]/a',
    btn_Attachments: "//button[contains(text(),' Attachments ')]",
    btn_SortingHeaderCell: '.ag-header-cell'

  };

  should_ExpandAndClickMyRequest() {
    cy.xpath(this.myReqElements.btn_leftExpandCollapse).click({
      force: true,
    });
    cy.wait(7000);
    this.should_ClickOnMyRequest();
  }

  should_ClickOnMyRequest() {
    cy.xpath(this.myReqElements.tab_myRequest).click();
    cy.wait(8000);
  }

  should_CheckUserInfoText() {
    cy.frameLoaded(this.myReqElements.aosHelpIFrame);
    cy.enter(this.myReqElements.aosHelpIFrame).then((p) => {
      p().xpath(this.myReqElements.txt_userInformation).should("be.visible");
    });
  }

  should_VerifyGetIdNumber() {
    cy.frameLoaded(this.myReqElements.aosHelpIFrame);
    cy.enter(this.myReqElements.aosHelpIFrame).then((p) => {
      p()
        .xpath(this.myReqElements.link_requestIds)
        .invoke("text")
        .then((ele) => {
          cy.log(ele);
          if (ele.includes("INC")) {
            p().xpath(this.myReqElements.link_requestIds).click();
            this.should_AddRequest();
          }
          this.incidentNumber = ele;
        });
    });
  }

  should_AddRequest() {
    cy.frameLoaded(this.myReqElements.aosHelpIFrame);
    cy.enter(this.myReqElements.aosHelpIFrame).then((p) => {
      p().xpath(this.myReqElements.btn_AddToRequest).click();
      p().xpath(this.myReqElements.txt_descriptionBox).type("testing purpose");
      this.should_AttachFiles();
      p().xpath(this.myReqElements.btn_send).click();
    });
  }

  should_AttachFiles() {
    cy.frameLoaded(this.myReqElements.aosHelpIFrame);
    cy.enter(this.myReqElements.aosHelpIFrame).then((p) => {
      p()
        .xpath(this.myReqElements.btn_Attachments)
        .selectFile("cypress\\fixtures\\CasesSearchReport (26).xls", {
          force: true,
        });
    });
  }

  should_VerifyUSCheckTableheading() {
    cy.frameLoaded(this.myReqElements.aosHelpIFrame);
    cy.enter(this.myReqElements.aosHelpIFrame).then((p) => {
      p().xpath(this.myReqElements.page).should("be.visible");
      p().xpath(this.myReqElements.txt_US_ID).invoke("text").then(cy.log);
      p()
        .xpath(this.myReqElements.txt_US_Typeofreq)
        .invoke("text")
        .then(cy.log);
      p()
        .xpath(this.myReqElements.txt_US_application)
        .invoke("text")
        .then(cy.log);
      p()
        .xpath(this.myReqElements.txt_US_typeofcreation)
        .invoke("text")
        .then(cy.log);
      p().xpath(this.myReqElements.txt_US_Status).invoke("text").then(cy.log);
      p()
        .xpath(this.myReqElements.txt_US_lastchange)
        .invoke("text")
        .then(cy.log);
      p()
        .xpath(this.myReqElements.txt_US_Chnagedby)
        .invoke("text")
        .then(cy.log);
    });
  }

  //Verify the latest table data in 'My Requests' page
  Should_click_MyRequest_And_Check_Latest() {
    cy.xpath(this.myReqElements.btn_click).click();
    cy.wait(5000);
    cy.xpath(this.myReqElements.tab_myRequest).click();
    cy.wait(8000);
    // Verify the visibility and log columns data
    cy.xpath(this.myReqElements.txt_ID)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.myReqElements.txt_Typeofreq)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.myReqElements.txt_application)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.myReqElements.txt_Typeofcreation)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });

    cy.xpath(this.myReqElements.txt_Status)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.myReqElements.txt_latestchange)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.myReqElements.txt_changedby)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
  }

  should_Click_On_LatestTicket() {
    // Select first ticket
    cy.xpath(this.myReqElements.txt_FirstticketID)
      .should("exist")
      .should("be.visible")
      .first()
      .click();
  }

  // Verify Add Request Description box validation
  should_addRequest_validation() {
    // Select first ticket
    cy.xpath(this.myReqElements.txt_FirstticketID)
      .should("exist")
      .should("be.visible")
      .first()
      .click();

    cy.xpath(this.myReqElements.btn_AddRequest)
      .should("exist")
      .should("be.visible")
      .click();

    cy.xpath(this.myReqElements.txt_description)
      .should("exist")
      .should("be.visible")
      .click()
      .type("testing purpose");
    cy.xpath(this.myReqElements.txt_description)
      .should("be.visible")
      .click()
      .type("{selectall}{backspace}");

    cy.xpath(this.myReqElements.btn_send)
      .should("exist")
      .should("be.visible")
      .should("be.disabled");
  }

  should_CheckRequestData(type, problem, comment) {
    // cy.frameLoaded(this.myReqElements.aosHelpIFrame);
    // cy.enter(this.myReqElements.aosHelpIFrame).then((p) => {
      cy.reload();
      cy.wait(10000)
      cy.get(this.myReqElements.txt_RequestTicketInfo).should("contain.text", type);
      cy.get(this.myReqElements.txt_RequestTicketInfo).should("contain.text", problem);
      cy.xpath(this.myReqElements.txt_RequestTicketComment).should("contain.text", comment);
   // });
  }

  //Clicks each element in the sorting function list to test sorting behavior.
  // should_Check_Sorting_Function() {
  //   cy.xpath(this.myReqElements.sortingfunction).each(($el, index, $list) => {
  //     // Click each element
  //     cy.wrap($el).click();
  //   });
  // }

  // Clicks each sortable column header to test sorting behavior
  should_Check_Sorting_Function() {
    cy.xpath(this.myReqElements.icon_sortingfunction).each(($el) => {
      cy.wrap($el)
        .closest(this.myReqElements.btn_SortingHeaderCell) // move from icon to header cell
        .should("be.visible")
        .click();
    });
  }

  should_Check_Paginations() {
    cy.xpath(this.myReqElements.page).scrollIntoView().should("be.visible");
  }

  // Verifies that all table columns are visible and logs the text under each column.
  should_Check_Data_Under_Columns() {
    cy.wait(10000);
    cy.xpath(this.myReqElements.page).should("be.visible");
    cy.xpath(this.myReqElements.txt_ID)
      .scrollIntoView()
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.myReqElements.txt_Typeofreq)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.myReqElements.txt_application)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.myReqElements.txt_Typeofcreation)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });

    cy.xpath(this.myReqElements.txt_Status)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.myReqElements.txt_latestchange)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.myReqElements.txt_changedby)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
  }

  //Verifies that all table headers are visible and logs their text values.
  should_Check_Table_heading() {
    cy.xpath(this.myReqElements.txt_ID)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.myReqElements.txt_TypeOfreqtext)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.myReqElements.txt_applicationtext)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.myReqElements.txt_TimeOfcreation)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.myReqElements.txt_Statustext)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.myReqElements.txt_lastchangetext)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });

    cy.xpath(this.myReqElements.txt_Changedbytext)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
  }

  // Clicks a ticket ID in 'My Requests' page
  should_Click_On_Any_Ticket_And_Check() {
    cy.enter(this.myReqElements.aosHelpIFrame).then((p) => {
      p().xpath(this.myReqElements.txt_ID).click();
      cy.wait(8000);
    });
  }
  // Adds a request by clicking the button, typing text, and sending it(My Requests)
  should_Click_On_AddRequest_Button() {
    cy.enter(this.myReqElements.aosHelpIFrame).then((p) => {
      p().xpath(this.myReqElements.btn_AddRequest).click({ force: true });
      cy.wait(8000);
      p().xpath(this.myReqElements.textarea).type("test");
      cy.wait(8000);
      p().xpath(this.myReqElements.btn_send).click({ force: true });
      cy.wait(8000);
    });
  }

  //Clicks on OK button
  should_Click_On_OkButton() {
    cy.frameLoaded(this.myReqElements.aosHelpIFrame);
    cy.wait(5000);
    cy.enter(this.myReqElements.aosHelpIFrame).then((p) => {
      p().xpath(this.myReqElements.btn_OK).click({ force: true });
      cy.wait(8000);
    });
  }

  should_Check_Table_Heading_Korea() {
    cy.frameLoaded(this.myReqElements.aosHelpIFrame);
    cy.wait(5000);
    cy.enter(this.myReqElements.aosHelpIFrame).then((p) => {
      p()
        .xpath(this.myReqElements.txt_IDkorea)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      p()
        .xpath(this.myReqElements.txt_TypeOfreqtextkorea)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      p()
        .xpath(this.myReqElements.txt_applicationtextkorea)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      p()
        .xpath(this.myReqElements.txt_TimeOfcreationkorea)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      p()
        .xpath(this.myReqElements.txt_Statustextkorea)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      p()
        .xpath(this.myReqElements.txt_lastchangetextkorea)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });

      p()
        .xpath(this.myReqElements.txt_Changedbytextkorea)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
    });
  }
}

export default MyRequest;
