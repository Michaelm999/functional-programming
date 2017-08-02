import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink, Redirect } from 'react-router-dom'
import Home from './components/Home'
import Items from './components/Items'
import Contact from './components/Contact'
import Protected from './components/Protected'


class App extends Component {

  state = {
    currentUser: "Michael"
  }

  render() {
    return (
    <Router>
      <div className="App">
        <div className="App-header">
          <NavLink exact to='/'>Home</NavLink>
          <NavLink to='/items'>Items</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
          {this.state.currentUser ?
          <NavLink to='/protected'>Protected</NavLink>
          : null
          }

        </div>
        <Route exact path='/' component={Home} />
        <Route path = '/items' component={Items} />
        <Route path='/contact' component={Contact} />
        <Route path='/protected' render={() =>{
      if(this.state.currentUser) {
      return  <Protected />
      } else {
        return <Redirect to = '/' />
      }
    }} />
      </div>
    </Router>
    );
  }
}

export default App;
