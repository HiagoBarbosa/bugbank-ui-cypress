import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const baseUrl = 'http://localhost:3000/';

Given('que estou na página de cadastros', () => {
  cy.visit(baseUrl);
  cy.get('.ihdmxA').click();
});


When('preencho os campos obrigatórios com informações inválidas', () => {
    cy.get(':nth-child(2) > .input__label').should('have.text', 'E-mail');
    cy.get(':nth-child(2) > .input__default').click({ force: true });
    cy.get(':nth-child(2) > .input__default').type('email_invalido', { force: true }); // Email inválido
    
    cy.get(':nth-child(3) > .input__label').should('have.text', 'Nome');
    cy.get(':nth-child(3) > .input__default').click({ force: true });
    cy.get(':nth-child(3) > .input__default').type('u', { force: true }); // Nome muito curto
    
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__label').should('have.text', 'Senha');
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type("123", { force: true }); // Senha fraca
    
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__label').should('have.text', 'Confirmação senha');
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type("321", { force: true }); // Senhas não coincidem
    
    cy.get('.styles__ToggleText-sc-7fhc7g-3').should('have.text','Criar conta com saldo ?');
    cy.get('#toggleAddBalance').click({ force: true });
  });
  
  
  Then('clico no botão de cadastro o sistema exibe uma mensagem de erro', () => {
    cy.get('.kOeYBn > .input__warging').should('have.text','Formato inválido');
  });
  