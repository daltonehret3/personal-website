import React from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    padding: 8px;
`;

const StyledNavLink = styled(NavLink)`
    color: white;
    padding: 12px;
    
    :hover {
        background-color: red;
    }
`;

export const Navbar = () => (
    <StyledDiv>
        <StyledNavLink to={'/'}>{'Home'}</StyledNavLink>
        <StyledNavLink to={'/about'}>{'About'}</StyledNavLink>
        <StyledNavLink to={'/projects'}>{'Projects'}</StyledNavLink>
        <StyledNavLink to={'/contact'}>{'Contact'}</StyledNavLink>
    </StyledDiv>
)