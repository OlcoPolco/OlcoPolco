/// <reference types="cypress" />

import userNames from '../../fixtures/userData.json'


beforeEach(() => {
    cy.getAllUsers().as('allUsers')
})


describe(['my-feature2'],'Get all users', () => {
    it(['smoke'],'Call get-all-users and verify', () => {

        const uNames:any = userNames.names

        cy.get('@allUsers').then((response:any) => {
            expect(response.body.length).to.eq(3)

            var i:any = 0

            uNames.forEach((name:any) => {
                const names = Cypress._.map(response.body, 'name')
                expect(names[i]).to.eq(name)
                console.log(i + ' - ' + names[i])
                i++
            })
        })
    })
})