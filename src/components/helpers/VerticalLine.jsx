import React from 'react';

export const VerticalLine = (props) => {
    const {
        thickness,
        lineType,
        lineColor,
        lineHeight
    } = props;

    return (
        <div
            style={{
                'borderLeft': `${thickness} ${lineType} ${lineColor}`,
                'height': `${lineHeight}`,
                'left': '50%',
                'marginLeft': '-3px',
                'position': 'relative',
                'top': -24,
            }}
        />
    )
};