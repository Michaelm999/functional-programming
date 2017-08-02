import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink, Redirect } from 'react-router-dom'


import NavBar from './components/NavBar'
import Home from './components/Home'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route path='/signup' component={SignUp} />
        <Route path='/login' component={LogIn} />
      </div>
    </Router>
    );
  }
}

export default App;
