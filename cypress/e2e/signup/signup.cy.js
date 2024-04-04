describe('User sign up', () => {
  it('displays error message when user already exists', () => {
    cy.visit('http://www.automationpractice.pl/')
    cy.get('.login').click()
    cy.get('#email_create').type('demo@test.com')
    cy.get('#SubmitCreate').click()
    cy.get('#create_account_error').should('be.visible')
  })
})