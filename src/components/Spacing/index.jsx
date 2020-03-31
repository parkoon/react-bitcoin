import React from 'react'
import styled, { css } from 'styled-components'
import Theme from '../../Theme'

const StyledSpacing = styled.div`
  ${props => {
    console.log(props.bottom, props.theme.unit, props.bottom * props.theme.unit)

    return css`
      margin-top: ${props.top * props.theme.unit}px;
      margin-right: ${props.right * props.theme.unit}px;
      margin-left: ${props.left * props.theme.unit}px;
      margin-bottom: ${props.bottom * props.theme.unit}px;
    `
  }}
`

function Spacing({ children, ...props }) {
  return (
    <Theme>
      <StyledSpacing {...props}>{children}</StyledSpacing>
    </Theme>
  )
}

Spacing.defaultProps = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
}

export default Spacing
