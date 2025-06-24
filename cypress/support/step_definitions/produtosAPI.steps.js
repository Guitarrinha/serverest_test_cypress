import { When, Then, After } from "@badeball/cypress-cucumber-preprocessor";
import {
  cadastrarProdutoPelaAPI,
  validarProdutoCadastrado,
  limparProdutoDeTeste,
  tentarCadastrarProdutoSemToken
} from "../actions/produtos.actions";

When('eu envio a requisição para cadastrar um novo produto', () => {
  cadastrarProdutoPelaAPI();
});

Then('o produto é cadastrado com sucesso', () => {
  validarProdutoCadastrado();
});

When('eu envio a requisição para cadastrar um novo produto sem um token de autenticação', () => {
  tentarCadastrarProdutoSemToken();
});

Then('a API deve me bloquear com o status {int}', (statusCode) => {
  cy.get('@responseCadastroSemToken').its('status').should('eq', statusCode);
});

Then('a mensagem de erro sobre o token deve ser exibida', () => {
  cy.get('@responseCadastroSemToken').then(response => {
    expect(response.body.message).to.eq('Token de acesso ausente, inválido, expirado ou usuário do token não existe mais');
  });
});

After({ tags: '@novo_produto' }, () => {
  limparProdutoDeTeste();
});