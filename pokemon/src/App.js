import React, { Component } from 'react';
import './App.css';
import Pokemon from './Pokemon'
import axios from 'axios'

class App extends Component {
  state = {
    pokemon: [],
    displaymon:[]
  }

  catchPokemon(){
    console.log("catching")
    axios({url: 'http://pokeapi.co/api/v2/pokedex/1/'})
      .then((response) => {
        console.log(response)
        this.setState({
          pokemon: response.data.pokemon_entries,
          loading: false
        })
      })
  }

  displayMon(i){
    console.log(i);
    // const name= this.state.pokemon
    console.log(this.state.pokemon[i].pokemon_species.name)
    this.setState({
      displaymon: [this.state.pokemon[i].pokemon_species.name]
    })
  }


  render() {

    const alphabetized = this.state.pokemon.sort((a,b) => {
      const aName = a.pokemon_species.name
      const bName = b.pokemon_species.name
      if (aName < bName) return -1
      if (aName > bName) return 1
      return 0
    })

    const capitalized = alphabetized.map((p) => {
      const pokemon = Object.assign({},p)
      let name = pokemon.pokemon_species.name.split('')
      name[0] = name[0].toUpperCase()
      name = name.join('')
      pokemon.pokemon_species.name = name
    })

    return (
      <div className="App">
        <h1>{this.state.loading ? 'Loading...' : ''}</h1>
        <button onClick={this.catchPokemon.bind(this)}>Catch em all</button>
        <div className="App-header">
          <p>{this.state.displaymon}</p>
        </div>
        <p className="App-intro">
          {alphabetized.map((p, index) => (
            <Pokemon key={p.entry_number} name={p.pokemon_species.name} parent={this} index={index}/>
          ))}
        </p>
      </div>
    );
  }
}

export default App;
