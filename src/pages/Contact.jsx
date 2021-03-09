import React, { useEffect } from 'react';

import { HeaderNoMargin } from "../styles/headers";
import {StyledDiv} from "../styles/divs";

export const Contact = () => {
    useEffect(() => {
        document.title = 'Contact Me';
    }, []);

    return (
        <StyledDiv>
            <HeaderNoMargin>{'Contact Me!'}</HeaderNoMargin>
        </StyledDiv>
    );
};