import React from "react";

export interface ToastStyle {
    body: React.CSSProperties
    stick: React.CSSProperties
    statusIcon: React.CSSProperties
    title: React.CSSProperties
    description: React.CSSProperties
    closeIcon: React.CSSProperties
}

const defaultToastStyle: ToastStyle = {
    body: {
        backgroundColor: 'white',
        borderRadius: '8px',
        width: 'fit-content',
        padding: '15px 25px',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        position: 'relative',
        alignItems: 'center',
    },
    closeIcon: {
        color: '#69727d',
        fontSize: '12px',
        cursor: 'pointer',
    },
    description: {
        color: '#919195',
        fontSize: '15px',
    },
    statusIcon: {
        color: '#20a779',
    },
    stick: {
        position: 'absolute',
        left: '8px',
        height: '80%',
        width: '5px',
        borderRadius: '25px',
    },
    title: {
        color: 'black',
        fontWeight: 'bolder',
    }
}

export const successToastStyle: ToastStyle = {
    ...defaultToastStyle,
    statusIcon: {
        ...defaultToastStyle.statusIcon,
        color: '#20a779',
    },
    stick: {
        ...defaultToastStyle.stick,
        backgroundColor: '#20a779',
    },
}

export const dangerToastStyle: ToastStyle = {
    ...defaultToastStyle,
    statusIcon: {
        ...defaultToastStyle.statusIcon,
        color: '#f0a92d',
    },
    stick: {
        ...defaultToastStyle.stick,
        backgroundColor: '#f0a92d',
    },
}