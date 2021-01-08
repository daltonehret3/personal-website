import React from 'react';
import {render} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";

import {Navbar} from "../../src/components/Navbar";

describe('Navbar', () => {
    const {getByText} = render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>);

    it('should render all the elements of the Navbar', () => {
        const homeLink = getByText('Home');
        const aboutLink = getByText('About');
        const projectsLink = getByText('Projects');
        const contactLink = getByText('Contact');

        expect(homeLink).toBeDefined();
        expect(aboutLink).toBeDefined();
        expect(projectsLink).toBeDefined();
        expect(contactLink).toBeDefined();
    });
});