import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Chat from './components/Chat/Chat';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <Chat />,
  document.getElementById('root'));


serviceWorker.unregister();