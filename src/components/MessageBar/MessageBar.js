import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton/IconButton';
import SendIcon from '@material-ui/icons/Send';
import FormControl from '@material-ui/core/FormControl';



const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export class MessageBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleSubmit(event) {
    event.preventDefault();
    this.props.change(this.state.value)
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }


  render() {
    return (
      <div>
        <Paper>
      <InputBase fullWidth
      value={this.state.value} onChange={this.handleChange}
        placeholder=" Tape your message"
        inputProps={{ 'aria-label': 'tape your message' }}
      />
      <IconButton onClick={this.handleSubmit} aria-label="search">
      <SendIcon  />
      </IconButton>
    </Paper>
    </div>
    );
  }
}

export default MessageBar;
