import React from 'react';

import {StyledUL, StyledList} from '../../styles/lists';

export const InternalProjects = (props) => {
    const projects = props.projects[0];

    return (
        <>
            <h2
                style={{
                    fontWeight: '900',
                    textDecoration: 'underline',
                }}
            >
                {'Internal Projects'}
            </h2>
            {projects.map((project, i) => (
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
    );
};