import React from 'react';

import {BorderedDiv, DottedBorderedDiv} from "../../styles/divs";

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
        <BorderedDiv style={{
            alignContent: 'center',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <h1 style={{textAlign: 'center'}}>{'College'}</h1>
            <DottedBorderedDiv
                style={{
                    justifyContent: 'center',
                    width: 'auto'
                }}
            >
                <h2>{'Central College'}</h2>
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
                    <ul>
                        <li>{'Computer Science Club'}</li>
                        <li>{'Track & Field Team'}</li>
                        <li>{'Work Study job for the Information Technology Department'}</li>
                    </ul>
                </div>
            </DottedBorderedDiv>
        </BorderedDiv>
    </div>
);