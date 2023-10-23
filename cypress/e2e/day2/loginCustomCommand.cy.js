/// <reference types="cypress"/>

describe("Login test",()=>{
    it("TC 001 positive login scenario",()=>{
        cy.visit(Cypress.env("baseUrl"))
        cy.viewport("macbook-16")

        cy.loginFunction(Cypress.env("username"),Cypress.env("password"))
        
        cy.get('#nameofuser').should("have.text","Welcome mgezer@gmail.com")
    })
})