class LoginPage {

  selectors = {
    emailInput: '[data-testid="email"]',
    senhaInput: '[data-testid="senha"]',
    entrarButton: '[data-testid="entrar"]',
    errorMessage: '.alert',
  };

  visit() {
    cy.visit('https://front.serverest.dev/login');
  }

  preencherEmail(username) {
    cy.get(this.selectors.emailInput).type(username);
  }

  preencherSenha(password) {
    cy.get(this.selectors.senhaInput).type(password);
  }

  clickBotaoEntrar() {
    cy.get(this.selectors.entrarButton).click();
  }

  getMensagemDeErro() {
    return cy.get(this.selectors.errorMessage);
  }
}

export default new LoginPage();