import ProdutosAPI from "../../apiObjects/ProdutosAPI";
import { generateUniqueProductData } from "../utils/dataGenerator";

export function cadastrarProdutoPelaAPI() {
  cy.log('Action: Cadastrando novo produto via API...');

  cy.obterTokenDeAdmin().then(token => {
    const produto = generateUniqueProductData();

    cy.wrap(produto).as('produtoEnviado');
    cy.wrap(token).as('authToken');

    ProdutosAPI.cadastrarProduto(produto, token).then(response => {
      cy.wrap(response).as('responseCadastro');
      cy.wrap(response.body._id).as('produtoId');
    });
  });
}

export function validarProdutoCadastrado() {
  cy.log('Action: Validando o produto cadastrado...');
  cy.get('@produtoEnviado').then(produtoEnviado => {
    cy.get('@responseCadastro').then(responseCadastro => {
      expect(responseCadastro.status).to.eq(201);
      const produtoId = responseCadastro.body._id;

      ProdutosAPI.buscarProdutoPorId(produtoId).then(responseGet => {
        expect(responseGet.status).to.eq(200);
        expect(responseGet.body.nome).to.eq(produtoEnviado.nome);
      });
    });
  });
}

export function limparProdutoDeTeste() {
  cy.get('@produtoId', { log: false }).then(produtoId => {
    if (produtoId) {
      cy.get('@authToken', { log: false }).then(token => {
        cy.log(`Action: Limpando produto de teste com ID: ${produtoId}`);
        ProdutosAPI.excluirProduto(produtoId, token);
      });
    }
  });
}

export function tentarCadastrarProdutoSemToken() {
  cy.log('Action: Tentando cadastrar produto sem token...');
  const produto = generateUniqueProductData();

  ProdutosAPI.cadastrarProduto(produto, null).as('responseCadastroSemToken');
}