class ProdutosAPI {

    constructor(baseURLParam) {
        this.baseURL = baseURLParam || Cypress.env('apiUrl') || 'https://serverest.dev';
    }

    listarProdutos(params = {}) {
        return cy.request({
            method: 'GET',
            url: `${this.baseURL}/produtos`,
            qs: params,
        });
    }

    buscarProdutoPorId(produtoId) {
        return cy.request({
            method: 'GET',
            url: `${this.baseURL}/produtos/${produtoId}`,
        });
    }

    cadastrarProduto(produto, token) {
        return cy.request({
            method: 'POST',
            url: `${this.baseURL}/produtos`,
            body: produto,
            headers: {
                Authorization: token,
            },
        });
    }

    editarProduto(produtoId, produtoAtualizado, token) {
        return cy.request({
            method: 'PUT',
            url: `${this.baseURL}/${produtoId}`,
            body: produtoAtualizado,
            headers: {
                Authorization: token,
            },
        });
    }

    excluirProduto(produtoId, token) {
        return cy.request({
            method: 'DELETE',
            url: `${this.baseURL}/produtos/${produtoId}`,
            headers: {
                Authorization: token,
            },
        });
    }
}

export default new ProdutosAPI();