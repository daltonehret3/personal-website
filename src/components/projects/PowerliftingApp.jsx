import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    background-color: #5c5b5b;
    color: white;
    margin: 24px;
    width: 50%;
    padding: 8px;
    border: 2px solid white;
    border-radius: 15px;
`;

export const PowerliftingApp = () => (
    <div style={
        {
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center'
        }
    }
    >
        <StyledDiv>
            <h2>{'Unnamed Powerlifting App'}</h2>
            <h4>{'Motivation'}</h4>
            <p>
                {
                    'Throughout the years, I have been working on powerlifting and just getting overall stronger. '
                }
                {
                    'As I have looked back at how many notebooks I have gone ' +
                    'throught to keep track of all my workouts, I realized that ' +
                    'I was using way too much paper and wanted to find a solution.'
                }
            </p>
        </StyledDiv>
    </div>
);
