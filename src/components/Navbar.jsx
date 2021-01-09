import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`
    background-color: blue;
    display: flex;
    flex-direction: row;
    padding: 8px;
`;

const StyledNavLink = styled(NavLink)`
    color: white;
    padding: 12px;
    margin: 0;

    :hover {
        background-color: red;
    }
`;

export const Navbar = () => (
    <StyledDiv>
        <StyledNavLink
            data-cy={'homeButton'}
            to={'/'}
        >
            {'Home'}
        </StyledNavLink>
        <StyledNavLink
            data-cy={'aboutButton'}
            to={'/about'}
        >
            {'About'}
        </StyledNavLink>
        <StyledNavLink
            data-cy={'projectsButton'}
            to={'/projects'}
        >
            {'Projects'}
        </StyledNavLink>
        <StyledNavLink
            data-cy={'contactButton'}
            to={'/contact'}
        >
            {'Contact'}
        </StyledNavLink>
    </StyledDiv>
);
