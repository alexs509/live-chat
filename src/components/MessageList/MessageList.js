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
  }

  render()  {

    if(this.props.value){
      console.log(this.props.value);
      this.state.msg = [...this.state.msg,{content:this.props.value, username:"Alex"}]
  }

  return(
  this.state.msg.map((chat, index1)=>{
    return (  
      <ul>
        <MessageItem message={chat} />
      </ul>      
    );
    
  }))
    
  } 
}

export default MessageList;
