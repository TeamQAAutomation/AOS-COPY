class Login {
  elements = {
    btn_Login: () => cy.xpath("//button[@data-qa='header-login-button']"),

    myAOSMenu: "#myAos-li",

    input_AOS_username: () =>
      cy.xpath("//input[@placeholder='User Name' and @type='text']"),

    input_AOS_password: () =>
      cy.xpath("//input[@placeholder='Password' and @type='password']"),

    btn_AOS_submit: () =>
      cy.xpath("//input[@type='submit' and @value='Submit']"),
    btn_AOS_Next: () => cy.xpath("//input[@type='submit' and @value='NEXT']"),

    icon_leftArrow: "//ds-list-item[@icon='arrow_left_small']",

    btn_cookiesOK: () => cy.xpath("//button[text()='OK']", { timeout: 10000 }),

    txt_startTab: () =>
      cy.xpath(
        "(//div[@class='ds-list-item__content'])[position()=1 and text()]",
      ),

    btn_news: () => cy.get("div.ds-box-footer__item button.ds-button--primary"),

    sessionPopupText: " Close other sessions ",

    iframe: "#embedded-ifram",

    txt_myTicketsHeader: "//*[@id='headlines']/h2[text()='My tickets']",

    txt_hourLabel: "//label[contaiyns(text(),'Hour')]",

    btn_continue:
      "//div[@id='purchaseTicketCalculation']/input[contains(@id,'submit')]",

    btn_continueNext: "//button[contains(@id,'Continue')]",

    btn_purchaseNow: "//*[text()='Purchase now']",

    lbl_sidebar: '//*[@aria-label="Expand Navigation Bar"]',

    msg_loginfail:
      "//b[normalize-space()='Authentication attempt failed. Please try again.']",
    btn_NewsArea: "div.ds-box-footer__item button.ds-button--primary",
  };

  // --------------------- METHODS --------------------------

  should_Launch_LoginPage() {
    cy.visit(Cypress.env("url"), {
      failOnStatusCode: false,
      retryOnNetworkFailure: false,
    });
  }

  should_Click_ExpandButton() {
    cy.xpath(this.elements.icon_leftArrow).click();
  }

  should_Click_AOSMenu() {
    cy.get(this.elements.myAOSMenu).click();
  }

  should_Close_NewsPopup() {
    cy.get("body").then(($body) => {
      // Check if news button exists in DOM
      if ($body.find(this.elements.btn_NewsArea).length === 0) {
        cy.log("News popup not displayed");
        return;
      }

      this.elements.btn_news().then(($btns) => {
        const btn = [...$btns].find((el) =>
          el.innerText.includes("Do not show information any more"),
        );

        if (!btn) {
          cy.log("News popup button text not found");
          return;
        }

        cy.wrap(btn).click({ force: true });
        cy.log("News popup closed");
      });
    });
  }

  should_Click_SessionButton() {
    // cy.document().then((doc) => {
    //   const btn = [...doc.querySelectorAll("button span")].find((el) =>
    //     el.innerText.includes(this.elements.sessionPopupText),
    //   );

    //   if (!btn) {
    //     cy.log("Session popup not displayed");
    //     return;
    //   }

    //   cy.wrap(btn).click();
    //   cy.log("Session popup closed");
    // });
    cy.wait(8000)
    cy.get('body').then(($body) => {
       if ($body.text().includes('Close other sessions')) {
    cy.xpath("//span[contains(text(),' Close other sessions ')]").click({force:true});
  }
  });
  }

  // should_Click_CookiesButton() {
  //   this.elements.btn_cookiesOK().then(($btn) => {
  //     if ($btn.length) {
  //       cy.wrap($btn).click({ force: true });
  //       cy.log("Clicked Cookies OK");
  //     }
  //   });
  // }
  should_Click_CookiesButton() {
  cy.get('body').then(($body) => {
    if ($body.find('button:contains("OK")').length > 0) {
      cy.contains('button', 'OK').click({ force: true });
      cy.log("Clicked Cookies OK");
    } else {
      cy.log("Cookies button not found — continuing test");
    }
  });
}

  ClickAOS_Login_Button() {
    this.elements.btn_Login().click();
  }

  // Login functionality validations
  invalidlogin(username, password) {
    this.elements.input_AOS_username().clear().type(username);
    this.elements.input_AOS_password().clear().type(password);

    this.elements.btn_AOS_submit().click();
  }
  // Invalid Login Message
  validatelogin() {
    cy.xpath(this.elements.msg_loginfail).should("be.visible");
  }
  // ---------------- LOGIN LOGIC -------------------

  should_Login_AOS_When_ValidCredentials(username, password) {
    cy.wait(2000);

    // No credentials → skip login
    if (!username || !password) {
      cy.log("Skipping login - username or password is null");
      this.should_Click_SessionButton();
      this.should_Click_CookiesButton();
      this.should_Close_NewsPopup();
      this.should_Click_ExpandButton();

      return;
    }

    // Login
    this.elements.btn_Login().should("be.visible").click();

    this.elements
      .input_AOS_username()
      .should("be.visible")
      .clear()
      .type(username);
    cy.wait(1000)
    
    this.elements.btn_AOS_Next().click();
    cy.wait(3000);

    cy.get('#callback_2').select('Password')
    cy.wait(1000)

    this.elements.btn_AOS_Next().click();

    this.elements
      .input_AOS_password()
      .should("be.visible")
      .clear()
      .type(password);

    this.elements.btn_AOS_submit().should("be.visible").click();

    // cy.url().should("include", "startpage");

    // Post-login popups
    cy.wait(8000);
    this.should_Click_SessionButton();
    cy.wait(8000);
    this.should_Click_CookiesButton();
    //this.elements.txt_startTab().should("be.visible");
    this.should_Close_NewsPopup();
  }

  // Re-login
  should_Relogin_AOS_When_ValidCredentials(username, password) {
    this.elements.btn_Login().click();

    this.elements.input_AOS_username().clear().type(username);
    this.elements.btn_AOS_Next().click();
    cy.wait(1000);
    this.elements.btn_AOS_Next().click();
    this.elements.input_AOS_password().clear().type(password);

    this.elements.btn_AOS_submit().click();

    cy.url().should("include", "startpage");
    this.should_Click_SessionButton();
    cy.wait(5000);
    this.should_Close_NewsPopup();
  }

  // Iframe flow
  verify() {
    cy.frameLoaded(this.elements.iframe);

    cy.enter(this.elements.iframe).then((frame) => {
      frame().xpath(this.elements.txt_myTicketsHeader);
      frame().xpath(this.elements.txt_hourLabel).click();
      frame().xpath(this.elements.btn_continue).click({ force: true });
      frame().xpath(this.elements.btn_continueNext).click({ force: true });
    });

    cy.frameLoaded(this.elements.iframe);

    cy.enter(this.elements.iframe).then((frame) => {
      frame().xpath(this.elements.btn_purchaseNow).click({ force: true });
    });
  }

  // Sidebar
  sidebar() {
    cy.xpath(this.elements.lbl_sidebar).then(($el) => {
      if ($el.is(":visible")) {
        cy.wrap($el).click();
      }
    });
  }
}

export default Login;
