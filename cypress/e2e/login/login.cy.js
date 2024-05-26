import Login from '../../support/objects/Login'
import { faker } from '@faker-js/faker';

const login = new Login()

describe('User login', () => {
    beforeEach(() => {
        login.visit();
    })

    it('displays error message if e-mail is blank or invalid', () => {
        login.signIn().click()
        login.errorMessage().should('be.visible').should('contain.text', 'An email address required')
        login.email().type('fake@email')
        login.signIn().click()
        login.errorMessage().should('be.visible').should('contain.text', 'Invalid email address')
    })

    it('displays error message if password is blank or invalid', () => {
        login.email().type(faker.internet.email())
        login.signIn().click()
        login.errorMessage().should('be.visible').should('contain.text', 'Password is required')
    })

    it('displays error message if authentication failed', () => {
        login.email().type(faker.internet.email())
        login.password().type(faker.internet.password())
        login.signIn().click()
        login.errorMessage().should('be.visible').should('contain.text', 'Authentication failed')
    })
})