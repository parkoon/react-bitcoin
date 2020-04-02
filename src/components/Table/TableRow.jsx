import React from 'react'

function TableRow({ children, isHeader, baseline }) {
  return (
    <tr>
      {React.Children.map(children, child => React.cloneElement(child, { isHeader, baseline }))}
    </tr>
  )
}

export default TableRow
