import React from 'react'
import styled from 'styled-components'
import { theme } from '../../Theme'

const StyledCardWrapper = styled.div`
  display: flex;
  overflow: hidden;
  margin-bottom: ${theme.unit * 4}px;
  background: ${theme.color.white};
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  border-radius: ${theme.unit}px;
`

function Card({ children }) {
  return <StyledCardWrapper>{children}</StyledCardWrapper>
}

export default Card
