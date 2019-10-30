import { createStore, applyMiddleware, compose  } from 'redux'
import { addItem } from './reducers'
import thunk from 'redux-thunk';


export const initStore = createStore(
  addItem,
  compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
)
