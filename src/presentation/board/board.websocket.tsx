import {io} from "socket.io-client";
import React, {useState} from "react";
import {ToastProps} from "../shared/common/toast/toast";
import {tasksDoing, tasksDone, tasksResources, tasksTodo} from "../../api/board.mock";
import {Task} from "../../domain/task.model";

const socket = io("ws://localhost:3001", {
    reconnectionDelayMax: 10000,
});

export const useBoardWebsocket = () => {
    const [websocketState, setWebsocketState] = useState({
        isConnected: socket.connected
    });

    function setUpWebsocket(
        setToasts: any,
        setState: any
    ) {
        socket.on('connect', () => {
            setWebsocketState(prevState => ({...prevState, isConnected: true}));
        });

        socket.on('disconnect', () => {
            setWebsocketState(prevState => ({...prevState, isConnected: false}));
        });

        socket.on('add_toast', (res) => {
            const toast: ToastProps = res
            setToasts([toast])
        });

        // socket.on('add_card', (res) => {
        //     const task: Task = res
        //     console.log(task)
        //     setState((prevState: Task[]) => ([...prevState, task]))
        // });
    }

    function discardWebsocket() {
        socket.off('connect');
        socket.off('disconnect');
        socket.off('pong');
    }

    function emitAddCard() {
        const tasks = [
            ...tasksResources,
            ...tasksTodo,
            ...tasksDoing,
            ...tasksDone
        ]

        const random = Math.floor(Math.random() * tasks.length)

        socket.emit('add_card', tasks[random])
    }

    return {
        websocketState,
        setWebsocketState,
        setUpWebsocket,
        discardWebsocket,
        emitAddCard
    }
}