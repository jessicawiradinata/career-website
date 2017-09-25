import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import registerServiceWorker from './registerServiceWorker'
import Routes from './routes/index'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { persistStore } from 'redux-persist'

const history = createBrowserHistory()
const store = configureStore({}, history)
const persistor = persistStore(store)

const App = () => (
  <MuiThemeProvider>
    <Provider store={store} persistor={persistor}>
      <ConnectedRouter history={history}>
        <div>
          <Routes />
        </div>
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>
)

injectTapEventPlugin()
ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
