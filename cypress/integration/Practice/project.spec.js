///<reference types = "cypress"/>

describe("My First Scenario",function(){

    // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    it("To visit the page with click",function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("label").should('have.text',"UsernamePassword")

    })
   
    

})

