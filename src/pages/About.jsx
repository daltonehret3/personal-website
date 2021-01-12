import React, {useEffect} from 'react';

import {HeaderNoMargin} from "../styles/headers";
import {StyledDiv} from "../styles/divs";

export const About = () => {
    useEffect(() => {
        document.title = 'About Me';
    }, []);

    return (
        <StyledDiv>
            <HeaderNoMargin>{'About Me'}</HeaderNoMargin>
        </StyledDiv>
    );
}