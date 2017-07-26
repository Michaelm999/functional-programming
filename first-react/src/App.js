import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button'
import Title from './Title'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <Title body="Maz's first ReAct App" decorator="underline"></Title>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. <Button text="Hello"/>
        </p>
      </div>
    );
  }
}

export default App;
