import React from 'react'

const Table = (props) => {
  return (

      <table>
        <thead>
          <tr>
            {props.headings.map((heading, index) =>
            (<th key={index}>{heading}</th>
          ))}
          </tr>
        </thead>
        <tbody>
            {props.tableData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
              ))}
        </tbody>
      </table>
  )
}

export default Table
