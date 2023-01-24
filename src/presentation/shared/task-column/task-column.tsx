import Column from "../grid/column";
import {Task} from "../../../domain/task.model";
import TaskItem from "../task-item/task-item";
import React from "react";
import Row from "../grid/row";
import "./task-column.css";
import Flex from "../common/flex";

interface TaskColumnProps {
    statusName: string
    tasks: Task[]
}

const TaskColumn = (props: TaskColumnProps) => {
    const {statusName, tasks} = props

    const taskColumnStyle: React.CSSProperties = {
        backgroundColor: '#eae1d9',
        padding: '8px',
        borderRadius: '5px',
        minWidth: '250px',
        height: 'fit-content',
    }

    return (
        <Column style={taskColumnStyle}>
            <Row style={{justifyContent: 'space-between'}}>
                <h3 style={{color: 'black', fontSize: '17px'}}>{statusName}</h3>
                <button className="TaskColumnButton">...</button>
            </Row>
            <Flex>
                <Column style={{gap: '.5rem'}}>
                    {
                        tasks.map(item => {
                            return <TaskItem
                                key={`TaskItem-${item.id}`}
                                value={item}
                            />
                        })
                    }
                </Column>
            </Flex>
            <button>Add a card...</button>
        </Column>
    )
}
export default TaskColumn;