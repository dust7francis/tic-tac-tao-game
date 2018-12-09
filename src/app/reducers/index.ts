import { combineReducers } from 'redux'

import game, { GameState } from '../modules/game/reducer'

export interface IRootState {
  readonly game: GameState
}

const rootReducer = combineReducers<IRootState>({
  game
})

export default rootReducer
