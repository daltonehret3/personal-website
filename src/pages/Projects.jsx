import React, { useEffect } from 'react';

import { HeaderNoMargin } from "../styles/headers";
import { PowerliftingApp } from '../components/projects/PowerliftingApp';
import {StyledDiv} from "../styles/divs";

export const Projects = () => {
    useEffect(() => {
        document.title = 'Projects';
    }, []);

    return (
        <StyledDiv style={{flexDirection: 'column'}}>
            <HeaderNoMargin>{'These are My Projects'}</HeaderNoMargin>
            <div>
                <PowerliftingApp />
            </div>
        </StyledDiv>
    );
};