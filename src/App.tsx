import './App.css'
import React from "react";
import BoardList from "./presentation/board/boardList";
import Column from "./presentation/shared/grid/column";

function App() {

    return (
        <div className="App">
            <Column style={{padding: '1rem'}}>
                <h2>TrelloLike</h2>
                <BoardList/>
            </Column>
        </div>
    )
}

export default App
