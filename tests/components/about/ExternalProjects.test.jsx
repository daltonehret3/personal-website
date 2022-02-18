import React from 'react';
import {render} from '@testing-library/react';

import { createExternalProject } from '../../utils/employmentData';
import { ExternalProjects } from '../../../src/components/about/ExternalProjects';

describe('External Projects', () => {
    let testRenderResult,
        externalProject;

    beforeEach(() => {
        externalProject = {projects: [[createExternalProject()]]};

        testRenderResult = render(<ExternalProjects {...externalProject} />);
    });
    
    it('should display the Partner Site Name', () => {
        const partnerName = externalProject.projects[0][0].Partner_Site;
        const partnerSite = testRenderResult.getByText(partnerName);

        expect(partnerSite).toBeDefined();
    });

    it('should display the Dates worked for the Partner Site', () => {
        const startDate = externalProject.projects[0][0].Start_Date;
        const endDate = externalProject.projects[0][0].End_Date;
        const datesWorked = testRenderResult.getByText(`From ${startDate} - ${endDate}`);

        expect(datesWorked).toBeDefined();
    });

    it('should display the Description from the Partner Site', () => {
        const partnerDescription = externalProject.projects[0][0].Description[0];
        const description = testRenderResult.getByText(partnerDescription);

        expect(description).toBeDefined();
    });

    it('should display the Technology used at the Partner Site', () => {
        const tech = externalProject.projects[0][0].Technology[0];
        const techUsed = testRenderResult.getByText(tech);

        expect(techUsed).toBeDefined();
    });

});