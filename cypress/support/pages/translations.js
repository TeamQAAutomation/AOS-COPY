import MyOrganisation from "./My_Organisation";

class translations {

  elements = {
     AllApplications: "//ds-list-item[@id='navnavigationallapplicationsapplications-li']",
     MyAOS: "//ds-list-item[@id='navnavigationmyaosundefined-li']",
     Navigationbar:"(//*[@icon='arrow_left_small' and @role='button'])[1]",
     Mydata: "//ds-list-item[@id='navpageprivatemyaccountnavigationmyaosmydata-li']",
     MyOrganisation: "//ds-list-item[@id='navpageprivatemyorganizationnavigationmyaosmyorganisation-li']",
     UserManagement: "//ds-tabs-label[@for='users']",
     permissions: "//ds-tabs-label[@for='permissions']",
     MyTickets:"//ds-list-item[@id='navpageprivateosmcbuyticketnavigationmyaosmytickets-li']",
     OngoingTickets:"//ds-list-item[@id='navpageprivateosmctimeaccountoverviewnavigationmyaosongoingtickets-li']",
     History: "//ds-list-item[@id='navpageprivatehistorynavigationmyaoshistory-li']",
     MyInvoices: "//ds-list-item[@id='navpageprivateinvoicesnavigationmyaosmyinvoices-li']",
     MyPaymentsMethod: "//ds-list-item[@id='navpageprivatepaymentmethodsnavigationmyaosmypaymentmethods-li']",
     Help: "//ds-list-item[@id='navpagepublichelpoverviewnavigationundefined-li']",
     Overview: "//ds-list-item[@id='navpagepublicappsnavigationhelpoverview-li']",
     supportRequest: "//ds-list-item[@id='navpageprivatehelpsupportnavigationhelpsupportrequest-li']",
     TechnicalHelpDesk: "//ds-list-item[@id='navpageprivatehelptechnicalhelpdesknavigationhelptechnicalhelpdesk-li']",
     MyRequest: '//ds-list-item[@id="navpageprivatehelpticketsnavigationhelpmyrequests-li"]',
     TrainingEnquiry: "//ds-list-item[@id='navpageprivatehelptrainingnavigationhelptrainingenquiry-li']",
     AOSMediaLibrary:"//ds-list-item[@id='navpagehelptrainingvideosnavigationhelptrainingvideos-li']",
     Services:"//ds-list-item[@id='navpageprivateserviceoverviewnavigationundefined-li']",
     ServicesOverview: "//ds-list-item[@id='navpagepublicappsnavigationservicesoverview-li']",
     RealDrivingEmissions: "//ds-list-item[@id='navpagepublicservicerealdrivingemissionsnavigationservicesrealdrivingemissions-li']",
     Rescueinformation: "//ds-list-item[@id='navpageprivateservicerescueinformationnavigationservicesrescueinformation-li']",
     DiagnosticArticle: "//ds-list-item[@id='navpageprivateservicediagnosticitemsnavigationservicesdiagnosticarticles-li']",
     Downloads:"//ds-list-item[@id='navpageprivateservicedownloadsnavigationservicesdownloadsmotorcycle-li']",
     VirtualGT1: "//ds-list-item[@id='navpageprivateservicevirtualgt1navigationservicesvirtualgt1-li']",
     Touchcommandservices:"//ds-list-item[@id='navpageprivateservicetouchcommandserviceupdaternavigationservicestouchcommandupdater-li']",
     PEMSadapter: "//ds-list-item[@id='navnavigationpemsadapterservicespemsadapter-li']",
     BMWapis:"//ds-list-item[@id='navnavigationbmwapibmwapi-li']",
 
     };
        //Clcik on the Transactions tab
  clickAndCheckAllapplications() {
  cy.xpath(this.elements.AllApplications).click();
  cy.url().should('include', '/applications');
}
clickAndCheckMyData() {
  cy.xpath(this.elements.Navigationbar).click();
  cy.xpath(this.elements.MyAOS).click();
   cy.xpath(this.elements.Mydata).should("be.visible").click({ force: true });
  cy.url().should('include', '/my-data');
}
clickAndCheckMyOrganisation(){
  cy.xpath(this.elements.MyOrganisation).should("be.visible").click({ force: true });
  cy.url().should('include', '/my-organisation');
}
clickAndCheckUsermanagement(){
  cy.xpath(this.elements.UserManagement).should("be.visible").click({ force: true });
  cy.url().should('include', '/my-organisation?tab=users');
}
clickAndCheckPermissions(){
  cy.xpath(this.elements.permissions).should("be.visible").click({ force: true });
  cy.url().should('include', '/my-organisation?tab=permissions');
}
clickAndCheckMyTickets(){
  cy.xpath(this.elements.MyTickets).should("be.visible").click({ force: true });
  cy.url().should('include', '/my-tickets');
}
clickAndCheckOngoingTickets(){
  cy.xpath(this.elements.OngoingTickets).should("be.visible").click({ force: true });
  cy.url().should('include', '/ongoing-tickets');
}
clickAndCheckHistory(){
  cy.xpath(this.elements.History).should("be.visible").click({ force: true });
  cy.url().should('include', '/history');
}
clickAndCheckMyinvoices(){
  cy.xpath(this.elements.MyInvoices).should("be.visible").click({ force: true });
  cy.url().should('include', '/my-invoices');
}
clickAndCheckMyPaymentmethod(){
  cy.xpath(this.elements.MyPaymentsMethod).should("be.visible").click({ force: true });
  cy.url().should('include', '/my-payment-methods');
}
clickAndCheckHelpOverview() {
  cy.xpath(this.elements.Help).click();
   cy.xpath(this.elements.Overview).should("be.visible").click({ force: true });
  cy.url().should('include', '/overview');
}
clickAndChecksupportRequest() {
   cy.xpath(this.elements.supportRequest).should("be.visible").click({ force: true });
  cy.url().should('include', '/support-request');
}
clickAndCheckTechnicalHelpDesk() {
   cy.xpath(this.elements.TechnicalHelpDesk).should("be.visible").click({ force: true });
  cy.url().should('include', '/technical-help-desk');
}
clickAndCheckMyRequest() {
   cy.xpath(this.elements.MyRequest).should("be.visible").click({ force: true });
  cy.url().should('include', '/my-requests');
}
clickAndChecktrainingEnquiry() {
   cy.xpath(this.elements.TrainingEnquiry).should("be.visible").click({ force: true });
  cy.url().should('include', '/training-enquiry');
}
clickAndCheckAOSMediaLibrary() {
   cy.xpath(this.elements.AOSMediaLibrary).should("be.visible").click({ force: true });
  cy.url().should('include', '/training-videos');
}
clickAndCheckServicesOverview() {
  cy.xpath(this.elements.Services).click();
   cy.xpath(this.elements.ServicesOverview).should("be.visible").click({ force: true });
  cy.url().should('include', '/overview');
}
clickAndCheckRDE() {
   cy.xpath(this.elements.RealDrivingEmissions).should("be.visible").click({ force: true });
  cy.url().should('include', '/real-driving-emissions');
}
clickAndCheckRescueinformation() {
   cy.xpath(this.elements.Rescueinformation).should("be.visible").click({ force: true });
  cy.url().should('include', '/rescue-information');
}
clickAndCheckDiagnosticArticle() {
   cy.xpath(this.elements.DiagnosticArticle).should("be.visible").click({ force: true });
  cy.url().should('include', '/diagnostic-articles');
}
clickAndCheckDownloads() {
   cy.xpath(this.elements.Downloads).should("be.visible").click({ force: true });
  cy.url().should('include', '/motorcycle');
}
clickAndCheckVirtualGT1() {
   cy.xpath(this.elements.VirtualGT1).should("be.visible").click({ force: true });
  cy.url().should('include', '/virtual-gt1');
}
clickAndCheckTouchcommandservices() {
   cy.xpath(this.elements.Touchcommandservices).should("be.visible").click({ force: true });
  cy.url().should('include', '/touch-command-updater');
}
clickAndCheckPEMSadapter() {
   cy.xpath(this.elements.PEMSadapter).should("be.visible").click({ force: true });
  cy.url().should('include', '/pems-adapter');
}
clickAndCheckBMWApis() {
   cy.xpath(this.elements.BMWapis).should("be.visible").click({ force: true });
  cy.url().should('include', '/bmw-api');
}

 should_Verify_Footer_Links_Based_On_Region() {
                     //Technical Requirements Footer link and its Navigation assertion 
                     this.footer_web_elements.link_Footer_Technical_Requirements().scrollIntoView().should('be.visible').click({ force: true })
                     cy.wait(6000)
                     cy.url().should('include', '/technical-requirements')

                     cy.wait(4000)

                     //
                     this.footer_web_elements.link_Footer_conditionsofuse().scrollIntoView().should('be.visible').click({ force: true })
                     cy.wait(5000)
                     cy.url().should('contain', '/conditions-of-use')

                     cy.wait(8000)

                     //
                     this.footer_web_elements.link_dataprivacy().scrollIntoView().should('be.visible').click({ force: true })
                     cy.wait(6000)
                     cy.url().should('contain', '/data-privacy')

                     cy.wait(4000)

                     //

                     this.footer_web_elements.link_Footer_imprint().scrollIntoView().should('be.visible').click({ force: true })
                     cy.wait(5000)
                     cy.url().should('contain', '/imprint')

                     cy.wait(4000)


                     //
                     this.footer_web_elements.link_Footer_pricelist().scrollIntoView().should('be.visible').click({ force: true })
                     cy.wait(5000)
                     cy.url().should('contain', '/price-list')

                     cy.wait(4000)

                     this.footer_web_elements.link_Footer_cookies().scrollIntoView().should('be.visible').click({ force: true })
                     cy.wait(5000)
                     cy.url().should('contain', '/cookies')

                     cy.wait(4000)

                     this.footer_web_elements.link_Footer_userguide().scrollIntoView().should('be.visible').click({ force: true })
                     cy.wait(5000)
                     cy.url().should('contain', '/user-guide')

                     cy.wait(4000)
                   
                     this.footer_web_elements.link_Footer_FirstStepsInthePortal().scrollIntoView().should('be.visible').click({ force: true })
                     cy.wait(5000)
                     cy.url().should('contain', '/getting-started')

                     cy.wait(4000)
                     

              }
       }
    
     /*-------- METHODS ------------ */
export default translations;