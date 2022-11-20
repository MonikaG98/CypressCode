///<reference types = "cypress"/>

describe('verify the concept of hooks in js', function () {
    before(function () {
        cy.log('Before everything')
    })
    after(function () {
        cy.log('After everything')
    })
    beforeEach(function () {
        cy.log(' I am BeforeEach testcase')
    })
    afterEach(function () {
        cy.log('I am AfterEach testcase')
    })

    it('Testcase one', function () {
        cy.log('Testcase one')
    })
    it('Testcase two', function () {
        cy.log('Testcase two')
    })
})

















