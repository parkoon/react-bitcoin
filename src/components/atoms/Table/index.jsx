import React from 'react'
import styled from 'styled-components'

const StyledTable = styled.table`
  border-collapse: collapse;
  /* width: 100%; */
`
function Table({ children }) {
  return <StyledTable>{children}</StyledTable>
}

export default Table
