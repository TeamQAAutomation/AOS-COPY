class History {
  /*-------- XPATHS/ELEMENT LOCATORS ------------ */
  elements = {
    btn_nextArrow: "//*[contains(@class, 'next')]",
    tab_myAOS:
      "//div[@class='ds-list-item__content'][normalize-space()='My AOS']",
    tab_myAOSCss: "[aria-label='My AOS']",
    tab_History: "//div[contains(text(),' History ')]",
    tbl_HistoryTable:
      "//p-table[@class='p-element'] | //*[@class='content full-box ds-box ds-box--shadow-base ds-box--surface-default']",
    txt_text: "//td//span",
    txt_date: "(//td//span)[1]",
    tbl_table: "//p-table[@class='p-element']",
    aosIFrame: "#app aos-iframe-page iframe",
    txt_Time: "//*[normalize-space(text())='Time']",
    txt_Action: "//*[normalize-space(text())='Action']",
    txt_User: "//*[normalize-space(text())='User']",
    txt_Transaction: "//*[normalize-space(text())='Transaction']",
    txt_noEntriesinTable:
      "//tbody[@class='p-element p-datatable-tbody']//span[text()='No entries found']",
    txt_tableRow: "table tbody tr",
    txt_tableData: "//div[@role='gridcell']",
    txt_tableFirstElement:
      "#pn_id_1-table > thead > tr > th.p-element.row-timestamp.p-sortable-column:nth-child(1)",
    body: "body",
    btn_PageNext:
      "div > p-paginator > div > button.p-ripple.p-element.p-paginator-next.p-paginator-element.p-link",
    btn_PageLast:
      "p-paginator > div > button.p-ripple.p-element.p-paginator-last.p-paginator-element.p-link.ng-star-inserted",
    txt_targetDate:
      "//div[@role='row' and @row-index='0']//div[@role='gridcell' and @col-id='TIMESTAMP']",
    txt_tableElementRow: "//div[@role='row' and @row-index='0']",
    txt_secondColumnData: "td:nth-child(2)",
    btn_sort:
      "#user-overview:all-users-table:j_idt26 > span.ui-sortable-column-icon.ui-icon.ui-icon-carat-2-n-s",
    btn_nextPage:
      "#user-overview:all-users-table_paginator_bottom > a.ui-paginator-next.ui-state-default.ui-corner-all",
    btn_lastPage:
      "#user-overview:all-users-table_paginator_bottom > a.ui-paginator-last.ui-state-default.ui-corner-all",
    btn_firstPage:
      "#user-overview:all-users-table_paginator_bottom > a.ui-paginator-first.ui-state-default.ui-corner-all",
    normalIframe: "iframe",
    txt_tableFirstChild: "#pn_id_1-table > tbody > tr > td:nth-child(1)",
  };

  /*-------- METHODS ------------ */

  // Verify that table sorting by date works correctly in ascending and descending order
  should_Verify_Sorting() {
    cy.frameLoaded(this.elements.aosIFrame);
    cy.enter(this.elements.aosIFrame).then((p) => {
      p()
        .find(this.elements.txt_tableRow)
        .then(($rows) => {
          // Extract dates from the first column of each row
          const dates = $rows
            .map((index, row) => {
              return Cypress.$(row)
                .find(this.elements.txt_tableData)
                .first()
                .text();
            })
            .get();

          // Convert the dates to JavaScript Date objects and sort them
          const sortedDates = [...dates].sort((a, b) => {
            return new Date(a) - new Date(b);
          });

          p()
            .find(this.elements.txt_tableFirstElement)
            .wait(6000)
            .click({ force: true });
          cy.wait(5000);

          p()
            .find(this.elements.txt_tableRow)
            .then(($rows) => {
              // Extract dates from the first column of each row
              const dates_after_sorting = $rows
                .map((index, row) => {
                  return Cypress.$(row)
                    .find(this.elements.txt_tableData)
                    .first()
                    .text();
                })
                .get();

              p().wrap(dates_after_sorting).should("deep.equal", sortedDates);
            });

          p()
            .find(this.elements.txt_tableFirstElement)
            .wait(6000)
            .click({ force: true });

          p()
            .find(this.elements.txt_tableRow)
            .then(($rows) => {
              // Extract dates from the first column of each row
              const dates2 = $rows
                .map((index, row) => {
                  return Cypress.$(row)
                    .find(this.elements.txt_tableData)
                    .first()
                    .text();
                })
                .get();

              p().wrap(dates2).should("deep.equal", dates);
            });
        });
    });
  }

  // Verify table sorting by date in both ascending and descending order (with reversed initial order)
  should_Verify_Sorting2() {
    cy.frameLoaded(this.elements.aosIFrame);
    cy.enter(this.elements.aosIFrame).then((p) => {
      p()
        .find(this.elements.txt_tableRow)
        .then(($rows) => {
          // Extract dates from the first column of each row
          const dates = $rows
            .map((index, row) => {
              return Cypress.$(row)
                .find(this.elements.txt_tableData)
                .first()
                .text();
            })
            .get();

          dates.reverse();

          // Convert the dates to JavaScript Date objects and sort them
          const sortedDates = [...dates].sort((a, b) => {
            return new Date(a) - new Date(b);
          });

          p()
            .find(this.elements.txt_tableFirstElement)
            .wait(6000)
            .click({ force: true });
          cy.wait(5000);
          p()
            .find(this.elements.txt_tableRow)
            .then(($rows) => {
              // Extract dates from the first column of each row
              const dates_after_sorting = $rows
                .map((index, row) => {
                  return Cypress.$(row)
                    .find(this.elements.txt_tableData)
                    .first()
                    .text();
                })
                .get();

              p().wrap(dates_after_sorting).should("deep.equal", sortedDates);
            });

          p()
            .find(this.elements.txt_tableFirstElement)
            .wait(6000)
            .click({ force: true });
          p()
            .find(this.elements.txt_tableRow)
            .then(($rows) => {
              // Extract dates from the first column of each row
              const dates2 = $rows
                .map((index, row) => {
                  return Cypress.$(row)
                    .find(this.elements.txt_tableData)
                    .first()
                    .text();
                })
                .get();

              p().wrap(dates2).should("deep.equal", dates);
            });
        });
    });
  }

  should_Click_HistoryTab() {
    cy.get(this.elements.tab_myAOSCss)
      .should("be.visible")
      .click({ force: true });
    cy.wait(15000);
    cy.xpath(this.elements.tab_History)
      .should("be.visible")
      .click({ force: true });
    cy.wait(15000);
  }

  // This method will work for all environments
  // Verifies the History table visibility
  should_Check_HistoryTable() {
    cy.get(this.elements.body).then(($body) => {
      if ($body.find(this.elements.aosIFrame).length > 0) {
        cy.frameLoaded(this.elements.aosIFrame);
        cy.log("Iframe loaded");
        cy.enter(this.elements.aosIFrame).then((p) => {
          cy.wait(4000);
          p().xpath(this.elements.tbl_HistoryTable).should("be.visible");
        });
      } else {
        cy.wait(3000);
        cy.xpath(this.elements.tbl_HistoryTable).should("be.visible");
      }
    });
  }

  // This method will work for all environments
  // Verifying the History table column headers
  should_Check_HistoryTable_Coloumn_Headers() {
    cy.get(this.elements.body).then(($body) => {
      if ($body.find(this.elements.aosIFrame).length > 0) {
        cy.frameLoaded(this.elements.aosIFrame);
        cy.enter(this.elements.aosIFrame).then((p) => {
          p().xpath(this.elements.txt_Time).should("be.visible");
          p().xpath(this.elements.txt_Action).should("be.visible");
          p().xpath(this.elements.txt_User).should("be.visible");
          p().xpath(this.elements.txt_Transaction).should("be.visible");
        });
      } else {
        cy.xpath(this.elements.txt_Time).should("be.visible");
        cy.xpath(this.elements.txt_Action).should("be.visible");
        cy.xpath(this.elements.txt_User).should("be.visible");
        cy.xpath(this.elements.txt_Transaction).should("be.visible");
      }
    });
  }
  // Recursively navigate through all pages in the table using the paginator
  should_Verify_Paginator() {
    cy.frameLoaded(this.elements.aosIFrame);
    cy.enter(this.elements.aosIFrame).then((p) => {
      const paginatorNextBtn = this.elements.btn_PageNext;
      const paginatorLastBtn = this.elements.btn_PageLast;
      // Check if last page is reached
      p()
        .find(paginatorLastBtn)
        .scrollIntoView()
        .wait(1000)
        .invoke("attr", "disabled")
        .then((disabled) => {
          if (disabled === "disabled") {
            cy.log("Last page reached");
            p().find(paginatorNextBtn).should("be.disabled");
          } else {
            // If not last page, click Next and recursively call paginate
            p()
              .find(paginatorNextBtn)
              .should("be.enabled")
              .click()
              .then(() => {
                this.should_Verify_Paginator();
              });
          }
        });
    });
  }

  // Verify pagination
  should_Verify_Pagination() {
    const nextArrow = this.elements.btn_nextArrow;
    const iframeSelector = this.elements.aosIFrame;

    cy.get(this.elements.body).then(($body) => {
      const iframeExists = $body.find(iframeSelector).length > 0;

      if (iframeExists) {
        cy.log("Iframe detected — switching to iframe");
        cy.frameLoaded(iframeSelector);
        cy.iframe(iframeSelector)
          .xpath(nextArrow, { timeout: 10000 })
          .should("be.visible")
          .click();
      } else {
        cy.log("No iframe detected — clicking directly");
        cy.xpath(nextArrow, { timeout: 10000 }).scrollIntoView().should("be.visible").click();
      }
    });
  }

  // Capture table data across all pages, click the sorting button, and validate sorting functionality
  /*paginateandsorting(parameter) {
    cy.frameLoaded(this.elements.aosIFrame);
    cy.enter(this.elements.aosIFrame).then((getBody) => {
      let allDataBeforeSorting = [];
      let allDataAfterSorting = [];

      const rowsSelector = "table tbody tr";
      let dataSelector;
      let sortButtonSelector;

      // Set data selector and sort button based on parameter
      if (parameter === "invoice") {
        dataSelector = "td:nth-child(2)"; // Second column for invoice
        sortButtonSelector = "#pn_id_1-table > thead > tr > th:nth-child(2)";
      } else {
        dataSelector = "td:nth-child(1)"; // First column
        sortButtonSelector =
          "#pn_id_1-table > thead > tr > th.p-element.row-timestamp.p-sortable-column";
      }
      const paginatorNextBtn =
        "div > p-paginator > div > button.p-ripple.p-element.p-paginator-next.p-paginator-element.p-link";
      const paginatorLastBtn =
        "p-paginator > div > button.p-ripple.p-element.p-paginator-last.p-paginator-element.p-link.ng-star-inserted";
      const button =
        " button.p-ripple.p-element.p-paginator-first.p-paginator-element.p-link.ng-star-inserted > angledoublelefticon > svg";

      // Function to capture data from the current page
      const captureData = (dataArray) => {
        return cy
          .find(rowsSelector)
          .each(($row) => {
            cy.wrap($row)
              .find(dataSelector)
              .then(($cell) => {
                const cellText = $cell.text().trim(); // Get trimmed text
                dataArray.push(cellText);
                cy.log(cellText); // Add to the array
              });
          });
      };

      // Function to handle pagination and capture data from all pages
      const paginateAndCapture = (dataArray) => {
        return new Cypress.Promise((resolve) => {
          const paginate = () => {
           cy
              .find(paginatorLastBtn)
              .scrollIntoView()
              .wait(1000)
              .invoke("attr", "disabled")
              .then((disabled) => {
                if (disabled === "disabled") {
                  resolve(); // Resolve when pagination ends
                } else {
                 cy
                    .find(paginatorNextBtn)
                    .should("be.enabled")
                    .click()
                    .then(() => {
                      captureData(dataArray).then(() => {
                        paginate(); // Continue pagination
                      });
                    });
                }
              });
          };

          // Start by capturing data on the first page
          captureData(dataArray).then(() => {
            paginate();
          });
        });
      };

      // Step 1: Capture all data before sorting
      paginateAndCapture(allDataBeforeSorting).then(() => {
        cy.log("Data before sorting:", allDataBeforeSorting);
        console.log("Data before sorting:", allDataBeforeSorting);

        // If there's no data, skip sorting validation
        if (allDataBeforeSorting.length === 0) {
          cy.log(" No table data available skipping sorting validation.");
          return;
        }

        // Step 2: Click the sorting button and wait for UI updates
        getBody().find(sortButtonSelector).click({ force: true }).wait(2000);
        getBody().find(button).click({ force: true }).wait(2000);
      });
      // Function to capture data from the current page
      const captureDataaftersorting = (dataArray2) => {
        return cy
          .find(rowsSelector)
          .each(($row) => {
            cy.wrap($row)
              .find(dataSelector)
              .then(($cell) => {
                const cellText = $cell.text().trim(); // Get trimmed text
                dataArray2.push(cellText);
                cy.log(cellText); // Add to the array
              });
          });
      };
      const paginateAndCapture2 = (dataArray2) => {
        return new Cypress.Promise((resolve) => {
          const paginate2 = () => {
          cy
              .find(paginatorLastBtn)
              .scrollIntoView()
              .wait(1000)
              .invoke("attr", "disabled")
              .then((disabled) => {
                if (disabled === "disabled") {
                  resolve(); // Resolve when pagination ends
                } else {
                cy
                    .find(paginatorNextBtn)
                    .should("be.enabled")
                    .click()
                    .then(() => {
                      captureData(dataArray2).then(() => {
                        paginate2(); // Continue pagination
                      });
                    });
                }
              });
          };

          // Start by capturing data on the first page
          captureDataaftersorting(dataArray2).then(() => {
            paginate2();
          });
        });
      };
      paginateAndCapture2(allDataAfterSorting).then(() => {
        cy.log("Data after sorting:", allDataAfterSorting);
        console.log("Data after sorting:", allDataAfterSorting);
      });
      expect(allDataBeforeSorting.length).to.equal(allDataAfterSorting.length);
      cy.log("Row count validation passed!");

      const sortedData = [...allDataBeforeSorting].sort();
      expect(allDataAfterSorting).to.deep.equal(sortedData);
      if (JSON.stringify(allDataAfterSorting) === JSON.stringify(sortedData)) {
        cy.log("Sorting validation passed!");
      } else {
        cy.log("Sorting validation failed!");
      }
    });
  }*/

  // Check the first ticket purchase record for a given email and expected ticket type
  should_Check_FirstTicket_In_HistoryTable(mail, FirstTicket) {
    // cy.frameLoaded(this.elements.aosIFrame);
    // cy.enter(this.elements.aosIFrame).then((frame) => {
    //   let firstMatchingRow = null; // Store the first match
    //   const targetDateXPath = this.elements.txt_targetDate;

    //   frame().xpath(targetDateXPath).invoke("text").then((targetDate) => {
    //     targetDate = targetDate.trim();

    //     // Iterate through all rows to find the first match for the target date
    //     frame().xpath(this.elements.txt_tableElementRow).each(($row, rowIndex, $rows) => {
    //       // Check the first matching row
    //       cy.wrap($row).find(this.elements.txt_tableData).then(($cells) => {
    //         const dateCell = $cells.eq(0);
    //         cy.wrap(dateCell).invoke("text").then((dateText) => {
    //           dateText = dateText.trim();
    //           if (dateText === targetDate && !firstMatchingRow) {
    //             firstMatchingRow = $row; // Store the first matching row
    //               cy.wrap(firstMatchingRow).find(this.elements.txt_tableData).then(($cells) => {
    //                 const actionText = $cells.eq(3).text().trim();
    //                 const MailText = $cells.eq(2).text().trim();
    //                 expect(actionText).to.equal(FirstTicket);
    //                   cy.log(`First record for date ${targetDate}: ${actionText}`);
    //                     expect(MailText).to.contains(mail);
    //               });
    //           }
    //         });
    //       });
    //       // Exit the loop once the first match is found
    //       if (firstMatchingRow) {
    //         return false; // Stops further iteration once the first match is found
    //       }
    //     }).then(() => {
    //       if (!firstMatchingRow) {
    //         cy.log(`No matching row found for date ${targetDate}`);
    //       }
    //     });
    //   });
    // });

    let firstMatchingRowFound = false;
    const targetDateXPath = this.elements.txt_targetDate;

    cy.xpath(targetDateXPath)
      .invoke("text")
      .then((targetDate) => {
        targetDate = targetDate.trim();

        cy.xpath(this.elements.txt_tableElementRow)
          .each(($row) => {
            if (firstMatchingRowFound) return false; // stop iteration

            cy.wrap($row)
              .xpath(this.elements.txt_tableData)
              .then(($cells) => {
                const dateText = $cells.eq(0).text().trim();

                if (dateText === targetDate) {
                  firstMatchingRowFound = true;

                  const actionText = $cells.eq(3).text().trim();
                  const mailText = $cells.eq(2).text().trim();

                  expect(actionText).to.equal(FirstTicket);
                  expect(mailText).to.contains(mail);

                  cy.log(`First record for date ${targetDate}: ${actionText}`);
                }
              });
          })
          .then(() => {
            if (!firstMatchingRowFound) {
              cy.log(`No matching row found for date ${targetDate}`);
            }
          });
      });
  }

  // Check the latest ticket purchase record for a given email and expected ticket type
  should_Check_Latest_TicketPurchased(mail, LatestTicket) {
    cy.frameLoaded(this.elements.aosIFrame);
    cy.enter(this.elements.aosIFrame).then((frame) => {
      let lastMatchingRow;
      let foundDateChange = false;
      const targetDateXPath = this.elements.txt_targetDate;

      // Get the date of the first row
      frame()
        .xpath(targetDateXPath)
        .invoke("text")
        .then((targetDate) => {
          targetDate = targetDate.trim();

          // Iterate through all rows to find the last row with the same target date
          frame()
            .xpath(this.elements.txt_tableElementRow)
            .each(($row, rowIndex, $rows) => {
              if (foundDateChange) return false;
              cy.wrap($row)
                .find(this.elements.txt_tableData)
                .then(($cells) => {
                  const dateCell = $cells.eq(0);
                  cy.wrap(dateCell)
                    .invoke("text")
                    .then((dateText) => {
                      dateText = dateText.trim();
                      // Keep updating lastMatchingRow as long as date matches
                      if (dateText === targetDate) {
                        lastMatchingRow = $row;
                      } else if (lastMatchingRow) {
                        foundDateChange = true;
                      }
                    });
                });
            })
            .then(() => {
              // If a matching row was found, validate action and email
              if (lastMatchingRow) {
                cy.wrap(lastMatchingRow)
                  .find(this.elements.txt_tableData)
                  .then(($cells) => {
                    const actionText = $cells.eq(3).text().trim();
                    const MailText = $cells.eq(2).text().trim();
                    expect(actionText).to.equal(LatestTicket);
                    cy.log(`Last record for date ${targetDate}: ${actionText}`);
                    expect(MailText).to.equal(mail);
                  });
              } else {
                cy.log(`No matching row found for date ${targetDate}`);
              }
            });
        });
    });
  }

  // Capture table data from all pages, sort the table by a column, and verify that the sorting works correctly
  should_Paginate_And_Sorting_For_Admin(parameter) {
    cy.get(this.elements.body).then(($body) => {
      if ($body.find(this.elements.aosIFrame).length > 0) {
        cy.frameLoaded(this.elements.aosIFrame);
        cy.enter(this.elements.aosIFrame).then((getBody) => {
          let allDataBeforeSorting = [];
          let allDataAfterSorting = [];

          const rowsSelector = this.elements.txt_tableRow;
          let dataSelector;
          let sortButtonSelector;

          // Set data selector and sort button based on parameter
          if (parameter === "invoice") {
            dataSelector = this.elements.txt_secondColumnData; // Second column for invoice
            sortButtonSelector = this.elements.btn_sort;
          } else {
            dataSelector = this.elements.txt_secondColumnData; // First column
            sortButtonSelector = this.elements.btn_sort;
          }
          const paginatorNextBtn = this.elements.btn_nextPage;
          const paginatorLastBtn = this.elements.btn_lastPage;
          const button = this.elements.btn_firstPage;

          // Function to capture data from the current page
          const captureData = (dataArray) => {
            return getBody()
              .find(rowsSelector)
              .each(($row) => {
                cy.wrap($row)
                  .find(dataSelector)
                  .then(($cell) => {
                    const cellText = $cell.text().trim(); // Get trimmed text
                    dataArray.push(cellText);
                    cy.log(cellText); // Add to the array
                  });
              });
          };

          // Function to handle pagination and capture data from all pages
          const paginateAndCapture = (dataArray) => {
            return new Cypress.Promise((resolve) => {
              const paginate = () => {
                getBody()
                  .find(paginatorLastBtn)
                  .scrollIntoView()
                  .scrollIntoView()
                  .wait(1000)
                  .invoke("attr", "disabled")
                  .then((disabled) => {
                    if (disabled === "disabled") {
                      resolve(); // Resolve when pagination ends
                    } else {
                      getBody()
                        .find(paginatorNextBtn)
                        .scrollIntoView()
                        .should("be.enabled")
                        .click()
                        .then(() => {
                          captureData(dataArray).then(() => {
                            paginate(); // Continue pagination
                          });
                        });
                    }
                  });
              };

              // Start by capturing data on the first page
              captureData(dataArray).then(() => {
                paginate();
              });
            });
          };

          // Capture all data before sorting
          paginateAndCapture(allDataBeforeSorting).then(() => {
            cy.log("Data before sorting:", allDataBeforeSorting);
            console.log("Data before sorting:", allDataBeforeSorting);

            // Click the sorting button and wait for UI updates
            getBody()
              .find(sortButtonSelector)
              .click({ force: true })
              .wait(2000);
            getBody().find(button).click({ force: true }).wait(2000);
          });
          // Function to capture data from the current page
          const captureDataaftersorting = (dataArray2) => {
            return getBody()
              .find(rowsSelector)
              .each(($row) => {
                cy.wrap($row)
                  .find(dataSelector)
                  .then(($cell) => {
                    const cellText = $cell.text().trim(); // Get trimmed text
                    dataArray2.push(cellText);
                    cy.log(cellText); // Add to the array
                  });
              });
          };
          const paginateAndCapture2 = (dataArray2) => {
            return new Cypress.Promise((resolve) => {
              const paginate2 = () => {
                getBody()
                  .find(paginatorLastBtn)
                  .scrollIntoView()
                  .wait(1000)
                  .invoke("attr", "disabled")
                  .then((disabled) => {
                    if (disabled === "disabled") {
                      resolve(); // Resolve when pagination ends
                    } else {
                      getBody()
                        .find(paginatorNextBtn)
                        .should("be.enabled")
                        .click()
                        .then(() => {
                          captureData(dataArray2).then(() => {
                            paginate2(); // Continue pagination
                          });
                        });
                    }
                  });
              };

              // Start by capturing data on the first page
              captureDataaftersorting(dataArray2).then(() => {
                paginate2();
              });
            });
          };

          paginateAndCapture2(allDataAfterSorting).then(() => {
            cy.log("Data after sorting:", allDataAfterSorting);
            console.log("Data after sorting:", allDataAfterSorting);
          });
          expect(allDataBeforeSorting.length).to.equal(
            allDataAfterSorting.length,
          );
          cy.log("Row count validation passed!");

          const sortedData = [...allDataBeforeSorting].sort();
          expect(allDataAfterSorting).to.deep.equal(sortedData);
          if (
            JSON.stringify(allDataAfterSorting) === JSON.stringify(sortedData)
          ) {
            cy.log("Sorting validation passed!");
          } else {
            cy.log("Sorting validation failed!");
          }
        });
      }
    });
  }

  // Verify table sorting by clicking the date column:
  sorting() {
    cy.get(this.elements.normalIframe).then(($iframes) => {
      console.log("Found iframes:", $iframes);
    });

    cy.wait(8000);

    const isSortedAsc = (arr) =>
      arr.every((val, i, array) => !i || array[i - 1] <= val);
    // Utility function to check if array is sorted in descending order
    const isSortedDesc = (arr) =>
      arr.every((val, i, array) => !i || array[i - 1] >= val);
    // Utility function to convert date strings to Date objects
    const convertToDate = (dateStr) => new Date(Date.parse(dateStr));

    cy.frameLoaded(this.elements.aosIFrame); // Replace with your iframe selector
    cy.iframe().as(this.elements.normalIframe);

    // Get table column elements before sorting
    cy.get("@iframe")
      .find(this.elements.txt_tableFirstChild)
      .then(($cells) => {
        // Replace with  table and column data selectors
        const originalValues = Cypress._.map($cells, "innerText");
        const originalDates = originalValues.map(convertToDate);

        cy.get("@iframe")
          .find(this.elements.txt_tableFirstElement)
          .wait(6000)
          .click({ force: true });
        cy.wait(7000);
        // Get the sorted column values
        cy.get("@iframe")
          .find(this.elements.txt_tableFirstChild)
          .then(($sortedCells) => {
            const sortedValues = Cypress._.map($sortedCells, "innerText");
            const sortedDates = sortedValues.map(convertToDate);

            cy.wait(5000);
            // Verify the values are sorted in ascending order
            expect(isSortedAsc(sortedDates)).to.be.true;

            // Click to sort in descending order
            cy.get("@iframe").find(this.elements.txt_tableFirstElement).click();
            // Get the sorted column values in descending order
            cy.get("@iframe")
              .find(this.elements.txt_tableFirstChild)
              .then(($descSortedCells) => {
                const descSortedValues = Cypress._.map(
                  $descSortedCells,
                  "innerText",
                );
                const descSortedDates = descSortedValues.map(convertToDate);

                // Verify the values are sorted in descending order// descSortedDates
                expect(isSortedDesc(descSortedDates)).to.be.true;
              });
          });
      });
  }
}
export default History;
