import React from 'react';
import {render} from '@testing-library/react';

import {WebsiteComingSoon} from "../../src/pages/WebsiteComingSoon";

describe('WebsiteComingSoon', () => {
    let testRenderResult;

    beforeEach(() => {
        testRenderResult = render(<WebsiteComingSoon />);
    });

    it('should render the logo', () => {
        const logo = testRenderResult.getByTestId('white-logo');

        expect(logo).toBeDefined();
    });

    it('should render the header test', () => {
        const header = testRenderResult.getByText('Website Coming Soon!');

        expect(header).toBeDefined();
    });
});