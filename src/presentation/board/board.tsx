import React, {useEffect, useState} from "react";
import Row from "../shared/grid/row";
import TaskColumn from "../shared/task-column/task-column";
import {getFullFilledBoard} from "../../api/board.api";
import {Task} from "../../domain/task.model";

const Board = () => {
    const [state, setState] = useState<Task[]>([]);

    useEffect(() => {
        asyncGetBoard()
    }, []);

    async function asyncGetBoard() {
        const value = await getFullFilledBoard()
        setState(value)
    }

    return (
        <Row>
            {
                [...new Set(state.map(item => item.status))]
                    .map((statusName, index) => {
                    return <TaskColumn
                        key={`TaskColumn-${index}`}
                        statusName={statusName}
                        tasks={state.filter(item => item.status === statusName)}
                    />
                })
            }
        </Row>
    )
}

export default Board