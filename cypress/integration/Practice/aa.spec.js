///<reference types = "cypress"/>

describe('verify the functionality of checkbox ',function(){

    before(function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')

    })

    it('verify the one checkbox with click',function(){
        cy.get('input[value ="option-1"]').check().should('be.checked')
      //  cy.get('input[value = "option-1"]').uncheck().should('not.be.checked')
    })
    // it.only('verify with one check radio button with click()',function(){
    //     cy.get('input[value="green"]').click().should('be.asked')
    //     cy.get('input[value="blue"]').should('not.be.asked')
    //     })
        
    //     it('verify with one check button with check()',function(){
    //         cy.get('input[value="green]').check().should('be.asked')
    //         cy.get('input[value="blue]').should('not.be.checked')
    //     })
        
   })

   