class HelpOverview {
  /*-------- XPATHS/ELEMENT LOCATORS ------------ */
  elements = {
    dd_btn_Help: "//*[@id='help-li']",
    tab_help: "//ds-list-item[@aria-label='Help']",
    tab_Help_Overview: () =>
      cy.get(
        "ds-list-item[aria-label='Overview']"
      ),
    tab_Support_Request: "//div[contains(text(),' Support request ')]",
    tab_Technical_Help_Desk: "//div[contains(text(),'Technical Help Desk')]",
    tab_My_Requests: "//div[contains(text(),' My requests ')]",
    tab_Training_Enquiry: "//div[contains(text(),' Training enquiry')]",
    tab_AOS_Media_Library: "//div[contains(text(),'AOS media library')]",
    btn_Navigationbar:
      "(//*[@class='icon-left ds-icon ds-icon--md ng-star-inserted'])[last()]",
    btn_cookiesButton: () =>
      cy.xpath("//div[@class='cookie-banner']//button[text()='OK']"),
    btn_Support_Request: () =>
      cy.xpath("//button/span[contains(text(),' Support request ')]"),
    btn_Technical_Help_Desk: () =>
      cy.xpath("//div[contains(text(),'Technical Help Desk')]"),
    // tab_My_Requests: () => cy.xpath("//div[normalize-space()='My requests']"),
    btn_Training_Enquiry: () =>
      cy.xpath("//div[contains(text(),' Training enquiry')]"),
    txt_SupportTicket: "//span/div[contains(text(),' Create support ticket')]",
    txt_Technical_Help_Desk: "//div[contains(text(),'Technical Help Desk')]",
    txt_Requests: "//div[contains(text(),' My requests')]",
    txt_Training_Enquiry: "//div[contains(text(),' Training enquiry')]",
    txt_span_US_supportticket: "//span[contains(text(),' Support request ')]",
    txt_US_Myrequest: "//div[contains(text(),' My requests ')]",
    txt_US_supportticket: "//h1[contains(text(),' Support request ')]",
    txt_US_MYreq: "//h1[contains(text(),' My requests ')]",
    txt_US_taboverview: "//div[contains(text(),' Overview ')]",
    txt_US_supportrequest: "//div[contains(text(),' Support request ')]",
    txt_Help: "(//div[contains(text(),' Help ')])[1]",//"//div[@class='ds-list-item__content'][normalize-space()='Help']",
    addtoreqbutton:
      "(//legend[@class='ui-fieldset-legend ui-corner-all ui-state-default']/span)[1]",
    tab_outline: "//*[@id='aosHelp-li']",
    tab_Portalusageinquiry: "//*[@id='supportRequest-li']",
    tab_contacttechnicalsupport: "//*[@id='techHelpDesk-li']",
    tab_Isi: "//*[@id='myRequests-li']/div/div",
    tab_Portalusageinquiryoption: "//*[@id='m6f4mk5ip9d9fhqp36']",
    tab_contacttechnicalsupportoption: "//*[@id='m6f4q6scs73p1hf5eya']",
    tab_Isioption: "//*[@id='m6f4q6s9is451wjpo8']",
    tab_overViewTab: "//*[@id='help']//div[contains(text(),' Overview ')]",
    btn_supportReqKorea:
      "//button[@class='ds-button ds-button--outline has-icon']//span[contains(text(),' 포털 사용 문의 ')]",
    btn_Technical_Help_DeskKorea:
      "//button[@class='ds-button ds-button--outline has-icon']//span[contains(text(),' 기술 지원 문의 ')]",
    btn_myRequestsKorea:
      "//button[@class='ds-button ds-button--outline has-icon']//span[contains(text(),' 문의 현황 조회 ')]",
       Button: "(//*[@icon='arrow_left_small' and @role='button'])[1]",
  };

  /*-------- METHODS ------------ */

  should_Click_On_Navigationbar() {
    cy.xpath(this.elements.btn_Navigationbar)
      .should("be.visible")
      .click({ force: true });
  }
  should_US_Click_On_Navigationbar() {
    cy.xpath(this.elements.btn_Navigationbar)
      .should("be.visible")
      .click({ force: true });
  }

  should_Click_On_Help_Overview() {
    cy.xpath(this.elements.tab_help).should("be.visible").click({ force: true });
    this.elements.tab_Help_Overview().should("be.visible").first().click({ force: true });
  }

  should_Click_On_Support_Request() {
    cy.xpath(this.elements.tab_Support_Request)
      .should("be.visible")
      .click({ force: true });
  }

  should_US_Click_On_Support_Request() {
    cy.xpath(this.elements.txt_US_supportrequest)
      .should("be.visible")
      .click({ force: true });
  }

  should_US_click_On_MyRequest() {
    cy.xpath(this.elements.txt_US_Myrequest)
      .should("be.visible")
      .click({ force: true });
  }
  should_Verify_Overview() {
    //this.should_Click_On_Help_Overview();
    this.elements.tab_Help_Overview().should("be.visible").first().click({ force: true });
    cy.wait(5000);
    cy.url().should("include", "/help/overview");
    cy.wait(4000);
  }

  should_Verify_SupportRequest() {
    // this.should_Click_On_Navigationbar();
    this.should_Click_On_Support_Request();
    cy.wait(5000);
    cy.contains("h1", "Support request").should("be.visible");
    cy.wait(4000);
  }

  should_US_Verify_SupportRequest() {
    this.should_US_Click_On_Navigationbar();
    this.should_Click_On_Support_Request();
    cy.wait(5000);
    cy.contains("h1", "Support request").should("be.visible");
    cy.wait(4000);
  }

  should_US_Verify_Myrequests() {
    this.should_US_Click_On_Navigationbar();
    this.should_Click_On_Myrequests();
    cy.wait(6000);
  }

  should_Click_On_Technical_HelpDesk() {
    cy.xpath(this.elements.tab_Technical_Help_Desk)
      .should("be.visible")
      .click({ force: true });
  }

  should_Verify_Technical_Help_Desk() {
    // this.should_Click_On_Navigationbar();
    this.should_Click_On_Technical_HelpDesk();
    cy.wait(5000);
    cy.contains("h1", "Technical Help Desk").should("be.visible");
    cy.wait(4000);
  }

  should_Click_On_Myrequests() {
    cy.xpath(this.elements.tab_My_Requests)
      .should("be.visible")
      .click({ force: true });
  }

  should_Verify_Myrequests() {
    // this.should_Click_On_Navigationbar();
    this.should_Click_On_Myrequests();
    cy.wait(5000);
    cy.contains("h1", "My requests").should("be.visible");
    cy.wait(4000);
  }

  should_Click_On_Training_Enquiry() {
    cy.xpath(this.elements.tab_Training_Enquiry)
      .should("be.visible")
      .click({ force: true });
  }

  should_Verify_Training_Enquiry() {
    // this.should_Click_On_Navigationbar();
    this.should_Click_On_Training_Enquiry();
    cy.wait(5000);
    cy.contains("h1", "Training enquiry").should("be.visible");
    cy.wait(4000);
  }

  // Verify the help links based on the user's country
  should_Verify_Help_Links(country) {
    //Verifying for the US country
    if (country === "US") {
      this.should_Verify_Overview();
      this.should_Verify_SupportRequest();
      this.should_Verify_Myrequests();
    }
    //Verifying for the ROW
    else {
      this.should_Verify_Overview();
      this.should_Verify_SupportRequest();
      this.should_Verify_Technical_Help_Desk();
      this.should_Verify_Myrequests();
      this.should_Verify_Training_Enquiry();
    }
  }

  // Verify that the Help menu and its links are visible based on the user's country
  should_Verify_Help_Menu(country) {
    cy.wait(3000)
    cy.xpath(this.elements.Button).should("be.visible").click({ force: true });
    cy.wait(6000);
    if (country === "ROW") {
      cy.wait(5000);
      cy.xpath(this.elements.txt_Help)
        .should("be.visible")
        .click({ force: true });
      cy.wait(5000);
      this.elements
        .tab_Help_Overview()
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      cy.xpath(this.elements.tab_Support_Request)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      cy.xpath(this.elements.tab_Technical_Help_Desk)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      cy.xpath(this.elements.txt_Requests)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      cy.xpath(this.elements.tab_Training_Enquiry)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
    } else if (country === "US") {
      cy.xpath(this.elements.txt_Help)
        .should("be.visible")
        .click({ force: true });
      cy.wait(5000);
      this.elements
        .Help_Overview()
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      cy.xpath(this.elements.tab_Support_Request)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      cy.xpath(this.elements.txt_Requests)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
    } else {
      cy.wait(5000);
      cy.xpath(this.elements.txt_Help)
        .should("be.visible")
        .click({ force: true });
      cy.wait(5000);
      cy.xpath(this.elements.txt_Help)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      cy.xpath(this.elements.tab_outline)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      cy.xpath(this.elements.tab_Portalusageinquiry)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      cy.xpath(this.elements.tab_contacttechnicalsupport)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
      cy.xpath(this.elements.tab_Isi)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          cy.log(text);
        });
    }
  }

  Verify_Help_Menu_Page() {
    cy.wait(5000);
    cy.xpath(this.elements.txt_Help)
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
    this.elements
      .tab_Help_Overview()
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });

    cy.xpath(this.elements.tab_Support_Request)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.tab_Technical_Help_Desk)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.tab_My_Requests)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.tab_Training_Enquiry)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.tab_AOS_Media_Library)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
  }

  // Click on the Inquiry  link and log its text
  should_ClickOnEnquiry() {
    cy.xpath(this.elements.tab_Isi)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.tab_Isi).should("be.visible").click();
    cy.wait(20000);
  }

  // Click on the Technical Support Department link and log its text
  should_ClickonTechnicalSupportDepartment() {
    cy.xpath(this.elements.tab_contacttechnicalsupport)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.tab_contacttechnicalsupport)
      .should("be.visible")
      .click();
    cy.wait(10000);
  }

  // Verify Support Ticket section and navigate to Support Request page
  should_Verify_SupportTicket_Content() {
    cy.wait(3000);
    // cy.xpath(this.elements.txt_SupportTicket)
    //   .scrollIntoView()
    //   .should("be.visible");
    this.elements
      .btn_Support_Request()
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
    cy.contains("h1", "Support request").scrollIntoView().should("be.visible");
    // this.should_Click_On_Navigationbar();
    // this.elements.tab_Help_Overview().click();
    cy.wait(4000);
  }

  // Verify Technical Help Desk and navigate to Support Request page
  should_Verify_Technical_HelpDeskContent() {
    cy.xpath(this.elements.txt_Technical_Help_Desk)
      .scrollIntoView()
      .should("be.visible");
    this.elements
      .btn_Technical_Help_Desk()
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
    cy.contains("h1", "Technical Help Desk")
      .scrollIntoView()
      .should("be.visible");
    this.should_Click_On_Navigationbar();
    // this.elements.tab_Help_Overview().click();
    cy.wait(4000);
  }

  // Click on Help tab and verify navigation to Overview page
  should_ClickonHelpoutline() {
    cy.xpath(this.elements.tab_outline)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.tab_outline).click();
    cy.wait(3000);
    cy.url().should("contain", "/overview");
    cy.wait(3000);
  }

  // Verify Help options by clicking each and checking the page URL
  should_VerifyoutlineOptions() {
    cy.contains("span", "포털 사용 문의").scrollIntoView();
    cy.xpath(this.elements.btn_supportReqKorea).click();
    cy.wait(4000);
    cy.url().should("contain", "/support-request");
    cy.go("back");
    cy.wait(4000);
    cy.contains("span", " 기술 지원 문의 ").scrollIntoView();
    cy.xpath(this.elements.btn_Technical_Help_DeskKorea).click();
    cy.wait(3000);
    cy.url().should("contain", "/technical-help-desk");
    cy.go("back");
    cy.wait(4000);
    cy.contains("span", " 문의 현황 조회 ").scrollIntoView();
    cy.xpath(this.elements.btn_myRequestsKorea).click();
    cy.wait(4000);
    cy.url().should("contain", "/my-requests");
    cy.go("back");
    cy.wait(4000);
  }

  // Verify the 'My Requests' under Help tab and navigating back
  should_Verify_My_RequestsContent() {
    cy.xpath(this.elements.txt_Requests).scrollIntoView().should("be.visible");
    this.elements
      .tab_My_Requests()
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
    cy.contains("h1", "My requests").scrollIntoView().should("be.visible");

    this.should_Click_On_Navigationbar();
    // this.elements.tab_Help_Overview().click();
    cy.wait(4000);
  }

  // Verify the Training Enquiry in Help tab and navigate back
  should_Verify_training_Enquiry_Content() {
    cy.xpath(this.elements.txt_Training_Enquiry)
      .scrollIntoView()
      .should("be.visible");
    this.elements
      .btn_Training_Enquiry()
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
    cy.contains("h1", "Training enquiry").scrollIntoView().should("be.visible");

    // this.should_Click_On_Navigationbar();
    // this.elements.tab_Help_Overview().click();
    cy.wait(4000);
  }
  should_US_ClickOnHelpTab() {
    cy.wait(5000);
    cy.xpath(this.elements.dd_btn_Help)
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
  }
  should_US_Helptabcheck() {
    cy.wait(5000);
    this.elements
      .tab_Help_Overview()
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.tab_Support_Request)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.tab_My_Requests)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
  }

  //us portal help links
  should_US_Verify_Help_Links() {
    this.should_Verify_Overview();
    this.should_US_Verify_SupportRequest();
    this.should_US_Verify_Myrequests();
  }
  should_US_Help_Overiewclick() {
    cy.wait(5000);
    this.elements
      .tab_Help_Overview()
      .should("be.visible")
      .click({ force: true });
  }
  should_US_Help_Overviewcheck() {
    cy.wait(5000);
    cy.xpath(this.elements.txt_span_US_supportticket)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.txt_US_Myrequest)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
  }

  // Verify US Help overview links and related pages
  should_US_Help_Overviewlinkcheck() {
    cy.xpath(this.elements.txt_span_US_supportticket)
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
    cy.xpath(this.elements.txt_US_supportticket)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.btn_Navigationbar)
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
    cy.xpath(this.elements.txt_US_taboverview)
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
    cy.xpath(this.elements.txt_US_Myrequest)
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
    cy.xpath(this.elements.txt_US_MYreq)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
  }
}
export default HelpOverview;
