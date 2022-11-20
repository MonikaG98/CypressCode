///<reference types = "cypress"/>

// const { eq } = require("cypress/types/lodash")

describe('window method in cypress', function () {
    it.skip('Window URL properties', function () {
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.window().should((win) => {
            // console.log(win.location.hash)
            // console.log(win.location.protocol)
            // console.log(win.location.host)
            // console.log(win.location.pathname)
            expect(win.location.host).to.eqls('www.webdriveruniversity.com')
            expect(win.location.protocol).to.eqls('Contact-Us/contactus.html')
            expect(win.location.hash).to.eqls('')
            expect(win).to.eqls('http:')

            // cypress
            cy.location('hash').should('eq', '')
            cy.location('protocol').should('eq', 'http:')
            cy.location('host').should('eq', 'www.webdriveruniversity.com')
            cy.location('pathname').should('Contact-Us/contactus.html')
        })
    })

    it.skip('Window reload and with cypress',function(){
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
        // cy.window().should((win)=>{
        //     win.location.reload()
        // })
         cy.reload()
    })

    it('Window reload and with cypress',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //     cy.get('p[class]').eq(2).click()
    //     cy.window().should((win)=>{
    //  win.history.back()
    //  win.history.forward()
    //  win.history.go(-1)
    //  win.history.go(1)
    //     })

    cy.go(-1)
    cy.go(1)
    cy.go('forward')
    cy.go('back')
    })


})
