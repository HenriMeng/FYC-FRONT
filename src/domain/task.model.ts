export interface TaskProps {
    id: string
    title: string
    content: string
    createdAt: Date
    status: string
}

export class Task {
    id: string
    title: string
    content: string
    createdAt: Date
    status: string


    constructor(id: string, title: string, content: string, createdAt: Date, status: string) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.createdAt = createdAt;
        this.status = status;
    }

}