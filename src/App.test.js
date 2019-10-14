import React from 'react';
import renderer from 'react-test-renderer'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'


describe('Renders whole app with provider and compares it to a snapshot', () => {
  test('snapshot renders', ()=>{
    const component = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
