import React from 'react'
import { Provider } from 'react-redux'

import { configureStore } from './store'

import CitySenseApp from './screens/CitySense/CitySenseApp'

const store = configureStore()

const App = () =>
  <Provider store={store}>
    <CitySenseApp />
  </Provider>

export default App
