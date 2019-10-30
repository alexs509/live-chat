import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton/IconButton';
import SendIcon from '@material-ui/icons/Send';
import { connect } from 'react-redux'
import { addItem } from '../../redux/action'


export class MessageBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: '', username: 'alex' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.sendMessage(this.state)
    this.setState({ content: "", username: "alex" })
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <Paper>
        <InputBase fullWidth
          value={this.state.message} onChange={this.handleChange}
          placeholder=" Tape your message"
          type="text"
        />
        <IconButton onClick={this.handleSubmit} aria-label="search">
          <SendIcon />
        </IconButton>
      </Paper>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: (content) => {
      dispatch(addItem(content, "Alex"))
    }
  }
};

const connectBar = connect(
  null,
  mapDispatchToProps
)

export default connectBar(MessageBar);
