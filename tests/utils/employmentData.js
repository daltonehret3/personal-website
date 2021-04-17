import Chance from 'chance';

const chance = new Chance();

export const createContractWorkData = (overrides = {}) => ({
    Employer: chance.company(),
    End_Date: chance.date({string: true}),
    Projects: {
        External: [createExternalProject()],
        Internal: [createInternalProject()]                    
    },
    Start_Date: chance.date({string: true}),
    Title: chance.profession(),
    ...overrides                
});

export const createInternalProject = (overrides = {}) => ({
    Description: chance.n(chance.sentence, chance.d4()),
    End_Date: chance.date({string: true}),
    Name: chance.word(),
    Start_Date: chance.date({string: true}),
    Technology: chance.n(chance.word, chance.d4()),
    ...overrides
});

export const createExternalProject = (overrides = {}) => ({
    Description: chance.n(chance.sentence, chance.d4()),
    End_Date: chance.date({string: true}),
    Partner_Site: chance.company(),
    Start_Date: chance.date({string: true}),
    Technology: chance.n(chance.word, chance.d4()),
    ...overrides
})