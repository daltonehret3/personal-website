import React from "react";
import {render} from '@testing-library/react';

import {Contact} from "../../src/pages/Contact";

describe('Contact', () => {
    const {getByText} = render(<Contact />);

    it('should render the text', () => {
        const text = getByText('Contact Me!');

        expect(text).toBeDefined();
    });
});