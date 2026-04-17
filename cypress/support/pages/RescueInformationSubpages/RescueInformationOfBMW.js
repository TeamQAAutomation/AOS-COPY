import RescueInfo from "../../Commons/RescueInfo.js";

class txt_RescueinformationOfBMW {
  elements = {
    tab_Service:
      "//div[@class='ds-list-item__content' and normalize-space()='Service'] | //div[contains(text(),' 서비스 ')]",
    txt_Rescueinformation: "//h2[normalize-space()='Rescue information']",
    img_BMWImage:
      "//span[normalize-space()='BMW']",
    tab_OverviewOfBMW: "(//div[contains(text(),'Overview')])[1] | (//div[contains(text(),' 개요 ')])[1]",
    tab_CompactVanOfBMW: "(//div[contains(text(),' Compact van ')])[1] | (//div[contains(text(),' 컴팩트 밴 ')])[1]",
    tab_ConvertibleOfBMW: "(//div[contains(text(),'Convertible')])[1] | (//div[contains(text(),' 컨버터블 ')])[1]",
    tab_SaloonOfBMW: "(//div[contains(text(),' Saloon ')])[1] |(//div[contains(text(),'세단')])[1]",
    tab_SavForBMW: "(//div[contains(text(),' SAV')])[1]",
    tab_CoupéORCompactOfBMW:
      "(//div[contains(text(),' Coupé/Compact ')])[1]  | (//div[contains(text(),' 쿠페/컴팩트 ')])[1]",
    tab_TouringForBMW:
      "(//div[contains(text(),'Touring')])[1]  | (//div[contains(text(),' 투어링 ')])[1]",

    tab_BMWOTITLE: "//div[contains(text(),'BMW')]",
    txt_BMWOseriesXpath: "//p[@class='w-full hero-content ng-star-inserted']",
    RescueManualPDfDownload:
      "//ds-button[@class='ds-button ds-button--outline has-icon ng-star-inserted']",
    BMWOImage: "//img[@class='hero-image w-full ng-star-inserted']",

    txt_BMWText: "//span[contains(text(),'BMW')]",
    txt_RescueINfoForBMW:
      "//h1[contains(text(),'Rescue information for BMW')] | //h1[contains(text(),'BMW 구조 정보')]",

    btn_Backbutton: "(//ds-button[@type='button'])[1]",
    iframe_aosIFrame: "#app aos-iframe-page iframe",

    txt_Downloads:
      "//h2[contains(text(),'Downloads')] | //h2[contains(text(),' 다운로드 ')]",
    txt_RescueManualBoldText
      :
      "(//span[contains(text(),'Rescue manual')])[1] | (//span[contains(text(),'구조지침')])[1]",
    txt_RescueManualText
      :
      "(//span[contains(text(),'Rescue manual')])[2] | (//span[contains(text(),'구조지침')])[2]",
    txt_RescueSheetAccordingToBodyShape
      :
      "//h2[contains(text(),'Rescue sheets according to body shape')]  | //h2[contains(text(),'차체 형태에 따른 구조 카드')]",

    txt_BMW_StructuralTitle: "//h1",
  };

  should_Click_BMWCompactVan() {
    cy.xpath(this.elements.tab_CompactVanOfBMW).should("be.visible").click({ force: true });
    cy.wait(5000);
    cy.xpath(this.elements.txt_RescueSheetAccordingToBodyShape
    )
      .should("be.visible")
      .invoke("text")
      .then(cy.log);
  }

  should_Click_Convertible() {
    cy.xpath(this.elements.tab_ConvertibleOfBMW).should("be.visible").click({ force: true });
    cy.wait(5000);
    cy.xpath(this.elements.txt_RescueSheetAccordingToBodyShape
    )
      .should("be.visible")
      .invoke("text")
      .then(cy.log);
  }

  should_Click_CoupéORCompact() {
    cy.xpath(this.elements.tab_CoupéORCompactOfBMW).should("be.visible").click({ force: true });
    cy.wait(5000);
    cy.xpath(this.elements.txt_RescueSheetAccordingToBodyShape
    )
      .should("be.visible")
      .invoke("text")
      .then(cy.log);
  }

  should_Click_Saloon() {
    cy.xpath(this.elements.tab_SaloonOfBMW).should("be.visible").click({ force: true });
    cy.wait(5000);
    cy.xpath(this.elements.txt_RescueSheetAccordingToBodyShape
    )
      .should("be.visible")
      .invoke("text")
      .then(cy.log);
  }

  should_Click_Sav() {
    cy.xpath(this.elements.tab_SavForBMW).should("be.visible").click({ force: true });
    cy.wait(5000);
    cy.xpath(this.elements.txt_RescueSheetAccordingToBodyShape
    )
      .should("be.visible")
      .invoke("text")
      .then(cy.log);
  }

  should_Click_Touring() {
    cy.xpath(this.elements.tab_TouringForBMW).should("be.visible").click({ force: true });
    cy.wait(5000);
    cy.xpath(this.elements.txt_RescueSheetAccordingToBodyShape
    )
      .should("be.visible")
      .invoke("text")
      .then(cy.log);
  }

  should_Check_BMWOverview() {
    cy.xpath(this.elements.img_BMWImage).should("be.visible").click({ force: true });
    cy.wait(5000);

    [
      this.elements.tab_OverviewOfBMW,
      this.elements.tab_CompactVanOfBMW,
      this.elements.tab_ConvertibleOfBMW,
      this.elements.tab_CoupéORCompactOfBMW,
      this.elements.tab_SaloonOfBMW,
      this.elements.tab_SavForBMW,
      this.elements.tab_TouringForBMW,
    ].forEach((el) => {
      cy.xpath(el).should("be.visible").invoke("text").then(cy.log);
    });
  }

  should_Check_Headings_And_Download() {
    const RIBMW = /Rescue information for BMW|BMW 구조 정보/;

    cy.xpath(this.elements.txt_RescueINfoForBMW)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.match(RIBMW);
      });

    cy.xpath(this.elements.txt_Downloads).invoke("text").then(cy.log);
    cy.xpath(this.elements.txt_RescueManualBoldText
    ).scrollIntoView().invoke("text").then(cy.log);
    cy.xpath(this.elements.txt_RescueManualText
    ).invoke("text").then(cy.log);

    cy.xpath(this.elements.RescueManualPDfDownload).click();
    cy.wait(5000);
  }

  should_Download_PDFFiles() {
    new RescueInfo().should_Download_All_PDFs();
  }

  should_Download_Larger_PDFFiles() {
    new RescueInfo().should_Download_Larger_File_PDFs();
  }

  should_Check_BMWOverview_RescueSheets() {
    const rescueInfo = new RescueInfo();
    const expectedTitle = [
      " Compact van ",
      " Convertible ",
      " Coupé/Compact ",
      " Saloon ",
      " SAV ",
      " Touring ",
    ];
    const seriesText = [
      "2 Series, i3",
      "1 Series, 2 Series, 3 Series, 4 Series, 6 Series, 8 Series, Z3, Z4, Z8",
      "1 Series, 2 Series, 3 Series, 4 Series, 6 Series, 8 Series, Z3, Z4, i8",
      "3 Series, 5 Series, 6 Series, 7 Series, 8 Series",
      "X1, X2, X3, X4, X5, X6, X7, iX, XM",
      "3 Series, 5 Series",
    ];
    const expectedAltTextsOfimages = [
      "article.bmw-compact-van.ImageAltText",
      "article.bmw-convertible.ImageAltText",
      "article.bmw-coupe-compact.ImageAltText",
      "article.bmw-sedan.ImageAltText",
      "article.bmw-suv.ImageAltText",
      "article.bmw-touring.ImageAltText",
    ];
    cy.xpath(this.elements.txt_RescueSheetAccordingToBodyShape
    )
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    rescueInfo.should_Check_Images(expectedAltTextsOfimages);
    rescueInfo.should_Check_SeriesText(seriesText);
    rescueInfo.should_Check_Title(expectedTitle);
    rescueInfo.should_Select_Element();
  }
  //For Korean Context
  should_Check_BMWOverview_RescueSheets_Kr(label) {
    const rescueInfo = new RescueInfo();
    const expectedTitle = [
      " 컴팩트 밴 ",
      " 컨버터블 ",
      " 쿠페/컴팩트 ",
      " 세단 ",
      " SAV ",
      " 투어링 ",
    ];
    const seriesText = [
      "2 시리즈, i3",
      "1 시리즈, 2 시리즈, 3 시리즈, 4 시리즈, 6 시리즈, 8 시리즈, Z3, Z4, Z8",
      "1 시리즈, 2 시리즈, 3 시리즈, 4 시리즈, 6 시리즈, 8 시리즈, Z3, Z4, i8",
      "3 시리즈, 5 시리즈, 6 시리즈, 7 시리즈, 8 시리즈",
      "X1, X2, X3, X4, X5, X6, X7, iX, XM",
      "3 시리즈, 5 시리즈",
    ];
    const expectedAltTextsOfimages = [
      "article.bmw-compact-van.ImageAltText",
      "article.bmw-convertible.ImageAltText",
      "article.bmw-coupe-compact.ImageAltText",
      "article.bmw-sedan.ImageAltText",
      "article.bmw-suv.ImageAltText",
      "article.bmw-touring.ImageAltText",
    ];
    cy.xpath(this.elements.txt_RescueSheetAccordingToBodyShape
    )
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    rescueInfo.should_Check_Images(expectedAltTextsOfimages);
    rescueInfo.should_Check_SeriesText(seriesText);
    rescueInfo.should_Check_Title(expectedTitle);
    rescueInfo.should_Select_Element(label);
  }

  // Verifies the series text for BMW Compact Van
  should_Verify_BMWCompactVan_Series() {
    const ExpectedText = ["2 Series", "i3"];
    const rescueInfo = new RescueInfo();
    rescueInfo.should_Check_SeriesName(ExpectedText);
  }

  // Verifies the series text for BMW Compact Van for Korean Context
  should_Verify_BMWCompactVan_Series_Kr() {
    const ExpectedText = ["2 시리즈", "i3"];
    const rescueInfo = new RescueInfo();
    rescueInfo.should_Check_SeriesName(ExpectedText);
  }

  // Verifies the series text for BMW Convertible Van
  should_Verify_BMWConvertibleSeries() {
    const ExpectedText = [
      "1 Series",
      "2 Series",
      "3 Series",
      "4 Series",
      "6 Series",
      "8 Series",
      "Z3",
      "Z4",
      "Z8",
    ];
    const rescueInfo = new RescueInfo();
    rescueInfo.should_Check_SeriesName(ExpectedText);
  }

    // Verifies the series text for BMW Convertible Van for Korean Context
  should_Verify_BMWConvertibleSeries_Kr() {
    const ExpectedText = [
      "1 시리즈",
      "2 시리즈",
      "3 시리즈 라인",
      "4 시리즈",
      "6시리즈",
      "8시리즈",
      "Z3",
      "Z4",
      "Z8",
    ];
    const rescueInfo = new RescueInfo();
    rescueInfo.should_Check_SeriesName(ExpectedText);
  }

  // Verifies the series text for BMW Coupe/Compact Van
  should_Verify_BMWCoupéORCompactSeries() {
    const ExpectedText = [
      "1 Series",
      "2 Series",
      "3 Series",
      "4 Series",
      "6 Series",
      "8 Series",
      "i8",
      "Z3",
      "Z4",
    ];
    const rescueInfo = new RescueInfo();
    rescueInfo.should_Check_SeriesName(ExpectedText);
  }
  // Verifies the series text for BMW Coupe/Compact Van for Korean Context
  should_Verify_BMWCoupéORCompactSeries_Kr() {
    const ExpectedText = [
      "1 시리즈",
      "2 시리즈",
      "3 시리즈 라인",
      "4 시리즈",
      "6시리즈",
      "8 시리즈 라인",
      "i8",
      "Z3",
      "Z4",
    ];
    const rescueInfo = new RescueInfo();
    rescueInfo.should_Check_SeriesName(ExpectedText);
  }

  // Verifies the series text for BMW Saloon
  should_Verify_BMWSaloonSeries() {
    const ExpectedText = [
      "3 Series",
      "5 Series",
      "6 Series",
      "7 Series",
      "8 Series",
    ];
    const rescueInfo = new RescueInfo();
    rescueInfo.should_Check_SeriesName(ExpectedText);
  }

  // Verifies the series text for BMW Saloon
  should_Verify_BMWSaloonSeries_Kr() {
    const ExpectedText = [
      "3 시리즈 라인",
      "5 시리즈 라인",
      "6시리즈",
      "7 시리즈 라인",
      "8 시리즈 라인",
    ];
    const rescueInfo = new RescueInfo();
    rescueInfo.should_Check_SeriesName(ExpectedText);
  }

  // Verifies the series text for BMW Sav
  should_Verify_BMWSavSeries() {
    const ExpectedText = ["iX", "X1", "X2", "X3", "X4", "X5", "X6", "X7", "XM"];
    const rescueInfo = new RescueInfo();
    rescueInfo.should_Check_SeriesName(ExpectedText);
  }
  // Verifies the series text for BMW Touring
  should_Verify_BMWTouringSeries() {
    const ExpectedText = ["3 Series", "5 Series"];
    const rescueInfo = new RescueInfo();
    rescueInfo.should_Check_SeriesName(ExpectedText);
  }

  // Verifies the series text for BMW Touring in Korea context
  should_Verify_BMWTouringSeries_kr() {
    const ExpectedText = ["3 시리즈 라인","5 시리즈 라인"];
    const rescueInfo = new RescueInfo();
    rescueInfo.should_Check_SeriesName(ExpectedText);
  }
  // Initiates download of PDF files related to Rescue Info
  should_Download_All_PDFFiles() {
    const rescueInfo = new RescueInfo();
    rescueInfo.should_Download_All_PDFs();
  }
  // Downloads large PDF files related to Rescue Info
  should_Download_Larger_PDF_Files() {
    const rescueInfo = new RescueInfo();
    rescueInfo.should_Download_Larger_File_PDFs();
  }

  // Checks the downloaded PDF file names for Compact Van and deletes the downloaded files
  should_Check_FileName_And_DeleteFiles_Of_CompactVan() {
    const expectedFileNames = [
      "VUL-REK-P-F45_PHEV_en-GB.pdf",
      "en_2er-Reihe-F45.pdf",
      "VUL-REK-P-U06_PHEV_en-GB.pdf",
      "BMW_2 Series_Active Tourer_Van_2022_5d_GD_en-GB.pdf",
      "en_2er-Reihe-F46.pdf",
      "VUL-REK-P-3_en-GB.pdf",
      "en_I01.pdf",
    ];
    const rescueInfo = new RescueInfo();
    for (let i = 0; i < expectedFileNames.length; i++) {
      if (expectedFileNames.includes(expectedFileNames[i])) {
        rescueInfo.should_Check_FileName(expectedFileNames[i]);
        console.log(`File name matches: ${expectedFileNames[i]}`);
      } else {
        console.log(`File name does not match: ${expectedFileNames[i]}`);
      }
    }
    cy.task("deleteFolder", `cypress\\downloads`);
  }

  // Checks the downloaded PDF file names for Compact Van and deletes the downloaded files for Korean Context
  should_Check_FileName_And_DeleteFiles_Of_CompactVan_Kr() {
    const expectedFileNames = [
      "BMW_2 Series_Active Tourer_Van_2022_5d_GD_ko.pdf",
      "ko_2er-Reihe-F45.pdf",
      "ko_2er-Reihe-F46.pdf",
      "ko_I01.pdf",
      "VUL-REK-P-3_ko.pdf",
      "VUL-REK-P-F45_PHEV_ko.pdf",
      "VUL-REK-P-U06_PHEV_ko.pdf",
    ];
    const rescueInfo = new RescueInfo();
    for (let i = 0; i < expectedFileNames.length; i++) {
      if (expectedFileNames.includes(expectedFileNames[i])) {
        rescueInfo.should_Check_FileName(expectedFileNames[i]);
        console.log(`File name matches: ${expectedFileNames[i]}`);
      } else {
        console.log(`File name does not match: ${expectedFileNames[i]}`);
      }
    }
    cy.task("deleteFolder", `cypress\\downloads`);
  }

  should_Check_FileName_And_DeleteFiles_Of_Convertible() {
    const expectedFileNames = [
      "BMW G14 8er_en-GB.pdf",
      "en_1er-Reihe-E88.pdf",
      "en_2er-Reihe-F23.pdf",
      "en_3er-Reihe-E36-Cabrio.pdf",
      "en_3er-Reihe-E46-Cabrio.pdf",
      "en_3er-Reihe-E93.pdf",
      "en_4er-Reihe-F33.pdf",
      "en_4er-Reihe-F83.pdf",
      "en_6er-Reihe-E64.pdf",
      "en_6er-Reihe-F12.pdf",
      "en_Z3-Roadster-E36-7.pdf",
      "en_Z4-BMW-G29.pdf",
      "en_Z4-Roadster-E85.pdf",
      "en_Z4-Roadster-E89.pdf",
      "en_Z8-Roadster-E52.pdf",
      "VUL-REK-P-4ER_G23_NE_en-GB.pdf",
      "VUL-REK-P-BMW_M4_G83_en-GB.pdf",
    ];
    const rescueInfo = new RescueInfo();
    for (let i = 0; i < expectedFileNames.length; i++) {
      if (expectedFileNames.includes(expectedFileNames[i])) {
        rescueInfo.should_Check_FileName(expectedFileNames[i]);
        console.log(`File name matches: ${expectedFileNames[i]}`);
      } else {
        console.log(`File name does not match: ${expectedFileNames[i]}`);
      }
    }
    cy.task("deleteFolder", `cypress\\downloads`);
  }
  //For Korean Context
  should_Check_FileName_And_DeleteFiles_Of_Convertible_Kr() {
    const expectedFileNames = [
      "BMW G14 8er_ko.pdf",
      "BMW-Z4-G29_ko.pdf",
      "ko_1er-Reihe-E88.pdf",
      "ko_2er-Reihe-F23.pdf",
      "ko_3er-Reihe-E36-Cabrio.pdf",
      "ko_3er-Reihe-E46-Cabrio.pdf",
      "ko_3er-Reihe-E93.pdf",
      "ko_4er-Reihe-F33.pdf",
      "ko_4er-Reihe-F83.pdf",
      "ko_6er-Reihe-E64.pdf",
      "ko_6er-Reihe-F12.pdf",
      "ko_Z3-Roadster-E36-7.pdf",
      "ko_Z4-Roadster-E85.pdf",
      "ko_Z4-Roadster-E89.pdf",
      "ko_Z8-Roadster-E52.pdf",
      "VUL-REK-P-4ER_G23_NE_ko.pdf",
      "VUL-REK-P-BMW_M4_G83_ko.pdf",
    ];
    const rescueInfo = new RescueInfo();
    for (let i = 0; i < expectedFileNames.length; i++) {
      if (expectedFileNames.includes(expectedFileNames[i])) {
        rescueInfo.should_Check_FileName(expectedFileNames[i]);
        console.log(`File name matches: ${expectedFileNames[i]}`);
      } else {
        console.log(`File name does not match: ${expectedFileNames[i]}`);
      }
    }
    cy.task("deleteFolder", `cypress\\downloads`);
  }

  // Checks the downloaded PDF file names for Coupe/compact and deletes the downloaded files
  should_Check_FileName_And_DeleteFiles_Of_CoupeorCompact() {
    const expectedFileNames = [
      "1er F40_en-GB.pdf",
      "2er F44_en-GB.pdf",
      "BMW G15 8er_en-GB.pdf",
      "en_1er-Reihe-Active-E-E82.pdf",
      "en_1er-Reihe-E81.pdf",
      "en_1er-Reihe-E82.pdf",
      "en_1er-Reihe-E87.pdf",
      "en_1er-Reihe-F20.pdf",
      "en_1er-Reihe-F21.pdf",
      "en_2er-Reihe-F22.pdf",
      "en_2er-Reihe-F87.pdf",
      "en_3er-Reihe-E36-Compact.pdf",
      "en_3er-Reihe-E36-Coupe.pdf",
      "en_3er-Reihe-E46-Coupe.pdf",
      "en_3er-Reihe-E92.pdf",
      "en_4er-Reihe-F32.pdf",
      "en_4er-Reihe-F36.pdf",
      "en_4er-Reihe-F82.pdf",
      "en_6er-Reihe-E63.pdf",
      "en_6er-Reihe-F06.pdf",
      "en_6er-Reihe-F13.pdf",
      "en_8er-Reihe-E31.pdf",
      "en_Coupe_3er_E465.pdf",
      "en_I12.pdf",
      "en_Z3-Coupe-E36-7.pdf",
      "en_Z4-Coupe-E86.pdf",
      "VUL-REK-P-2ER_G42_en-GB.pdf",
      "VUL-REK-P-4ER_G22_NE_en-US.pdf",
      "VUL-REK-P-4ER_G26_en-GB.pdf",
      "VUL-REK-P-4ER_G82_NE_en-GB.pdf",
      "VUL-REK-P-BMW_G26BEV_en-GB.pdf",
      "VUL-REK-P-BMW_I12_V2_en-GB.pdf",
      "VUL-REK-P-BMW_I15_en-GB.pdf",
    ];
    const rescueInfo = new RescueInfo();
    for (let i = 0; i < expectedFileNames.length; i++) {
      if (expectedFileNames.includes(expectedFileNames[i])) {
        rescueInfo.should_Check_FileName(expectedFileNames[i]);
        console.log(`File name matches: ${expectedFileNames[i]}`);
      } else {
        console.log(`File name does not match: ${expectedFileNames[i]}`);
      }
    }
    cy.task("deleteFolder", `cypress\\downloads`);
  }

  // Checks the downloaded PDF file names for Coupe/compact and deletes the downloaded files for Korean Context
  should_Check_FileName_And_DeleteFiles_Of_CoupeorCompact_Kr() {
    const expectedFileNames = [
      "1er F40_ko.pdf",
      "ko_1er-Reihe-F21.pdf",
      "ko_1er-Reihe-F20.pdf",
      "ko_1er-Reihe-E87.pdf",
      "ko_1er-Reihe-E82.pdf",
      "ko_1er-Reihe-Active-E-E82.pdf",
      "ko_1er-Reihe-E81.pdf",
      "VUL-REK-P-2ER_G42_ko.pdf",
      "2er F44_ko.pdf",
      "ko_2er-Reihe-F22.pdf",
      "ko_2er-Reihe-F87.pdf",
      "ko_3er-Reihe-E36-Coupe.pdf",
      "ko_3er-Reihe-E36-Compact.pdf",
      "ko_Coupe_3er_E465.pdf",
      "ko_3er-Reihe-E46-Coupe.pdf",
      "ko_3er-Reihe-E92.pdf",
      "ko_4er-Reihe-F32.pdf",
      "ko_4er-Reihe-F82.pdf",
      "VUL-REK-P-4ER_G26_ko.pdf",
      "ko_4er-Reihe-F36.pdf",
      "VUL-REK-P-4ER_G82_NE_ko.pdf",
      "VUL-REK-P-BMW_G26BEV_ko.pdf",
      "VUL-REK-P-4ER_G22_NE_ko.pdf",
      "ko_6er-Reihe-F13.pdf",
      "ko_6er-Reihe-E63.pdf",
      "ko_6er-Reihe-F06.pdf",
      "ko_8er-Reihe-E31.pdf",
      "BMW G15 8er_ko.pdf",
      "ko_I12.pdf",
      "VUL-REK-P-BMW_I12_V2_ko.pdf",
      "VUL-REK-P-BMW_I15_ko.pdf",
      "ko_Z3-Coupe-E36-7.pdf",
      "ko_Z4-Coupe-E86.pdf",
    ];
    const rescueInfo = new RescueInfo();
    for (let i = 0; i < expectedFileNames.length; i++) {
      if (expectedFileNames.includes(expectedFileNames[i])) {
        rescueInfo.should_Check_FileName(expectedFileNames[i]);
        console.log(`File name matches: ${expectedFileNames[i]}`);
      } else {
        console.log(`File name does not match: ${expectedFileNames[i]}`);
      }
    }
    cy.task("deleteFolder", `cypress\\downloads`);
  }

  // Checks the downloaded PDF file names for Saloon and deletes the downloaded files
  should_Check_FileName_And_DeleteFiles_Of_Saloon() {
    const expectedFileNameOfLF = [
      "VUL-REK-P-G60_BEV_en-GB.pdf",
      "en_3er-Reihe-F34.pdf",
      "BMW 8 G16_en-GB.pdf",
      "BMW 7er F01_en-US.pdf",
      "BMW 6er G32_en-US.pdf",
    ];
    const rescueInfo = new RescueInfo();
    for (let i = 0; i < expectedFileNameOfLF.length; i++) {
      if (expectedFileNameOfLF.includes(expectedFileNameOfLF[i])) {
        rescueInfo.should_Check_FileName_For_LargerFiles(
          expectedFileNameOfLF[i]
        );
        console.log(`File name matches: ${expectedFileNameOfLF[i]}`);
      } else {
        console.log(`File name does not match: ${expectedFileNameOfLF[i]}`);
      }
    }
    cy.task("deleteFolder", `cypress\\downloads`);
  }

  // Checks the downloaded PDF file names for Saloon and deletes the downloaded files for Korean Context
  should_Check_FileName_And_DeleteFiles_Of_Saloon() {
    const expectedFileNameOfLF = [
      "VUL-REK-P-BMW_G80_ko.pdf",
      "BMW 5er F10_ko.pdf",
      "BMW 6er G32_ko.pdf",
      "BMW 7er F02_ko.pdf",
      "BMW 8 G16_ko.pdf",
    ];
    const rescueInfo = new RescueInfo();
    for (let i = 0; i < expectedFileNameOfLF.length; i++) {
      if (expectedFileNameOfLF.includes(expectedFileNameOfLF[i])) {
        rescueInfo.should_Check_FileName_For_LargerFiles(
          expectedFileNameOfLF[i]
        );
        console.log(`File name matches: ${expectedFileNameOfLF[i]}`);
      } else {
        console.log(`File name does not match: ${expectedFileNameOfLF[i]}`);
      }
    }
    cy.task("deleteFolder", `cypress\\downloads`);
  }

  // Checks the downloaded PDF file names for Sav and deletes the downloaded files
  should_Check_FileName_And_DeleteFiles_Of_Sav() {
    const expectedFileNameOfLF = [
      "VUL-REK-P-U10_BEV_en-GB.pdf",
      "VUL-REK-P-G09_PHEV_en-GB.pdf",
      "VUL-REK-P-G08BEVE_N_en-GB.pdf",
      "VUL-REK-P-F15_PHEV_en-GB.pdf",
      "VUL-REK-P-BMW_I20_en-GB.pdf",
      "en_X7-G07.pdf",
      "en_X6-F16.pdf",
      "en_X4-F26.pdf",
      "en_X1-E84.pdf",
    ];
    const rescueInfo = new RescueInfo();
    for (let i = 0; i < expectedFileNameOfLF.length; i++) {
      if (expectedFileNameOfLF.includes(expectedFileNameOfLF[i])) {
        rescueInfo.should_Check_FileName_For_LargerFiles(
          expectedFileNameOfLF[i]
        );
        console.log(`File name matches: ${expectedFileNameOfLF[i]}`);
      } else {
        console.log(`File name does not match: ${expectedFileNameOfLF[i]}`);
      }
    }
    cy.task("deleteFolder", `cypress\\downloads`);
  }

  // Checks the downloaded PDF file names for Sav and deletes the downloaded files for Korean Context
  should_Check_FileName_And_DeleteFiles_Of_Sav_Kr() {
    const expectedFileNameOfLF = [
      "VUL-REK-P-BMW_I20_ko.pdf",
      "VUL-REK-P-F48PHEV_N_ko.pdf",
      "VUL-REK-P-U10_BEV_ko.pdf",
      "ko_X3-G01.pdf",
      "BMW X4 G02_ko.pdf",
      "RDB_G05-FCEV_Target-Korean.pdf",
      "X6 G06_ko.pdf",
      "ko_X7-G07.pdf",
      "VUL-REK-P-G09_PHEV_ko.pdf",
    ];
    const rescueInfo = new RescueInfo();
    for (let i = 0; i < expectedFileNameOfLF.length; i++) {
      if (expectedFileNameOfLF.includes(expectedFileNameOfLF[i])) {
        rescueInfo.should_Check_FileName_For_LargerFiles(
          expectedFileNameOfLF[i]
        );
        console.log(`File name matches: ${expectedFileNameOfLF[i]}`);
      } else {
        console.log(`File name does not match: ${expectedFileNameOfLF[i]}`);
      }
    }
    cy.task("deleteFolder", `cypress\\downloads`);
  }

  // Checks the downloaded PDF file names for Touring and deletes the downloaded files
  should_Check_FileName_And_DeleteFiles_Of_Touring() {
    const expectedFileNames = [
      "en_3er-Reihe-E46-Touring.pdf",
      "G21_en-GB.pdf",
      "en_3er-Reihe-E36-Touring.pdf",
      "VUL-REK-P-G21PHEV_N_en-GB.pdf",
      "en_3er-Reihe-E91.pdf",
      "en_3er-Reihe-F31.pdf",
      "VUL-REK-P-G31PHEV_N_en-GB.pdf",
      "VUL-REK-P-G61_BEV_en-GB.pdf",
      "en_5er-Reihe-E39-Touring.pdf",
      "BMW 5er G31_en-US.pdf",
      "en_5er-Reihe-E61.pdf",
      "VUL-REK-P-G61_ICE_en-GB.pdf",
      "en_5er-Reihe-E34-Touring.pdf",
      "en_5er-Reihe-F11.pdf",
    ];
    const rescueInfo = new RescueInfo();
    for (let i = 0; i < expectedFileNames.length; i++) {
      if (expectedFileNames.includes(expectedFileNames[i])) {
        rescueInfo.should_Check_FileName(expectedFileNames[i]);
        console.log(`File name matches: ${expectedFileNames[i]}`);
      } else {
        console.log(`File name does not match: ${expectedFileNames[i]}`);
      }
    }
    cy.task("deleteFolder", `cypress\\downloads`);
  }

  // Checks the downloaded PDF file names for Touring and deletes the downloaded files
  should_Check_FileName_And_DeleteFiles_Of_Touring_Kr() {
    const expectedFileNames = [
      "ko_3er-Reihe-E36-Touring.pdf",
      "ko_3er-Reihe-F31.pdf",
      "ko_3er-Reihe-E91.pdf",
      "VUL-REK-P-G21PHEV_N_ko.pdf",
      "ko_3er-Reihe-E46-Touring.pdf",
      "G21_ko.pdf",
      "ko_5er-Reihe-E39-Touring.pdf",
      "VUL-REK-P-G61_BEV_ko.pdf",
      "ko_5er-Reihe-E61.pdf",
      "BMW 5er G31_ko.pdf",
      "ko_5er-Reihe-E34-Touring.pdf",
      "ko_5er-Reihe-F11.pdf",
      "VUL-REK-P-G31PHEV_N_ko.pdf",
    ];
    const rescueInfo = new RescueInfo();
    for (let i = 0; i < expectedFileNames.length; i++) {
      if (expectedFileNames.includes(expectedFileNames[i])) {
        rescueInfo.should_Check_FileName(expectedFileNames[i]);
        console.log(`File name matches: ${expectedFileNames[i]}`);
      } else {
        console.log(`File name does not match: ${expectedFileNames[i]}`);
      }
    }
    cy.task("deleteFolder", `cypress\\downloads`);
  }
}

export default txt_RescueinformationOfBMW;
