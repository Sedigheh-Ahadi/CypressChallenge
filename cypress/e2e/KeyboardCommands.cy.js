///<reference types= "cypress"/>
import "cypress-real-events";

describe('Cypress commands - keyboard', function () {
    it('1- keyboard commands- type ', function () {
        cy.visit("https://example.cypress.io/commands/querying")
        cy.get("#inputName").type("cypress.io")
    })
    it('2- using sequences- Enter', function () {
        cy.visit("https://example.cypress.io/commands/querying")
        cy.get("#inputName").type("cypress{enter}")
    })
    it('3- Using sequences- delete', function () {
        cy.visit("https://example.cypress.io/commands/querying")
        //cy.get("input[name=q]").type("Cypress").type("{backspace}").type("{home}").type("{del}")
        cy.get("#inputName").type("Cypress").type("{backspace}{home}{del}")
    })
    it('4- using sequences and read events plug in  Combination', function () {
        cy.visit("https://example.cypress.io/commands/querying")
        cy.get("#inputName").type("Cypress")
            .realPress(['Control', 'A'])
            .realPress(['Control', 'X'])
            .realPress(['Control', 'V'])

    })
   
    it('5- using sequences - Clear input', function () {
        cy.visit("https://example.cypress.io/commands/querying")
        cy.get("#inputName").type("Cypress")
        cy.get("#inputName").clear()
        cy.get("#inputName").type("Cypress")
        cy.get("#inputName").type("{selectall}{del}")
        cy.get("#inputName").type("Cypress")
        cy.get("#inputName").type("{selectall}{backspace}")
    })
    it('6-  Delay Option', function () {
        cy.visit("https://example.cypress.io/commands/querying")
        cy.get("#inputName").type("I'm typing slowly", {delay: 100})
        cy.get("#inputName").clear()
        cy.get("#inputName").type("I'm typing fast", {delay: 0})

    })
    it('7-  Repeat', function () {
        cy.visit("https://example.cypress.io/commands/querying")
        cy.get("#inputName").type("Cypress ".repeat(6))

    })
})

