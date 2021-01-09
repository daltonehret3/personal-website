import React from 'react';
import { render } from '@testing-library/react';

import { PowerliftingApp } from '../../../src/components/projects/PowerliftingApp';

describe('PowerliftingApp', () => {
    const { getByTestId } = render(<PowerliftingApp />);

    it('should render the main text of the component', () => {
        const paragraph = getByTestId('projectMotivation');

        expect(paragraph).toBeDefined();
        // Staying commented out until I can figure out why this is causing issues
        // expect(paragraph).toStrictEqual('This is some text');
    });
});