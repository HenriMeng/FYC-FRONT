import React from "react";

const Center = (props: any) => {
    let centerStyle: React.CSSProperties = {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    return (
        <div style={centerStyle}>
            {props.children}
        </div>
    )
}

export default Center