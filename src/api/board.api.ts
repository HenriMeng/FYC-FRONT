import {Task} from "../domain/task.model";
import {tasksDoing, tasksDone, tasksResources, tasksTodo} from "./board.mock";

export function getFullFilledBoard(): Promise<Task[]> {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                ...tasksResources,
                ...tasksTodo,
                ...tasksDoing,
                ...tasksDone
            ])
        }, 300);
    })
}