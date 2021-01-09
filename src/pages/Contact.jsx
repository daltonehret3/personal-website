import React, { useEffect } from 'react';

import { HeaderNoMargin } from "../styles/headers";

export const Contact = () => {
    useEffect(() => {
        document.title = 'Contact Me';
    }, []);

    return (
        <div>
            <HeaderNoMargin>{'Contact Me!'}</HeaderNoMargin>
        </div>
    );
};