Feature: API - Cadastro de Produtos
  Como um administrador do sistema
  Eu quero cadastrar novos produtos via API
  Para gerenciar o estoque

  @api @regression @novo_produto
  Scenario: Cadastro de um produto com sucesso
    Given eu envio a requisição para cadastrar um novo produto
    Then o produto é cadastrado com sucesso

  @api @regression
  Scenario: Falha ao tentar cadastrar produto sem autenticação
    When eu envio a requisição para cadastrar um novo produto sem um token de autenticação
    Then a API deve me bloquear com o status 401
    And a mensagem de erro sobre o token deve ser exibida
