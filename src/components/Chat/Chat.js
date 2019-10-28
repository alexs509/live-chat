import React from 'react';
import logo from '../../logo.svg';
import './Chat.css';
import MessageBar from '../MessageBar/MessageBar';
import MessageList from '../MessageList/MessageList';

function Chat() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Chat
        </p>
        <div>
          <MessageList/>
          <MessageBar/>
        </div>

      </header>
    </div>
  );
}

export default Chat;
