import Square from './square'

export const ACTION_TYPES = {
  ON_CLICK: 'ON_CLICK',
  RESET: 'GAME_RESET'
}

export const initialState = {
  errorMessage: null,
  squares: ['', '', '', '', '', '', '', '', ''],
  xIsNext: true,
  isAllClicked: false,
  winner: null
}

export const calculateWinner = (squares: string[]) => {
  if (!squares) {
    return null
  }
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
  // for (let i = 0; i < lines.length; i++) {
  for (const line of lines) {
    const [a, b, c] = line
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

export const allClicked = (squares: string[]) =>
  squares ? squares.findIndex((s: string) => s === '') === -1
    : null
export type GameState = Readonly<typeof initialState>

// Reducer
export default (state: GameState = initialState, action): GameState => {
  if (!action) {
    return state
  }
  switch (action.type) {
    case ACTION_TYPES.RESET:
      return {
        ...initialState
      }
    case ACTION_TYPES.ON_CLICK: {
      if (
        state.isAllClicked ||
        state.winner !== null ||
        state.squares[action.payload.index] !== ''
      ) {
        return state
      }
      const newSquares = state.squares.map(
        (s: string, i: number) =>
          i === action.payload.index ? (state.xIsNext ? 'X' : 'O') : s
      )
      return {
        ...state,
        isAllClicked: allClicked(newSquares),
        squares: newSquares,
        xIsNext: !state.xIsNext,
        winner: calculateWinner(newSquares)
      }
    }
    default:
      return state
  }
}

// Actions
export const reset = () => ({
  type: ACTION_TYPES.RESET
})

export interface IActionOnClick {
  type: string
  payload: {
    index: number
  }
  meta: {
    message: string
  }
}
export const onClick: (index: number) => IActionOnClick = (index: number) => ({
  type: ACTION_TYPES.ON_CLICK,
  payload: { index },
  meta: {
    message: `<strong>Square[${index}] is clicked</strong>`
  }
})
