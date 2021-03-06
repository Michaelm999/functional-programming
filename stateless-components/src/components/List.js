import React from 'react'

const List = (props) => {
  return (
    <ul>
    {props.items.map((item, blade) => {
      return<li onClick={() => {props.onItemClick(item)}}
      key={blade}>{item}</li>
    })}
    </ul>
  )
}

export default List
