///<reference types = "cypress"/>

// Test scenario

describe('TS_01 verify the login functionality', function () {
    beforeEach(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.login('Admin', 'admin123')
    })
    it('TS_0 verify the logo visible on dashboard', function () {
        cy.get('img[alt="client brand banner"]').should('be.visible')
    })

    it('TS_0 verify the default tab to be PIM', function () {
        cy.url().should('contain', 'pim')
        cy.get("h6[class]").should('have.text', "PIM")
    })
})











