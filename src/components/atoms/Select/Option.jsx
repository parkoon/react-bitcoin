import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../Theme'

const StyledOption = styled.li`
  display: block;
  padding: 5px 12px;
  overflow: hidden;
  color: ${theme.color.gray};
  cursor: pointer;
  &:hover {
    background-color: ${theme.color.primary};
  }
`

function Option({ children, onClick, value }) {
  return (
    <StyledOption onClick={onClick} value={value}>
      {children}
    </StyledOption>
  )
}

export default Option
