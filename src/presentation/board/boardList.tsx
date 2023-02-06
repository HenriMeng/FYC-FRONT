import React, {useContext, useEffect, useState} from "react";
import Row from "../shared/grid/row";
import TaskColumn from "../shared/task-column/task-column";
import {ToastProps} from "../shared/common/toast/toast";
import ToastsContainer from "../shared/common/toast/toasts.container";
import {Board} from "../../domain/board.model";
import {SocketContext} from "../../socketContext";
import {Task} from "../../domain/task.model";
import {createBoard, createTask} from "../../api/board.api";


const BoardList = () => {
    const socketContext = useContext(SocketContext);


    const [state, setState] = useState<Board[]>([]);
    const [boardName, setBoardName] = useState<string>("");
    const [toasts, setToasts] = useState<ToastProps[]>([]);

    useEffect(() => {
        socketContext.init("ws://localhost:80/tasks")

        setTimeout(() => {
            getBoard()
            getNotifications()
        }, 1000)

        return () => {
            socketContext.disconnect()
        }
    }, []);

    return (
        <>
            <ToastsContainer toasts={toasts}/>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    createBoard(boardName);
                }}
            >
                <Row style={{ marginBottom: '1rem' }}>
                    <input
                        type="text"
                        value={boardName}
                        onChange={(event) => setBoardName(event.target.value)}
                        placeholder="Board name"
                        onSubmit={(event) => {
                            event.preventDefault();
                            createBoard(boardName);}
                        }
                        style={{
                            color: 'black',
                            fontSize: '1rem',
                            padding: '0.5rem',
                            borderRadius: '4px',
                            border: '1px solid #ccc',
                        }}
                    />
                    <button
                        type="submit"
                        style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            color: 'blue',
                            cursor: 'pointer',
                            marginLeft: '0.5rem',
                        }}
                    >
                        Create Board
                    </button>
                </Row>
            </form>
            <Row>
                {
                    [...new Set(state.map(boards => boards))]
                        .map((board, index) => {
                            return <TaskColumn
                                key={`TaskColumn-${index}`}
                                boardName={board.name || "board"}
                                boardId={board.id}
                                tasks={board.tasks}
                                onAddCardClick={createTask}
                            />
                        })
                }
            </Row>
        </>
    )

    function getBoard() {
        socketContext.send({
            "event": "allBoards"
        })


        socketContext.onMessage().subscribe((message) => {
            const data = JSON.parse(message.data)
            if (data.event === "allBoards") {
                setState(data.data.map((response: any) => {
                    return {
                        id: response._id,
                        name: response.name,
                        tasks: response.tasks.map((task: any) => {
                            return {
                                id: task._id,
                                ...task
                            } as Task;
                        })
                    } as Board;
                }))
            }
        })


    }

    function getNotifications() {
        socketContext.send({
            "event": "anyTaskChange"
        })


        socketContext.onMessage().subscribe((message) => {
            const data = JSON.parse(message.data)
            if (data.event === "anyTaskChange") {
                if (data.data.action === "insert") {
                    setToasts([...toasts, {
                        id: data.data.task._id,
                        title: "New task created !",
                        description: "Title: " + data.data.task.title + " / Description: " + data.data.task.content,
                    }])
                } else if (data.data.action === "update") {
                    setToasts([{
                        id: data.data.task._id,
                        title: "Task updated !",
                        description: "Title: " + data.data.task.title + " / Status: " + data.data.task.status,
                    }])
                }

            }
        })
    }



}

export default BoardList