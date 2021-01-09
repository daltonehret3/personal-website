import React, { useEffect } from 'react';

import { HeaderNoMargin } from "../styles/headers";

export const About = () => {
    useEffect(() => {
        document.title = 'About Me';
    }, []);

    return (
        <div>
            <HeaderNoMargin>{'About Me'}</HeaderNoMargin>
        </div>
    );
}