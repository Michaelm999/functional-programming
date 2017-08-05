import React from 'react'

const Beer = (props) => {

    return(
    <div onClick={props.parent.showBeer.bind(props.parent, props.index)} className='Beer' id={props.name}>
      {props.name}
    </div>
  )

}

export default Beer
