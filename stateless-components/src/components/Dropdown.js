import React from 'react'



const Dropdown = (props) => {
  return(
    <select>
      {props.options.map((option, optionIndex) => (
      <option key={optionIndex} value={option.value}>{option.text}</option>
    ))}
    </select>
  )
}


export default Dropdown
