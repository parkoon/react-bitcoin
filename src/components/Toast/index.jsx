import React from 'react'
import styled from 'styled-components'
import { theme } from '../../Theme'
import Text from '../Text'
import Spacing from '../Spacing'

const StyledToastOverlay = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: ${theme.unit * 4};
`
const StyledToastWrapper = styled.div`
  border-radius: ${theme.unit}px;
  background: ${props => (props.warning ? theme.color.error : theme.color.secondary)};
  padding: ${`${theme.unit * 2}px ${theme.unit * 4}px`};
  margin-bottom: ${theme.unit * 4}px;
`

function Toast({ warning, message }) {
  return (
    <StyledToastOverlay>
      <StyledToastWrapper warning={warning}>
        <Spacing top={2} bottom={2} left={4} right={4}>
          <Text inverse bold>
            {message}
          </Text>
        </Spacing>
      </StyledToastWrapper>
    </StyledToastOverlay>
  )
}

export default Toast
