/// <reference types="cypress" />

import fixtureBody from '../../fixtures/createNewUser.json'

const userData = ['Pepan', 'Praha', 'Male', 99]

describe(['my-feature1'],'Create and delete user', () => {
    it(['E2E'],'Call crt-user then dlt-User with verifications', () => {
        cy.crtUser(fixtureBody).then(response => {
            const rBody = Cypress._.map(response.body)
            const uId = rBody[4]
            const name = rBody[0]

            var i = 0

            userData.forEach(attribute => {
                expect(attribute).to.eq(rBody[i])
                i++

            })

            expect(fixtureBody.name).to.eq(name)

            cy.log('Created user ' + uId)

            cy.log('Prepare of deletion of user ' + uId)

            cy.dltUser(uId).then(response => {
                expect(response.body).to.eq('Succesfully Deleted the User')
            })
        })
    })
})