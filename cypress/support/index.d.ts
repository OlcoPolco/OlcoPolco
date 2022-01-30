/// <reference types='cypress-tags' />

declare namespace Cypress{
    interface Chainable{
        getAllUsers(): Chainable<Object>
        crtUser(fixtureBody: json): Chainable<Object>
        dltUser(uId: String): Chainable<Object>
        getUser(uId: String): Chainable<Object>
    }
}