import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from '../../pageObjects/LoginPage';
import HomePage from "../../pageObjects/homePage";
import usersData from '../../fixtures/users.json';

Given('que estou na pagina de login', () => {
  cy.visit('https://front.serverest.dev/login');
});

When('eu preencho o campo usuário e senha com {string}', (tipoCredencial) => {
  if(tipoCredencial === 'credenciais válidas'){
    LoginPage.preencherEmail(usersData.validUser.username);
    LoginPage.preencherSenha(usersData.validUser.password);
  } else if(tipoCredencial === 'credenciais inexistentes'){
    LoginPage.preencherEmail(usersData.invalidUser.username);
    LoginPage.preencherSenha(usersData.invalidUser.password);
  } else {
    throw new Error(`O tipo de credencial "${tipoCredencial}" não é reconhecido.`);
  }
});

When('eu clico no botão {string}', (buttonText) => {
  if (buttonText === 'Entrar') {
    LoginPage.clickBotaoEntrar();
  } else {
    throw new Error(`Botão "${buttonText}" não reconhecido.`);
  }
});

Then('eu devo ver uma mensagem de bem vindo com o nome do usuário', () => {
  const expectedName = usersData.validUser.name;
  HomePage.getMensagemBemVindo().should('be.visible').and('contain', 'Bem Vindo').and('contain', expectedName);
});

Then('eu devo ver a mensagem de erro {string}', (erro) => {
  LoginPage.getMensagemDeErro().should('be.visible').and('contain', erro);
})

