import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './components/Chat/Chat';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './components/Login/Login'

function App() {
  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Button to="/" color="inherit"><Link to="/">Home</Link></Button>
            <Button to="/login" color="inherit"><Link to="/login">Login</Link></Button>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Chat />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}



export default App;
