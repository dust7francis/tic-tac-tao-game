import { expect } from 'chai'
import * as reducer from './reducer'

const squaresAllEmpty = ['', '', '', '', '', '', '', '', '']
const squares__X = ['', '', 'X', '', '', '', '', '', '']
const squaresXO = ['X', 'O', '', '', '', '', '', '', '']
const squaresXX_OO = ['X', 'X', '', 'O', 'O', '', '', '', '']
const squaresXXXOO = ['X', 'X', 'X', 'O', 'O', '', '', '', '']
const squaresAllClicked = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'X']

const actionReset = {
  type: reducer.ACTION_TYPES.RESET
}

const actionOnClick3 = {
  type: reducer.ACTION_TYPES.ON_CLICK,
  payload: {
    index: 2
  }
}

const initialState = {
  errorMessage: null,
  squares: squaresAllEmpty,
  xIsNext: true,
  isAllClicked: false,
  winner: null
}
const state__X = {
  errorMessage: null,
  squares: squares__X,
  xIsNext: false,
  isAllClicked: false,
  winner: null
}

const stateXOX = {
  errorMessage: null,
  squares: squaresXO,
  xIsNext: true,
  isAllClicked: false,
  winner: null
}

const stateXX_OO = {
  errorMessage: null,
  squares: squaresXX_OO,
  xIsNext: true,
  isAllClicked: false,
  winner: null
}

const stateXXXOO = {
  errorMessage: null,
  squares: squaresXXXOO,
  xIsNext: false,
  isAllClicked: false,
  winner: 'X'
}

const stateAllClicked = {
  errorMessage: null,
  squares: squaresAllClicked,
  xIsNext: false,
  isAllClicked: true,
  winner: 'X'
}

describe('game.reducer', () => {
  it('intialState defined', () => {
    expect(reducer.initialState)
      .to.deep.equals(initialState)
  })
  it('calculateWinner', () => {
    expect(reducer.calculateWinner(null))
      .to.equals(null)
    expect(reducer.calculateWinner(initialState.squares))
      .to.equals(null)
    expect(reducer.calculateWinner(squaresXO))
      .to.equals(null)
    expect(reducer.calculateWinner(squaresAllClicked))
      .to.equals('X')
    expect(reducer.calculateWinner(squaresXXXOO))
      .to.equals('X')
  })
  it('allClicked', () => {
    expect(reducer.allClicked(null))
      .to.equals(null)
    expect(reducer.allClicked(squaresXO))
      .to.equals(false)
    expect(reducer.allClicked(squaresXXXOO))
      .to.equals(false)
    expect(reducer.allClicked(squaresAllClicked))
      .to.equals(true)
  })
  it('default.reset', () => {
    expect(reducer.default(initialState, null))
      .to.deep.equals(initialState)
    expect(reducer.default(stateXOX, null))
      .to.deep.equals(stateXOX)
    expect(reducer.default(initialState, actionReset))
      .to.deep.equals(initialState)
    expect(reducer.default(stateXOX, actionReset))
      .to.deep.equals(initialState)
    expect(reducer.default(stateXX_OO, actionReset))
      .to.deep.equals(initialState)
  })
  it('default.conClick', () => {
    expect(reducer.default(initialState, actionOnClick3))
      .to.deep.equals(state__X)
    expect(reducer.default(stateXX_OO, actionOnClick3))
      .to.deep.equals(stateXXXOO)
    expect(reducer.default(stateXX_OO, actionOnClick3))
      .to.deep.equals(stateXXXOO)
    expect(reducer.default(stateXXXOO, actionOnClick3))
      .to.deep.equals(stateXXXOO)
    expect(reducer.default(stateAllClicked, actionOnClick3))
      .to.deep.equals(stateAllClicked)
  })
})
