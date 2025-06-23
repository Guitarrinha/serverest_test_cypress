import UsuariosAPI from '../../apiObjects/UsuariosAPI';
import { generateUniqueUserData } from '../utils/dataGenerator';

export function garantirUsuarioCadastrado() {
    cy.log('Garantindo que ao menos um usuário exista...');
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