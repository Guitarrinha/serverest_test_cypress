class HomePage{
    selectors = {
        welcomeMessage: 'h1'
    };

    getMensagemBemVindo() {
        return cy.get(this.selectors.welcomeMessage);
    }

}

export default new HomePage();