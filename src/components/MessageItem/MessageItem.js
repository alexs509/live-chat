import React from 'react';

export class MessageList extends React.Component {
  constructor(props)  {
    super(props)
  }

  render() {
    return(
      <li>
        - {this.props.message.username}<br/>
        - {this.props.message.content}<br/><br/>
      </li>
    )
  }
}

export default MessageList;
