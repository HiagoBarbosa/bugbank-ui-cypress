import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que o usuário está autenticado no sistema bancário", () => {
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
  cy.get('#toggleAddBalance').click({ force: true })
  cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({ force: true });
  cy.get('#modalText').should('contain.text', 'foi criada com sucesso');
  cy.get('#btnCloseModal').click({ force: true });
  cy.get('.otUnI').should('be.visible');
  cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type("meuUsuario@teste.com");
  cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type("minhaSenha");
  cy.get('.otUnI').click();
});

When("o usuário tem saldo suficiente na conta", () => {
    cy.wait(2000);
    cy.get('#textBalance > span')
    .should('be.visible') // Aguarda o elemento estar visível
    .invoke('text')
    .then((text) => {
      cy.log('Texto capturado:', text); // Log para depuração
  
      if (!text.trim()) {
        throw new Error('O elemento está vazio! Verifique se o saldo foi carregado corretamente.');
      }
  
      const numericValue = parseFloat(text.replace(/[^\d,]/g, '').replace(',', '.'));
      cy.log('Valor numérico:', numericValue); // Log para depuração
      expect(numericValue).to.be.greaterThan(0);
    });

    cy.get('#btn-TRANSFERÊNCIA').click({ force: true });
});

Then("o usuário tenta transferir R$ 100,00 para a conta 999999-9", () => {
    cy.wait(2000);
    cy.get(':nth-child(1) > .input__label').should('have.text', 'Número da conta');
    cy.get(':nth-child(1) > .input__default').type("999999-9", { force: true });
    cy.get('.account__data > :nth-child(2) > .input__label').should('have.text', 'Dígito');
    cy.get('.account__data > :nth-child(2) > .input__default').type("9", { force: true });
    cy.get('.styles__ContainerFormTransfer-sc-1oow0wh-0 > :nth-child(2) > .input__label').should('have.text', 'Valor da transferência');
    cy.get('.styles__ContainerFormTransfer-sc-1oow0wh-0 > :nth-child(2) > .input__default').type("100", { force: true });
    cy.get(':nth-child(3) > .input__label').should('have.text', 'Descrição');
    cy.get(':nth-child(3) > .input__default').type("1Teste00", { force: true });
    
    cy.get('.style__ContainerButton-sc-1wsixal-0').click({ force: true });

    cy.get('#modalText').should('have.text', 'Conta inválida ou inexistente');

    cy.get('#btnCloseModal').click({ force: true })
});
