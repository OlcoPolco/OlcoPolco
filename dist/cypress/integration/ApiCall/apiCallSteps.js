"use strict";
/// <reference types="cypress" />
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userData_json_1 = __importDefault(require("../../fixtures/userData.json"));
beforeEach(() => {
    cy.getAllUsers().as('allUsers');
});
it('call get-all-users and verify', () => {
    const uNames = userData_json_1.default.names;
    cy.get('@allUsers').then(response => {
        const resBody = Cypress.env('Users', response.body);
        expect(resBody.length).to.eq(3);
        const i = 0;
        uNames.forEach(name => {
            const names = Cypress._.map(response.body, 'name');
            expect(names[i]).to.eq(name);
            console.log(i + ' - ' + names[i]);
            i++;
        });
    });
});
