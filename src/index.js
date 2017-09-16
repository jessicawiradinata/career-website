import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import Routes from './routes/index'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const history = createBrowserHistory()
const store = configureStore({}, history)

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Routes />
      </div>
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
