class UsuariosAPI {
    constructor(baseURLParam) {
        this.baseURL = baseURLParam || Cypress.env('apiUrl') || 'https://serverest.dev';
    }

    getUsers() {
        return cy.request({
            method: 'GET',
            url: `${this.baseURL}/usuarios`
        });
    }

    createUser(userData) {
        return cy.request({
            method: 'POST',
            url: `${this.baseURL}/usuarios`,
            body: userData,
            failOnStatusCode: false
        });
    }

    deleteUser(userId) {
        return cy.request({
            method: 'DELETE',
            url: `${this.baseURL}/usuarios/${userId}`,
            failOnStatusCode: false
        });
    }
}

export default new UsuariosAPI();