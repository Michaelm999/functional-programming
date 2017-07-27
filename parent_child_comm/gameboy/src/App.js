import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor(){
  super()
  this.state = {screen: ''}
}

updateDisplay(num){
  if (num === 'start') {
    this.setState({screen: 'GameBoy'})
  } else if(num === 'select') {
    this.setState({screen: 'Something Cool!'})
  } else {
    this.setState({screen: num})
  }
}


render() {
  return (
    <div className="GameBoy">
      <div className="screen">{this.state.screen}</div>
      <div className="buttonpad">
        {
          ['start', 'select', 'A', 'B', 'left', 'right', 'up', 'down']
          .map(game => <Button key={game} title={game} dad={this} />)
          }
      </div>
    </div>
  );
}
}

class Button extends Component {
handleClick(){
  this.props.dad.updateDisplay(this.props.title)
}
render(){
  return <button onClick={this.handleClick.bind(this)}
    key={this.props.text}>
    {this.props.title} </button>
}
}

export default App;
