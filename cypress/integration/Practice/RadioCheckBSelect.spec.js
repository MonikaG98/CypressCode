///<reference types = "cypress"/>

describe('verify the functionality of checkbox ', function () {

    before(function () {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')

    })

    it('verify the one checkbox with click', function () {
        cy.get('input[value ="option-3"]').click().should('not.be.checked')
        cy.get('input[value = "option-3"]').click().should('be.checked')
    })

    it('verify the one check box with checked() and unchecked() function', function () {
        cy.get('input[value = "option-3"]').check().should('be.checked')
        cy.get('input[value ="option-3"]').uncheck().should('not.be.checked')
    })

    it('verify the multiple checkbox with checked() and unchecked()', function () {
        cy.get('input[type="checkbox"]').each(function (el) {
            cy.log(el)
            cy.wrap(el).as('checkbox')
            cy.get('@checkbox').check().should('be.checked')
            cy.get('@checkbox').uncheck().should('not.be.checked')
        })

        it('verify with one check radio button with click()', function () {
            cy.get('input[value="green"]').click().should('be.asked')
            cy.get('input[value="blue"]').should('not.be.asked')
        })

        it('verify with one check button with check()', function () {
            cy.get('input[value="green"]').check().should('be.asked')
            cy.get('input[value="blue"]').should('not.be.checked')
        })

        it('verify with all button with check()', function () {
            cy.get('input[name="color"]').each(function () {
                cy.wrap(el).as('radioButton')
                cy.get('@radioButton').check().should('be.checked')

            })
        })
        it('check wheather particular element is disable', function () {
            cy.get('input[value="cabbage"]').should('be.disabled')
        })

        it('check wheather perticular element is enabled', function () {
            cy.get('input[value="lettuce"]').should('be.enabled')
        })

    })

})






















