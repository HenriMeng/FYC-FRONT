import React from "react";

const Column = (props: any) => {
    const columnStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        ...props.style
    }

    return (
        <div style={columnStyle} className={props.className}>
            {props.children}
        </div>
    )
}

export default Column