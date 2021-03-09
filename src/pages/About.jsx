import React, {useEffect} from 'react';

import {HeaderNoMargin} from "../styles/headers";
import {StyledDiv} from "../styles/divs";
import {College} from "../components/about/College";

export const About = () => {
    useEffect(() => {
        document.title = 'About Me';
    }, []);

    return (
        <StyledDiv>
            <HeaderNoMargin>{'About Me'}</HeaderNoMargin>
            <College />
        </StyledDiv>
    );
}