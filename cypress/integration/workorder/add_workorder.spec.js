context("Add workorder", () => {
    beforeEach(() => {
        cy.visit("/")
    })

    it("should display workorder in read mode after successfully saving it to database", () => {

        cy.server();

        cy.route({
            method: "POST",
            url: "/workorder",
            status: 200,
            response: [{status: "ok"}]
        }).as("addNewWorkOrder");

        // main details
        cy.get("#nav-menu__add-workorder").click();
        cy.get("[name='client_name_and_address'").type("Sander Õigus, Kloogaranna 142-5");
        cy.get("[name='client_phone'").type("55566473");
        cy.get("[name='car_mark_and_model'").type("Fiat Doblo");
        cy.get("[name='car_reg_nr'").type("774PMS");
        cy.get("[name='car_vin_code'").type("WF11LLGCC5CO20385");
        cy.get("[name='car_mileage'").type("90254");

        // work details
        cy.get("[name='list_of_works']").type("Keretööd{enter}");
        cy.get("[name='list_of_works']").type("Tolmuimejaga ratta stabilisaatori amortiseerimine{enter}");
        cy.get("[name='list_of_works']").type("Pillerkaar ja kokkaraamat{enter}");
        cy.get("[name='list_of_works']").type("Pandakaru");
        cy.get("[name='faults_and_remarks']").type("Panda hammustab{enter}");
        cy.get("[name='faults_and_remarks']").type("Tolmuimeja imeb... sellest pole mingit kasu{enter}");
        cy.get("[name='faults_and_remarks']").type("Keretöö käigus avastatud roosterõngad, sibularõngad veel avastamata...");

        // required parties
        cy.get("[name='client_representative']").type("Jusuf Islam");
        cy.get("[name='work_receiver']").type("Hakuna Matata");
        cy.get("[name='work_performer']").type("Peep Riimib");

        // submit form
        cy.get("button[type='submit']").click();

    })
})
