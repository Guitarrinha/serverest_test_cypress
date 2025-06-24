# Projeto de Automação de Testes com Cypress para Serverest

![Status da Build](https://img.shields.io/badge/build-passing-brightgreen)
![Cypress](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)
![JavaScript](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)

## 🚀 Sobre o Projeto

Este repositório contém uma suíte de testes automatizados para a plataforma **Serverest**, servindo como um exemplo de implementação de um framework de testes robusto e de fácil manutenção com Cypress.

O foco principal é a aplicação de padrões de design e arquitetura que garantem a confiabilidade, escalabilidade e legibilidade dos testes, tanto para cenários de UI (End-to-End) quanto de API.

---

## ✨ Padrões e Arquitetura Adotados

A qualidade deste projeto se baseia nos seguintes pilares de arquitetura e design:

### 1. Arquitetura em Camadas (Layered Architecture)
A lógica é organizada em camadas com responsabilidades bem definidas para maximizar o desacoplamento e a reutilização de código.

* **Objects (Page/API):** A camada mais baixa, responsável pela interação direta com a aplicação (seletores de UI ou requisições HTTP). Ex: `ProdutosAPI.js`, `CadastroPage.js`.
* **Actions:** A camada de orquestração (o "cérebro"). Contém os fluxos de teste e a lógica de negócio, combinando chamadas dos `Objects` para realizar uma tarefa completa. Ex: `cadastrarProdutoPelaAPI()`.
* **Step Definitions:** A camada mais alta e "burra". Atua apenas como uma ponte entre o Gherkin (linguagem natural) e as `Actions`, delegando toda a execução.

### 2. BDD (Behavior-Driven Development) com Gherkin
Os cenários de teste são escritos em arquivos `.feature` de forma declarativa e em português, permitindo que pessoas de negócio, QAs e desenvolvedores entendam facilmente o que está sendo testado.

### 3. Geração de Dados Dinâmicos
Utilizamos a biblioteca **Faker.js** para criar dados únicos a cada execução (`dataGenerator.js`). Isso elimina a dependência de uma massa de dados estática e torna os testes verdadeiramente independentes e robustos, evitando falhas por dados duplicados ou já existentes.

### 4. Comandos Customizados do Cypress
Lógicas complexas e repetitivas, como a autenticação, são encapsuladas em comandos customizados (`commands.js`). O comando `cy.obterTokenDeAdmin()` é um exemplo poderoso, que de forma autônoma e resiliente busca ou cria um usuário administrador para obter um token de acesso, tornando qualquer teste autenticado 100% autossuficiente.

### 5. Validação End-to-End Real (Read-After-Write)
Para testes de criação (ex: `POST /produtos`), não confiamos apenas na resposta da primeira requisição. Realizamos uma segunda requisição (`GET`) para consultar o recurso recém-criado e validar se os dados foram persistidos corretamente no banco de dados, garantindo máxima confiança.

### 6. Testes Autolimpantes (Self-Cleaning Tests)
Utilizamos os hooks `After` do Cucumber, combinados com **tags** (`@produtos-api`), para executar rotinas de limpeza (ex: `DELETE /produtos/{_id}`) apenas nos cenários relevantes. Isso garante que os testes não deixem "sujeira" no ambiente, promovendo o isolamento e a confiabilidade da suíte.

---

## 🛠️ Tecnologias Utilizadas

* **Cypress**
* **Cucumber** com `@badeball/cypress-cucumber-preprocessor`
* **Faker.js**
* **Node.js / JavaScript**

---

## 📂 Estrutura de Arquivos

A organização dos arquivos reflete a arquitetura em camadas adotada:

/cypress
├─── apiObjects/       # Classes que encapsulam as requisições HTTP.
├─── e2e/
│   └─── feature/      # Arquivos .feature com os cenários em Gherkin.
├─── support/
│   ├─── actions/      # Orquestração dos fluxos de teste.
│   ├─── pageObjects/  # Mapeamento de elementos e interações de UI.
│   ├─── utils/        # Funções utilitárias (ex: dataGenerator).
│   ├─── commands.js   # Comandos customizados do Cypress.
│   └─── e2e.js        # Arquivo de suporte principal.
│
├─── cypress.config.js # Arquivo de configuração do Cypress.
└─── README.md         # Documentação do projeto.

---

## ⚙️ Instalação e Execução

### Pré-requisitos
* Node.js (v18.x ou superior)
* npm ou yarn

### Instalação
1.  Clone o repositório: `git clone https://seu-repositorio.git`
2.  Navegue até a pasta: `cd nome-do-projeto`
3.  Instale as dependências: `npm install`

### Executando os Testes

* **Abrir a UI do Cypress (Modo Interativo):**
    ```bash
    npx cypress open
    ```
* **Rodar todos os testes no terminal (Modo Headless):**
    ```bash
    npx cypress run
    ```
* **Rodar testes por tags:**
    ```bash
    # Rodar apenas os testes de API marcados com @regression
    npx cypress run --env tags="@api and @regression"
    ```