import {faker} from '@faker-js/faker';
import * as fs from 'fs';


function saveUserProfilesToFile(fileName: string, data: any) {
    fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
}

const users = generateUserProfiles(100);
saveUserProfilesToFile('users.json', users);

function generateUserProfiles(count: number) {
    const users = [];
    for (let i = 0; i < count; i++) {
        users.push(generateUserProfile());
    }
    return users;
}

function generateUserProfile() {
    return {
        id: faker.string.uuid(),
        name: faker.person.firstName(),
        tagline: faker.lorem.sentence(),
        email: faker.internet.email(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            country: faker.location.country()
        },
        phone: faker.phone.number(),
        website: faker.internet.url(),
        company: faker.company.name()
    };
}