import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import DevTools from './config/devtools'
import getStore from './config/store'
import ErrorBoundary from './error/error-boundary'
import AppComponent from './app'

const devTools = process.env.NODE_ENV === 'development' ? <DevTools /> : null

const store = getStore()

const rootEl = document.getElementById('root')

const render = Component =>
  ReactDOM.render(
    <ErrorBoundary>
      <AppContainer>
        <Provider store={store}>
          <div>
            {devTools}
            <Component />
          </div>
        </Provider>
      </AppContainer>
    </ErrorBoundary>,
    rootEl
  )

render(AppComponent)
