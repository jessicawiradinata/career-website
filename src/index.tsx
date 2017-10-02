import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory, History } from 'history'
import registerServiceWorker from './registerServiceWorker'
import Routes from './routes/index'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { persistStore } from 'redux-persist'

interface Props {}

interface State {
  rehydrated: boolean
}

export default class App extends Component<Props, State> {
  history: History = createBrowserHistory()
  store: any = configureStore({}, this.history)

  constructor(props: Props) {
    super(props)
    this.state = {
      rehydrated: false,
    }
  }

  componentWillMount() {
    persistStore(this.store, {}, () => {
      this.setState({ rehydrated: true })
    })
  }

  render() {
    if (!this.state.rehydrated) {
      return <div>Loading...</div>
    }
    return (
      <MuiThemeProvider>
        <Provider store={this.store}>
          <ConnectedRouter history={this.history}>
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
