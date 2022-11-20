///<reference types = "cypress"/>
//Test scenario
describe('TS_0 verify the login functionality', function () {
    it('TS_0 check the valid credential', function () {
        //visit the page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //element find(username) and type username
        cy.get('input[name="username"]').type('Admin')

        //element fint(password)and type password
        cy.get('input[name="password"]').type('admin123')

        //click on login button
        cy.get('button[type="submit"]').click()

        //validate the any element on dashboard
        cy.get('img[alt="client brand banner"]').should('be.visible')
           
    })
    it('TS_0 check the valid credential', function () {
        //visit the page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')

        //element find(username) and type incorrect username
        cy.get('input[name="username"]').type('adminaaa')

        //element fint(password)and type  incorrect password
        cy.get('input[name="password"]').type('aassss')

        //click on login button
        cy.get('button[type="submit"]').click()

        //validate the correct alert msg to user
        cy.get('p[class ="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text','Invalid credentials')
    })
})
 


