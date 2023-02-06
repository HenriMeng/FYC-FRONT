import {Board} from "../domain/board.model";
import {Task} from "../domain/task.model";

export function getFullFilledBoard(): Promise<Board[]> {

    return fetch('http://localhost:3000/boards')
        .then(response => response.json())
        .then(data => {
            return data.map((board: any) => {
                return {
                    id: board._id,
                    name: board.name,
                    tasks: board.tasks.map((task: any) => {
                        return {
                            id: task._id,
                            title: task.title,
                            content: task.content,
                            createdAt: task.createdAt,
                            status: task.status
                        } as Task;
                    })
                } as Board;
            })
        });
}

export function createBoard(boardName: string): Promise<any> {
    return fetch('http://localhost:3000/boards', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: boardName})
    })
        .then(response => response.json())
        .then(data => {
            return data;
        });
}

export function createTask(task: Task): Promise<any> {
    return fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
        .then(response => response.json())
        .then(data => {
            return data;
        });
}

export function updateTask(task: Task): Promise<any> {
    return fetch(`http://localhost:3000/tasks/${task.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
        .then(response => response.json())
        .then(data => {
            return data;
        });
}

export function deleteTask(taskId: string): Promise<any> {
    return fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => {
            return data;
        });
}

export function deleteBoard(boardId: string): Promise<any> {
    return fetch(`http://localhost:3000/boards/${boardId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => {
            return data;
        });
}
