import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página de login", () => {
  cy.visit("http://localhost:3000/");
});

When("insiro usuário e senha corretos", () => {
  cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type("meuUsuario@teste.com");
  cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type("minhaSenha");
  cy.get('.otUnI').click();
});

Then("devo ser redirecionado para a página inicial", () => {
  cy.url().should("include", "/dashboard");
});
