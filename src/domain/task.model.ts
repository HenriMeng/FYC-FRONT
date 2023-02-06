export interface TaskProps {
    boardId?: string
    id?: string
    title: string
    content: string
    createdAt?: Date
    status: string
}

export class Task {
    boardId?: string
    id?: string
    title: string
    content: string
    createdAt?: Date
    status: string


    constructor(taskProps: TaskProps) {
        this.id = taskProps.id;
        this.title = taskProps.title;
        this.content = taskProps.content;
        this.createdAt = taskProps.createdAt;
        this.status = taskProps.status;
    }

}