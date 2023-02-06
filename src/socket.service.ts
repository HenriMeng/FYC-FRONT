import {fromEvent, Observable} from "rxjs";

export interface SocketServiceContextType {
    value: SocketService
}

export class SocketService {
    private socket: WebSocket = {} as WebSocket;

    // connecting to socket service
    public init(url: string) {
        console.log("connecting to socket service: " + url)
        this.socket = new WebSocket(url)
    }

    public send(message: any): void {
        this.socket.send(JSON.stringify(message));
    }

    public onMessage(): Observable<any> {
        return fromEvent(this.socket, 'message')
    }

    public isConnected(): boolean {
        return this.socket.readyState === WebSocket.OPEN
    }

    public disconnect(): void {
        this.socket.close();
    }
}