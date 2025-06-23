import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import UsuariosAPI from '../../apiObjects/UsuariosAPI';
import { garantirUsuarioCadastrado } from "../actions/usuarios.actions";

Given('que existem usuários cadastrados no sistema', () => {
    cy.log('Verificando se já existem usuários no sistema...');
    garantirUsuarioCadastrado();
});

When('eu faço uma requisição GET para {string}', (endpoint) => {
    cy.log(`Fazendo requisição GET para ${endpoint}`);
    UsuariosAPI.getUsers().as('apiResponse');
});

Then('a resposta da API deve ter status {int}', (statusCode) => {
    cy.get('@apiResponse').then(response => {
        expect(response.status).to.equal(statusCode);
        cy.log(`Status da resposta: ${response.status} ${response.statusText}`);
    });
});

Then('a resposta deve conter uma lista de usuários não vazia', () => {
    cy.get('@apiResponse').then(response => {
        expect(response.body).to.have.property('usuarios');
        expect(response.body.usuarios).to.be.an('array');
        expect(response.body.usuarios).to.not.be.empty;
        expect(response.body.usuarios.length).to.be.greaterThan(0);
        cy.log(`Número de usuários na resposta: ${response.body.usuarios.length}`);
    });
});