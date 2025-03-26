Feature: Saque de dinheiro

  Scenario: Tentativa de saque sem saldo suficiente
    Given o usuário está logado e possui saldo insuficiente
    When ele tenta sacar um valor maior que o saldo disponível
    # Then deve ser exibida uma mensagem de erro informando a falta de saldo
