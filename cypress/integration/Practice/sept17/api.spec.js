///<reference types = "cypress"/>

describe('verify GET POST PUT DELETE api', function () {
    let accessToken = `ba593e32672be4d02244328e8a2d08f575219d0bfaced792fb99d13c8ccaa018`
    it('verify the go rest- GET api', function () {
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                'Authrization': `Bearer ${accessToken}`
            }
        }).then(function (response) {
            //cy.log(response)
            expect(response.status).to.eq(200)
            expect(response.body.length).to.eq(10)
           // expect(response.duration).to.be.lessThan(700)
           

            response.body.forEach(function (element) {
                expect(element).to.have.keys(['id', 'name', 'email', 'status', 'gender'])
            });
            response.body.forEach(function (element) {
                expect(element.id).not.to.null
                expect(element.name).not.to.null
                expect(element.email).not.to.null
                expect(element.status).not.to.null
                expect(element.gender).not.to.null
            })
        })
    })

    //create user
    it('verify the Create user API for go rest', function () {
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            headers:
            {
                'Authorization': `Bearer ${accessToken}`
            },
            body: {
                name: "Tenali Ramakrishna",
                gender: "male",
                email: `f.ramakrishna${Math.floor(Math.random() * 100000)}@15ce.com`,
                status: "active"
            }

        }).then(function ({ status, body, duration }) {
            expect(status).to.eq(201)
            expect(body).to.have.all.key("id", "name", "email", "gender", "status")
           // expect(duration).to.be.lessThan(1000)
            cy.log(body.id)
        })

    })
    
    it('verify the Create user API for update the user', function () {
        cy.request({
            method: 'PUT',
            url: 'https://gorest.co.in/public/v2/users/7528',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            body: {
                name: "Allasani Peddana",
                gender: "male",
                email: "allasani.11peddanfgfgha@15ce.com",
                status: "active"

            }
        }).then(function (res) {
            //cy.log(res)
            expect(res.status).to.eq(200)
        })
    })


    it('verify the Create user API for delete user', function () {
        cy.request({
            method: 'DELETE',
            url: 'https://gorest.co.in/public/v2/users/7733',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
           
        }).then(function (res) {
            //cy.log(res)
            expect(res.status).to.eq(204)
        })
    })
})





//curl -i -H "Accept:application/json" -H "Content-Type:application/json" -H "Authorization: Bearer ACCESS-TOKEN" -XDELETE "https://gorest.co.in/public/v2/users/83"

































//GoRestApi
//token  = ba593e32672be4d02244328e8a2d08f575219d0bfaced792fb99d13c8ccaa018

//curl -i -H "Accept:application/json" -H "Content-Type:application/json" -H "Authorization: Bearer ACCESS-TOKEN" -XGET "https://gorest.co.in/public/v2/users"

//curl -i -H "Accept:application/json" -H "Content-Type:application/json" -H "Authorization: Bearer ACCESS-TOKEN" -XPOST "https://gorest.co.in/public/v2/users" -d '{"name":"Tenali Ramakrishna", "gender":"male", "email":"tenali.ramakrishna@15ce.com", "status":"active"}'

//curl -i -H "Accept:application/json" -H "Content-Type:application/json" -H "Authorization: Bearer ba593e32672be4d02244328e8a2d08f575219d0bfaced792fb99d13c8ccaa018" -XDELETE "https://gorest.co.in/public/v2/users/27"

//curl -i -H "Accept:application/json" -H "Content-Type:application/json" -H "Authorization: Bearer ba593e32672be4d02244328e8a2d08f575219d0bfaced792fb99d13c8ccaa018" -XPOST "https://gorest.co.in/public/v2/users" -d '{"name":"Tenali Ramakrishna", "gender":"male", "email":"tenali.ramakrishna@15ce.com", "status":"active"}'

//curl -i -H "Accept:application/json" -H "Content-Type:application/json" -H "Authorization: Bearer ba593e32672be4d02244328e8a2d08f575219d0bfaced792fb99d13c8ccaa018" -XPATCH "https://gorest.co.in/public/v2/users/32" -d '{"name":"Allasani Peddana", "email":"allasani.peddana@15ce.com", "status":"active"}'

