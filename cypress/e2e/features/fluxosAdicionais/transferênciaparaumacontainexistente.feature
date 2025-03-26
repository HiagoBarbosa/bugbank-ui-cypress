Feature: Transferência para uma conta inexistente

  Scenario: Tentativa de transferência para uma conta inexistente
    Given que o usuário está autenticado no sistema bancário
    When o usuário tem saldo suficiente na conta
    Then o usuário tenta transferir R$ 100,00 para a conta 999999-9