class userManagement {
  elements = {
    /*-------- XPATHS/ELEMENT LOCATORS ------------ */
    tab_myAos: "//ds-list-item[@aria-label='My AOS']",
    tab_myOrg: "//div[contains(text(),' My organisation ')]",
    txt_userManagement:
      "//span//div[contains(text(),'User management') or contains(text(),'사용자 관리') ]",
    table: "//*[@class='ui-datatable-tablewrapper']/table",
    input_lastName: "//input[@id='lastName']",
    input_firstName: "//input[@id='firstName']",
    input_PhoneNumber: '//input[@data-qa="user-form-phone-number"]',
    btn_languageDropdown: '//button[@id="language-open-button"]',
    btn_TimezoneDropdown: '//button[@id="timezone-open-button"]',
    btn_Store:
      "(//span[contains(text(),'저장')])[2] | (//span[contains(text(),'Store')])[2]",
    table_permission: '//div[@role="treegrid" and @aria-colcount="2"]',
    myAOSIFrame: "#app aos-my-aos iframe",
    addEmail: '//*[@id="email"]',
    txt_newUserHeading: "//span[contains(text(),'사용자 만들기')]",
    userTableData: "//*[@id='users-of-organization-form:user-table_data']",
    btn_newuser: "//span[normalize-space()='New user']",
    msg_lastName_error: '//label[@for="lastName"]//ancestor::ds-form-field//descendant::ds-error',
    txt_email: "//*[@col-id='EMAIL']",
    css_email: '.ds-button--destructive ',
    btn_add: "//button[@icon = 'add']",
    link_userEmail: "//*[@id='users']//span/a",
    txt_attention: "//span[contains(text(),'Attention')]",
    txt_activeTickets: "//ds-box-content/div[2]/div[1]",
    txt_confirmDelete: "//ds-box-content/div[2]/span",
    link_firstColumnUserEmail: "//*[@id='users-of-organization-form:user-table_data']/tr/td[1]/a",
    msg_firstName_error: '//label[@for="firstName"]//ancestor::ds-form-field//descendant::ds-error',
    msg_phoneNumberFormat_error: "//span[normalize-space()='Invalid input: The phone number is invalid. Please specify the phone number in international format.']",
    msg_email_error: '//label[@for="email"]//ancestor::ds-form-field//descendant::ds-error',
    btn_removePermission: '(//div[@col-id="PERMISSION"]/ancestor::div[1])[2]',
    btn_okConfirmation: "//*[@id='dialog-ok-button-form:ok-button']",
    ele_secondChild: 'td:nth-child(2) > div',
    ele_firstChild: "td:nth-child(1)",
    chkbox_2ndChild: 'div:nth-child(2)',
    chkbox_2ndCheckboxChild: "td:nth-child(2) > div > div:nth-child(2)",
    btn_store: "//aos-user-details//ds-button[@role='button']"

  };

  /*-------- METHODS ------------ */

  newDate = {
    lastName: "AOS",
    firstName: "Tester",
    phoneNum: "+447911123456",
    languageDropdown: "English",
  };

  //Clicks on User Management tab
  should_Click_UserMangement() {
    cy.xpath(this.elements.tab_myAos).click({ force: true });
    cy.wait(5000);
    cy.xpath(this.elements.tab_myOrg).click({ force: true });
    cy.wait(15000);
    cy.xpath(this.elements.txt_userManagement).click();
    cy.wait(16000);
  }

  should_Check_UsersTable_Data() {
    cy.xpath(this.elements.txt_email).should("be.visible");
    cy.get(this.elements.css_email).should("be.visible");
  }

  should_Click_AddUser_Button() {
    cy.xpath(this.elements.btn_add).should("be.visible").should("be.enabled");
    cy.xpath(this.elements.btn_add).click();
  }

  // Selects the user by email ID from a list
  should_Select_Usermail(emailId) {
    cy.xpath(this.elements.link_userEmail).each(($el) => {
      // Check if the element text matches the provided emailId
      if ($el.text().trim() === emailId) {
        cy.wrap($el).click();
        cy.wait(4000);
      }
    });
  }

  // Selects the delete icon for a specific user email and verifies the confirmation dialog
  should_Select_Deleteicon_For_SelectedUserMail(emailId) {
    cy.xpath(
      `//*[@id='users']//span//a[contains(text(),'${emailId}')]/ancestor::div[contains(@class,'row')]/div[contains(@class,'cell')][5]`
    ).click();
    cy.wait(10000);
    cy.xpath(this.elements.txt_attention).should("be.visible");
    cy.xpath(this.elements.txt_activeTickets).should("have.value",
      "The user has the following active tickets:"
    );
    cy.xpath(this.elements.txt_confirmDelete).should("have.value",
      "Do you still want to proceed with the deletion ?"
    );
  }

  // Selects a user by email ID inside the iFrame
  should_SelectUser(emailId) {
    cy.frameLoaded(this.elements.myAOSIFrame);
    cy.wait(5000);

    cy.enter(this.elements.myAOSIFrame).then((p) => {
      let rowNumber = 0;
      cy.wait(4000);
      // Get the number of rows in the user table
      p().xpath(this.elements.userTableData).find("tr").its("length").then((numberOfRows) => {
          cy.log(`Number of rows: ${numberOfRows}`);
          let i;
          // Iterate through table rows to find the matching email
          for (i = 1; i <= numberOfRows; i++) {
            p().xpath(this.elements.link_firstColumnUserEmail).then((name) => {
              let user = name.text();
              if (user.includes(emailId)) {
                let num = i - 1;
                p().xpath(
                  `//*[@id="users-of-organization-form:user-table_data"]/tr[${num}]/td[1]/a`)
                    .click({ force: true });
              }
            });
          }
        });
      cy.log(rowNumber);
      cy.wait(8000);
    });
  }

  should_Click_NewUser() {
    cy.xpath(this.elements.btn_newuser).click();
  }

  should_AddNewUser(email) {
    cy.xpath(this.elements.addEmail).type(email);
    cy.wait(4000);
    cy.xpath(this.elements.input_lastName).type(this.newDate.lastName);
    cy.wait(4000);
    cy.xpath(this.elements.input_firstName).type(this.newDate.firstName);
    cy.wait(10000);
    cy.xpath(this.elements.input_PhoneNumber).type(this.newDate.phoneNum);
    cy.wait(5000);
    cy.xpath(this.elements.btn_Store).click({ force: true });
    cy.wait(10000);
    //cy.xpath(this.elements.txt_newUserHeading).should("not.be.visible");
  }

  should_Check_CreatedUser(email) {
    cy.xpath(this.elements.link_userEmail).contains(email).should("be.visible");
  }

  should_Update_UserData_Kr() {
    cy.wait(4000);
    cy.xpath(this.elements.input_lastName).clear().type(this.newDate.lastName);
    cy.wait(4000);
    cy.xpath(this.elements.input_firstName).clear().type(this.newDate.firstName);
    cy.wait(4000);
    cy.xpath(this.elements.input_PhoneNumber).clear().type(this.newDate.phoneNum);
    cy.wait(5000);
    cy.xpath(this.elements.btn_Store).click({ force: true });
    cy.wait(10000);
    //cy.xpath(this.elements.txt_newUserHeading).should("not.be.visible");
  }

  // Create user form validations
  should_Fill_CreateUser_Form(email) {
    cy.xpath(this.elements.addEmail).type(email);
    cy.wait(4000);
    cy.xpath(this.elements.input_lastName).clear().type(this.newDate.lastName);
    cy.wait(4000);
    cy.xpath(this.elements.input_firstName).clear().type(this.newDate.firstName);
    cy.wait(10000);
    cy.xpath(this.elements.input_PhoneNumber).clear();
    cy.wait(10000);
    cy.xpath(this.elements.input_PhoneNumber).type(this.newDate.phoneNum);
    cy.wait(5000);
  }

  should_ClearUser_CreationForm() {
    cy.xpath(this.elements.input_lastName).clear();
    cy.wait(4000);
    cy.xpath(this.elements.msg_lastName_error).should("be.visible");
    cy.wait(4000);
    cy.xpath(this.elements.input_firstName).clear();
    cy.xpath(this.elements.msg_firstName_error).should("be.visible");
    cy.wait(10000);
    cy.xpath(this.elements.input_PhoneNumber).clear().type("123456");
    cy.wait(4000);
    cy.xpath(this.elements.msg_phoneNumberFormat_error).should("be.visible");
    cy.xpath(this.elements.addEmail).type("123456").clear();
    cy.xpath(this.elements.msg_email_error).should("be.visible");
  }

  should_Check_CreatedUser(email) {
    cy.xpath(this.elements.link_userEmail).contains(email).should("be.visible");
  }

  should_Update_UserData() {
    cy.xpath(this.elements.input_lastName).clear().type(this.newDate.lastName);
    cy.wait(4000);
  }
  //Removes the permission for user
  should_RemovePermission() {
    cy.wait(5000);
    cy.xpath(this.elements.btn_removePermission).invoke("attr", "row-index").then((rowIndex) => {
      // Use same row-index to find its checkbox
      cy.wait(2000);
      cy.xpath(
        `//div[@class='ag-pinned-right-cols-container']/div[@row-index="${rowIndex}"]/child::div/aos-permission-checkbox-renderer/div/input`
      ).click({ force: true });
    });

    cy.xpath(this.elements.btn_Store).click();
    cy.wait(4000);
    //Navigate back
    cy.go("back");
  }
  //Grant permission for a user
  should_GrantPermission(emailId) {
    cy.wait(5000);
    cy.xpath(this.elements.txt_userManagement).click();
    cy.wait(8000);
    // Select the user by email
    this.should_Select_Usermail(emailId);
    cy.wait(5000);
    // Find the first checkbox in the permission table and ensure it is unchecked before clicking
    cy.xpath(this.elements.table_permission).find("tr").find(this.elements.ele_secondChild)
      .eq(0).should("have.class", "ui-chkbox ui-widget").find("div")
      .should("have.attr", "aria-checked", "false").click();
    // Click the store button to save changes
    cy.xpath(this.elements.btn_Store).click();
    cy.wait(2000);
    // Click OK on confirmation dialog
    cy.xpath(this.elements.btn_okConfirmation).click();
  }

  // Removes a permission for a user from the permission table
  should_Remove_Permissions(permissionName) {
    const targetPermission = permissionName;
    let index = 0;
    let matchedindex = 0;
    // Iterate through permission table rows to find the target permission
    cy.xpath(this.elements.table_permission).find("tr")
      .each((row) => {
        let permission = row.find(this.elements.ele_firstChild).text();
        cy.log(`permission ${(index = index + 1)}:  ${permission}`);
        if (permission.includes(targetPermission)) {
          cy.log("permission got matched");
          matchedindex = index;
          cy.log(matchedindex);
        }

        let permissionIndex = 0;
        // Iterate again through the table to uncheck the correct checkbox
        cy.xpath(this.elements.table_permission).find("tr").each(($checkbox) => {
          const checkboxDiv = $checkbox.find(this.elements.ele_secondChild);
          cy.log(`CheckboxNumber ${(permissionIndex = permissionIndex + 1)}`);
          if (permissionIndex == matchedindex) {
            cy.log("Index got matched");
            if ($checkbox.hasClass("ui-state-active")) {
              checkboxDiv.find(this.elements.chkbox_2ndChild).click();
              cy.log("Checkbox is now un-checked.");
            } else {
              cy.log("Checkbox is already un-checked.");
            }
              cy.wait(5000);
            }
          });
        cy.xpath(this.elements.btn_store).click();
      });
  }

  // Adds a permission for a user
  should_Add_Permissions(permissionName) {
    cy.frameLoaded(this.elements.myAOSIFrame);
    cy.wait(5000);
    cy.enter(this.elements.myAOSIFrame).then((p) => {
      const targetPermission = permissionName;
      let index = 0;
      let matchedindex = 0;
      // Iterate through table rows to find the row with the target permission
      p().xpath(this.elements.table_permission).find("tr").each((row) => {
        let permission = row.find(this.elements.ele_firstChild).text();
        cy.log(`permission ${(index = index + 1)}:  ${permission}`);
        if (permission.includes(targetPermission)) {
          cy.log("permission got matched");
          matchedindex = index;
          cy.log(matchedindex);
        }
      });

      let permissionIndex = 0;
      // Iterate again to check/uncheck the corresponding checkbox
      p().xpath(this.elements.table_permission).find("tr").each(($checkbox) => {
        const checkboxDiv = $checkbox.find(this.elements.ele_secondChild);
        cy.log(`CheckboxNumber ${(permissionIndex = permissionIndex + 1)}`);
        if (permissionIndex == matchedindex) {
          cy.log("Index got matched");
          if ($checkbox.hasClass("ui-state-active")) {
            checkboxDiv.find(this.elements.chkbox_2ndChild).click();
            cy.log("Checkbox is already checked.");
          } else {
            $checkbox.find(this.elements.chkbox_2ndCheckboxChild).click();
            cy.log("Checkbox is now checked.");
          }
          cy.wait(5000);
        }
      });
      p().xpath(this.elements.btn_store).click();
    });
  }
}
export default userManagement;