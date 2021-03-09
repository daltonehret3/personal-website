import React from 'react';
import {render} from '@testing-library/react';

import {PowerliftingApp} from '../../../src/components/projects/PowerliftingApp';

describe('PowerliftingApp', () => {
    let testRenderResult;

    beforeEach(() => {
        testRenderResult = render(<PowerliftingApp />);
    });

    it('should render the main text of the component', () => {
        const paragraph = testRenderResult.getByTestId('projectMotivation');

        expect(paragraph).toBeDefined();
        expect(paragraph.textContent).toStrictEqual('Throughout the years, I have been working on powerlifting and ' +
            'just getting overall stronger. As I have looked back at how many notebooks I have gone through to keep ' +
            'track of all my workouts, I realized that I was using way too much paper and wanted to find a solution.');
    });
});