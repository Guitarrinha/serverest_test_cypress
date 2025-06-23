Feature: API - Cadastro de Produtos

  Como um administrador do sistema
  Eu quero cadastrar novos produtos via API
  Para gerenciar o estoque da loja

  @api @regression @novo_produto
  Scenario: Cadastro de um produto com sucesso
    Given eu envio a requisição para cadastrar um novo produto
    Then o produto é cadastrado com sucesso