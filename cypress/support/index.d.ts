/// <reference types='cypress-tags' />

declare namespace Cypress{
    interface Chainable{
        getAllUsers()
        crtUser(fixtureBody: json)
        dltUser(uId: String)
        getUser(uId: String)
    }
}