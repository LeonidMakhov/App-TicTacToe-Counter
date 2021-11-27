import React, { useState } from "react";
import './Game.css';
import Board from "./Board";
import calculateWinner from "./Helper";

function GameTicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null)) /* Можно так.  useState(Array(9).fill(null))   9 массивов с заполнением null. */
    const [xIsNext, setIsNext] = useState(true) /*кто будет ходить первым? по умолчанию крестик*/
    const winner = calculateWinner(board); /*Определяем победителя из элемента board*/

    const handleClick = (index) => {
        const boardCopy = [...board]
        // определить был ли клик по ячейке или игра закончена?
        if (winner || boardCopy[index]) return null
        // определить чей ход?
        boardCopy[index] = xIsNext ? 'X' : '0'
        //Обновить наш state
        setBoard(boardCopy)
        setIsNext(!xIsNext)
    }
    const startNewGame = () => {
        return (
            <button className="start_btn" onClick={() => setBoard(Array(9).fill(null))}> Restart </button>
        )
    }

    return (

            // <div style={style}>
            <div className="wrapper">
                <h1>Tic - Tac - Toe</h1>
                {startNewGame()}
                <Board squares={board} click = {handleClick}/>
                <p>
                    {winner ? "WINNER  " + winner : "Next step " + (xIsNext ? 'X' : '0')}
                </p>

            </div>

    )
}

export default GameTicTacToe;

