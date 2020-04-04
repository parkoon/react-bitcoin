import React from 'react'

function TableHead({ children }) {
  return (
    <thead>
      {React.Children.map(children, child => React.cloneElement(child, { isHeader: true }))}
    </thead>
  )
}

export default TableHead
