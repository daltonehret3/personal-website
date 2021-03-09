import React, {useEffect} from 'react';

import {HeaderNoMargin} from "../styles/headers";
import {StyledDiv} from "../styles/divs";
import {College} from "../components/about/College";
import {VerticalLine} from "../components/helpers/VerticalLine";

export const About = () => {
    useEffect(() => {
        document.title = 'About Me';
    }, []);

    return (
        <StyledDiv>
            <HeaderNoMargin>{'About Me'}</HeaderNoMargin>
            <College />
            <VerticalLine
                thickness={'5px'}
                lineType={"solid"}
                lineColor={'white'}
                lineHeight={'100px'}
            />
        </StyledDiv>
    );
}