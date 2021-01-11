import React, { useEffect } from 'react';
import styled from "styled-components";

import { HeaderNoMargin } from "../styles/headers";

const StyledDiv = styled.div`
    display: flex;
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: black;
    color: white;
`;

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