import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Chat from './components/Chat/Chat';
import * as serviceWorker from './serviceWorker';
import Emoji from 'react-emoji-render';

class Index extends React.Component {
    render() {
      return (
        <header>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

        </header>
      );
    }
  }

ReactDOM.render(<Chat />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
