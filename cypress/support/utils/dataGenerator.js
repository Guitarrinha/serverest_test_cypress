import { faker } from '@faker-js/faker';

export function generateUniqueUserData(isAdmin = false) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email({ firstName, lastName, provider: 'example.com' }).toLowerCase();
    const password = faker.internet.password();
    const isAdminAsString = String(isAdmin)

    return {
        nome: `${firstName} ${lastName}`,
        email: email,
        password: password,
        administrador: isAdminAsString 
    };
}

export function generateUniqueProductData() {
  return {
    nome: `Produto ${faker.commerce.productName()} ${faker.string.uuid()}`,
    preco: faker.commerce.price({ min: 10, max: 500, dec: 0 }),
    descricao: faker.commerce.productDescription(),
    quantidade: faker.number.int({ min: 50, max: 200 })
  };
}