import React from 'react'

const Pokemon = (props) => (
  <div className='Pokemon' id={props.name}>
    {props.name}
  </div>
)

export default Pokemon
