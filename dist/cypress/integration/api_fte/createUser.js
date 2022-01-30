"use strict";
/// <reference types="cypress" />
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createNewUser_json_1 = __importDefault(require("../../fixtures/createNewUser.json"));
describe('Call and api crt-user and assert response of it', () => {
    it('Call crt-user and verify', () => {
        cy.crtUser(createNewUser_json_1.default);
    });
});
