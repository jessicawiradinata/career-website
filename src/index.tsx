/**
 * Entry point of the application
 */
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
import DataLoadService from './domain/service/DataLoadService'
import PostRepository from './domain/service/PostRepository'
import UserRepository from './domain/service/UserRepository'
import { getPostsAction } from './actions/Post'
import { getUsersAction, getUserAction } from './actions/User'
import './index.css'

/**
 * Props that can be passed to this component and their types
 */
interface Props {}

/**
 * All states owned by this component and their types
 */
interface State {
  rehydrated: boolean
}

// Initializes services to be used in the application
const postRepository = new PostRepository()
const userRepository = new UserRepository()
export const dataLoadService = new DataLoadService(postRepository, userRepository)

export default class App extends Component<Props, State> {
  history: History = createBrowserHistory()
  store: any = configureStore({}, this.history)

  /**
   * Initializes states when the component is first created
   * @param props props passed to this component
   */
  constructor(props: Props) {
    super(props)
    this.state = {
      // This state is created to ensure that all pages wait for redux states to be rehydrated before using them
      rehydrated: false,
    }
  }

  /**
   * Sets up the observables, loads data for the app, and notifies when rehydrate is done
   */
  componentWillMount() {
    persistStore(this.store, {}, () => {
      this.setState({ rehydrated: true })
    })
    const posts$ = postRepository.getPostsSubject()
    const users$ = userRepository.getUsersSubject()
    const user$ = userRepository.getUserSubject()
    // Subscribe so that when observables are notified, the specified action is called
    posts$.subscribe(payload => this.store.dispatch(getPostsAction(payload)))
    users$.subscribe(payload => this.store.dispatch(getUsersAction(payload)))
    user$.subscribe(payload => this.store.dispatch(getUserAction(payload)))
    dataLoadService.loadData()
  }

  /**
   * Returns the index component
   */
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
