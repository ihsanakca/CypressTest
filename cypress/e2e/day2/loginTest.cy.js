/// <reference types="cypress"/>

describe("Login test",()=>{
    it("TC 001 positive login scenario",()=>{
        cy.visit('https://www.demoblaze.com/')
        cy.viewport("macbook-16")
        cy.get('#login2').click().wait(500)
        cy.get('#loginusername').type('mgezer@gmail.com').wait(500)
        cy.get('#loginpassword').type('Mg12345678').wait(500)
        cy.get('[onclick="logIn()"]').click().wait(500)
        cy.get('#nameofuser').should("have.text","Welcome mgezer@gmail.com")
    })
})