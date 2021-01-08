import React from "react";
import {render} from '@testing-library/react';

import {Projects} from "../../src/pages/Projects";

describe('Projects', () => {
    const {getByText} = render(<Projects />);

    it('should render the text', () => {
        const text = getByText('These are My Projects');

        expect(text).toBeDefined();
    });
});