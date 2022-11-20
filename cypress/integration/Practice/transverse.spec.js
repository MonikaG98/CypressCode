///<reference types = "cypress"/>

describe('transverse method in cypress', function () {
    beforeEach(function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    })
    it('To get children of DOM element,use the .children() command.', function () {
        cy.get('.traversal-button-states').children().should('have.length', 4)
    })

    it('To get the first DOM element within element, use the .first()', function () {
        cy.get('.traversal-button-states').children().first().should('have.text', "Danger")
    })

    it('To get the last DOM element within element,use the .last()', function () {
        cy.get('.traversal-button-states').children().last().should('have.text', "Alert")
    })

    it('To get DOM element at specific index ,use the .eq() command.', function () {
        cy.get('.traversal-button-states').children().eq(1).should('have.text', "Warning")
    })

    //siblings
    it('to get the next sibling DOM element use the .next() command,', function () {
        cy.get('#tea').next().should('have.text', "Milk")
        //cy.get('#tea').next().should('have.attr','id','milk')
    })

    it('to get the previous siblings DOM element use the .prev() command', function () {
        cy.get('#tea').prev().should('have.text', "Coffee")
        // cy.get('#tea').prev().should('have.attr','id','coffee')
    })

    it('to get the all siblings DOM element of element , use the .siblings commands.', function () {
        cy.get('#tea').siblings().should('have.length', 4)
    })

    it('To get the all of the next sibling DOM element within element until another element, use the .nextUntil() command.',function(){
        cy.get('#tea').nextUntil('#suger').should('have.length', 3)
})


it('To get all sibling DOM elements of elements, use the .siblings() command.',function(){
    cy.get('#sugar').prevUntil('#tea').should('have.length',2)

})

it('To get all previous sibling DOM elements within elements, use the .prevAll() command.',function(){
    cy.get('#sugar').prevAll().should('have.length','4')
})

it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.',function(){
    cy.get('#tea').nextAll().should('have.length',3)

})

it('To get descendent DOM element of the selector , use the .find() command.' , function(){
    cy.get('.traversal-buttons').find('a').should('have.text','Link')
    cy.get('.traversal-buttons').find('button').should('have.text','Button')
})
 
it('To get DOM elements that match a specific selector, use the .filter() command',function(){
    cy.get('.traversal-button-states').children().filter('.disabled').should('have.text','Warning')
})

it('To remobe DOM element(s) from the set of elelments, use the .not() command',function(){
    cy.get('.traversal-button-states').children().not('.disabled').should('have.length' ,3)
})

it('To get DOM element of element , use the parent() command.',function(){
    cy.get('.btn-outline-danger').parent().should('have.class','traversal-button-states')
})

it('To get DOM element of element , use the parents() command',function(){
    cy.get('.btn-outline-danger').parents().should('have.class','container')
})

it('To get parents DOM element of elements until other element,use the .parentsuntil() command.',function(){
    cy.get('.btn-outline-danger').parentsUntil('.col-sm-12').should('have.length',2)
})

it.only('To get the closest ancestor DOM element, use the .closest() command.',function(){
    cy.get('#veggie').closest('div').should('have.class','thumbnail')
})
 
})


