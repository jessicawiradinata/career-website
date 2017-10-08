import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import history from 'history'
import rootReducer from '../../../reducers'
import * as Action from '../Action'

const mockStore = configureStore([thunk])
jest.mock('history')

describe('Login Action', () => {
  describe('login', () => {
    it('triggers expected action', async() => {
      const store = mockStore(rootReducer(undefined as any, { type: '' }))
      await Action.login('email', 'password', history as any)(store.dispatch)
      const expectedActions = [Action.loginRequested(), Action.loginFailed()]
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})