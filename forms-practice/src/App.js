import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'

class App extends Component {

onFormSubmit(data){
  console.log("Submiting form, sending request")
  console.log(data);
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <Form parent={this} />
      </div>
    );
  }
}

export default App;
