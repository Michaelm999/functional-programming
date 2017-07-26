import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {display: ''}
  }

  updateCalcDisplay(num){
    if (num === 'C') {
      this.setState({display: ''})
    } else {
      var oldDisplay = this.state.display
      this.setState({display: oldDisplay + num})
    }
  }
///////////
  render() {
    return (
      <div className="calculator">
        <div className="display">{this.state.display}</div>
        <div className="buttons">
          {
            [1,2,3,4,5,6,7,8,9,0,'C','=']
            .map(n=> <Button key={n} label={n} dad={this} />)
            }
        </div>
      </div>
    );
  }
}

class Button extends Component {
  handleClick(){
    this.props.dad.updateCalcDisplay(this.props.label)
  }
  render(){
    return <button onClick={this.handleClick.bind(this)}
      key={this.props.text}>
      {this.props.label} </button>
  }
}

export default App;
