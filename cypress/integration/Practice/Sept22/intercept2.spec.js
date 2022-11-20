///<reference types = "cypress"/>

describe('verify the intercept concept', function () {

    it('verify the intercept', function () {

        cy.intercept({
            method: 'GET',
            url: 'https://jsonplaceholder.cypress.io/comments/1'
        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function ({ response, request }) {

            // let { response, request } = res
            // cy.log(response.body.body)
            // cy.log(request)
            cy.get('.network-comment').should('have.text', response.body.body)
        })
    })
    it('verify the intercept', function () {
        cy.intercept({
            method: 'GET',
            url: 'https://jsonplaceholder.cypress.io/comments/1'
        }, {
            body: {
                "postId": 1,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": "Monika"
            }
        }
        ).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function ({ response, request }) {

            // let { response, request } = res
            // cy.log(response.body.body)
            // cy.log(request)
            cy.get('.network-comment').should('have.text', response.body.body)
            expect(response.statusCode).to.equal(200)
            expect(request.method).to.equal('GET')
        })
    })

    it('verify the intercept', function () {

        cy.intercept({
            method: 'POST',
            url: 'https://jsonplaceholder.cypress.io/comments'
        }).as('postComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Post Comment').click()
        cy.wait('@postComment').then(function ({ response, request }) {
            // cy.log(response.body.body)
            // cy.log(request)
            expect(response.statusCode).to.equal(201)
            expect(response.body).to.have.keys(["name", "email", "id", "body"])
            expect(request.method).to.equal('POST')
            cy.get('.network-post-comment').should('have.text', 'POST successful!')
        })
    })


    it('verify the intercept', function () {

        cy.intercept({
            method: 'PUT',
            url: 'https://jsonplaceholder.cypress.io/comments/1'
        }).as('updateComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Update Comment').click()
        cy.wait('@updateComment').then(function ({ response, request }) {
            // cy.log(response.body.body)
            // cy.log(request)
            expect(response.statusCode).to.equal(200)
            expect(response.body).to.have.keys(["name", "email", "id", "body"])
            expect(request.method).to.equal('PUT')
        })
    })


    it('verify the intercept', function () {
        cy.intercept({
            method: 'PUT',
            url: 'https://jsonplaceholder.cypress.io/comments/1'
        }, {
            body: {
                "n": "PUT",
                "e": "gosavimonika01@gmail.com",
                "i": 10,
                "b": "MonikaG"
            }
        }
        ).as('updateComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Update Comment').click()
        cy.wait('@updateComment').then(function ({ response, request }) {

            // let { response, request } = res
            // cy.log(response.body.body)
            // cy.log(request)
            expect(response.statusCode).to.equal(200)
            expect(response.body).to.have.keys(["n", "e", "i", "b"])
            expect(request.method).to.eqls('PUT')

        })
    })
})
