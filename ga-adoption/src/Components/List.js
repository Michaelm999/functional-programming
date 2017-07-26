import React from 'react'

const List = (props) => {
  return (
    <ul>
    {props.items.map((item, cat) => {
      return<li onClick={() => {props.onItemClick(item)}}
      key={cat}>{item}</li>
    })}
    </ul>
  )
}

export default List
