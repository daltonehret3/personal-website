import styled from 'styled-components';

export const StyledUL = styled.ul`
    display: grid;
    grid-auto-rows: 20px;
    grid-gap: 32px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    padding-bottom: 32px;
    padding-left: 16px;
`;

export const StyledList = styled.li`
    width: auto;
    height: auto;
    padding-inline: 4px;
    padding-top: 10px;
    margin-right: 10px;
    vertical-align: middle;
    // border: 1px dotted red;
`;
