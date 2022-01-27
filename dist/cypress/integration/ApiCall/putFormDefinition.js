"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AIXM_API_Helper_1 = __importDefault(require("../../../fixtures/AIXM_F_Management/AIXM_API_Helper"));
describe('Edit form definiton', () => {
    const APIHELPER = new AIXM_API_Helper_1.default();
    var URL = Cypress.env('AIXM_DEV');
    var formDefinitionId;
    var formDefinitionName;
    var initJson;
    before('prepare element', () => {
        //Prepare body for POST request
        cy
            .fixture('./AIXM_F_Management/dataproviders/formDefinition.json')
            .then((json) => {
            json.formName = "automatedFormDefinition-" + Date.now();
            initJson = json;
        })
            .then((json) => {
            //Request to create form definiton
            cy
                .request({
                method: 'POST',
                url: URL + APIHELPER.getFormDefinitionsPath(),
                body: json
            })
                .then((response) => {
                console.log(response);
                expect(response.status).eq(201);
                expect(response.isOkStatusCode).is.true;
                expect(response.body.feature).eq(initJson.feature);
                formDefinitionId = response.body.id;
                formDefinitionName = response.body.formName;
            });
        });
    });
    it('Edit form definition', () => {
        //prepare body for PUT request
        cy
            .fixture('./AIXM_F_Management/dataproviders/formDefinition-PUT.json')
            .then((jsonPUT) => {
            jsonPUT.formName = "automatedFormDefinition-" + Date.now();
        })
            .then((jsonPUT) => {
            //Request to update form definiton
            cy
                .request({
                method: 'PUT',
                url: URL + APIHELPER.getFormDefinitionsByIdPath() + formDefinitionId,
                body: jsonPUT
            })
                .then((responsePUT) => {
                expect(responsePUT.status).eq(200);
                expect(responsePUT.isOkStatusCode).is.true;
                expect(responsePUT.body.feature).eq(jsonPUT.feature);
                expect(responsePUT.body.formName).eq(jsonPUT.formName);
                expect(responsePUT.body.formDescription).eq(jsonPUT.formDescription);
            });
        });
    });
    after('delete updated object', () => {
        cy.then(() => {
            cy.request({
                method: 'DELETE',
                url: URL + APIHELPER.getFormDefinitionsByIdPath() + formDefinitionId
            })
                .then((response2) => {
                expect(response2.status).eq(204);
            });
        });
    });
});
