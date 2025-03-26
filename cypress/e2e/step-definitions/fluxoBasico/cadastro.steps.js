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
  cy.wait(2000);
});

Then('clico no botão de cadastro o sistema exibe uma mensagem de sucesso  o usuário é redirecionado para a tela de login', () => {
  cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0', { timeout: 5000 }).should('be.visible'); 
  cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({ force: true });
  cy.wait(2000);
  cy.get('#modalText').should('contain.text', 'foi criada com sucesso');
  cy.get('#btnCloseModal').click({ force: true });
  cy.get('.otUnI').should('be.visible');
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
  cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({ force: true });
  cy.get('#modalText').should('contain.text', 'Erro ao criar conta'); // Mensagem de erro esperada
  cy.get('#btnCloseModal').click({ force: true });
});
