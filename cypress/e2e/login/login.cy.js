import { faker } from '@faker-js/faker';

describe('User login', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.get('.login').click()
        cy.url().should('include', 'my-account')
    })

    it('should display error message if e-mail is blank or invalid', () => {
        cy.get('#SubmitLogin').click()
        cy.get('.alert-danger').should('be.visible').should('contain.text', 'An email address required')
        cy.get('#email').type('fake@email')
        cy.get('#SubmitLogin').click()
        cy.get('.alert-danger').should('be.visible').should('contain.text', 'Invalid email address')
    })

    it('should display error message if password is blank or invalid', () => {
        cy.get('#email').type(faker.internet.email())
        cy.get('#SubmitLogin').click()
        cy.get('.alert-danger').should('be.visible').should('contain.text', 'Password is required')
    })
})