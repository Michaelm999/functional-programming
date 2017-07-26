import React from 'react'

const Table = (row) => {
  return (
    <table>
      <td key={row.name}>{row.name}</td>
      <td key={row.id}>{row.id}</td>
      <td key={row.price}>{row.price}</td>
    </table>
  )
}

export default Table
