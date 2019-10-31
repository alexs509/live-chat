import React from 'react';
import './App.css';
import Chat from './components/Chat/Chat';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './components/Login/Login'

function App() {
  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Button to="/" color="inherit"><Link to="/">Home</Link></Button>
            <Button to="/chat" color="inherit"><Link to="/chat">Chat</Link></Button>
            <Button to="/login" color="inherit"><Link to="/login">Login</Link></Button>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/:logged">
            <Chat />
          </Route>
          <Route path="/home/:logged">
            <Chat />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
