import React from 'react'
//const React = require('react')

class Title extends React.Component {
  render() {
    console.log(this.props);
    return(
      <h1>{this.props.body}</h1>
    )
  }
}

export default Title
