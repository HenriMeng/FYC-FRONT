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