/// <reference types="cypress" />

import userNames from '../../fixtures/userData.json'


beforeEach(() => {
    cy.getAllUsers().as('allUsers')
})



it('call get-all-users and verify', () => {

    const uNames = userNames.names

    cy.get('@allUsers').then(response => {
        const resBody = Cypress.env('Users', response.body);
        expect(resBody.length).to.eq(3)

        const i: Number = 0

        uNames.forEach(name => {
            const names = Cypress._.map(response.body, 'name')
            expect(names[i]).to.eq(name)
            console.log(i + ' - ' + names[i])
            i++

        })
    })
})