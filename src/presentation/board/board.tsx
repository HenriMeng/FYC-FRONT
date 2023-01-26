import React, {useEffect, useState} from "react";
import Row from "../shared/grid/row";
import TaskColumn from "../shared/task-column/task-column";
import {getFullFilledBoard} from "../../api/board.api";
import {Task} from "../../domain/task.model";
import {ToastProps} from "../shared/common/toast/toast";
import ToastsContainer from "../shared/common/toast/toasts.container";
import {useBoardWebsocket} from "./board.websocket";


const Board = () => {
    const [state, setState] = useState<Task[]>([]);
    const [toasts, setToasts] = useState<ToastProps[]>([]);
    const {
        websocketState,
        setWebsocketState,
        setUpWebsocket,
        discardWebsocket,
        emitAddCard
    } = useBoardWebsocket()

    useEffect(() => {
        setUpWebsocket(setToasts, setState)
        asyncGetBoard()

        return () => {
            discardWebsocket()
        };
    }, []);

    return (
        <>
            <button onClick={() => setToasts(prevState => ([getRandomToast()]))}>
                Add Toast
            </button>
            <ToastsContainer toasts={toasts}/>
            <Row>
                {
                    [...new Set(state.map(item => item.status))]
                        .map((statusName, index) => {
                            return <TaskColumn
                                key={`TaskColumn-${index}`}
                                statusName={statusName}
                                tasks={state.filter(item => item.status === statusName)}
                                onAddCardClick={emitAddCard}
                            />
                        })
                }
            </Row>
        </>
    )

    async function asyncGetBoard() {
        const value = await getFullFilledBoard()
        setState(value)
    }

    function getRandomToast(): ToastProps {
        const examples: ToastProps[] = [
            {
                title: 'Yay! Everything worked!',
                description: 'Congrats on the internet loading your request.',
            },
            {
                type: 'danger',
                title: 'Uh oh, something went wrong',
                description: 'Sorry! There was a problem with your request.',
            },
        ]
        const random = Math.floor(Math.random() * 2)

        return examples[random]
    }
}

export default Board