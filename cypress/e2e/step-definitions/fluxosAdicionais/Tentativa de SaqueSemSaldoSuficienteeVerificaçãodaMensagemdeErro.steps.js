import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("o usuário está logado e possui saldo insuficiente", () => {
  cy.visit("http://localhost:3000/");
  cy.get('.ihdmxA').click();
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
  cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({ force: true });
  cy.get('#modalText').should('contain.text', 'foi criada com sucesso');
  cy.get('#btnCloseModal').click({ force: true });
  cy.get('.otUnI').should('be.visible');
  cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type("meuUsuario@teste.com");
  cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type("minhaSenha");
  cy.get('.otUnI').click();
  cy.get('#btn-SAQUE').click();
});

When("ele tenta sacar um valor maior que o saldo disponível", () => {

});