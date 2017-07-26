import React from 'react'
import Button from './Button'
import List from './List'

class LivingRoom extends React.Component {

state = {
  lightsOn: false,
  floor: [
    'socks',
    'shoes',
    'hat'
  ],
  closet: []
}

toggleLights() {
  this.setState({lightsOn: !this.state.lightsOn})
}

cleanFloor(){
  this.setState({floor: [],
  closet: [...this.state.closet, ...this.state.floor]
  })
}

throwAway(trash) {
  console.log(trash);
  this.setState({
    floor: this.state.floor.filter((item) => {
      return item !== trash
    }),
    closet: this.state.closet.filter((item) => {
      return item !== trash
    })
  })
}

  render(){
    return(
      <div className="LivingRoom">
        <h1>The Living Room</h1>
        <h2 style={{
          color: this.state.lightsOn ? "yellow" : "black"
        }}>
          LAMP: {this.state.lightsOn ? "ON" : "OFF"}
        </h2>
        <Button
          text="Toggle Lights"
          onButtonClick={this.toggleLights.bind(this)}
          />
        <h3>Floor</h3>
        <Button text="Clean Up"
        onButtonClick={this.cleanFloor.bind(this)}
        />
        <List items={this.state.floor}
        onItemClick={this.throwAway.bind(this)} />
        <h3>Closet</h3>
        <List items={this.state.closet}
        onItemClick={this.throwAway.bind(this)} />
      </div>
    )
  }
}

export default LivingRoom
