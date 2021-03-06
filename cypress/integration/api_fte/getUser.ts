/// <reference types="cypress" />

import * as userData from "../../fixtures/userOliver.json";

const uId: any = Cypress._.map(userData)

describe(['my-feature3'],'Get user by uId', () => {
    it(['smoke'],'Call api get-User and verify', () => {

        var i = 0

        console.log()

        cy.getUser(uId[0]).then((response:any)=> {

            const rBody = Cypress._.map(response.body)
            const fBody = Cypress._.map(userData)

            rBody.forEach(attribute => {
                // expect(attribute).to.eq.(Cypress._.map(userData)[i])
                expect(attribute).to.eq(fBody[i])
                i++
            });
        })
    })
})