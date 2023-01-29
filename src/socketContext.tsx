import {SocketService} from "./socket.service";
import React, {useEffect} from "react";

const SocketContext: React.Context<SocketService> = React.createContext(new SocketService());

// @ts-ignore
const SocketContextProvider = ({ children }) => {

    useEffect(() => {
    }, []);

    return (
        <SocketContext.Provider value={new SocketService()}>
            {children}
        </SocketContext.Provider>
    );

};

export {
    SocketContext,
    SocketContextProvider,
};