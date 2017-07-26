import React from 'react'

class Input extends React.Component {

  state = {
    value: "Michael"
  }

  handleChange(evt){
    if(evt.target.value.length < 5){
      console.log("Not long enough");
    }
    this.setState({value: evt.target.value})
  }

  render() {
    return(
      <input
      type="text"
      placeholder={this.props.placeholder}
      value={this.state.value}
      onChange={this.handleChange.bind(this)}
      />
    )
  }
}

export default Input
