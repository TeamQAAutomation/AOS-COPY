import login from "./Login_Page.js";
class guest {
  /*-------- XPATHS/ELEMENT LOCATORS ------------ */
  elements = {
    btn_login: () => cy.xpath('//button[@data-qa="header-login-button"]'),
    Navigationbar: "//*[@aria-label='Expand Navigation Bar']",

    txt_aos_sub_headline: () => cy.get('h3[data-qa="aos-landing-page-welcome"]'),
    btn_landingpage_login: () =>
      cy.get('button[data-qa="aos-landing-page-login-button"]'),
    btn_Register_now: () =>
      cy.get('button[data-qa="aos-landing-page-register-button"]'),
    btn_starter_guide: () => cy.get('button[icon="book_open"]'),
    btn_Support_Request: () => cy.get('button[icon="chat"]'),
    img_bmw: () => 
        cy.xpath('//div[contains(@class,"text-white")]//span[contains(text(),"BMW")]/parent::div'),
    img_mini: () => 
        cy.xpath('//div[contains(@class,"text-white")]//span[contains(text(),"MINI")]/parent::div'),
    img_motor_cycle: () => 
        cy.xpath('//div[contains(@class,"text-white")]//span[contains(text(),"Motorcycle")]/parent::div'),
    img_rolls_Royce: () => 
        cy.xpath('//div[contains(@class,"text-white")]//span[contains(text(),"Rolls-Royce")]/parent::div'),
    btn_real_driving_emmissions: () => cy.get("div.text-color-primary").eq(0),
    btn_bmw_cardata: () => cy.xpath("//div[contains(text(),'BMW CAR DATA')]"),
    btn_bmw_apis: () => cy.xpath("//div[contains(text(),'BMW APIS')]"),
    title_BMWcardata: () => cy.get("div.hero-title"),

    tab_help: () => cy.get('ds-list-item[aria-label="Help"]'),
    tab_service: () => cy.get('ds-list-item[aria-label="Service"]'),
    tab_bmw_api: () => cy.get('ds-list-item[aria-label="BMW APIs"]'),
    input_Login: 'input[value="Login"]'
  };

  /*-------- METHODS ------------ */

  should_Verify_Login_Button() {
    cy.wait(2000);
    const Login = new login();
    Login.should_Click_CookiesButton();
    cy.wait(2000);
    this.elements.btn_login().should("be.visible");
  }

  should_Scrolldown_To_Aos_Sub_Headline() {
    this.elements.txt_aos_sub_headline().scrollIntoView().should("be.visible");
  }

  should_Click_On_Registration_Button() {
    this.elements.btn_Register_now().scrollIntoView().click();
    cy.wait(12000);
    cy.url().should("include", "/registration");
  }
  // Verify that the Login and Register Now buttons work correctly
  should_Verify_Login_And_Register_Now_Button() {
   this.elements.btn_landingpage_login()
  .should("be.visible");

    this.elements.btn_Register_now().scrollIntoView().click();
    cy.wait(5000);
    cy.url().should("include", "/registration");

    cy.go("back");
    cy.wait(5000);
  }
  should_Verify_Starter__Guide() {
    this.elements
      .btn_starter_guide()
      .scrollIntoView()
      .should("be.visible")
      .click();
  }
  // Verify that the Support Request button navigates to the correct page
  should_Verify_Support_Request_Button() {
    this.elements
      .btn_Support_Request()
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.wait(5000);
    // Verify that the URL contains the support request path
    cy.url().should("include", "/public/support-request");

    cy.go("back");
    cy.wait(5000);
  }

  // Verify that rescue information images are visible based on the selected country
  should_Verify_Rescue_Information_Images(country) {
    this.elements.img_bmw().scrollIntoView().should("be.visible");
    this.elements.img_mini().scrollIntoView().should("be.visible");
    // For countries other than KR, also check Motorcycle and Rolls-Royce images
    if (country != "KR") {
      this.elements.img_motor_cycle().scrollIntoView().should("be.visible");
      this.elements.img_rolls_Royce().scrollIntoView().should("be.visible");
    }
  }

  // Verify navigation and functionality of links
  should_Verify_Further_Contents() {
    this.elements
      .btn_real_driving_emmissions()
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.wait(5000);
    cy.url().should("include", "/real-driving-emissions");
    cy.go("back");
    cy.wait(6000);
    // Click on "BMW CarData" and verify the redirected page
    this.elements.btn_bmw_cardata().scrollIntoView().should("be.visible");
    cy.wait(15000);

    this.elements.btn_bmw_cardata().click({ force: true });
    cy.log("Wait time")
    cy.wait(130000);
    cy.waitUntil(() =>
      cy
        .request("https://bmwcardata-e2e.bmwgroup.com/thirdparty/public/home")
        .then((response) => response.status === 200)
    );
    cy.url().should(
      "eq",
      "https://bmwcardata-e2e.bmwgroup.com/thirdparty/public/home"
    );
    // Reload BMW CarData page with headers and verify successful load
    cy.visit({
      url: "https://bmwcardata-e2e.bmwgroup.com/thirdparty/public/home",
      headers: {
        "Accept-Encoding": "*",
        "Content-Type": "text/html",
        "Accept-Ranges": "bytes",
        "Strict-Transport-Security": "includeSubDomains",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "operationId, timestamp, X-rgw-applicationid",
        Vary: "Accept-Encoding",
      },
      method: "GET",
      Connection: "Keep-Alive",
      retryOnNetworkFailure: true,
      retryOnStatusCodeFailure: false,
      timeout: 90000,
      failOnStatusCode: false,
      onLoad: () => {
        cy.url().should("include", "home");
      },
    });
    // Verify BMW CarData welcome page
    cy.contains("h1", "Welcome to BMW CarData");
    // Go back and check BMW APIs link navigation
    cy.go("back");
    cy.wait(6000);
    this.elements.btn_bmw_apis().scrollIntoView().should("be.visible").click();
    cy.wait(7000);
    const baseUrl = Cypress.env("url").trim().replace(/\/$/, ""); 
    cy.url().should("contains", `bmw-api`);

    cy.go("back");
    cy.wait(5000);
  }
  // Verify that the "Real Driving Emissions" link opens correctly and navigates back
  should_Prod_Verify_Further_Contents_RDE() {
    this.elements
      .btn_real_driving_emmissions()
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.wait(5000);
    cy.url().should("include", "/real-driving-emissions");
    cy.go("back");
    cy.wait(6000);
  }
  // Verify that the BMW CarData page loads correctly and displays the welcome message
  should_Prod_Verify_Further_Contents_CarData() {
    this.elements.btn_bmw_cardata().scrollIntoView().should("be.visible");
    cy.wait(15000);

    this.elements.btn_bmw_cardata().click({ force: true });
    cy.wait(80000);
    // Wait until the BMW CarData page responds with HTTP 200
    cy.waitUntil(() =>
      cy
        .request("https://bmw-cardata.bmwgroup.com/thirdparty/public/home")
        .then((response) => response.status === 200)
    );
    cy.url().should(
      "eq",
      "https://bmw-cardata.bmwgroup.com/thirdparty/public/home"
    );
    // Visit the BMW CarData page with custom headers
    cy.visit({
      url: "https://bmw-cardata.bmwgroup.com/thirdparty/public/home",
      headers: {
        "Accept-Encoding": "*",
        "Content-Type": "text/html",
        "Accept-Ranges": "bytes",
        "Strict-Transport-Security": "includeSubDomains",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "operationId, timestamp, X-rgw-applicationid",
        Vary: "Accept-Encoding",
      },
      method: "GET",
      Connection: "Keep-Alive",
      retryOnNetworkFailure: true,
      retryOnStatusCodeFailure: false,
      timeout: 90000,
      failOnStatusCode: false,
      onLoad: () => {
        cy.url().should("include", "home");
      },
    });
    // Verify that the welcome message is displayed on the page
    cy.contains("h1", "Welcome to BMW CarData");
    cy.go("back");
    cy.wait(6000);
  }
  // Verify BMW APIs page opens correctly and then go back
  should_Prod_Verify_Further_Contents_BMWAPIs() {
    this.elements.btn_bmw_apis().scrollIntoView().should("be.visible").click();
    cy.wait(7000);
    cy.url().should("eq", "https://aos.bmwgroup.com/bmw-api");
    cy.go("back");
    cy.wait(5000);
  }

  should_Click_On_Navigation_Bar() {
    cy.xpath(this.elements.Navigationbar).should("be.visible").click();
  }
  // Verify visible tabs for guest users based on country
  should_Verify_Guest_User_Tabs(country) {
    if (country == "US") {
      this.elements.tab_help().should("be.visible");
    } else {
      this.elements.tab_help().should("be.visible");
      this.elements.tab_service().should("be.visible");
      this.elements.tab_bmw_api().should("be.visible");
    }
  }
  // Verify that the BMW CarData section is visible and log its text
  should_Verify_BMWcardata() {
    this.elements
      .title_BMWcardata()
      .scrollIntoView()
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
  }
}
export default guest;
