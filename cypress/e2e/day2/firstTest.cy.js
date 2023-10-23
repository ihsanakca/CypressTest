/// <reference types="cypress"/>

describe('First test suit',function(){
    it('Test Case 1',function(){
        cy.visit("https://www.krafttechexlab.com/login")
       cy.get('#email').should('be.visible').type('mgezer@gmail.com')
       cy.get('#yourPassword').should("be.visible").type("Mg12345678{enter}").wait(500)
       cy.get('.nav-link > .d-none').should("have.text","Melih Gezer").click()
       cy.get('.pe-3 > .dropdown-menu > :nth-child(3) > .dropdown-item > span').click()
       cy.get('.breadcrumb > :nth-child(2)').should("have.text","User Profile").wait(1000)
    })
})


describe("Second test suite",()=>{
    it("Test Case 2",()=>{
        cy.visit("https://en.wikipedia.org/wiki/Main_Page").wait(500)
        cy.title().should("eq","Wikipedia, the free encyclopedia").wait(1000)
        cy.get('#searchInput').type('cypress{enter}').wait(500)
        cy.url().should('include','/wiki/Cypress')
        cy.get('h1').should('have.text','Cypress')

    })
})