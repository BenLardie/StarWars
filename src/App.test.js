import React from 'react';
import renderer from 'react-test-renderer'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import Title from '../src/Components/Title'
import peopleReducer from './reducers/peopleReducer'


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

describe('Title Snapshot test', () => {
  test('snapshot renders', ()=> {
    const component = renderer.create(<Title text={'test'} />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})


describe('people reducer', () => {
  it('should return the intial state', () => {
    peopleReducer(undefined, {})
    expect.objectContaining({
      people: [],
      loading: false,
      url: 'https://swapi.co/api/people/',
      previous_url: 'https://swapi.co/api/people/?page=1', 
      error: null
    })
  })
})
