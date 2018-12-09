import './game.scss'
import * as React from 'react'
import Square from './square'
import { IActionOnClick } from './reducer'
import { Row } from 'reactstrap'

interface IProps {
  onClick: (i: number) => IActionOnClick
  squares: string[]
}

const row = (
  index: number,
  squares: string[],
  onClick: (i: number) => IActionOnClick
) =>
  [index, index + 1, index + 2].map((i: number) => (
    <Square key={i} index={i} value={squares[i]} onClick={onClick} />
  ))

const Board = ({ squares, onClick }: IProps) => (
  <div>
    <div className="status">{status}</div>
    {[0, 3, 6].map((startIndex: number) => (
      <Row className="board-row" key={startIndex}>
        {row(startIndex, squares, onClick)}
      </Row>
    ))}
  </div>
)

export default Board
