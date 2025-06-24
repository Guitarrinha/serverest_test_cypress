import CadastroPage from '../../pageObjects/CadastroPage';
import { buscarUsuariosCadastrados } from '../actions/usuarios.actions'
import { generateUniqueUserData } from '../utils/dataGenerator';

export function cadastrarNovoUsuarioPelaUI(tipoUsuario) {
    const novoUsuario = generateUniqueUserData();

    cy.wrap(novoUsuario).as('usuarioGerado');

    CadastroPage.preencherNome(novoUsuario.nome);
    CadastroPage.preencherEmail(novoUsuario.email);
    CadastroPage.preencherSenha(novoUsuario.password);

    if (tipoUsuario === 'administrador') {
        CadastroPage.marcarCheckboxAdmin();
        cy.get('@usuarioGerado').then(user => {
            user.administrador = 'true';
            cy.wrap(user).as('usuarioGerado');
        });
    }

    CadastroPage.clicarBotaoCadastrar();
}

export function validarUsuarioCriadoPelaAPI() {
    cy.log('Action: Validando via API se o usuário cadastrado existe no sistema...');
    CadastroPage.verificarMensagemSucesso();

    buscarUsuariosCadastrados().then(listaDeUsuarios => {

        cy.log(`API retornou ${listaDeUsuarios.length} usuários. Procurando pelo usuário recém-criado...`);

        cy.get('@usuarioGerado').then(usuarioParaEncontrar => {

            const foiEncontrado = listaDeUsuarios.some(
                userApi => userApi.email === usuarioParaEncontrar.email && userApi.nome === usuarioParaEncontrar.nome
            );

            expect(foiEncontrado, `O usuário ${usuarioParaEncontrar.email} deveria existir na lista de usuários`).to.be.true;
        });
    });
}