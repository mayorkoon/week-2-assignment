// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
// cypress/support/commands.js

Cypress.Commands.add('login', () => {
    // Load test data from fixture
    cy.fixture('example').then((data) => {
      // Perform login action
      cy.clearCookies()
      cy.visit('https://www.automationexercise.com')
      cy.contains(' Signup / Login').click();
      cy.get('input[placeholder="Email Address"]').eq(0).type(data.randomEmail);
      cy.get('input[placeholder="Password"]').type('Mayomikun@');
      cy.get('button[data-qa="login-button"]').click();
      // Wait for login success message
      cy.contains(' Logged in as ').should('be.visible');
    });
  });  
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })