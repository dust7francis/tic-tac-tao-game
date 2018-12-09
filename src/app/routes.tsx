import React from 'react'
import { Switch } from 'react-router-dom'

import Game from './modules/game'
import ErrorBoundaryRoute from './error/error-boundary-route'

const Routes = () => (
  <div className="view-routes">
    <ErrorBoundaryRoute path="/" component={Game} />
  </div>
)

export default Routes
