import React from 'react'

const Pokemon = (props) => {

    return(
    <div onClick={props.parent.displayMon.bind(props.parent, props.index)} className='Pokemon' id={props.name}>
      {props.name}
    </div>
  )

}

export default Pokemon
