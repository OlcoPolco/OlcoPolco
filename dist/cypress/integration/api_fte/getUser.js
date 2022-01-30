"use strict";
/// <reference types="cypress" />
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userOliver_json_1 = __importDefault(require("../../fixtures/userOliver.json"));
const uId = Cypress._.map(userOliver_json_1.default);
describe(['my-feature3'], 'Get user by uId', () => {
    it(['smoke'], 'Call api get-User and verify', () => {
        var i = 0;
        console.log();
        cy.getUser(uId[0]).then(response => {
            const rBody = Cypress._.map(response.body);
            const fBody = Cypress._.map(userOliver_json_1.default);
            rBody.forEach(attribute => {
                // expect(attribute).to.eq.(Cypress._.map(userData)[i])
                expect(attribute).to.eq(fBody[i]);
                i++;
            });
        });
    });
});
