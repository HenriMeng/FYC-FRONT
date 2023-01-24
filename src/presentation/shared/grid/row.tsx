import React from "react";

const Row = (props: any) => {
    const rowStyle: React.CSSProperties = {
        display: 'flex',
        gap: '1rem',
        ...props.style
    }

    return (
        <div style={rowStyle}>
            {props.children}
        </div>
    )
}

export default Row