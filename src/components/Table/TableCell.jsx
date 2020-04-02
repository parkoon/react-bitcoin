import React from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../../Theme'

const commonStyles = css`
  padding: ${`${theme.unit * 2}px ${theme.unit * 4}px`};
  background: ${theme.color.white};
`

const StyledTh = styled.th`
  ${commonStyles};
  background: ${theme.color.primary};
  color: ${theme.color.white};
`
const StyledTd = styled.td`
  ${commonStyles};
  border-bottom: ${props => props.baseline && `1px solid ${theme.color.border}`};
`

function TableCell({ children, ...props }) {
  const { isHeader } = props
  console.log(props)
  return (
    <>
      {isHeader ? (
        <StyledTh {...props}>{children}</StyledTh>
      ) : (
        <StyledTd {...props}>{children}</StyledTd>
      )}
    </>
  )
}

export default TableCell
