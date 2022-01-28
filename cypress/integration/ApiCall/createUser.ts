/// <reference types="cypress" />

import fixtureBody from '../../fixtures/createNewUser.json'



describe('Call and api crt-user and assert response of it', () => {
    it('Call crt-user and verify', () => {
        cy.crtUser(fixtureBody);
    })
})