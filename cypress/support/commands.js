import { generateUniqueUserData } from './utils/dataGenerator';

Cypress.Commands.add('obterTokenDeAdmin', () => {
  cy.log('Obtendo token de admin... Tentando encontrar um admin existente...');
  
  return cy.request({
    method: 'GET',
    url: 'https://serverest.dev/usuarios',
    qs: { administrador: 'true' }
  }).then(response => {
    expect(response.status).to.eq(200);
    
    if (response.body.usuarios.length > 0) {
      cy.log('Admin existente encontrado. Usando suas credenciais.');
      const adminEncontrado = response.body.usuarios[0];
      return cy.wrap(adminEncontrado);
    } else {
      cy.log('Nenhum admin encontrado. Criando um novo para o teste...');
      const novoAdmin = generateUniqueUserData(true);
      return cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        body: novoAdmin
      }).then(() => {
        return cy.wrap(novoAdmin);
      });
    }
  }).then(usuarioAdmin => {
    cy.log(`Fazendo login como ${usuarioAdmin.email}...`);
    return cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      body: {
        email: usuarioAdmin.email,
        password: usuarioAdmin.password
      }
    });
  }).then(responseLogin => {
    expect(responseLogin.status).to.eq(200);
    return responseLogin.body.authorization;
  });
});