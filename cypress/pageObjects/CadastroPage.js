class CadastroPage {
    selectors = {
        nomeInput: '[data-testid="nome"]',
        emailInput: '[data-testid="email"]',
        senhaInput: '[data-testid="password"]',
        administradorSelector: '[data-testid="checkbox"]',
        cadastrarButton: '[data-testid="cadastrar"]',
        message: '.alert',
    };

    navegar() {
        cy.visit('https://front.serverest.dev/cadastrarusuarios');
    }

    preencherNome(nome) {
        cy.get(this.selectors.nomeInput).type(nome);
    }

    preencherEmail(email) {
        cy.get(this.selectors.emailInput).type(email);
    }

    preencherSenha(senha) {
        cy.get(this.selectors.senhaInput).type(senha);
    }

    marcarCheckboxAdmin() {
        cy.get(this.selectors.administradorSelector).click();
    }

    clicarBotaoCadastrar() {
        cy.get(this.selectors.cadastrarButton).click();
    }

    verificarMensagemSucesso() {
        cy.get(this.selectors.message)
            .should('be.visible')
            .and('contain.text', 'Cadastro realizado com sucesso');
    }
}

export default new CadastroPage();