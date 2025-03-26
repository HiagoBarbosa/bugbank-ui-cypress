Feature: Teste de Cadastro

  Scenario: Cadastro de usuário com sucesso
    Given que estou na página de cadastro
    When preencho os campos obrigatórios com informações válidas
    Then clico no botão de cadastro o sistema exibe uma mensagem de sucesso  o usuário é redirecionado para a tela de login
  
