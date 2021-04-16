import React, {useEffect} from 'react';

import {College} from "../components/about/College";
import {HeaderNoMargin} from "../styles/headers";
import {StyledDiv} from "../styles/divs";
import {VerticalLine} from '../components/helpers/VerticalLine';
import {WorkHistory} from "../components/about/WorkHistory";


export const About = () => {
    useEffect(() => {
        document.title = 'About Me';
    }, []);

    return (
        <StyledDiv>
            <HeaderNoMargin>{'About Me'}</HeaderNoMargin>
            <College />  
            <VerticalLine />
            <WorkHistory />
        </StyledDiv>
    );
}