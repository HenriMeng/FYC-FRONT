import React from "react";

const Row = (props: React.HTMLAttributes<HTMLDivElement>) => {
    const rowStyle: React.CSSProperties = {
        display: 'flex',
        ...props.style,
        gap: '1rem',
    }

    return (
        <div {...props} style={rowStyle}>
            {props.children}
        </div>
    )
}

export default Row