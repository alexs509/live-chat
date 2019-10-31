import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import TextField from '@material-ui/core/TextField';
import '../../App.css';
import '../../index.css';
import {
    Link,
} from "react-router-dom";
//import history from "../../history";


export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loggeduser: '' };
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        this.setState({ loggeduser: event.target.value });
    }

    /* onClick() {
        history.push('/chat?logged=dd');
        window.location.reload()
    }
 */
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
                            <Link  style={{ textDecoration: 'none' }} to={"/chat?logged="+this.state.loggeduser}><Button renderAs="button" variant="contained" color="primary">
                                <VerifiedUserIcon />
                                Se connecter
      </Button></Link>
                            <br /><br />
                        </div>
                    </Paper>
                </header>
            </div>
        );
    }
}

export default Login;