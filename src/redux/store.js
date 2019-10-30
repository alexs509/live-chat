import { createStore } from 'redux'
import { addItem } from './reducers'

export const initStore = createStore(
  addItem,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
