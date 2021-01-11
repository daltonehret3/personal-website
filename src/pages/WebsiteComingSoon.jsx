import React from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

import Logo from '../assets/white-bordered-logo.png';

const StyledDiv = styled.div`
    display: flex;
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: black;
    color: white;
    align-items: center;
    justify-content: center;
`;

export const WebsiteComingSoon = () => (
    <StyledDiv>
        <div style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <img
                width={'100'}
                height={'100'}
                src={Logo}
                alt={'white-bordered-logo'}
                data-testid={'white-logo'}
            />
            <h1 style={{paddingBottom: '8px'}}>
                {'Website Coming Soon!'}
            </h1>
            <Loader
                type={'Oval'}
                color="cyan"
                height={100}
                width={100}
            />

        </div>
    </StyledDiv>
);