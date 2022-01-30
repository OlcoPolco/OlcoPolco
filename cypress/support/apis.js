/// <reference types="cypress" />

Cypress.Commands.add('getAllUsers', () => {
    cy.request({
        method: 'GET',
        url: '/get-all-users'
    })
})

Cypress.Commands.add('crtUser', (fixtureBody) => {
    cy.request({
        method: 'POST',
        url: '/crt-user',
        body: fixtureBody
    })
})

Cypress.Commands.add('dltUser', (uId) => {
    cy.request({
        method: 'DELETE',
        url: '/dlt-user/' + uId
    })
})

Cypress.Commands.add('getUser', (uId) => {
    cy.request({
        method: 'GET',
        url: '/get-User/' + uId
    })
})