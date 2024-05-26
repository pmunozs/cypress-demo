class Login {

    constructor () {
        this.url = '/index.php?controller=authentication&back=my-account'
        this.title = 'My Shop'
    }

    email() {
        return cy.get('#email')
    }

    errorMessage() {
        return cy.get('.alert-danger')
    }

    password() {
        return cy.get('#passwd')
    }

    signIn() {
        return cy.get('#SubmitLogin')
    }

    visit() {
        cy.visit(this.url)
    }
}

module.exports = Login