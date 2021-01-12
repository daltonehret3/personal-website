import React from 'react';
import {render} from '@testing-library/react';
import {BrowserRouter} from "react-router-dom";

import {SideBar} from "../../../src/components/navigation/SideBar";

describe('SideBar', () => {
    const {getByText} = render(
        <BrowserRouter>
            <SideBar />
        </BrowserRouter>
    );

    it('should render the "home" link of the Navbar', () => {
        const bar = getByText('Home');

        expect(bar).toBeDefined();
    });
});
