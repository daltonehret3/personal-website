import React from 'react';
import {render} from '@testing-library/react';
import Chance from 'chance';

import {Employment} from '../../../src/components/about/Employment';
import { createExternalProject, createInternalProject } from '../../utils/employmentData';

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
                    External: [createExternalProject()],
                    Internal: [createInternalProject()]                    
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

            it('should **not** display the External Projects header if there are none', () => {
                employmentData.Projects.External = null;

                testRenderResult.rerender(<Employment {...employmentData} />);

                const externalHeader = testRenderResult.queryByText('External Projects');

                expect(externalHeader).toBeNull();
            })
        });
    });
});