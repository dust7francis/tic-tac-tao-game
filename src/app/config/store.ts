import * as connected from 'connected-react-router'
import { createHashHistory, History } from 'history'

import { createStore, applyMiddleware, compose, Store } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import thunkMiddleware from 'redux-thunk'
import reducer, { IRootState } from '../reducers'
import DevTools from './devtools'
import loggerMiddleware from './logger-middleware'

export const history: History = createHashHistory()

let store: Store
const defaultMiddlewares = [
  thunkMiddleware,
  promiseMiddleware(),
  loggerMiddleware
]
const composedMiddlewares = middlewares =>
  process.env.NODE_ENV === 'development'
    ? compose(
        applyMiddleware(...defaultMiddlewares, ...middlewares),
        DevTools.instrument()
      )
    : compose(applyMiddleware(...defaultMiddlewares, ...middlewares))

const initialize = (initialState?: IRootState, middlewares = []) =>
  createStore(reducer, initialState, composedMiddlewares(middlewares))

export default () => {
  if (store) {
    return store
  }
  store = initialize()
  return store
}
