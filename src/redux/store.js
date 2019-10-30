import { createStore, applyMiddleware, compose  } from 'redux'
import { addItem } from './reducers'
import thunk from 'redux-thunk';
import { logger, crashReporter } from '../middleware/logger'


export const initStore = createStore(
  addItem,
  compose(
  applyMiddleware(thunk, logger, crashReporter),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
)
