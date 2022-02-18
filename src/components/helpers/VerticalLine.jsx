import React from 'react';

export const VerticalLine = (props) => {
    const backgroundColor = props.backgroundColor || 'white';
    const height = props.height || '100px';
    const width = props.width || '6px';

    return (
        <div
            style={{
                borderLeft: `${width} solid ${backgroundColor}`,
                height: height,
                left: '50%',
                marginLeft: '-3px',
                position: 'relative',
                top: '-25px',
            }}
        ></div>
    )
}