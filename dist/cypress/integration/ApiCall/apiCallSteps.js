"use strict";
/// <reference types="cypress" />
beforeEach(() => {
});
it('call get-all-users', () => {
    cy.request({
        method: 'GET',
        url: '/get-all-users'
    }).as('userDetails');
});
// cy.get('bodys'[0]).should('have.length', 3)
const uNames = ['Ivana', 'Dominik', 'Ivana'];
// cy.wait('@userDetails').then( user => {
//     const userNames = Cypress._.map(user.response.body.name)
//     expect(userNames).to.deep.eq(uNames)
// })
