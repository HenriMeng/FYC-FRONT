import React, {useEffect, useState} from "react";
import Row from "../shared/grid/row";
import TaskColumn from "../shared/task-column/task-column";
import {getFullFilledBoard} from "../../api/board.api";
import {ToastProps} from "../shared/common/toast/toast";
import ToastsContainer from "../shared/common/toast/toasts.container";
import {Board} from "../../domain/board.model";


const BoardList = () => {
    const [state, setState] = useState<Board[]>([]);
    const [toasts, setToasts] = useState<ToastProps[]>([]);
    /*const {
        websocketState,
        setWebsocketState,
        setUpWebsocket,
        discardWebsocket,
        emitAddCard
    } = useBoardWebsocket()

     */

    useEffect(() => {
        //setUpWebsocket(setToasts, setState)
        asyncGetBoard()

        //return () => {
        //discardWebsocket()
        //};
    }, []);

    return (
        <>
            <button onClick={() => setToasts(prevState => ([getRandomToast()]))}>
                Add Toast
            </button>
            <ToastsContainer toasts={toasts}/>
            <Row>
                {
                    [...new Set(state.map(boards => boards))]
                        .map((board, index) => {
                            console.log(board)
                            return <TaskColumn
                                key={`TaskColumn-${index}`}
                                boardName={board.name || "board"}
                                tasks={board.tasks}
                                //onAddCardClick={emitAddCard}
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

export default BoardList