/// <reference types="cypress" />

Cypress.Commands.add('getAllUsers', () => {
    cy.request({
        method: 'GET',
        url: '/get-all-users'
    })
})

Cypress.Commands.add('crtUser', (fixtureBody) => {
    cy.request({
        method: 'PUT',
        url: '/crt-user',
        body: fixtureBody
    })
})