import React from 'react';

import {BorderedDiv} from "../../styles/divs";

export const College = () => (
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
            <h2>{'College'}</h2>
            <h4>{'Central College'}</h4>
            <p data-testid={'college-overview'}>
                {
                    'I went to Central College where I majored in Computer Science ' +
                    'and minored in Mathematics.  I also took part in the AMC ICPC programming ' +
                    'competition at Iowa State University in 2018.'
                }
            </p>
            <h4>{'Activities'}</h4>
            <div
                data-testid={'college-activities'}
                style={{
                    'marginTop': '-10px',
                    'paddingLeft': '8px'
                }}
            >
                <li>{'Computer Science Club'}</li>
                <li>{'Track & Field Team'}</li>
                <li>{'Work Study job for the Information Technology Department'}</li>
            </div>
        </BorderedDiv>
    </div>
);