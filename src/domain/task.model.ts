export interface TaskProps {
    id: number
    title?: string
    content: string
    date?: string
    status: string
}

export class Task {
    id: number
    title?: string
    content: string
    date?: string
    status: string

    constructor(props: TaskProps) {
        this.id = props.id;
        this.title = props.title;
        this.content = props.content;
        this.date = props.date;
        this.status = props.status;
    }

    getHumanReadableDate(): string {
        const result = new Date(this.date || '')
        return result.toDateString()
    }

    getRandomColor(): string {
        const colors = ['darkcyan', 'indianred', 'forestgreen']
        const random = Math.floor(Math.random() * 3)
        return colors[random]
    }
}