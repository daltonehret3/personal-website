import React from 'react';
import {render} from '@testing-library/react'

import {College} from "../../../src/components/about/College";

describe('College', () => {
    let testRenderResult;

    beforeEach(() => {
        testRenderResult = render(<College />)
    });

    it('should render the main text of the component', () => {
        const paragraph = testRenderResult.getByTestId('college-overview');

        expect(paragraph).toBeDefined();
    });

    it('should render the header texts', () => {
        const mainHeader = testRenderResult.getByText('College');
        const subHeader = testRenderResult.getByText('Central College');

        expect(mainHeader).toBeDefined();
        expect(subHeader).toBeDefined();
    });
});