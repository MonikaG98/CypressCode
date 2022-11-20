///<reference types = "cypress"/>


describe('verify the UI for kichen example', function () {
    it('verify the UI for get comment', function () {
        cy.intercept({
            method: 'GET',
            url: 'https://jsonplaceholder.cypress.io/comments/1',
        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains("Get Comment").click()
        cy.wait('@getComment')
        cy.get('.network-comment').should('contain', 'laudantium enim quasi est quidem magnam')

    })
a
    it('verify the UI for post comment', function () {
        cy.intercept({
            method: 'POST',
            url: 'https://jsonplaceholder.cypress.io/comments',
        }).as('Post Comment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains("Post Comment").click()
        cy.wait('@Post Comment')
        cy.get('.network-post-comment').should('have.text','POST successful!')

    })
})