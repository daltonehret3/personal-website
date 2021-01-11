import React, { useEffect } from 'react';

import { HeaderNoMargin } from "../styles/headers";

export const Home = () => {
    useEffect(() => {
        document.title = 'Dalton Ehret';
    }, []);

    // eslint-disable-next-line no-console
    console.log(process.env.NODE_ENV);

    return (
        <div>
            <HeaderNoMargin>{'Welcome to my Website!'}</HeaderNoMargin>
        </div>
    );
};