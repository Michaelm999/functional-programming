import React from 'react'
import PropTypes from 'prop-types'
// class Button extends React.Component {
//   render() {
//     return(
//       <button>{this.props.text}</button>
//     )
//   }
// }

//OR!

const Button = (props) => {
  return (
    <button  className="button button-outline"
      onClick={props.onButtonClick}>
      {props.text}
    </button>
  )
}

Button.PropTypes = {
  onButtonClick: PropTypes.func,
  text: PropTypes.string
}
Button.defaultProps = {
    text: "Submit"
}

export default Button
