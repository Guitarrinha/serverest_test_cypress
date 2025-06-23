Feature: Funcionalidade de Login

  Para acessar as áreas restritas da aplicação
  Como um usuário registrado
  Eu quero poder fazer login de forma segura e eficiente

  @regression
  Scenario: Login bem-sucedido com credenciais válidas
    Given que estou na pagina de login
    When eu preencho o campo usuário e senha com "credenciais válidas"
    And eu clico no botão "Entrar"
    Then eu devo ser redirecionado para a página "home"
    And eu devo ver uma mensagem de bem vindo com o nome do usuário

  @regression
  Scenario: Tentativa de login com usuário inexistente
    Given que estou na pagina de login
    When eu preencho o campo usuário e senha com "credenciais inexistentes"
    And eu clico no botão "Entrar"
    Then eu devo ver a mensagem de erro "Email e/ou senha inválidos"
    And eu devo permanecer na página de "login"

  