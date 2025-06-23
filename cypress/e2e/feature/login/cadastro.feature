Feature: Cadastro de Usuários na UI
  Como um novo usuário
  Eu quero me cadastrar na plataforma Serverest
  Para poder acessar as funcionalidades de compra

  @front @regression
  Scenario: Cadastro de um usuário padrão com sucesso
    Given que eu estou na página de cadastro
    When eu preencho os dados de cadastro para um novo usuário "padrão"
    Then o cadastro é realizado com sucesso e o usuário existe no sistema
    And eu devo ser redirecionado para a página "home"

  @front @regression 
  Scenario: Cadastro de um usuário administrador com sucesso
    Given que eu estou na página de cadastro
    When eu preencho os dados de cadastro para um novo usuário "administrador"
    Then o cadastro é realizado com sucesso e o usuário existe no sistema
    And eu devo ser redirecionado para a página "home"
