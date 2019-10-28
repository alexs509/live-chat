import React from 'react';
import MessageItem from '../MessageItem/MessageItem';

/* let state = {
  msg : [
    {content:"Ahah Bonjour", username:"alex"},
    {content:"Oui c'est mi", username:"Roger"},
    {content:"Oh Djaaa je suis la", username:"Antonio"},
    {content:"Pourquoi moi", username:"Mahmoud"}
  ]
} */


export class MessageList extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      msg : [
        {content:"Ahah Bonjour", username:"alex"},
        {content:"Oui c'est mi", username:"Roger"},
        {content:"Oh Djaaa je suis la", username:"Antonio"},
        {content:"Pourquoi moi", username:"Mahmoud"}
      ]
    };
    const { datas } = props;
    console.log(datas)
  }
  

  render()  {
    return ( 
      <ul>
        {this.state.msg.map(txt => <MessageItem message={txt} />)}
        <div>Test: {this.props.value} </div>
      </ul>
      
    );
  } 
}

export default MessageList;
