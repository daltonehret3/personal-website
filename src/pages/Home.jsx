import React, { useEffect } from 'react';

import { HeaderNoMargin } from "../styles/headers";
import {StyledDiv} from "../styles/divs";

export const Home = () => {
    useEffect(() => {
        document.title = 'Dalton Ehret';
    }, []);

    return (
        <StyledDiv>
            <HeaderNoMargin>{'Welcome to my Website!'}</HeaderNoMargin>
        </StyledDiv>
    );
};