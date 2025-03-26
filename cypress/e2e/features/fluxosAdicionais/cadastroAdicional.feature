Feature: Teste de Cadastro invalido

  Scenario: cadastro invalido
    Given que estou na página de cadastros
    When preencho os campos obrigatórios com informações inválidas
    Then clico no botão de cadastro o sistema exibe uma mensagem de erro