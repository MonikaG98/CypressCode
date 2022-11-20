/// <reference types = "cypress"/>
describe('verify GET POST PUT DELETE api', function () {
    var accessToken = 'ba593e32672be4d02244328e8a2d08f575219d0bfaced792fb99d13c8ccaa018'
    it('POST ,PUT, DELETE', function () {
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            body: {
                name: "Tenali Ramakrishna",
                gender: "male",
                email: `f.ramakrishna${Math.floor(Math.random() * 100000)}@15ce.com`,
                status: "active"
            }
        }).then(function (res) {
            // cy.log(res)
            expect(res.status).to.eql(201)
            return res.body.id

        }).then(function (id) {
           // cy.log(id)
            cy.request({
                method: "PUT",
                url: `https://gorest.co.in/public/v2/users/${id}`,
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
                body: {
                    name: "mayur gosavi.",
                    email: `qq.123peddana@gmail.com`,
                    gender: "male",
                    status: "inactive"
                }
            }).then(function (res) {
                //cy.log(res)
                expect (res.status).to.eq(200)
               return res.body.id
            }).then(function(id){
                cy.request({
                    method :"DELETE",
                    url :`https://gorest.co.in/public/v2/users/${id}`,
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                      
                    }
                }).then(function(res){
                   // cy.log(res)
                   expect(res.status).to.eq(204)

                })
            })
        })
    })
})