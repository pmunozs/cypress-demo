class SignUp {
    constructor () {
        this.url = '/index.php?controller=authentication&back=my-account'
        this.title = 'My Shop'
    }

    email() {
        return cy.get('#email')
    }

    emailCreate() {
        return cy.get('#email_create')
    }

    errorMessage() {
        return cy.get('#create_account_error')
    }
    
    firstname() {
        return cy.get('#customer_firstname')
    }

    lastname() {
        return cy.get('#customer_lastname')
    }

    password() {
        return cy.get('#passwd')
    }
    
    submit() {
        return cy.get('#submitAccount')
    }

    submitCreate() {
        return cy.get('#SubmitCreate')
    }

    successMessage() {
        return cy.get('.alert-success')
    }

    visit() {
        cy.visit(this.url)
    }
}

module.exports = SignUp