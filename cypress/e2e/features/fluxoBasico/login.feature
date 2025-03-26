
Feature: Teste de Login
  
  Scenario: Login bem-sucedido
    Given que estou na página de login
    When insiro usuário e senha corretos
    Then devo ser redirecionado para a página inicial
 

  Scenario: Login com credenciais inválidas
    Given que estou na página de login
    When preencho o campo de e-mail com um e-mail inválido preencho o campo de senha com uma senha inválida
    Then clico no botão de login o sistema exibe uma mensagem de erro informando credenciais inválidas
