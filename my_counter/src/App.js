import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {clickCount: 10}
  }
  handleTheClick(){
    console.log('KA-BOOM')
    console.log(this);
    var newClickCount =this.state.clickCount + 1
    this.setState({clickCount: newClickCount})
  }
  render() {
    return (
      <div className="counter">
        <div id="count">{this.state.clickCount}</div>
        <button onClick={this.handleTheClick.bind(this)}>Increase</button>
      </div>
    );
  }
}

export default App;
