import { faker } from '@faker-js/faker';

describe('User sign up', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('.login').click()
    cy.url().should('include', 'my-account')
  })

  it('creates new account', () => {
    const email = faker.internet.email()
    
    cy.get('#email_create').type(email)
    cy.get('#SubmitCreate').click()
    cy.url().should('include', 'account-creation')
    cy.get('#customer_firstname').type(faker.person.firstName())
    cy.get('#customer_lastname').type(faker.person.lastName())
    cy.get('#email').should('have.value', email)
    cy.get('#passwd').type(faker.internet.password())
    cy.get('#submitAccount').click()
    cy.url().should('include', 'my-account')
    cy.get('.alert-success').should('be.visible').should('contain.text', 'Your account has been created.')
  })

  it('displays error message when user already exists', () => {
    cy.get('#email_create').type('demo@test.com')
    cy.get('#SubmitCreate').click()
    cy.get('#create_account_error').should('be.visible').should('contain.text', 'An account using this email address has already been registered')
  })
})