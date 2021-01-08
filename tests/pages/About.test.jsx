import React from "react";
import {render} from '@testing-library/react';

import {About} from "../../src/pages/About";

describe('About', () => {
    const {getByText} = render(<About />);

    it('should render the text', () => {
        const text = getByText('About Me');

        expect(text).toBeDefined();
    });
});