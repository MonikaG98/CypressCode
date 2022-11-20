///<reference types = "cypress"/>

//test scenario

describe('TS_0 verify the login functionality',function(){
    it('TC_01 check with valid credential',function(){
//visit the page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//element find (username) and type username
        cy.get('input[name="username"]').type('Admin')
//element find (password) and type password
        cy.get('input[name="password"]').type('admin123')
//click on login button
        cy.get('button[type="submit"]').click()
//validate the any element on dashboard
        cy.get('')        
    })

    it('TC_01 check with invalid credential',function(){
//visit the page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')       
//element find(username) and type username
        cy.get('input[name="username"]').type('Adminaa')
//element find(password) and type password
        cy.get('input[name="password"]').type('admindfdbnffd')
//click on login buton
        cy.get('button[type="submit"]').click()
//validate the correct alert msg to user
        cy.get('')                                 
    })



})


