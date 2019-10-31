import React from 'react';
import './App.css';
import Chat from './components/Chat/Chat';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './components/Login/Login'
import history from "./history";
import logo from './logo.svg';


function App() {
  return (
    <Router history={history}>
      <div>
        <AppBar color="primary" position="static">
          <Toolbar>
            <Button variant="contained" to="/" color="inherit"><Link style={{ textDecoration: 'none' }} to="/">Home</Link></Button>&nbsp;
            <Button variant="contained" to="/chat" color="inherit"><Link style={{ textDecoration: 'none' }} to="/chat">Chat</Link></Button>&nbsp;
            <Button variant="contained" to="/login" color="inherit"><Link style={{ textDecoration: 'none' }} to="/login">Login</Link></Button>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/home/:logged">
            <Chat />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return  <div>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1>Home</h1>
            </header>
          </div>;
}

export default App;
