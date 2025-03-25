Feature: Teste de Login

  Scenario: Login bem-sucedido
    Given que estou na página de login
    When insiro usuário e senha corretos
    Then devo ser redirecionado para a página inicial

Feature: Login no sistema

  Scenario: Login com credenciais inválidas
    Given que estou na página de login
    When preencho o campo de e-mail com um e-mail inválido
    And preencho o campo de senha com uma senha inválida
    And clico no botão de login
    Then o sistema exibe uma mensagem de erro informando credenciais inválidas
