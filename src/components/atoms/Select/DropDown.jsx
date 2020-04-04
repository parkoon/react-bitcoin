import React from 'react'
import styled from 'styled-components'
import Option from './Option'
import { theme } from '../../../Theme'

const StyledDropDownWrapper = styled.div`
  padding: 0;
  margin: 0;
  list-style: none;
  border-radius: 4px;
  outline: none;
  position: absolute;
  width: 100%;
  z-index: 9999;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`
const StyledList = styled.ul`
  border: 1px solid ${theme.color.gray};
  list-style: none;
  margin: 0;
  padding: 0;
  border-radius: 4px;
  max-height: 250px;
  overflow: auto;
  outline: none;
`
export function DropDown({ children, onSelect }) {
  const handleSelect = ({ target }) => {
    const value = target.getAttribute('value') || ''
    const name = target.textContent || target.innerText || ''
    onSelect(name, value)
  }

  return (
    <StyledDropDownWrapper>
      <StyledList>
        {React.Children.map(children, child =>
          React.cloneElement(child, { onClick: handleSelect })
        )}
      </StyledList>
    </StyledDropDownWrapper>
  )
}

export default DropDown
