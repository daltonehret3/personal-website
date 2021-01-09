import React, { useEffect } from 'react';

import { HeaderNoMargin } from "../styles/headers";

export const Home = () => {
    useEffect(() => {
        document.title = 'Dalton Ehret';
    }, []);

    return (
        <div>
            <HeaderNoMargin>{'Welcome to my Website!'}</HeaderNoMargin>
        </div>
    );
};