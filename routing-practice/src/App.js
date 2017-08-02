import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

class App extends Component {

state = {
  currentUser: null
}

  render() {
    return (
      <Router>
      <div className="App">
        <div className="App-header">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/protected' render={() =>{
            if(this.state.currentUser) {
            return <h1>This is a PROTECTED page!</h1>
            } else {
              return <Redirect to = '/' />
            }
          }} />

        <Route path='/bananas/:id' render={(route) => {
            console.log(route)
            const bananaId = route.match.params.id
            return(
            <h1>BANANA: {bananaId}</h1>
            )
          }} />
      </div>
      </Router>
    );
  }
}

export default App;
