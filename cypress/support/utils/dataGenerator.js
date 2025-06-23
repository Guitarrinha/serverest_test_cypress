import { faker } from '@faker-js/faker';

export function generateUniqueUserData() {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email({ firstName, lastName, provider: 'example.com' }).toLowerCase();
    const password = faker.internet.password();
    const isAdmin = faker.datatype.boolean().toString();

    return {
        nome: `${firstName} ${lastName}`,
        email: email,
        password: password,
        administrador: isAdmin
    };
}