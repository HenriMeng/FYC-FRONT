import Column from "../../grid/column";
import React, {useEffect, useState} from "react";
import Toast, {ToastProps} from "./toast";

const style: React.CSSProperties = {
    position: 'fixed',
    bottom: '1rem',
    right: '1rem',
}

interface ToastsContainerProps {
    toasts: ToastProps[]
    timeout?: number
}

const ToastsContainer = (props: ToastsContainerProps) => {
    const [toasts, setToasts] = useState<ToastProps[]>([]);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (isDeleting || toasts.length === 0) {
            return;
        }

        setIsDeleting(true);
        setTimeout(() => {
            setToasts(prevState => prevState.slice(1))
            setIsDeleting(false)
        }, props.timeout || 5000)
    }, [toasts]);

    useEffect(() => {
        setToasts(prevState => ([...prevState, ...props.toasts]))
    }, [props.toasts]);

    return (
        <Column style={style}>
            {
                toasts.map((item, index) =>
                    <Toast
                        key={`toast_${index}`}
                        {...item}
                        onHide={() => removeItself(item)}
                    />
                )
            }
        </Column>
    )

    function removeItself(toast: ToastProps) {
        setToasts(prevState => prevState.filter(item => item !== toast))
    }
}

export default ToastsContainer