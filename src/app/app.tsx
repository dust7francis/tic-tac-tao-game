import 'react-toastify/dist/ReactToastify.css'
import './app.scss'

import React, { lazy, Suspense } from 'react'
import { connect } from 'react-redux'
import { Card } from 'reactstrap'
import { HashRouter as Router } from 'react-router-dom'

import Footer from './modules/footer/'

import { IRootState } from './reducers'
import ErrorBoundary from './error/error-boundary'

export interface IAppProps extends StateProps, DispatchProps {}

const ToastContainer = lazy(() => import('./lazy/toastContainer'))
const AppRoutes = lazy(() => import('./routes'))

export class App extends React.Component<IAppProps> {
  render() {
    const paddingTop = '20px'
    return (
      <Router>
        <div className="app-container" style={{ paddingTop }}>
          <Suspense fallback={<div>Loading...</div>}>
            <ToastContainer />
          </Suspense>

          <div
            className="container-fluid view-container"
            id="app-view-container"
          >
            <Card>
              <ErrorBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                  <AppRoutes />
                </Suspense>
              </ErrorBoundary>
            </Card>
            <Footer />
          </div>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = ({ game }: IRootState) => ({
  game
})

const mapDispatchToProps = {}

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = typeof mapDispatchToProps

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
