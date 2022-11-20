///<reference types = "cypress"/>

import { Login } from "../Practice/POM/login"

describe('verify the login functionality', function () {
    let login = new Login()
    it('verify with login with login Credential', function () {
        login.navigate()
        login.Validlogin("standard_user", "secret_sauce")
        //  login.Validlogin("problem_user","secret_sauce")
    })

    it('verify with login with invalid Credential', function () {
        login.navigate()
        login.InValidlogin("adff", "dfgd")
    })
    it('verify with logo', function () {
        login.navigate()
        login.ValidateLogo()
    })
})

