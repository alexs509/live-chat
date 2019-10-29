import React from 'react';
import logo from '../../logo.svg';
import './Chat.css';
import MessageBar from '../MessageBar/MessageBar';
import MessageList from '../MessageList/MessageList';
import Emoji from 'react-emoji-render';



export class Chat extends React.Component {
  constructor(){
    super();
    this.state = { value: null}
    this.change = this.change.bind(this)
 }
 
 change(value){
    this.setState({value});
  }

 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
        </p>
          <div>
            <MessageList value={this.state.value}  />
            <MessageBar value={this.state.value} change={this.change} />
          </div>

        </header>
      </div>
    )
  }
}


export default Chat;
