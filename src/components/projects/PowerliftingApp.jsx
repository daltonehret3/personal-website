import React from 'react';

import {BorderedDiv} from "../../styles/divs";

export const PowerliftingApp = () => (
    <div
        style={
            {
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center'
            }
        }
    >
        <BorderedDiv>
            <h2>{'Unnamed Powerlifting App'}</h2>
            <h4>{'Motivation'}</h4>
            <p data-testid={'projectMotivation'}>
                {
                    'Throughout the years, I have been working on powerlifting and just getting overall stronger. ' +
                    'As I have looked back at how many notebooks I have gone ' +
                    'through to keep track of all my workouts, I realized that ' +
                    'I was using way too much paper and wanted to find a solution.'
                }
            </p>
        </BorderedDiv>
    </div>
);
