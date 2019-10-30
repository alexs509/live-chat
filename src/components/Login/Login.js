import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton/IconButton';
import Button from '@material-ui/core/Button';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'
import '../../App.css';
import '../../index.css';



export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { logged: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.sendMessage(this.state)
        this.setState({ logged: "alex" })
    }

    handleChange(event) {
        this.setState({ loggeduser: event.target.value });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Paper variant="h5" component="h3">
                        <div>
                            <TextField
                                fullWidth
                                value={this.state.loggeduser} onChange={this.handleChange}
                                id="outlined-basic"
                                label="Username"
                                margin="normal"
                                variant="outlined"
                                type="text"
                            /><br />
                            <Button onClick={this.handleSubmit} variant="contained" color="primary">
                                <VerifiedUserIcon />
                                Se connecter
      </Button>
                            <br /><br />
                        </div>
                    </Paper>
                </header>
            </div>
        );
    }
}

/* const mapDispatchToProps = dispatch => {
  return {
    sendMessage: (message) => {
      dispatch(addItem(message, "Alex"))
    }
  }
}; */

/* const connectBar = connect(
  null,
  mapDispatchToProps
) */

/* export default connectBar(Login); */

export default Login;
