import React, { useEffect } from 'react';

import { HeaderNoMargin } from "../styles/headers";
import { PowerliftingApp } from '../components/projects/PowerliftingApp';

export const Projects = () => {
    useEffect(() => {
        document.title = 'Projects';
    }, []);

    return (
        <div>
            <HeaderNoMargin>{'These are My Projects'}</HeaderNoMargin>
            <div>
                <PowerliftingApp />
            </div>
        </div>
    );
};