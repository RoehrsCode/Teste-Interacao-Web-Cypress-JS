//<reference types="Cypress"/>

describe('Mercado Livre Brasil - Frete Grátis no mesmo dia', function () {

    beforeEach(function () {
        cy.visit('https://www.mercadolivre.com.br/')
    }
    )

    it('Pesquisa um produto', function () {
        const text = 'Pneu de Carro Aro 35 Cor Prata Fiat 2004, 2005, 2006'
        cy.get('#cb1-edit').click().type(text, { delay: 0 }).should('have.value', text)
        cy.get('body > header > div > div.nav-area.nav-top-area.nav-center-area > form > button > div').click()
    }
    )
})
