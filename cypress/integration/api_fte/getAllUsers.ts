/// <reference types="cypress" />

import userNames from '../../fixtures/userData.json'


beforeEach(() => {
    cy.getAllUsers().as('allUsers')
})


describe(['my-feature2'],'Get all users', () => {
    it(['smoke'],'Call get-all-users and verify', () => {

        const uNames = userNames.names

        cy.get('@allUsers').then(response => {
            const resBody = Cypress.env('Users', response.body);
            expect(resBody.length).to.eq(3)

            var i: Number = 0

            uNames.forEach(name => {
                const names = Cypress._.map(response.body, 'name')
                expect(names[i]).to.eq(name)
                console.log(i + ' - ' + names[i])
                i++
            })
        })
    })
})