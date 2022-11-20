/// <reference types = "cypress"/>

//Test Scenario

describe('TS_01 verify the login functionality', function () {
    beforeEach(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('TS_01 check the valid credential',function(){
        cy.login('Admin','admin123')
        cy.get('img[alt= "client brand banner"]').should('be.visible')
    })

    it('TS_02 check the invalid credential',function(){
        cy.login('amin','amin222')
        //cy.get('p[class="oxd-text oxd-text--p"]')
        cy.get('p[class="oxd-text oxd-text--p oxd-alert-content-text"]')
        .should('have.text','Invalid credentials')

    })

})




