///<reference types = "cypress"/>

describe('verify alert() , confirm() , prompt()', function () {
    this.beforeEach(function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })

    it('verify js alert()', function () {
        cy.on('window:alert', function (str) {
            expect(str).to.eq('I am a JS Alert')
            return true
        })
        cy.contains('Click for JS Alert').click()
        // cy.on('window:alert',function(){
        //     return true
        //})
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })

    //confirm

    it('verify JS confirm()-ok', function () {
        cy.on('window:confirm', function (str) {
            expect(str).to.eq('I am a JS Confirm')
            return true
        })
        cy.contains('Click for JS Confirm').click()
       // cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('have.text', 'You clicked: Ok')

    })

    it('verify JS confirm()-cancle', function () {
        cy.on('window:confirm', function (str) {
            expect(str).to.eq('I am a JS Confirm')
            return false
        })
        cy.contains('Click for JS Confirm').click()
       cy.get('#result').should('have.text','You clicked: Cancel')
     })


     //prompt
     it.only('verify js prompt() - ok',function(){
        cy.window().then(function(win){
            cy.stub(win,'prompt').returns('hello')
            cy.contains('Click for JS Prompt').click()
        })
        cy.get('#result').should('have.text','You entered: hello')
    })

    it.only('verify js prompt() - cancel',function(){
        cy.window().then(function(win){
            cy.stub(win,'prompt').returns(null)
            cy.contains('Click for JS Prompt').click()
        })
        cy.get('#result').should('have.text','You entered: null')
    })

})