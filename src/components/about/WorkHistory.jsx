import React from 'react';
import styled from 'styled-components';

import centralWork from '../../data/work-data/central.json';
import sourceAlliesWork from '../../data/work-data/source-allies.json';
import {BorderedDiv} from "../../styles/divs";

import {Employment} from "./Employment";

const StyledOuterDiv = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: -50px;
`;

const StyledInnerDiv = styled(BorderedDiv)`
    display: flex;
    flex-direction: column;
`;

export const WorkHistory = () => (
    <StyledOuterDiv className={'work-history'}>
        <StyledInnerDiv>
            <h1 style={{textAlign: 'center'}}>{'Work History'}</h1>
            <Employment {...sourceAlliesWork} />
            <Employment {...centralWork} />
        </StyledInnerDiv>
    </StyledOuterDiv>
);