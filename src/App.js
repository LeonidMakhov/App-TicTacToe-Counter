import './App.css';

import {useState} from "react";
import Counters from "./Components/Counters/Counters";
import GameTicTacToe from "./Components/TicTacToe/GameTicTacToe";

function App() {

    const [openGame, setOpenGame] = useState('')
    const openApp = (game) => {
        setOpenGame(game);
    }

    return (
        <div className="App">
            <h1>Games</h1>
            <button onClick={() => openApp("CounterGames")}> Counters </button>
            <button onClick={() => openApp("GameTicTacToe")}> Tic-Tac-Toe </button>
            {openGame === "CounterGames" && <Counters name={"Counters"}/>}
            {openGame === "GameTicTacToe" && <GameTicTacToe name={"GameTicTacToe"}/>}
        </div>
    );
}

export default App;