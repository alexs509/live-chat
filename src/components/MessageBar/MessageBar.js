import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton/IconButton';
import SendIcon from '@material-ui/icons/Send';
import { connect } from 'react-redux'
import { addItem } from '../../redux/action'
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Snackbar from '@material-ui/core/Snackbar';




export class MessageBar extends React.Component {
  constructor(props) {
    super(props);
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let foo = params.get('logged');
    this.state = { message: '', username: foo, check: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  

  handleSubmit(event) {
    this.handleChange(event);
    if(this.state.message){
    event.preventDefault();
    this.props.sendMessage(this.state)
    this.setState({ message: "", username: "", check:false })
  }
  else{
    this.state.check = true
  }
  console.log()
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }
  
  

  render() {
    return (
      <div>
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
      {this.state.check == true && 
      <div>    
          <Snackbar
        open={true}
        color="danger"
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={"Erreur : Message vide"}
        
      />
      
      </div>}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: (message) => {
      dispatch(addItem(message, "Alex"))
    }
  }
};

const connectBar = connect(
  null,
  mapDispatchToProps
)

export default connectBar(MessageBar);
