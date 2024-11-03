"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const fs = require("fs");
function saveUserProfilesToFile(fileName, data) {
    fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
}
const users = generateUserProfiles(100);
saveUserProfilesToFile('users.json', users);
function generateUserProfiles(count) {
    const users = [];
    for (let i = 0; i < count; i++) {
        users.push(generateUserProfile());
    }
    return users;
}
function generateUserProfile() {
    return {
        id: faker_1.faker.string.uuid(),
        name: faker_1.faker.person.firstName(),
        tagline: faker_1.faker.lorem.sentence(),
        email: faker_1.faker.internet.email(),
        address: {
            street: faker_1.faker.location.streetAddress(),
            city: faker_1.faker.location.city(),
            country: faker_1.faker.location.country()
        },
        phone: faker_1.faker.phone.number(),
        website: faker_1.faker.internet.url(),
        company: faker_1.faker.company.name()
    };
}
