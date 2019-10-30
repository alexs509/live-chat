import React from 'react';
import logo from '../../logo.svg';
import './Chat.css';
import MessageBar from '../MessageBar/MessageBar';
import MessageList from '../MessageList/MessageList';
import { Provider } from 'react-redux';
import { initStore } from '../../redux/store'


export class Chat extends React.Component {

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
          <Provider store={initStore}>
            <MessageList  />
            <MessageBar />
          </Provider>
          </div>
        </header>
      </div>
    )
  }
}


export default Chat;
