import React from 'react';

import { StyledList, StyledUL } from '../../styles/lists';
import { DottedBorderedDiv } from '../../styles/divs';

const SingleEmployer = (props) => (
    <DottedBorderedDiv
        style={{
            justifyContent: 'center',
            width: 'auto',
        }}
    >
        <h2>{props.Employer}</h2>
        <h3>{props.Title}</h3>
        <h4 style={{ fontWeight: '700' }}>{`From ${props.Start_Date} - ${props.End_Date}`}</h4>
        <p style={{ paddingInline: '24px' }}>
            {props.Description.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </p>
        <h4>{'Technology'}</h4>
        <ul
            style={{
                display: 'grid',
                gridAutoRows: '20px',
                gridGap: '5px',
                gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                paddingLeft: '16px',
            }}
        >
            {props.Technology.map((item, i) => (
                <StyledList key={`${item}-${i}`}>{item}</StyledList>
            ))}
        </ul>
    </DottedBorderedDiv>
);

const ContractWork = (props) => (
    <DottedBorderedDiv
        style={{
            justifyContent: 'center',
            width: 'auto',
        }}
    >
        <h2>{props.Employer}</h2>
        <h3>{props.Title}</h3>
        <h4 style={{ fontWeight: '700' }}>{`From ${props.Start_Date} - ${props.End_Date}`}</h4>
        {props.Projects?.Internal ? (
            <>
                <h2
                    style={{
                        fontWeight: '900',
                        textDecoration: 'underline',
                    }}
                >
                    {'Internal Projects'}
                </h2>
                {props.Projects.Internal.map((project, i) => (
                    <div 
                        key={project + '-' + i} 
                        style={{ paddingInline: '24px' }}
                    >
                        <h2>{project.Name}</h2>
                        <h4 style={{ fontWeight: '700' }}>
                            {`From ${project.Start_Date} - ${project.End_Date}`}
                        </h4>
                        <p>
                            {project.Description.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </p>
                        <h4>{'Technology'}</h4>
                        <StyledUL>
                            {project.Technology.map((item, i) => (
                                <StyledList key={`${item}-${i}`}>{item}</StyledList>
                            ))}
                        </StyledUL>
                    </div>
                ))}
            </>
        ) : null}
        {props.Projects?.External ? (
            <>
                <h2
                    style={{
                        fontWeight: '900',
                        textDecoration: 'underline',
                    }}
                >
                    {'External Projects'}
                </h2>
                {props.Projects.External.map((project, i) => (
                    <div 
                        key={project + '-' + i} 
                        style={{ paddingInline: '24px' }}
                    >
                        <h2>{project.Partner_Site}</h2>
                        <h4 style={{ fontWeight: '700' }}>
                            {`From ${project.Start_Date} - ${project.End_Date}`}
                        </h4>
                        <p>
                            {project.Description.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </p>
                        <h4>{'Technology'}</h4>
                        <StyledUL>
                            {project.Technology.map((item, i) => (
                                <StyledList key={`${item}-${i}`}>{item}</StyledList>
                            ))}
                        </StyledUL>
                    </div>
                ))}
            </>
        ) : null}
    </DottedBorderedDiv>
);

export const Employment = (props) => {
    if (props.Projects?.Internal || props.Projects?.External) {
        return <ContractWork {...props} />;
    } else {
        return <SingleEmployer {...props} />;
    }
};
