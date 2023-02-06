import {Task} from "./task.model";

export interface BoardProps {
    id: string
    name: string
    tasks: Task[]
}

export class Board {
    id: string
    name: string
    tasks: Task[]

    constructor(props: BoardProps) {
        this.id = props.id;
        this.name = props.name;
        this.tasks = props.tasks;
    }
}