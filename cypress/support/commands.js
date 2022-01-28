/// <reference types="cypress" />

Cypress.Commands.add('getAllUsers', () => {
    cy.request({
        method: 'GET',
        url: '/get-all-users'
    })
})