import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Chat from './components/Chat/Chat';
import * as serviceWorker from './serviceWorker';
import App from './App'
import { initStore } from './redux/store'
import { Provider } from 'react-redux';


ReactDOM.render(
  <Provider store={initStore}>
    <App />
  </Provider>,
  document.getElementById('root'));


serviceWorker.unregister();