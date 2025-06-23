import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from '../../pageObjects/LoginPage';
import HomePage from "../../pageObjects/homePage";
import usersData from '../../fixtures/users.json';

Given('que estou na pagina de login', () => {
  cy.visit('https://front.serverest.dev/login');
});

When('eu preencho o campo "usuário" e "senha" com credenciais válidas', () => {
  LoginPage.preencherEmail(usersData.validUser.username);
  LoginPage.preencherSenha(usersData.validUser.password);
});

When('eu clico no botão {string}', (buttonText) => {
  if (buttonText === 'Entrar') {
    LoginPage.clickBotaoEntrar();
  } else {
    throw new Error(`Botão "${buttonText}" não reconhecido.`);
  }
});

Then('eu devo ver uma mensagem de bem vindo com o nome do usuário', (messageType, userType) => {
  const expectedName = usersData.validUser.name;
  HomePage.getMensagemBemVindo().should('be.visible').and('contain', 'Bem Vindo').and('contain', expectedName);
});

