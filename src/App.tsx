import './App.css'
import React from "react";
import Board from "./presentation/board/board";
import Column from "./presentation/shared/grid/column";

function App() {

    return (
        <div className="App">
            <Column style={{padding: '1rem'}}>
                <h2>TrelloLike</h2>
                <Board/>
            </Column>
        </div>
    )
}

export default App
