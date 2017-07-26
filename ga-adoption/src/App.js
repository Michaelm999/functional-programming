import React, { Component } from 'react';
import './App.css';
import List from './Components/List'



class App extends Component {

  state = {
    cats: ["Saber", "Archer", "Lancer", "Rider"],
    available: [],
    returnable: []
  }

  giveAway(kitten) {
    console.log(kitten);
    this.setState({
      available: this.state.available.filter((item) => {
        return item !== kitten
      }),
      returnable: [...this.state.returnable, kitten]
    })
  }

  returnCat(kitty){
    console.log(kitty);
    this.setState({
      returnable: this.state.returnable.filter((item) => {
        return item !== kitty
      }),
      available: [...this.state.available, kitty]
    })
  }
  addToAvailable(cat) {
    this.setState({
      available: [...this.state.available, cat]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Kittens</h1>
              <List items={this.state.cats}
                onItemClick={this.addToAvailable.bind(this)}/>
        <h1>Kittens Available</h1>
            <List items={this.state.available}
            onItemClick={this.giveAway.bind(this)}/>
        <h2>Kittens Returnable</h2>
          <List items={this.state.returnable}
            onItemClick={this.returnCat.bind(this)} />
      </div>
    );
  }
}



export default App;
