import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton/IconButton';
import SendIcon from '@material-ui/icons/Send';
import { connect } from 'react-redux'
import { addItem } from '../../redux/action'
import Snackbar from '@material-ui/core/Snackbar';




export class MessageBar extends React.Component {
  constructor(props) {
    super(props);
    let userLogged = this.getUser();
    this.state = { message: '', username: userLogged, check: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getUser() {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let userLogged = params.get('logged');
    return userLogged
  }


  handleSubmit(event) {
    this.handleChange(event);
    if (this.state.message && this.state.username) {
      event.preventDefault();

       const socket = new WebSocket('wss://srrj6.sse.codesandbox.io/');
     /* socket.addEventListener('open', () => {
        socket.send(JSON.stringify(this.state.message));
      }); */
      socket.addEventListener('message', event => {
        console.log(`Message from server: ${event.data}`);
      });
      this.props.sendMessage(this.state)
      this.setState({ message: "", username: this.getUser(), check: false })

    }
    else {
      this.setState({ check: true })
    }
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
        {this.state.check === true &&
          <div>
            <Snackbar
              open={true}
              color="danger"
              ContentProps={{
                'aria-describedby': 'message-id',
              }}
              message={"Erreur : Message vide ou aucun utilisateur connecter"}
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
