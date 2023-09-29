//<reference types="Cypress"/>

describe('Mercado Livre Brasil - Frete Grátis no mesmo dia', function () {

    beforeEach(function () {
        cy.visit('https://www.mercadolivre.com.br/')
    }
    )

    it('Verifica o título da aplicação', function () {
        cy.title().should('be.equal', 'Mercado Livre Brasil - Frete Grátis no mesmo dia')
    })


    it.only('Valida campo CEP: Númerico', function () {
        cy.get('body > header > div > div.nav-header-plus-cp-wrapper.nav-area.nav-bottom-area.nav-left-area > div > a').click()
        cy.get('#addressesForm > div > div > div > div.andes-form-control.andes-form-control--textfield.andes-form-control--default.zip-code__textfield > label > div > input').should('be.visible').type('ABC')
        cy.get('#addressesForm > div > div > div > div.andes-form-control.andes-form-control--textfield.andes-form-control--default.zip-code__textfield > label > div > input').should('have.value', 'ABC')
    }
    )

    it('Atualiza CEP do Visitante', function () {
        cy.get('body > header > div > div.nav-header-plus-cp-wrapper.nav-area.nav-bottom-area.nav-left-area > div > a').click()
        cy.get('#addressesForm > div > div > div > div.andes-form-control.andes-form-control--textfield.andes-form-control--default.zip-code__textfield > label > div > input').should('be.visible').type('93510210')
        cy.get('#addressesForm > div > div > div > div.andes-form-control.andes-form-control--textfield.andes-form-control--default.zip-code__textfield > label > div > div > button > span').click()
    }
    )
})
