import React, { useState } from 'react'
import Square from './Square'
import "./Board.css"

const Board = ({squares, onClick}) => {

    // [getter, setter] 순서로 입력
    //const [squares, setSquares] = useState(Array(9).fill(null));
    //const [xIsNext, setXisNext] = useState(true); 

    const renderSquare = (i) => {
        //return <Square value={this.state.squares[i]}/>
        return <Square value={squares[i]} 
            onClick={() => onClick(i)} />
    }

   
     return (
         <div className='board-wrapper'>
             <div className='boarder-row'>
                 {renderSquare(0)}
                 {renderSquare(1)}
                 {renderSquare(2)}
             </div>
             <div className='boarder-row'>
                 {renderSquare(3)}
                 {renderSquare(4)}
                 {renderSquare(5)}
             </div>
             <div className='boarder-row'>
                 {renderSquare(6)}
                 {renderSquare(7)}
                 {renderSquare(8)}
             </div>
       </div>
     )
   
}


export default Board
