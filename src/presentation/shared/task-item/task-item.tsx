import Column from "../grid/column";
import React from "react";
import {Task} from "../../../domain/task.model";
import {pStyle} from "../shared.styles";

interface TaskProps {
    value: Task
}

const TaskItem = (props: TaskProps) => {
    const taskStyle: React.CSSProperties = {
        backgroundColor: 'white',
        padding: '7px',
        borderRadius: '5px',
        boxShadow: 'rgb(0 0 0 / 16%) -1px 1px 2px',
    }

    return (
        <Column style={taskStyle}>
            <span style={{
                height: '8px',
                width: '50px',
                backgroundColor: `${props.value.getRandomColor()}`,
                borderRadius: '25px',
            }}></span>
            <h4 style={pStyle}>{props.value.content}</h4>
            <p style={pStyle}>{props.value.getHumanReadableDate()}</p>
        </Column>
    )
}
export default TaskItem;

