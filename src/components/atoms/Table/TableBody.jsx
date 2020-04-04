import React from 'react'

function TableBody({ children }) {
  const { length } = React.Children.toArray(children)

  return (
    <thead>
      {React.Children.map(children, (child, index) => {
        const baseline = index < length - 1 ? true : false
        return React.cloneElement(child, { baseline })
      })}
    </thead>
  )
}

export default TableBody
