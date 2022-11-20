/// <reference types  ="cypress"/>

describe('verify the local storage app', function () {

    this.beforeEach(function () {
        cy.visit('https://webdriveruniversity.com/')
    })

    it('local storage using window', function () {
        cy.window().then(function (win) {
            // console.log(win.localStorage)
            expect(win.localStorage.length).to.eq(0)
            window.localStorage.setItem('id', 1)
            expect(win.localStorage.length).to.eq(1)
            expect(window.localStorage.getItem('id')).to.eq('1')
        })
    })

    it('Clearing the local storage using cypress command',function(){
        cy.clearLocalStorage()
        cy.window().then(function(win){
          expect(window.localStorage.length).to.eq(0)
        })
    })


    //document

    it('verify the title of the page',function(){
        cy.document().should(function(doc){
            let titleText = doc.title
            expect(titleText).to.eq('WebDriverUniversity.com')
        })
    })

it.only('verify the title with cypress command',function(){
    cy.title().should('eq','WebDriverUniversity.com')
})

it('verify the title with cypress command',function(){
  cy.title().then(function(txt){
    expect(txt).to.eq('WebDriverUniversity.com')
  })
})






















})

