import React from 'react';
import styled from "styled-components";

import mountainImage from '../../assets/mountain.jpg';

import {Navbar} from "./Navbar";

const StyledAside = styled.aside`
        top: 0;
        bottom: 0;
        left: 0;
        position: fixed;
        z-index: 2;
        width: 25%;
        max-width: 360px;
        font-size: 16px;
        text-align: left;
`;

export const SideBar = () => (
    /*
     * Background Image is here because if I put it above,
     * Tests would fail
     */

    <StyledAside style={{backgroundImage: `url(${mountainImage}`}}>
        <Navbar />
    </StyledAside>
)