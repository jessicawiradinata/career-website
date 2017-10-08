import rootReducer from '../../../reducers'
import selector from '../selector'

describe('Login Selector', () => {
  it('computes default state', () => {
    const initialState = rootReducer(undefined as any, { type: '' })
    const state = {
      ...initialState,
    }

    expect(selector(state)).toMatchObject({
      loginStatus: false,
    })
  })

  it('computes set state', () => {
    const initialState = rootReducer(undefined as any, { type: '' })
    const state = {
      ...initialState,
      authentication: {
        ...initialState.authentication,
        loginStatus: true,
      },
    }

    expect(selector(state)).toMatchObject({
      loginStatus: true,
    })
  })
})