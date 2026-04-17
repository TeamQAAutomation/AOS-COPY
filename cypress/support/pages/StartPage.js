class Homepage {
  elements = {
    /*-------- XPATHS/ELEMENT LOCATORS ------------ */
    tab_start:
      "//div[@class='ds-list-item__content'][normalize-space()='Start page'] | //div[contains(text(),' 시작 페이지 ')]",
    tab_Mytickets: () => cy.xpath("//a[@aria-label='My tickets']/*"),
    link_logout: () => cy.get("li.nav-meta-menu-item.logout > a"),
    btn_cookies: () =>
      cy.xpath("//div[@class='cookie-banner']//button[contains(text(),'OK')]"),
    tab_myAOS: () =>
      cy.xpath(
        "//div[normalize-space()='My AOS'][@class='ds-list-item__content']",
      ),
    icon_arrow: "//ds-navigation-bar//ds-list-item[@icon='arrow_left_small']/div",
    tab_myAosCss: () => cy.get("[aria-label='My AOS']"),
    tab_myAosOptions: () =>
      cy.xpath(
        "(//*[@aria-label='My AOS']/ancestor::ds-navigation-bar-item)[2]",//"//*[@id='myAos']",
        //'//*[@aria-label="My AOS"]//div[@class="ds-list-item__content"]'
      ),
    tab_myinvoices: () =>
      cy.xpath(
        "//div[normalize-space()='My invoices'][@class='ds-list-item__content']",
      ),
    txt_korea: "//h1[contains(text(),'AOS에 오신 것을 환영합니다')]",
    tab_Bmw_apis: () => cy.xpath("//a[@aria-label='BMW APIs']"),
    btn_support_request: () =>
      cy.get('button[data-qa="aos-support-request-button"]'),
    btn_Help_center: () =>
      cy.get('button[data-qa="aos-support-card-help-center-button"]'),
    txt_AfterSalesOnlineSystemTitle:
      "//div[contains(text(),'Aftersales online system')] | //div[contains(text(),' 애프터세일즈 온라인 시스템 ')]",
    txt_US_AftersalesOnlineSystem:
      "//div[contains(text(),' Aftersales Online System ')]",
    logo_BMWMINIRollsRoyce:
      "//ds-icon[@class='text-color-primary ds-icon ds-icon--md']",
    logo_USBMWMINIRollsRoyce:
      "//aos-header//header//div[@data-qa='letterhead-go-home-link']",
    tab_StartPage:
      "//div[contains(text(),'Start page')]",
    tab_AllApplications:
      "//div[contains(text(),' All applications ')]",
    tab_Help:
      "//div[contains(text(),' Help ')]",
    tab_Services:
      "//div[contains(text(),' Service ')]",
    txt_BMWAPIs:
      "//div[contains(text(),' BMW APIs ')]",
    btn_support_request:
      "//button[@class='ds-button ds-button--outline has-icon']",
    txt_USAosservices: "//div[contains(text(),' AOS Service ')]",
    txt_USHelpTab: "//div[contains(text(),' Help ')]",
    Navigationbar_US:
      "(//ds-icon[@class='icon-left ds-icon ds-icon--md ng-star-inserted'])[2]",
    txt_welcomeToAos:
      "//h1[contains(text(),'Welcome to AOS')] | //h1[contains(text(),'AOS에 오신 것을 환영합니다')]",
    input_enter_VIN: "//input[@placeholder='Enter VIN (17 characters)']",
    msg_VIN_FormatError:
      "//span[normalize-space()='Please enter a 17-character vehicle identification number.']",
    txt_USSupportrequest: "//span[contains(text(),' Support request ')]",
    btn_Login: "(//span[contains(text(),' Login ')])[2]",
    btn_Registernow: "//span[contains(text(),' Register now ')]",
    txt_Supportreq: "//span[contains(text(),' Support request ')]",
    dropdown_languageSelection: "//ds-select[@class='language-select ds-select']",
    btn_languageSelection:
      "//button[@aria-label='Open list of options']/span[contains(text(),'Deutsch')]",
    btn_ETK: "//button[@id='m6eywr68gln149g2tvv']",
    btn_MMC:
      "//button[@class='ds-button ds-button--outline']//span//font[contains(text(),'Open AIR')]",
    btn_ESC:
      "//button[@class='ds-button ds-button--outline']//span//font[contains(text(),'Open KaSIO')]",
    btn_EDP:
      "//button[@class='ds-button ds-button--outline']//span//font[contains(text(),'ISTA Start')]",
    link_news:
      '[href="https://auth-i.bmwgroup.com/auth/saml2/jsp/idpSSOInit.jsp?metaAlias=/internetb2x/saml20-internetb2x-int&spEntityID=https://compass-int-bmw-b2i.kcenter.usu.com&NameIDFormat=urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"]',
    txt_pageTitle: "div#pageTitle",
     NavigationBar: "//div[contains(@class,'ds-list-item__content-wrapper')]//*[name()='svg' and @data-id='arrow_left_small']",
    tab_MYAOS: "//div[normalize-space()='My AOS' and contains(@class,'ds-list-item__content')]",
    supportrequest:"//button[@data-qa='aos-support-request-button' and contains(., 'Support request')]",
    txt_phoneNumber:"//input[@formcontrolname='phoneNumber']",
    btn_readoutvehicleKey:"//button//span[contains(text(),'Read out vehicle key')]",
    txt_keyIdentification:"//h2[contains(text(),'KeyRead identification')]",
    btn_Close:"//button[@aria-label='Dismiss']",
    btn_orderKeyreader:"//span[contains(text(),'Order KeyReader')]",
    btn_download:"//button[.//span[normalize-space()='Download']]",

  
    status_by_vin: (vin) =>
      `//tr[.//span[contains(text(),'${vin}')]]//span[contains(@class,'ds-tag__label')]`,
 
  };
  should_clickDownloadButton(){
    cy.xpath(this.elements.btn_download).click();
  }

  should_clickReadoutKeybutton(){
    cy.xpath(this.elements.btn_readoutvehicleKey).click();
  }
  should_DisplayKeyReadoutTitle(){
    cy.xpath(this.elements.txt_keyIdentification).should("be.visible");
    cy.xpath(this.elements.btn_Close).should("be.visible");
  }
  should_clickCloseIcon(){
    cy.xpath(this.elements.btn_Close).click();
  }
  should_clickorderKeyreadout(){
    cy.xpath(this.elements.btn_orderKeyreader).click();
  }

 
  should_click_myAOS(){
    cy.xpath(this.elements.icon_arrow).click();
     this.elements.tab_myAOS()
    .should('be.visible')
    .click();
  }

  should_Verify_Login() {
    this.elements.btn_cookies().click({ force: true });
    cy.url().should("contain", "/start");
    this.elements.tab_start().should("be.visible");
  }
should_Click_LanguageSelection(option, pos = 0) {

  const container = 'cdk-virtual-scroll-viewport';

  cy.xpath(this.elements.dropdown_languageSelection).click();

  const scrollAndFind = (position) => {

    cy.get(container)
      .scrollTo(0, position)
      .wait(300); 

    cy.get(container).then(($el) => {
      if ($el.find(`span:contains("${option}")`).length > 0) {
        cy.contains(container + ' span', option, { timeout: 5000 })
          .click({ force: true });
      } else {
        if (position < 4000) {
          scrollAndFind(position + 200);
        } else {
          throw new Error(`Option ${option} not found`);
        }
      }
    });
  };

  scrollAndFind(pos);
}

  should_Click_News() {
    cy.get(this.elements.link_news).scrollIntoView();

    cy.get(this.elements.link_news)
      .should("have.attr", "href")
      .then((href) => {
        cy.request(href).its("status").should("eq", 200);
        cy.wait(10000);
      });
  }

  should_Verify_StartTab() {
    cy.url().should("contain", "/startpage");
    cy.xpath(this.elements.tab_start).should("be.visible");
  }

  should_Verify_KoreanLanguage() {
    cy.xpath(this.elements.txt_korea)
      .should("be.visible")
      .should("contain", "AOS에 오신 것을 환영합니다");
  }

  should_VerifyMyAOSElements_Adminuser() {
    cy.wait(10000);
    this.elements.tab_myAosOptions().should("be.visible");
    this.elements.tab_myAosOptions().should("contain", "History");
    this.elements.tab_myAosOptions().should("contain", "My payment methods");
    this.elements.tab_myAosOptions().should("contain", "Ongoing tickets");
    this.elements.tab_myAosOptions().should("contain", "My tickets");
    this.elements.tab_myAosOptions().should("contain", "My organisation");
  }

  should_VerifyMyAOSElements_Legaluser() {
    cy.wait(10000);
    this.elements.tab_myAosOptions().should("be.visible");
    this.elements.tab_myAosOptions().should("contain", "History");
    this.elements.tab_myAosOptions().should("contain", "My invoices");
    this.elements.tab_myAosOptions().should("contain", "My payment methods");
    this.elements.tab_myAosOptions().should("contain", "Ongoing tickets");
    this.elements.tab_myAosOptions().should("contain", "My tickets");
    this.elements.tab_myAosOptions().should("contain", "My organisation");
  }

  should_VerifyMyAOSElements_Standarduser() {
    cy.wait(10000);
    this.elements.tab_myAosOptions().should("be.visible");
    this.elements.tab_myAosOptions().should("contain", " My data ");
    this.elements.tab_myAosOptions().should("contain", "Ongoing tickets");
    this.elements.tab_myAosOptions().should("contain", "My tickets");
    this.elements.tab_myAosOptions().should("contain", "My organisation");
  }

  should_Verify_AosOptions_Navigation_Standard() {
    this.should_Click_On_Mydata();
    this.should_Click_On_MyOrganisation();
    this.should_Click_On_Tickets();
    this.should_Click_On_Ongoing_Tickets();
  }

  should_Verify_AosOptions_NavigationForLegaluser() {
    this.should_Click_On_Mydata();
    this.should_Click_leftArrow();
    this.should_Click_On_MyOrganisation();
    this.should_Click_leftArrow();
    this.should_Click_On_Tickets();
    this.should_Click_leftArrow();
    this.should_Click_On_Ongoing_Tickets();
    this.should_Click_leftArrow();
    this.should_Click_On_History();
    this.should_Click_leftArrow();
    this.should_Click_On_Myinvoices();
    this.should_Click_leftArrow();
    this.should_Click_On_MypaymentMethods();
    this.should_Click_leftArrow();
  }

  should_Verify_AosOptions_NavigationForStandardUser() {
    this.should_Click_On_Mydata();
    this.should_Click_On_MyOrganisation();
    this.should_Click_On_Tickets();
    this.should_Click_On_Ongoing_Tickets();
  }

  should_Click_On_Mydata() {
    this.elements.tab_myAosOptions().should("be.visible").contains("My data").click();
    cy.wait(8000);
    cy.Click_NavigationBar();
  }

  should_Click_On_MyOrganisation() {
    this.elements.tab_myAosOptions().contains("My organisation").click();
    cy.wait(8000);
    cy.Click_NavigationBar();
  }

  should_Click_On_Tickets() {
    this.elements.tab_myAosOptions().contains("My tickets").click();
    cy.wait(8000);
    cy.Click_NavigationBar();
  }

  should_Click_On_Ongoing_Tickets() {
    this.elements.tab_myAosOptions().contains("Ongoing tickets").click();
    cy.wait(8000);
    cy.Click_NavigationBar();
  }

  should_Click_On_History() {
    this.elements.tab_myAosOptions().contains("History").click();
    cy.wait(8000);
    cy.Click_NavigationBar();
  }

  should_Click_On_Myinvoices() {
    this.elements.tab_myAosOptions().contains("My invoices").click();
    cy.wait(8000);
    cy.Click_NavigationBar();
  }

  should_Click_On_MypaymentMethods() {
    this.elements.tab_myAosOptions().contains("My payment methods").click();
    cy.wait(8000);
    cy.Click_NavigationBar();
  }

  should_verify_ongoingtickets_page() {
    cy.get("h1").contains(" Ongoing tickets ").should("be.visible");
  }

  //Verify My AOS options
  should_Verify_Not_Available_MyAOSElements(tabName) {
    this.elements.tab_myAosOptions().contains("My data").should("be.visible");
    if (tabName === "History")
      this.elements.tab_myAosOptions().should("not.have.value", "History");
    else if (tabName === "My invoices")
      this.elements.tab_myAosOptions().should("not.have.value", "My invoices");
    else if (tabName === "My payment methods")
      this.elements
        .tab_myAosOptions()
        .should("not.have.value", "My payment methods");
  }

  // Verifies the AOS title and brand logo visibility
  should_Check_HeaderSection() {
    cy.xpath(this.elements.txt_AfterSalesOnlineSystemTitle)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.logo_BMWMINIRollsRoyce).should("be.visible");
    cy.log("BMWMINIRollsRoyceLogo got visible");
  }

  // Verifies the AOS title and brand logo visibility for US
  should_Check_US_HeaderSectionTitle() {
    cy.xpath(this.elements.txt_US_AftersalesOnlineSystem)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.logo_USBMWMINIRollsRoyce).should("be.visible");
    cy.log("BMWMINIRollsRoyceLogo got visible");
  }

  // Verifies US navigation bar tabs before the user logs in
  should_Check_US_Tabs_BeforeLogin() {
    cy.xpath(this.elements.Navigationbar_US)
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
    // Validate that the Help tab is visible, then log its label text
    cy.xpath(this.elements.txt_USHelpTab)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
  }

  // Verifies that  buttons are visible and logs their label text
  should_VerifyButtons() {
    cy.xpath(this.elements.btn_Registernow)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.txt_Supportreq)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
  }

  // Checks the Language selection
  should_Check_LanguageSelection(expectedLanguage) {
    cy.xpath(this.elements.btn_languageSelection)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(`Selected Language: ${text}`);
        // Verify the selected language matches the expected one
        expect(text.trim()).to.equal(expectedLanguage);
      });
  }

  //Logs the Welocome text
  should_Verify_AOS_WelcomeText() {
    cy.xpath(this.elements.txt_welcomeToAos)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
  }

  // Enter Vin in Home page VIN Search
  should_Enter_VIN_Home(VIN) {
    cy.xpath(this.elements.input_enter_VIN)
      .should("be.visible")
      .type(VIN)
      .wait(10000)
      .type("{enter}");
  }

  // Validate VIN format error
  should_Validate_VIN_Format_Error() {
    cy.xpath(this.elements.msg_VIN_FormatError).should("be.visible");
  }

  // Verifies the BMW car data Support Request option is visible and clickable for US
  should_Check_US_BMWCarData_And_SupportReq() {
    cy.xpath(this.elements.txt_USSupportrequest)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.txt_USSupportrequest)
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
  }

  // Verifies that Start Page navigation items are visible and logs their text
  should_Check_StartPageOverview() {
    cy.xpath(this.elements.NavigationBar).should("be.visible")
      .click({ force: true });
    cy.xpath(this.elements.tab_StartPage)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.tab_AllApplications)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.tab_MYAOS)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.tab_Help)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.tab_Services)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.txt_BMWAPIs)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
  }

  should_Check_KR_HomeTab() {
    cy.get("div").contains(" 시작 페이지 ").should("be.visible");
    cy.get("div").contains(" 모든 애플리케이션 ").should("be.visible");
    cy.get("div").contains(" My AOS ").should("be.visible");
    cy.get("div").contains(" 도움말 ").should("be.visible");
    cy.get("div").contains(" 서비스 ").should("be.visible");
  }

  should_Click_StartTab() {
    cy.xpath(this.elements.tab_start).should("be.visible").click();
    cy.wait(4000);
    cy.url().should("contain", "/start");
  }

  // Verifies that tiles on the start page are clickable and navigation works
  should_Check_FurtherContent() {
    cy.contains("div", " Real Driving Emissions (RDE) ").scrollIntoView();
    cy.contains("div", " Real Driving Emissions (RDE) ")
      .should("be.visible")
      .click();
    cy.wait(4000);
    cy.go("back");
    cy.wait(4000);
    cy.contains("div", " BMW CAR DATA ").scrollIntoView();
    cy.contains("div", " BMW CAR DATA ").should("be.visible").click();
    cy.wait(4000);
    cy.go("back");
    cy.wait(4000);
    cy.contains("div", " BMW APIS ").scrollIntoView();
    cy.contains("div", " BMW APIS ").should("be.visible").click();
    cy.wait(4000);
    cy.go("back");
    cy.wait(4000);
  }

  // Verifies that the Support Request link is visible and clickable
should_Verify_Support_Request() {
  cy.xpath(this.elements.supportrequest)
  .scrollIntoView()
  .should("be.visible")
  .click({ force: true });             
  cy.wait(4000);             // optional: keep if really needed
  cy.go("back");
  cy.wait(4000);             // optional: keep if really needed
}

  // Verifies that the Start Guide link is visible and clickable
  should_Check_StarterGuide() {
    cy.contains("span", " Starter Guide ").scrollIntoView();
    cy.contains("span", " Starter Guide ").should("be.visible").click();
    cy.wait(4000);
  }

  // Verifies navigation for Rescue Information brand tiles
  should_Verify_RescueInfo() {
    cy.contains("span", " BMW ").scrollIntoView();
    cy.contains("span", " BMW ").should("be.visible").click();
    cy.wait(4000);
    cy.go("back");
    cy.wait(4000);
    cy.contains("span", " MINI ").scrollIntoView();
    cy.contains("span", " MINI ").should("be.visible").click();
    cy.wait(4000);
    cy.go("back");
    cy.wait(4000);
    cy.contains("span", " Motorcycle ").scrollIntoView();
    cy.contains("span", " Motorcycle ").should("be.visible").click();
    cy.wait(4000);
    cy.go("back");
    cy.wait(4000);
    cy.contains("span", " Rolls-Royce ").scrollIntoView();
    cy.contains("span", " Rolls-Royce ").should("be.visible").click();
    cy.wait(4000);
    cy.go("back");
    cy.wait(4000);
  }

  // Verifies navigation to the AOS Help Centre and back
  should_Verify_HelpCenter() {
    cy.contains("span", " AOS Help Centre ").scrollIntoView();
    cy.contains("span", " AOS Help Centre ").should("be.visible").click();
    cy.wait(4000);
    cy.go("back");
    cy.wait(4000);
  }

  // Verifies navigation to Open EPC and back
  should_Verify_Open_EC() {
    cy.contains("span", " Open EPC ").scrollIntoView();
    cy.contains("span", " Open EPC ").should("be.visible").click();
    cy.wait(4000);
    cy.go("back");
    cy.wait(4000);
  }

  // Verifies navigation to the KASIO and back
  should_Verify_Kasio() {
    cy.contains("span", " Open KaSIO ").scrollIntoView();
    cy.contains("span", " Open KaSIO ").should("be.visible").click();
    cy.wait(4000);
    cy.go("back");
  }

  // Verifies navigation to the Start ISTA and back
  should_Verify_Start_ISTA() {
    cy.contains("span", " Start ISTA ").scrollIntoView();
    cy.contains("span", " Start ISTA ").should("be.visible").click();
    cy.wait(4000);
    cy.go("back");
    cy.wait(4000);
  }

  // Verifies navigation to the Open AIR and back
  should_Verify_Open_AIR() {
    cy.contains("span", " Open AIR ").scrollIntoView();
    cy.contains("span", " Open AIR ").should("be.visible").click();
    cy.wait(4000);
    cy.go("back");
    cy.wait(4000);
  }

  // Verifies that the Compass application opens correctly and the page title is visible
  should_Verify_Open_Compass() {
    cy.visit({
      url: "https://compass-int-bmw.kcenter.usu.com",
      followRedirect: false,
      failOnStatusCode: false,
    }).then((response) => {
      cy.wait(9000);

      cy.get(this.elements.txt_pageTitle).should("exist");
    });
  }

  // Verifies navigation to all sections available on the Start Page
  should_Verify_StartPage_Content() {
    cy.contains("span", " Support request ").should("be.visible").click();
    cy.wait(4000);
    cy.go("back");
    cy.wait(4000);
    cy.contains("span", " AOS Help Centre ").scrollIntoView();
    cy.contains("span", " AOS Help Centre ").should("be.visible").click();
    cy.wait(4000);
    cy.go("back");
    cy.wait(4000);

    cy.contains("span", " Open EPC ").scrollIntoView();
    cy.contains("span", " Open EPC ").should("be.visible").click();
    cy.wait(4000);
    cy.go("back");
    cy.wait(4000);
    cy.contains("span", " Open KaSIO ").scrollIntoView();
    cy.contains("span", " Open KaSIO ").should("be.visible").click();
    cy.wait(4000);
    cy.go("back");
    cy.wait(4000);
    cy.contains("span", " Start ISTA ").scrollIntoView();
    cy.contains("span", " Start ISTA ").should("be.visible").click();
    cy.wait(4000);
    cy.go("back");
    cy.wait(4000);
    cy.contains("span", " Open AIR ").scrollIntoView();
    cy.contains("span", " Open AIR ").should("be.visible").click();
    cy.wait(4000);
    cy.go("back");
    cy.wait(4000);
  }

  should_Click_MyTickets() {
    this.elements.tab_Mytickets().click();
  }

  should_Click_BMW_APIs() {
    this.elements.tab_Bmw_apis().click();
    cy.wait(5000);
    cy.url().should("contain", "/bmw-api");
  }

  should_Click_MyInvoices() {
    this.elements.tab_myinvoices().click();
  }
  should_Click_leftArrow(){
     cy.xpath(this.elements.icon_arrow).should("be.visible").click()
  }
  should_Click_MyAOS() {
  this.should_Click_leftArrow();
    cy.wait(2000);
    this.elements.tab_myAosCss().click();
    cy.wait(5000);
  }

  // Verifies that all key US navigation tabs are visible after login
  should_Check_US_AfterLogin() {
    cy.xpath(this.elements.tab_StartPage)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.tab_AllApplications)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.tab_myAOS)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.tab_Help)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
  }

  should_Click_Registration() {
    cy.xpath(this.elements.btn_Registernow)
      .should("be.visible")
      .click({ force: true });
  }

  // Clicks on the "Support Inquiry" option and verifies navigation works
  should_Click_SupportReq() {
    cy.xpath(this.elements.btn_support_request).should("be.visible").click();
    cy.wait(4000);
    cy.go("back");
    cy.wait(4000);
  }

  // Clicks through available application links and verifies their respective pages load
  should_Check_Respective_Page_Loaded() {
    cy.xpath(this.elements.btn_support_request).should("be.visible").click();
    cy.wait(4000);
    cy.go("back");
    cy.wait(4000);
    cy.contains("span", " 전자부품 카탈로그 열기 ").scrollIntoView();
    cy.contains("span", " 전자부품 카탈로그 열기 ")
      .should("be.visible")
      .click();
    cy.wait(4000);
    cy.url().should("contain", "/electronic-parts-catalog");
    cy.go("back");
    cy.wait(4000);
    cy.contains("span", "KaSIO").scrollIntoView();
    cy.contains("span", "KaSIO").should("be.visible").click();

    cy.url().should("contain", "/kasio");
    cy.go("back");
    cy.wait(4000);
    cy.contains("span", "ISTA").scrollIntoView();
    cy.contains("span", "ISTA").should("be.visible").click();
    cy.wait(4000);
    cy.url().should("contain", "/ista-next");
    cy.go("back");
    cy.wait(4000);
    cy.contains("span", "AIR").scrollIntoView();
    cy.contains("span", "AIR").should("be.visible").click();
    cy.wait(4000);
    cy.url().should("contain", "/air");
    cy.go("back");
    cy.wait(4000);
  }
  should_verify_status_by_vin(vin, expectedStatus) {
    cy.xpath(this.elements.status_by_vin(vin))
      .should("be.visible")
      .and("contain.text", expectedStatus);
  }
}

export default Homepage;
