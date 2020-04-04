import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../Theme'
import Spacing from '../Spacing'

const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: ${theme.unit * 4}px;
  background: ${theme.color.white};
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
`

function Card({ children, ...spacingProps }) {
  return (
    <StyledCardWrapper>
      <Spacing {...spacingProps}>{children}</Spacing>
    </StyledCardWrapper>
  )
}

export default Card
