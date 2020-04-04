import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Theme from '../../../Theme'

const JUSTIFY_CONTENT_MAP = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center',
}
const ALIGN_ITEMS_MAP = {
  top: 'flex-start',
  middle: 'center',
  bottom: 'flex-end',
}

const justifyContent = ({ align }) => JUSTIFY_CONTENT_MAP[align]
const alignItems = ({ verticalAlign }) => ALIGN_ITEMS_MAP[verticalAlign]

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`

const StyledItem = styled.div`
  margin-right: ${({ spacingBetween, theme }) => spacingBetween * theme.unit}px;
`

function InlineList({ spacingBetween = 1, children, ...props }) {
  return (
    <Theme>
      <StyledWrapper {...props}>
        {React.Children.map(children, child => (
          <StyledItem spacingBetween={spacingBetween}>{child}</StyledItem>
        ))}
      </StyledWrapper>
    </Theme>
  )
}

InlineList.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  verticalAlign: PropTypes.oneOf(['top', 'middle', 'bottom']),
  spacingBetween: PropTypes.number,
  children: PropTypes.node,
}

export default InlineList
