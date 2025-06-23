import UsuariosAPI from '../../apiObjects/UsuariosAPI';
import { generateUniqueUserData } from '../utils/dataGenerator';

export function garantirUsuarioCadastrado() {
    cy.log('Action: Garantindo que ao menos um usuário exista...');
    return UsuariosAPI.getUsers().then(response => {
        if (response.body.usuarios.length === 0) {
            cy.log('Nenhum usuário encontrado. Criando um novo...');
            const newUserData = generateUniqueUserData();
            return UsuariosAPI.createUser(newUserData);
        } else {
            cy.log('Usuários já existem. Pré-condição atendida.');
            return cy.wrap(null);
        }
    });
}

export function buscarUsuarioValido() {
    cy.log(`Action: Buscando usuário no sistema`);

    UsuariosAPI.getUsers().then(response => {

        expect(response.status).to.eq(200);
        expect(response.body.usuarios).to.not.be.empty;

        const usuarioDinamico = response.body.usuarios[0];

        cy.wrap(usuarioDinamico).as('usuarioDinamico');
    });
}

export function buscarUsuariosCadastrados() {
    cy.log('Action: Buscando todos os usuários cadastrados na API...');
    return UsuariosAPI.getUsers().then(response => {
        expect(response.status).to.eq(200);
        expect(response.body.usuarios).to.not.be.empty;

        return response.body.usuarios;
    });
}