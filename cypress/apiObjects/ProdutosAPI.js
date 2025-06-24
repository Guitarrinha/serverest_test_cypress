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

    cadastrarProduto(produto, token = null) {
        const requestOptions = {
            method: 'POST',
            url: `${this.baseURL}/produtos`,
            body: produto,
            failOnStatusCode: false
        };

        if (token) {
            requestOptions.headers = {
                Authorization: token,
            };

            return cy.request(requestOptions);
        }

        return cy.request(requestOptions);
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