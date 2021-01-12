import React from 'react';
import styled from "styled-components";

import {Navbar} from "./Navbar";

const StyledAside = styled.aside`
        top: 0;
        bottom: 0;
        left: 0;
        position: fixed;
        z-index: 2;
        width: 25%;
        font-size: 16px;
        text-align: left;
        background-color: #910d03;
`;

export const SideBar = () => (
    <StyledAside>
        <Navbar />
    </StyledAside>
)