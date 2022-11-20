
///<reference types = "cypress"/>
import objI from '../../../fixtures/contactus.json'
import users from '../../../fixtures/multipleuser.json'

describe('verify the contactus form', function () {
    let objG;
    before(() => {
        cy.fixture('contactus').then((data) => {
            objG = data
        })
    })

    //first way
    let info = {
        firstName: "monika",
        lastName: "gosavi",
        email: "gosavimonika01@gmail.com",
        Comments: "good morning"
    }


    it('verify the contactus form with object', function () {

        cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('input[name="first_name"]').type(info.firstName)
        cy.get('input[name="last_name"]').type(info.lastName)
        cy.get('input[name="email"]').type(info.email)
        cy.get('textarea[name ="message" ]').type(info.Comments)
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')

    })


    it('verify the contactus via fixture for perticular testcase', function () {

        //second way
        cy.fixture('contactus.json').then(function (obj) {
            // cy.log(obj)
            cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
            cy.get('input[name="first_name"]').type(obj.firstName)
            cy.get('input[name="last_name"]').type(obj.lastName)
            cy.get('input[name="email"]').type(obj.email)
            cy.get('textarea[name ="message" ]').type(obj.Comments)
            cy.get('input[value="SUBMIT"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })

    })

    it('verify the contactus via fixture from before', function () {

        // third way
        cy.log(objG)
        cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('input[name="first_name"]').type(objG.firstName)
        cy.get('input[name="last_name"]').type(objG.lastName)
        cy.get('input[name="email"]').type(objG.email)
        cy.get('textarea[name ="message" ]').type(objG.Comments)
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')


    })

    it('verify the contactus via fixture from import', function () {

        // third way
        cy.log(objI)
        cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('input[name="first_name"]').type(objI.firstName)
        cy.get('input[name="last_name"]').type(objI.lastName)
        cy.get('input[name="email"]').type(objI.email)
        cy.get('textarea[name ="message" ]').type(objI.Comments)
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    //forth way
    it('verify the contactus via fixture from import', function () {
        cy.log(users)
        //bad method
        users.forEach(function (el) {
            // cy.log(el)
            cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
            cy.get('input[name="first_name"]').type(el.firstName)
            cy.get('input[name="last_name"]').type(el.lastName)
            cy.get('input[name="email"]').type(el.email)
            cy.get('textarea[name ="message" ]').type(el.Comments)
            cy.get('input[value="SUBMIT"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')

        })
    })

    //fifth way
    users.forEach(function (el, index) {
        it(`verify with multiple data - ${index + 1}`, function () {
            cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
            cy.get('input[name="first_name"]').type(el.firstName)
            cy.get('input[name="last_name"]').type(el.lastName)
            cy.get('input[name="email"]').type(el.email)
            cy.get('textarea[name ="message" ]').type(el.Comments)
            cy.get('input[value="SUBMIT"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })
    })


})







