import React from 'react';

import {StyledList} from "../../styles/lists";
import {DottedBorderedDiv} from "../../styles/divs";

const SingleEmployer = (props) => (
    <DottedBorderedDiv
        style={{
            justifyContent: 'center',
            width: 'auto'
        }}
    >
        <h2>{props.Employer}</h2>
        <h3>{props.Title}</h3>
        <h4 style={{fontWeight: '700'}}>{`From ${props.Start_Date} - ${props.End_Date}`}</h4>
        <p>
            {
                props.Description.map((item, i) => (
                    <li key={i}>{item}</li>
                ))
            }
        </p>
        <h4>{'Technology'}</h4>
        <ul style={{paddingLeft: '16px'}}>{
            props.Technology.map((item, i) => (
                <StyledList key={`${item}-${i}`}>
                    {item}
                </StyledList>
            ))
        }</ul>
    </DottedBorderedDiv>
);

const ContractWork = (props) => (
    <DottedBorderedDiv
        style={{
            justifyContent: 'center',
            width: 'auto'
        }}
    >
        <h2>{props.Employer}</h2>
        <h3>{props.Title}</h3>
        <h4 style={{fontWeight: '700'}}>{`From ${props.Start_Date} - ${props.End_Date}`}</h4>
        {
            props.Projects?.Internal ?
                <>
                    <h2
                        style={{
                            fontWeight: '900',
                            textDecoration: 'underline'
                        }}
                    >
                        {'Internal Projects'}
                    </h2>
                    {
                        props.Projects.Internal.map((project, i) => (
                            <div
                                key={project + '-' + i}
                                style={{paddingInline: '24px'}}
                            >
                                <h2>{project.Name}</h2>
                                <h4 style={{fontWeight: '700'}}>
                                    {`From ${project.Start_Date} - ${project.End_Date}`}
                                </h4>
                                <p>{
                                    project.Description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))
                                }</p>
                                <h4>{'Technology'}</h4>
                                <ul style={{paddingLeft: '16px'}}>{
                                    project.Technology.map((item, i) => (
                                        <StyledList key={`${item}-${i}`}>
                                            {item}
                                        </StyledList>
                                    ))
                                }</ul>
                            </div>
                        ))
                    }
                </>
                : null
        }
    </DottedBorderedDiv>
);

export const Employment = (props) => {
    if (props.Projects?.Internal || props.Projects?.External) {
        return <ContractWork {...props} />
    } else {
        return <SingleEmployer {...props} />
    }
};
