import Row from "../../grid/row";
import {dangerToastStyle, successToastStyle, ToastStyle} from "./toast.styles";
import React from "react";

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
    type?: 'success' | 'danger'
    title: string
    description: string
    onHide?: any
}

const Toast = (props: ToastProps) => {
    const style: ToastStyle = getStyleByType();
    const statusIcon = getStatusIconByType();

    return (
        <Row {...props} style={style.body}>
            <span style={style.stick}></span>
            <i style={style.statusIcon} className={statusIcon}></i>
            <div>
                <p style={style.title}>{props.title}</p>
                <p style={style.description}>{props.description}</p>
            </div>
            <i
                style={style.closeIcon}
                className="gg-close"
                onClick={props.onHide}
            />
        </Row>
    )

    function getStatusIconByType() {
        switch (props.type) {
            case 'danger':
                return 'gg-danger'
            default:
                return 'gg-check-o'
        }
    }

    function getStyleByType() {
        switch (props.type) {
            case 'danger':
                return dangerToastStyle
            default:
                return successToastStyle
        }
    }
}

export default Toast