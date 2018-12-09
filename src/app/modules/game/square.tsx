import './game.scss'
import * as React from 'react'
import { IActionOnClick } from './reducer'

interface IProps {
  index: number
  value: string
  onClick: (i: number) => IActionOnClick
}

const Square = ({ index, value, onClick }: IProps) => {
  return (
    <button
      className="square"
      id={index.toString()}
      // tslint:disable-next-line
      onClick={() => onClick(index)}
      role="presentation"
    >
      {value}
    </button>
  )
}

export default Square
