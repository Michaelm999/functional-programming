import React from 'react'
//const React = require('react')

class Button extends React.Component {
  render() {
    console.log(this.props);
    return(
      <button>{this.props.text || "Submit"}</button>
    )
  }
}

export default Button
