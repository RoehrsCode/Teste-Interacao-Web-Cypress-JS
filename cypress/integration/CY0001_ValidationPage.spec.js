//<reference types="Cypress"/>

describe('Mercado Livre Brasil - Frete Grátis no mesmo dia', function () {
    it('Verifica o título da aplicação', function () {
        cy.visit('https://www.mercadolivre.com.br/')
        cy.title().should('be.equal', 'Mercado Livre Brasil - Frete Grátis no mesmo dia')
    })
})