class ServicesOverview {
  elements = {
    tab_Services:
      "//div[@class='ds-list-item__content' and normalize-space()='Service']  |  //div[@class='ds-list-item__content' and contains(normalize-space(), '서비스')]",
    tab_Overview: "(//div[contains(text(),' Overview ')])[2] | (//div[contains(text(),'개요')])[2]",
    txt_RealDrivingEmissions: "//div[contains(text(),'Real Driving Emissions (RDE)')]",
    txt_Rescueinformation: "//div[contains(text(),'Rescue information')]",
    txt_Diagnosticsarticles: "//div[contains(text(),'Diagnostics articles')]",
    txt_Downloads: "//div[contains(text(),' Downloads ')] | (//div[contains(text(),'다운로드')])[1]",
    txt_VirtualGT1: "//div[contains(text(),' VirtualGT1 ')]",
    txt_TouchCommandService: "//div[contains(text(),' Touch Command Service Updater ')]",
    txt_PEMSadapter: "//div[contains(text(),' PEMS adapter ')]",
    btn_Navigationbar: "//*[@aria-label='Expand Navigation Bar']",
    txt_OverviewServices: "//h2[contains(text(),'Services ')]",
    aosIFrame: "#app aos-iframe-page iframe",
    btn_krDownloadButton: "//button/span[contains(text(),' 다운로드 ')]",
    btn_RescueInformationtextOverview:
      "//app-root[@id='app']/div/div/aos-services/div/h2[contains(text(),'Rescue information')]",
    btn_leftButton: "(//*[@icon='arrow_left_small' and @role='button'])[1]",
    btn_LeftArrow: "//ds-list-item[@icon='arrow_left_small']",

    btn_cookiesButton: () => cy.xpath("//div[@class='cookie-banner']//button[text()='OK']"),
    img_BMW: () =>
      cy.xpath("(//aos-logo-display-card[@class='cursor-pointer ng-star-inserted'])[1]"),
    img_MINI: () =>
      cy.xpath("(//aos-logo-display-card[@class='cursor-pointer ng-star-inserted'])[2]"),
    img_Motorcycle: () =>
      cy.xpath("(//aos-logo-display-card[@class='cursor-pointer ng-star-inserted'])[3]"),
    img_Rolly_Royce: () =>
      cy.xpath("(//aos-logo-display-card[@class='cursor-pointer ng-star-inserted'])[4]"),

    btn_RealDrivingEmissions: () =>
      cy.xpath("//button/span[contains(text(),'Real Driving Emissions (RDE)')]"),
    btn_Rescueinformation: () =>
      cy.xpath("//button/span[contains(text(),'Rescue information')]"),
    btn_Diagnosticsarticles: () =>
      cy.xpath("//button/span[contains(text(),'Diagnostics articles')]"),
    btn_Downloads: () =>
      cy.xpath("//button/span[contains(text(),'Downloads')]"),
    btn_VirtualGT1: () =>
      cy.xpath("//button/span[contains(text(),'VirtualGT1')]"),
    btn_TouchCommandService: () =>
      cy.xpath("//button/span[contains(text(),'Touch Command Service')]"),
    btn_PEMSadapter: () =>
      cy.xpath("//button/span[contains(text(),'PEMS adapter')]"),
    btn_rde: 'button[data-qa="aos-button-rde"]',
    txt_DiagnosticsarticlesHeading: 'aos-diagnostic-articles h1',
    txt_TouchCommandServiceUpdater: 'aos-section-title h2[data-qa="section-title-title"]'
  };

  should_Click_Navigationbar() {
    cy.xpath(this.elements.btn_Navigationbar).should("be.visible").click({ force: true });
    this.elements.btn_cookiesButton().click({ force: true });
  }

  should_Click_ServicesOverview() {
    cy.xpath(this.elements.tab_Overview).should("be.visible").click({ force: true });
  }

  should_Click_ServicesTab() {
    cy.xpath(this.elements.tab_Services).should("be.visible").click({ force: true });
    cy.xpath(this.elements.tab_Overview).should("be.visible").invoke("text").then(cy.log);
    cy.xpath(this.elements.txt_Rescueinformation).should("be.visible").invoke("text").then(cy.log);
  }

  should_Verify_ServiceOverview_Korea() {
    this.should_Click_ServicesOverview();
    cy.wait(5000);
    this.elements.img_BMW().should("be.visible");
    this.elements.img_MINI().should("be.visible");
    cy.xpath(this.elements.btn_krDownloadButton).scrollIntoView().should("be.visible");
  }

  close_ServicesTab(){
    cy.xpath(this.elements.tab_Services).should("be.visible").click({ force: true });
    cy.wait(5000);
  }

  should_Check_ServicesTab(label) {
    cy.xpath(this.elements.btn_LeftArrow).should("be.visible").click({ force: true });
    cy.wait(3000)
    cy.xpath(this.elements.tab_Services).should("be.visible").click({ force: true });
    cy.wait(5000);

    const isKorean =
      label === "||KR_Legal_User||" || label === "||KR_Standard_User||";

    if (isKorean) {
      cy.xpath(this.elements.tab_Overview).should("be.visible").invoke("text").then(cy.log);
      cy.xpath(this.elements.txt_Downloads).should("be.visible").invoke("text").then(cy.log);
      return;
    }

    // Common for Guest & Logged-in EN users
    cy.xpath(this.elements.tab_Overview).should("be.visible").invoke("text").then(cy.log);
    cy.xpath(this.elements.txt_RealDrivingEmissions).should("be.visible").invoke("text").then(cy.log);
    cy.xpath(this.elements.txt_Rescueinformation).should("be.visible").invoke("text").then(cy.log);
    cy.xpath(this.elements.txt_PEMSadapter).should("be.visible").invoke("text").then(cy.log);

    if (label !== "||Guest_User||") {
      cy.xpath(this.elements.txt_Diagnosticsarticles).should("be.visible").invoke("text").then(cy.log);
      cy.xpath(this.elements.txt_Downloads).should("be.visible").invoke("text").then(cy.log);
      cy.xpath(this.elements.txt_VirtualGT1).should("be.visible").invoke("text").then(cy.log);
      cy.xpath(this.elements.txt_TouchCommandService).should("be.visible").invoke("text").then(cy.log);
    }
  }

  should_Verify_BrandImages_Accessibility() {
    cy.wait(5000);

    this.elements.img_BMW().should("be.visible").click({ force: true });
    cy.wait(5000);
    cy.contains("h1", "Rescue information for BMW").should("be.visible");
    cy.go("back");

    this.elements.img_MINI().should("be.visible").click({ force: true });
    cy.wait(5000);
    cy.contains("h1", "Rescue information for MINI").should("be.visible");
    cy.go("back");

    this.elements.img_Motorcycle().should("be.visible").click({ force: true });
    cy.wait(5000);
    cy.contains("h1", "Rescue information for motorcycle").should("be.visible");
    cy.go("back");

    this.elements.img_Rolly_Royce().should("be.visible").click({ force: true });
    cy.wait(5000);
    cy.contains("h1", "Rescue information for Rolls-Royce").should("be.visible");
    cy.go("back");
  }

   should_Verify_Visibilty_Of_BrandImages() {
    this.should_Click_ServicesOverview();
    cy.wait(5000);
    this.elements.img_BMW().should("be.visible");
    this.elements.img_MINI().should("be.visible");
    this.elements.img_Motorcycle().should("be.visible");
    this.elements.img_Rolly_Royce().should("be.visible");
  }
  // Clicks on the Services tab, verifies the available options, and logs their text for Guest users
  should_Check_ServiceTab_For_GuestUser() {
    cy.wait(10000);
    cy.xpath(this.elements.tab_Services)
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
    cy.xpath(this.elements.tab_Overview)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.txt_RealDrivingEmissions)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.xpath(this.elements.txt_Rescueinformation)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });

    cy.xpath(this.elements.txt_PEMSadapter)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
  }

  should_Verify_OverviewPage_Links_Accesibility() {
    cy.wait(5000);
    //Verify Real Driving Emissions (RDE)
    cy.get(this.elements.btn_rde)
      .eq(0)
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
    cy.contains("h1", "Real Driving Emissions (RDE)")
      .scrollIntoView()
      .should("be.visible");
    cy.go("back");
    cy.wait(4000);
    //Verify PEMS adapter
    cy.get(this.elements.btn_rde)
      .eq(1)
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
    cy.contains("h2", "PEMS adapter").should("be.visible");
    cy.go("back");
    cy.wait(4000);
    //Verify Diagnostics article
    cy.get(this.elements.btn_rde)
      .eq(2)
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
    cy.get(this.elements.txt_DiagnosticsarticlesHeading).scrollIntoView().should("be.visible");
    cy.go("back");
    cy.wait(4000);
    //Verify Motor Cycle
    cy.get(this.elements.btn_rde)
      .eq(3)
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
    cy.contains("h1", "Motorcycle").scrollIntoView().should("be.visible");
    cy.go("back");
    cy.wait(4000);
    //Verify Touch command Service Adapter
    cy.get(this.elements.btn_rde)
      .eq(4)
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
    cy.get(this.elements.txt_TouchCommandServiceUpdater)
      .contains("Touch Command Service Updater")
      .should("be.visible");
    cy.go("back");
    cy.wait(4000);
    //Verify Virtual GT1
    cy.get(this.elements.btn_rde)
      .eq(5)
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
    cy.contains("h2", " VirtualGT1 ").should("be.visible");
    cy.go("back");
    cy.wait(4000);
  }
}

export default ServicesOverview;