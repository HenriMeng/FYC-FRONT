import Column from "../grid/column";
import {Task} from "../../../domain/task.model";
import TaskItem from "../task-item/task-item";
import React from "react";
import Row from "../grid/row";
import "./task-column.css";
import Flex from "../grid/flex";
import {createTask, deleteBoard} from "../../../api/board.api";

interface TaskColumnProps extends React.HTMLAttributes<HTMLDivElement> {
    boardName: string
    boardId: string
    tasks: Task[]
    onAddCardClick?: any
}

const TaskColumn = (props: TaskColumnProps) => {
    const {boardName, tasks} = props
    const onDeleteBoard = () => {
        deleteBoard(props.boardId)
    }
    const onAddCardClick = async () => {
        await createTask({
            boardId: props.boardId,
            title: "New Task " + Math.random().toString(8).substring(9),
            content: "New Task Description",
            status: "TODO"
        })
    }

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
                <h3 style={{color: 'black', fontSize: '17px'}}>{boardName}</h3>
                <button onClick={onDeleteBoard} className="TaskColumnButton">X</button>
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
            <button onClick={onAddCardClick}>Add a card...</button>
        </Column>
    )
}
export default TaskColumn;