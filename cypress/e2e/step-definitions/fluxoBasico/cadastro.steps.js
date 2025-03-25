import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const baseUrl = 'http://localhost:3000/';

Given('que estou na página de cadastro', () => {
  cy.visit(baseUrl);
  cy.get('.ihdmxA').click();
});

When('preencho os campos obrigatórios com informações válidas', () => {
  cy.get(':nth-child(2) > .input__label').should('have.text', 'E-mail');
  cy.get(':nth-child(2) > .input__default').click({ force: true });
  cy.get(':nth-child(2) > .input__default').type('meuUsuario@teste.com', { force: true });
  cy.get(':nth-child(3) > .input__label').should('have.text', 'Nome');
  cy.get(':nth-child(2) > .input__default').click({ force: true });
  cy.get(':nth-child(3) > .input__default').type('usuario', { force: true });
  cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__label').should('have.text', 'Senha');
  cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type("minhaSenha", { force: true });
  cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__label').should('have.text', 'Confirmação senha');
  cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type("minhaSenha", { force: true });
  cy.get('.styles__ToggleText-sc-7fhc7g-3').should('have.text','Criar conta com saldo ?');
  cy.get('#toggleAddBalance').click({ force: true })

});

When('clico no botão de cadastro', () => {
  cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({ force: true });
});

Then('o sistema exibe uma mensagem de sucesso', () => {
  cy.get('#modalText').should('contain.text', 'foi criada com sucesso');
  cy.get('#btnCloseModal').click({ force: true });
});

Then('o usuário é redirecionado para a tela de login', () => {
  cy.get('.otUnI').should('be.visible');
});
