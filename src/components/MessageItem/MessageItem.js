import React from 'react';
import Emoji from 'react-emoji-render';


export class MessageList extends React.Component {
  constructor(props)  {
    super(props)
  }

  render() {
    return(
      <li>
        - {this.props.message.username}<br/>
        - <Emoji text={this.props.message.content}/><br/><br/>
      </li>
    )
  }
}

export default MessageList;
