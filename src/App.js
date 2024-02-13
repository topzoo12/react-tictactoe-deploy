import { useState } from 'react';
import './App.css';
import Board from './components/Board';


function App() {

  const [history, setHistory] = useState([{squares: Array(9).fill(null)}]);
  const [xIsNext, setXisNext] = useState(true); 
  const [stepNumber, setSetpNumber] = useState(0);

  const calulateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    
    //console.log(lines)

    for (let index = 0; index < lines.length; index++) {
        const [a, b, c] = lines[index];
        //console.log([a, b, c])
        //console.log(squares[a] , squares[b] , squares[c]) 
        //console.log("---------------------------------------")

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
             return squares[a];
        }
    } 
    //console.log("######################################################")
    return null;
  }

  const current = history[stepNumber];
  const winner = calulateWinner(current.squares);

  let status;
  if (winner) {
      status = 'Winner: ' + winner; 
  } else {
      status = `Next player: ${xIsNext ? 'X' : 'O'}`
  }

  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const newCurrent = newHistory[newHistory.length - 1];
    const newSquares =  newCurrent.squares.slice();

    if (calulateWinner(newSquares) || newSquares[i]) {
      return
    }

    newSquares[i] = xIsNext ? 'X' : 'O';
    setHistory([...newHistory, { squares : newSquares }])
    setXisNext(prev => !prev)

    setSetpNumber(newHistory.length);
  }

  const moves = history.map((step, move) => {
    const desc = move ? 'Go to move #' + move : 'Go to Game start';

    return (
      <li key={move}>
        <button className='move-button' onClick={ () => jumpTo(move) }>{desc}</button>
      </li>
    )
  })

  const jumpTo = (step) => {
    setSetpNumber(step);
    setXisNext((step % 2) === 0)
  }



  return (
    <div className="game">
      <div className="game-board">
        game-board
        <Board squares={current.squares} onClick={(i) => handleClick(i)}/>
      </div>
      <div className="game-info"> 
      <div className='status'>{status}</div>
      <ol style={{ listStyle: 'none'}}>
        {moves}
      </ol>
        game-info
      </div>
    </div>
  );
}

export default App;
