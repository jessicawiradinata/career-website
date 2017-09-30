import React, { Component } from 'react'
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

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rehydrated: false
    }
  }

  componentWillMount() {
    persistStore(store, {}, () => {
      this.setState({ rehydrated: true })
    })
  }

  render() {
    if (!this.state.rehydrated) {
      return <div>Loading...</div>
    }
    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <div>
              <Routes />
            </div>
          </ConnectedRouter>
        </Provider>
      </MuiThemeProvider>
    )
  }
}

injectTapEventPlugin()
ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
