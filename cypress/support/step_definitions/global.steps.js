import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Then('eu devo ser redirecionado para a página {string}', (pageName) => {
  cy.url().should('include', `/${pageName}`);
});

Then('eu devo permanecer na página de {string}', (pageName) => {
    cy.url().should('include', `/${pageName}`);
}) 