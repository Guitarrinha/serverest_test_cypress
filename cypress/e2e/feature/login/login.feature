Feature: Funcionalidade de Login

  Para acessar as áreas restritas da aplicação
  Como um usuário registrado
  Eu quero poder fazer login de forma segura e eficiente

  @smoke @regression
  Scenario: Login bem-sucedido com credenciais válidas
    Given que estou na pagina de login
    When eu preencho o campo "usuário" e "senha" com credenciais válidas
    And eu clico no botão "Entrar"
    Then eu devo ser redirecionado para a página "home"
    And eu devo ver uma mensagem de bem vindo com o nome do usuário