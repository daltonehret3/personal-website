import React from 'react';
import {render} from '@testing-library/react';

import { createInternalProject } from '../../utils/employmentData';
import { InternalProjects } from '../../../src/components/about/InternalProjects';

describe('Internal Projects', () => {
    let testRenderResult,
        internalProjects;

    beforeEach(() => {
        internalProjects = {projects: [[createInternalProject()]]};

        testRenderResult = render(<InternalProjects {...internalProjects} />);
    });

    it('should display the Internal Projects', () => {
        const internalHeader = testRenderResult.getByText('Internal Projects');

        expect(internalHeader).toBeDefined();
    });

    it('should display the Project Name', () => {
        const projectName = testRenderResult.getByText(internalProjects.projects[0][0].Name);

        expect(projectName).toBeDefined();
    });

    it('should display the Dates spent on the Project', () => {
        const startDate = internalProjects.projects[0][0].Start_Date;
        const endDate = internalProjects.projects[0][0].End_Date;
        const datesWOrked = testRenderResult.getByText(`From ${startDate} - ${endDate}`);

        expect(datesWOrked).toBeDefined();
    });

    it('should display the Project Description', () => {
        const description = internalProjects.projects[0][0].Description[0];                
        const projectDescription = testRenderResult.getByText(description);

        expect(projectDescription).toBeDefined();
    });

    it('should display the Technology used on the Project', () => {
        const technology = internalProjects.projects[0][0].Technology[0];
        const projectTech = testRenderResult.getByText(technology);

        expect(projectTech).toBeDefined();
    });
});