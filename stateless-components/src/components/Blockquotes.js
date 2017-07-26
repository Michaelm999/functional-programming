import React from 'react'

const Blockquotes = (props) => {
  return(
    <blockquote>
    <p><em>{props.text}</em></p>
    </blockquote>
  )
}

export default Blockquotes
