export class Login {

    elements = {
        username: "#user-name",
        password: "#password",
        login: "#login-button",
        validationerror: ".error-button",
        logo: ".login_logo"
    }

    navigate() {
        cy.visit('https://www.saucedemo.com/')
    }

    Validlogin(username, password) {
        cy.get(this.elements.username).type(username)
        cy.get(this.elements.password).type(password)
        cy.get(this.elements.login).click()
        cy.url().should('contain', 'inventory')

    }
    InValidlogin(username, password) {
        cy.get(this.elements.username).type(username)
        cy.get(this.elements.password).type(password)
        cy.get(this.elements.login).click()
        cy.get(this.elements.validationerror).should('be.visible')
    }
    ValidateLogo() {
        cy.get(this.elements.logo).should('be.visible')
    }
}
