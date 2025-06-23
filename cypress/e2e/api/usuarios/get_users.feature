Feature: API GET /usuarios - Listar Usuários

  Para verificar a funcionalidade de listagem de usuários
  Como um sistema cliente
  Eu quero poder obter a lista de usuários cadastrados

  @api @regression
  Scenario: Listar todos os usuários com sucesso
    Given que existem usuários cadastrados no sistema
    When eu faço uma requisição GET para "/usuarios"
    Then a resposta da API deve ter status 200
    And a resposta deve conter uma lista de usuários não vazia
