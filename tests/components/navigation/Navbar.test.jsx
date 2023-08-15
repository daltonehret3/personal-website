import React from 'react';
import {render} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";

import {Navbar} from "../../../src/components/navigation/Navbar";

describe('Navbar', () => {
    const {getByText, getByTestId} = render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>);

    it('should render all the elements of the Navbar', () => {
        const homeLink = getByTestId('homeButton');
        const aboutLink = getByText('About');
        const projectsLink = getByText('Projects');
        const contactLink = getByText('Contact');

        expect(homeLink).toBeDefined();
        expect(aboutLink).toBeDefined();
        expect(projectsLink).toBeDefined();
        expect(contactLink).toBeDefined();
    });
});