import SignUp from '../../support/objects/SignUp'
import { faker } from '@faker-js/faker';

const signup = new SignUp()

describe('User sign up', () => {  
  beforeEach(() => {
    signup.visit()
    cy.url().should('include', 'my-account')
  })

  it('creates new account', () => {
    const user_email = faker.internet.email()
    
    signup.emailCreate().type(user_email)
    signup.submitCreate().click()
    cy.url().should('include', 'account-creation')
    signup.firstname().type(faker.person.firstName())
    signup.lastname().type(faker.person.lastName())
    signup.email().should('have.value', user_email)
    signup.password().type(faker.internet.password())
    signup.submit().click()
    cy.url().should('include', 'my-account')
    signup.successMessage().should('be.visible').should('contain.text', 'Your account has been created.')
  })

  it('displays error message when user already exists', () => {
    signup.emailCreate().type('demo@test.com')
    signup.submitCreate().click()
    signup.errorMessage().should('be.visible').should('contain.text', 'An account using this email address has already been registered')
  })
})