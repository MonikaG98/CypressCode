///<reference types = "cypress"/>
describe('verify the contactus form', function () {

    it.only('validate the successfull submission of the form', function () {
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('monika')
        cy.get('input[name="last_name"]').type('gosavi')
        cy.get('input[name="email"]').type('gosavimonika09@gmail.com')
        cy.get('textarea[name="message"]').type('learning.js')
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
    })
    it.only('validate the form with incorrect email address', function () {
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('monika')
        cy.get('input[name="last_name"]').type('gosavi')
        cy.get('input[name="email"]').type('gosavimonika09gmail.com')
        cy.get('textarea[name="message"]').type('learning.js')
        cy.get('input[type="submit"]').click()
        cy.get('body').should('contain',"Error: Invalid email address")
       
    })
    it.only('validate the form with click on reset button', function () {
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('monika')
        cy.get('input[name="last_name"]').type('gosavi')
        cy.get('input[name="email"]').type('gosavimonika01@gmail.com')
        cy.get('textarea[name="message"]').type('learning.js')
        cy.get('input[type="reset"]').click()

        cy.get('input[name="first_name"]').should('have.text','')
        cy.get('input[name="last_name"]').should('have.text','')
        cy.get('input[name="email"]').should('have.text','')
        cy.get('textarea[name="message"]').should('have.text','')
        

    })
    it.only('validate the heading with contactus form', function () {
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2[name="contactme"]').should('be.visible')
        cy.get('h2[name="contactme"]').should('be.text','CONTACT US')
    })
    it.only('validate the heading with contactus form', function () {
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2[name="contactme"]').as('headingc')
        cy.get('@headingc').should('be.visible')
        cy.get('@headingc').should('be.text', 'CONTACT US')
    })
})



