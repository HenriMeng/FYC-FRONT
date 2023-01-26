import React from "react";

const Column = (props: React.HTMLAttributes<HTMLDivElement>) => {
    const columnStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        ...props.style,
        gap: '1rem',
    }

    return (
        <div {...props} style={columnStyle}>
            {props.children}
        </div>
    )
}

export default Column