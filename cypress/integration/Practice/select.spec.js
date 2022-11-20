///<reference types = "cypress"/>



describe('Verify the dropdown list', function () {
    it('verify the drop-down one', function () {
        //Arrange
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //Action
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('Button[type="submit"]').click()
        //Assert
        cy.get('img[alt="client brand banner"]').should('be.visible')

    })

    it('Verify the drop-drown one', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //Action
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        //cy.contains('login')
        cy.contains('button', 'Login').click()
        //Assert
        cy.get('img[alt="client brand banner"]').should('be.visible')
    })

    it('Verify the drop-down one', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.contains('button', 'Login').click()
        //cy.get('img[alt="client brand banner"]').should('be.visible')


        //Implicit Assertion
        cy.contains('Employee Information').should('be.visible')
        cy.get('h5[class]')
            .should('be.visible')
            .and('have.text', 'Employee Information')

        //Explicit Assertion
        cy.get('h5[class]').then(function (el) {
            expect(el.text()).to.equal('Employee Information');
        })
    })

    it.only('verify the multiple checkbox with checked() by passing array parameter', function () {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[type="checkbox"]').check('option-1', 'option-2', 'option-3', 'option-4')
    })

    it('Verify the functionality of select dropdown', function () {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[type=checkbox]').check(['option-1', 'option-2', 'option-3', 'option-4'])
    })

    it('Verify the select functionality via text',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdown-menu-1').select('Python').should('have.value','python')
    })

    it('verify the select functionality via attribute',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdown-menu-1').select('python').should('have.value','Python')
    })
})






















