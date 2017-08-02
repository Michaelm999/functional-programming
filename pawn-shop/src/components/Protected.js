import React from 'react'

class Protected extends React.Component {

  state = {
  items: [
    'vintage revolver',
    'antique clock',
    'sofa'
  ]
}
render(){
  return(
    <div className="Protected">
    <h1>This is a PROTECTED! Page...</h1>
    <ul>
    {this.state.items.map((item, pawn) => {
      return<li key={pawn}>{item}</li>
    })}
    </ul>
    </div>
  )
  }
}


export default Protected
