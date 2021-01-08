import React from "react";
import {render} from '@testing-library/react';

import {Home} from "../../src/pages/Home";

describe('Home', () => {
    const {getByText} = render(<Home />);

    it('should render the text', () => {
        const text = getByText('Welcome to my Website!');

        expect(text).toBeDefined();
    });
});