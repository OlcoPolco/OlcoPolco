declare namespace Cypress{
    interface Chainable{
        getAllUsers(): Chainable<Subject>;
    }
}