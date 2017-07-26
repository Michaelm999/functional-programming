import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor(){
  super()
  this.state = {display: ''}
}

updateCalcDisplay(num){
  if (num === 'start') {
    this.setState({display: 'GameBoy'})
  } else if(num === 'select') {
    this.setState({display: 'Somehting Cool!'})
  } else {
    this.setState({display: num})
  }
}
///////////
render() {
  return (
    <div className="GameBoy">
      <div className="display">{this.state.display}</div>
      <div className="buttons">
        {
          ['start', 'A', 'B', 'left', 'right', 'select']
          .map(game => <Button key={game} title={game} dad={this} />)
          }
      </div>
    </div>
  );
}
}

class Button extends Component {
handleClick(){
  this.props.dad.updateCalcDisplay(this.props.title)
}
render(){
  return <button onClick={this.handleClick.bind(this)}
    key={this.props.text}>
    {this.props.title} </button>
}
}

export default App;
