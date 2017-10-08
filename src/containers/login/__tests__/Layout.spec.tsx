import React from 'react'
import renderer from 'react-test-renderer'
import history from 'history'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import LoginLayout from '../Layout'

jest.mock('history')
describe('Login Layout', () => {
  it('renders with default props', () => {
    const login = jest.fn()
    const tree = renderer.create(
      <MuiThemeProvider>
        <LoginLayout
          history={history as any}
          login={login}
          loginStatus={false}
        />
      </MuiThemeProvider>,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

})