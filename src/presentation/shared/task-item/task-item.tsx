import Column from "../grid/column";
import React from "react";
import {Task} from "../../../domain/task.model";
import {pStyle} from "../shared.styles";
import {deleteTask} from "../../../api/board.api";

interface TaskProps {
    value: Task
}

const TaskItem = (props: TaskProps) => {
    const task: Task = props.value
    const handleDeleteTask = () => {
        deleteTask(props.value.id!!)
    }
    const taskStyle: React.CSSProperties = {
        backgroundColor: 'white',
        padding: '7px',
        borderRadius: '5px',
        boxShadow: 'rgb(0 0 0 / 16%) -1px 1px 2px',
    }

    function getRandomColor(): string {
        const colors = ['darkcyan', 'indianred', 'forestgreen']
        const random = Math.floor(Math.random() * 3)
        return colors[random]
    }

    function getHumanReadableDate(date: Date): string {
        const result = new Date(date || '')
        return result.toDateString()
    }

    return (
        <Column style={taskStyle}>
    <span style={{
        height: '8px',
        width: '50px',
        backgroundColor: `${getRandomColor()}`,
        borderRadius: '25px',
    }}></span>
            <h3 style={pStyle}>{task.title}</h3>
            <h4 style={pStyle}>{task.content}</h4>
            <p style={pStyle}>{getHumanReadableDate(task.createdAt!!)}</p>
            <button onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'lightgray'}
            }
                    onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent'}
                    }
                style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: 'red',
                    cursor: 'pointer',
                }}
                onClick={handleDeleteTask}
            >
                delete task
            </button>
        </Column>
    );
}

export default TaskItem;

