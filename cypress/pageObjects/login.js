export class Login {
     navigate(){
       // cy.visit('https://www.demoblaze.com/')
        cy.visit(Cypress.env("baseUrl"))

     }

     assertTitle(){
        cy.title().should("eq","STORE")
     }

     loginLink(){
        cy.get('#login2').click().wait(500)
        return this
     }

     username(){
        cy.get('#loginusername').type('mgezer@gmail.com').wait(500)  //env.dan da alınabilir
        return this
     }

     password(){
        cy.get('#loginpassword').type('Mg12345678').wait(500)  //env.dan da alınabilir
        return this
     }

     loginButton(){
        cy.get('[onclick="logIn()"]').click().wait(500)
        return this
     }

     assertUsername(){
        cy.get('#nameofuser').should("have.text","Welcome mgezer@gmail.com")
     }

}

