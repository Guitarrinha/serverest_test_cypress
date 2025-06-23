import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CadastroPage from "../../pageObjects/CadastroPage";
import { cadastrarNovoUsuarioPelaUI, validarUsuarioCriadoPelaAPI } from "../actions/cadastro.actions";

Given('que eu estou na página de cadastro', () => {
    CadastroPage.navegar();
});

When('eu preencho os dados de cadastro para um novo usuário {string}', (tipoUsuario) => {
    cadastrarNovoUsuarioPelaUI(tipoUsuario);
});

Then('o cadastro é realizado com sucesso e o usuário existe no sistema', () => {
    CadastroPage.verificarMensagemSucesso();
    validarUsuarioCriadoPelaAPI();
});