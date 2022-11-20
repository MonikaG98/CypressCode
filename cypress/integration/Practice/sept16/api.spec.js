///<reference types = "cypress"/>

describe("validate the API", function () {
    it("verify the GET API", function () {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=1"
        }).then(function (res) {
            expect(res.status).to.eq(200)
        })
    })

    it("verify the POST request", function () {
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body: {
                "name": "morpheus",
                "job": "leader"
            }
        }).then(function (res) {
            expect(res.status).to.eq(201)
        })
    })


    it("verify the PUT request", function () {
        cy.request({
            method: "PUT",
            url: "https://reqres.in/api/users/2",
            body: {
                "name": "morpheus",
                "job": "zion resident",
            }
        }).then(function(res){
            expect(res.status).to.eq(200)
        })
    })

    it("verify the DELETE request",function(){
        cy.request({
          method :"DELETE",
          url :"https://reqres.in/api/users/2",
         
        }).then(function(res){
            expect(res.status).to.eq(204)
        })
    })

})


//paypal token
//client id = AX0JrlbdaD58WTkT2ibM6keXsLW7R5dzViqIeYMGFKMOAM1_Q8XYaOxTNsngR3SJUOr6qdrKQFVjqEwi

//secret = EHKyZyTQKJE3xKwj7o8RjxkclYEQAymGfPJwjcINsnOZMqmjfoGRrlO9KrWAJOHIGbBbgkoEY5qcNejE

// token = A21AAL9fj7fpnc3lVlKkdg1uJp-bcjQiYZhZcXgyKmZxRo7oXY8Tzj4ScYItMFyTmb4_jnVGnUV5QUfa_4Jgf4iYXpUEDzfiw

