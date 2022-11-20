///<reference types = "cypress"/>

describe('verify the kichen api example', function () {
    it('verify the get comment api', function () {
        cy.request({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).then(function (res) {
            // cy.log(res)
            expect(res.status).to.eq(200)
        })
    })

    it('verify the post comment api', function () {
        cy.request({
            method: "POST",
            url: "https://jsonplaceholder.cypress.io/comments",
            body: {
                "name": "Using POST in cy.intercept()",
                "email": "hello@cypress.io",
                "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE"
            }
        }).then(function (res) {
            //cy.log(res)
            expect(res.status).to.eq(201)
        })
    })

    it('verify the update comment api', function () {
        cy.request({
            method: "PUT",
            url: "https://jsonplaceholder.cypress.io/comments/1",
            body: {
                "name": "Using PUT in cy.intercept()",
                "email": "hello@cypress.io",
                "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE"
            }
        }).then(function (res) {
            // cy.log(res)
            expect(res.status).to.eq(200)
        })
    })
})

