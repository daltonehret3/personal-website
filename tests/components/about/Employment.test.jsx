import React from 'react';
import {render} from '@testing-library/react';
import Chance from 'chance';

import {Employment} from '../../../src/components/about/Employment';

const chance = new Chance();

describe('Employment', () => {
    let testRenderResult,
        employmentData;

    describe('Single Employer', () => {
        beforeEach(() => {
            employmentData = {
                Description: chance.n(chance.sentence, chance.d4()),
                Employer: chance.company(),
                End_Date: chance.date({string: true}),
                Start_Date: chance.date({string: true}),
                Technology: chance.n(chance.word, chance.d4()),
                Title: chance.profession(),
            };

            testRenderResult = render(<Employment {...employmentData} />);
        });

        it('should display the employer name', () => {
            const employer = testRenderResult.getByTestId('employer-name');

            expect(employer).toBeDefined();
            expect(employer.textContent).toStrictEqual(employmentData.Employer);
        });

        it('should display the profession', () => {
            const jobTitle = testRenderResult.getByTestId('job-title');

            expect(jobTitle).toBeDefined();
            expect(jobTitle.textContent).toStrictEqual(employmentData.Title);
        });

        it('should display the Start and End Date', () => {
            const datesWorked = testRenderResult.getByTestId('dates-worked');

            expect(datesWorked).toBeDefined();
            expect(datesWorked.textContent).toStrictEqual(
                `From ${employmentData.Start_Date} - ${employmentData.End_Date}`
            );
        });

        it('should display the Description of the job', () => {
            const description = testRenderResult.getByTestId('job-description');

            expect(description).toBeDefined();
            expect(description.textContent).toContain(employmentData.Description[0]);
        });

        it('should display the Technology used on the job', () => {
            const technology = testRenderResult.getByTestId('tech-used');

            expect(technology).toBeDefined();
            expect(technology.textContent).toContain(employmentData.Technology[0]);
        });

        it('should **not** display the Internal or External Projects header', () => {
            const internal = testRenderResult.queryByText('Internal Projects');
            const external = testRenderResult.queryByText('External Projects');

            expect(internal).toBeNull();
            expect(external).toBeNull();
        });
    });

    describe('Contract Employment', () => {
        beforeEach(() => {
            employmentData = {
                Employer: chance.company(),
                End_Date: chance.date({string: true}),
                Projects: {
                    External: [{
                        Description: chance.n(chance.sentence, chance.d4()),
                        End_Date: chance.date({string: true}),
                        Partner_Site: chance.company(),
                        Start_Date: chance.date({string: true}),
                        Technology: chance.n(chance.word, chance.d4())
                    }],
                    Internal: [{
                        Description: chance.n(chance.sentence, chance.d4()),
                        End_Date: chance.date({string: true}),
                        Name: chance.word(),
                        Start_Date: chance.date({string: true}),
                        Technology: chance.n(chance.word, chance.d4())
                    }]                    
                },
                Start_Date: chance.date({string: true}),
                Title: chance.profession()                
            };

            testRenderResult = render(<Employment {...employmentData} />);
        });

        it('should display the Contracting Employer Name', () => {
            const employer = testRenderResult.getByTestId('employer-name');

            expect(employer).toBeDefined();
            expect(employer.textContent).toStrictEqual(employmentData.Employer);
        });

        it('should display the position Title', () => {
            const title = testRenderResult.getByTestId('job-title');

            expect(title).toBeDefined();
            expect(title.textContent).toStrictEqual(employmentData.Title);
        });

        it('should display the Dated worked for the contracting company', () => {
            const datesWorked = testRenderResult.getByTestId('dates-worked');

            expect(datesWorked).toBeDefined();
            expect(datesWorked.textContent).toStrictEqual(
                `From ${employmentData.Start_Date} - ${employmentData.End_Date}`
            );
        });

        describe('Internal Projects', () => {
            it('should display the Internal Projects', () => {
                const internalHeader = testRenderResult.getByText('Internal Projects');
    
                expect(internalHeader).toBeDefined();
            });

            it('should display the Project Name', () => {
                const projectName = testRenderResult.getByText(employmentData.Projects.Internal[0].Name);
    
                expect(projectName).toBeDefined();
            });

            it('should display the Dates spent on the Project', () => {
                const startDate = employmentData.Projects.Internal[0].Start_Date;
                const endDate = employmentData.Projects.Internal[0].End_Date;
                const datesWOrked = testRenderResult.getByText(`From ${startDate} - ${endDate}`);
    
                expect(datesWOrked).toBeDefined();
            });

            it('should display the Project Description', () => {
                const description = employmentData.Projects.Internal[0].Description[0];                
                const projectDescription = testRenderResult.getByText(description);
    
                expect(projectDescription).toBeDefined();
            });

            it('should display the Technology used on the Project', () => {
                const technology = employmentData.Projects.Internal[0].Technology[0];
                const projectTech = testRenderResult.getByText(technology);
    
                expect(projectTech).toBeDefined();
            });

            it('should **not** display the Internal Projects if there are none', () => {
                employmentData.Projects.Internal = null;
                testRenderResult.rerender(<Employment {...employmentData} />);

                const internal = testRenderResult.queryByText('Internal Projects');

                expect(internal).toBeNull();
            });
        });

        describe('External Projects', () => {
            it('should display the External Projects header', () => {
                const externalHeader = testRenderResult.getByText('External Projects');

                expect(externalHeader).toBeDefined();
            });

            it('should display the Partner Site Name', () => {
                const partnerName = employmentData.Projects.External[0].Partner_Site;
                const partnerSite = testRenderResult.getByText(partnerName);

                expect(partnerSite).toBeDefined();
            });

            it('should display the Dates worked for the Partner Site', () => {
                const startDate = employmentData.Projects.External[0].Start_Date;
                const endDate = employmentData.Projects.External[0].End_Date;
                const datesWorked = testRenderResult.getByText(`From ${startDate} - ${endDate}`);

                expect(datesWorked).toBeDefined();
            });

            it('should display the Description from the Partner Site', () => {
                const partnerDescription = employmentData.Projects.External[0].Description[0];
                const description = testRenderResult.getByText(partnerDescription);

                expect(description).toBeDefined();
            });

            it('should display the Technology used at the Partner Site', () => {
                const tech = employmentData.Projects.External[0].Technology[0];
                const techUsed = testRenderResult.getByText(tech);

                expect(techUsed).toBeDefined();
            });

            it('should **not** display the External Projects header if there are none', () => {
                employmentData.Projects.External = null;
                testRenderResult.rerender(<Employment {...employmentData} />);

                const externalHeader = testRenderResult.queryByText('External Projects');

                expect(externalHeader).toBeNull();
            })
        });
    });
});