const frisby = require('frisby');

let tries = 0;
const maxTries = 20;
const tryInterval = 2000;

const ALL = 'ALL';
const INFRA = 'INFRA'

const allTags = [ALL, INFRA];

const services = [
    {
        isUp: false,
        serviceName: 'personal-website', 
        tags: [ALL], 
        uri: 'http://localhost:3000/healthz'
    }
];

const healthCheck = async (tag) => {
    const requestedServices = services.filter((service) => service.tags.includes(tag));

    for (const service of requestedServices) {
        if (!service.isUp) {
            const serviceResponse = await frisby
                .get(service.uri)
                .catch(() => {});

            if (serviceResponse && serviceResponse.status === 200) {
                service.isUp = true;
            }
        }
    }

    const stillNotUp = requestedServices.filter((service) => !service.isUp);

    if (stillNotUp.length) {
        tries = tries + 1;
        if (tries > maxTries) {
            stillNotUp.forEach((it) => console.error(`${it.serviceName} did not come up.`));
            process.exit(1);
        }

        console.log(`Trying again... ${tries}/${maxTries}`);
        setTimeout(() => healthCheck(tag), tryInterval);
    }
};

const tag = process.argv[2] || ALL;

const foundTag = allTags.find((it) => it.toLocaleLowerCase() === tag.toLocaleLowerCase());

if (!foundTag) {
    console.log(`Invalid service tag: ${tag}`);
    process.exit(1);
}

healthCheck(foundTag);