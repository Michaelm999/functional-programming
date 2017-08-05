import React from 'react'
import auth from '../auth'
import Beer from './Beer'
class VIP extends React.Component {

  state = {
    editing: null,
    beers: [],
    showbeer: []
  }

  componentDidMount() {
    // this is where an API call for protected content would be made.
    auth.getBeers().then(beers => {
      this.setState({beers: beers})
    })
  }

  showBeer(i){
  console.log(i);
  this.setState({
    showbeer: [this.state.beers[i].name,
  this.state.beers[i].type,
  this.state.beers[i].brewery]
  })
}

  render() {
    return (
      <div>
      <h1>THE VIP 🎊 🍾🍾🍾 🎉 </h1>
      <ul>{this.state.beers.map((beer, index) => (
        <Beer key={beer._id} name={beer.name} parent={this} index={index} />
        ))}
        </ul>
        <p>{this.state.showbeer}</p>
        </div>
    )
  }
}

export default VIP
