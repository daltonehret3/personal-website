import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const activeStyling = {textDecoration: 'underline white'};

const NavigationDiv = styled.div`
    margin: 45px 0;
    line-height: 30px;
    position: relative;
    font-size: 16px;
`;

const StyledNavLink = styled(NavLink)`
    display: block;
    color: white;
    padding: 8px 0;
    width: 100%;
    text-align: left;
    text-decoration: none;

    :hover {
        text-decoration: underline dotted white;
        cursor: pointer;
    }
`;

export const Navbar = () => (
    <NavigationDiv>
        <ul style={{listStyle: 'none'}}>
            <li>
                <StyledNavLink
                    activeStyle={activeStyling}
                    exact={true}
                    data-cy={'homeButton'}
                    to={'/'}
                >
                    {'Home'}
                </StyledNavLink>
            </li>
            <li>
                <StyledNavLink
                    activeStyle={activeStyling}
                    exact={true}
                    data-cy={'aboutButton'}
                    to={'/about'}
                >
                    {'About'}
                </StyledNavLink>
            </li>
            <li>
                <StyledNavLink
                    activeStyle={activeStyling}
                    exact={true}
                    data-cy={'projectsButton'}
                    to={'/projects'}
                >
                    {'Projects'}
                </StyledNavLink>
            </li>
            <li>
                <StyledNavLink
                    activeStyle={activeStyling}
                    exact={true}
                    data-cy={'contactButton'}
                    to={'/contact'}
                >
                    {'Contact'}
                </StyledNavLink>
            </li>
        </ul>
    </NavigationDiv>
)