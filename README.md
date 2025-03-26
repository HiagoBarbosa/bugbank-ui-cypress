Cypress 12 com Cucumber - Automação de Testes

1. Passos para instalar as dependências
1.1. Pré-requisitos
Antes de começar, certifique-se de ter o Node.js instalado na sua máquina. Se não tiver, instale-o a partir do site oficial.

1.2. Instalando as dependências
    1 Clone o repositório para sua máquina local:
        git clone https://github.com/seu-usuario/seu-repositorio.git
        cd seu-repositorio

    2 Instale as dependências do projeto:

    Execute o comando abaixo na raiz do projeto:
        npm install

Isso instalará todas as dependências, incluindo o Cypress, Cucumber e outros pacotes necessários para o funcionamento do projeto.

Dependências importantes:

cypress: Framework de testes E2E.

@badeball/cypress-cucumber-preprocessor: Pré-processador para integrar o Cucumber com o Cypress.

cypress-allure-plugin: Para gerar relatórios Allure.

multiple-cucumber-html-reporter: Para gerar relatórios HTML.

2. Como realizar a execução dos testes
2.1. Executando os testes com Cypress
Para executar os testes usando Cypress, basta rodar o seguinte comando:

    npx cypress open

Esse comando abrirá a interface do Cypress, onde você pode selecionar e executar os testes interativamente.

2.2. Executando os testes com tags específicas
Se você deseja rodar apenas os testes com uma tag específica (exemplo: @smoke), execute:
    npx cypress-tags run --env TAGS='@smoke' --browser chrome --headless --spec "cypress/e2e/features/**/*.feature"


--env TAGS='@smoke': Filtra os testes pela tag @smoke.

--browser chrome: Executa os testes no navegador Chrome.

--headless: Executa os testes de forma headless (sem abrir a interface gráfica do navegador).

--spec "cypress/e2e/features/**/*.feature": Define os arquivos .feature a serem executados.

2.3. Executando testes com o comando npx cypress-tags
Se você não quiser usar a interface gráfica do Cypress, pode executar os testes diretamente no terminal:
    npx cypress run --spec "cypress/e2e/features/**/*.feature"

3. Como gerar e acessar o relatório de execução
3.1. Relatório Allure
Instale o Allure (se ainda não estiver instalado) para gerar o relatório:

    npm install allure-commandline --save-dev

Após a execução dos testes, execute o comando abaixo para gerar o relatório do Allure:
    npx allure generate --clean

Para abrir o relatório gerado:
    npx allure open

3.2. Relatório HTML
Se preferir um relatório HTML, o projeto utiliza o multiple-cucumber-html-reporter para gerar relatórios bonitos e legíveis.

Após a execução dos testes, o relatório será gerado em cypress/reports/cucumber-html-report.html.

Abra o arquivo gerado em um navegador para visualizar o relatório.

4. Explicação da estrutura da arquitetura do projeto
4.1. Estrutura de pastas
O projeto segue uma estrutura organizada para facilitar a manutenção e escalabilidade dos testes.

.
├── cypress
│   ├── e2e
│   │   ├── features
│   │   │   ├── login.feature
│   │   │   └── dashboard.feature
│   │   ├── step_definitions
│   │   │   ├── login.js
│   │   │   └── dashboard.js
│   │   └── support
│   │       └── commands.js
├── node_modules
├── package.json
├── cypress.json
└── README.md

4.2. Descrição das pastas e arquivos principais
cypress/e2e/features/: Contém os arquivos .feature que definem os cenários de teste utilizando a linguagem Gherkin.

Exemplo: login.feature, dashboard.feature.

cypress/e2e/step_definitions/: Contém os arquivos de definições de passos, onde o código JavaScript interage com os elementos da interface do usuário.

Exemplo: login.js, dashboard.js.

cypress/support/: Contém arquivos de suporte e comandos personalizados, como commands.js, onde podem ser definidos comandos reutilizáveis para os testes.

package.json: Contém todas as dependências e scripts do projeto.

cypress.json: Arquivo de configuração do Cypress.

4.3. Como escrever um teste com Cucumber
Crie ou edite um arquivo .feature dentro da pasta cypress/e2e/features/:

Exemplo (login.feature):

@smoke
Feature: Teste de Login

  Scenario: Login bem-sucedido
    Given que estou na página de login
    When insiro usuário e senha corretos
    Then devo ser redirecionado para a página inicial

