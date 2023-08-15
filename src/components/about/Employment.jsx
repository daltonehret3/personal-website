import React from 'react';

import { StyledList, StyledUL } from '../../styles/lists';
import { DottedBorderedDiv } from '../../styles/divs';

import { ExternalProjects } from './ExternalProjects';
import { InternalProjects } from './InternalProjects';

const SingleEmployer = (props) => (
    <DottedBorderedDiv
        style={{
            justifyContent: 'center',
            width: 'auto',
        }}
    >
        <h2 data-testid={'employer-name'}>{props.Employer}</h2>
        <h3 data-testid={'job-title'}>{props.Title}</h3>
        <h4 
            data-testid={'dates-worked'} 
            style={{ fontWeight: '700' }}
        >
            {`From ${props.Start_Date} - ${props.End_Date}`}
        </h4>
        <p 
            data-testid={'job-description'}
            style={{ paddingInline: '24px' }}
        >
            {props.Description.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </p>
        <h4>{'Technology'}</h4>
        <StyledUL data-testid={'tech-used'}>
            {props.Technology.map((item, i) => (
                <StyledList key={`${item}-${i}`}>{item}</StyledList>
            ))}
        </StyledUL>
    </DottedBorderedDiv>
);

const ContractWork = (props) => (
    <DottedBorderedDiv
        style={{
            justifyContent: 'center',
            width: 'auto',
        }}
    >
        <h2 data-testid={'employer-name'}>{props.Employer}</h2>
        <h3 data-testid={'job-title'}>{props.Title}</h3>
        <h4 
            data-testid={'dates-worked'} 
            style={{ fontWeight: '700' }}
        >
            {`From ${props.Start_Date} - ${props.End_Date}`}
        </h4>
        {props.Projects?.Internal ? <InternalProjects projects={[props.Projects.Internal]} /> : null}
        {props.Projects?.External ? <ExternalProjects projects={[props.Projects.External]} /> : null}
    </DottedBorderedDiv>
);

export const Employment = (props) => {
    if (props.Projects?.Internal || props.Projects?.External) {
        return <ContractWork {...props} />;
    } else {
        return <SingleEmployer {...props} />;
    }
};
