import React, { useState } from 'react'
import styled from 'styled-components'
import Option from './Option'
import DropDown from './DropDown'
import { theme } from '../../../Theme'
import { useEffect } from 'react'
const StyledSelectWrapper = styled.div`
  position: relative;
  background: ${theme.color.white};
  max-width: 300px;
  outline: none;
  /* outline-color: ${theme.color.primaryDark}; */
`

const StyledSelectedArea = styled.div`
  border: 1px solid ${theme.color.grayDark};
  padding: 8px 15px;
  border-radius: ${theme.unit};
  color: ${theme.color.grayDark};
  max-width: 300px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;

  &:hover {
    cursor: pointer;
  }
`

function SelectedArea({ children, ...props }) {
  return <StyledSelectedArea {...props}>{children}</StyledSelectedArea>
}

function Select({ children, onChange }) {
  const [value, setValue] = useState('선택하세요.')
  const [open, setOpen] = useState(false)

  const toggleDropdown = () => {
    setOpen(!open)
  }
  const handleSelect = (name, value) => {
    setValue(value)
    setOpen(false)
    onChange(name, value)
  }

  const handleBlur = () => {
    setOpen(false)
  }

  return (
    <StyledSelectWrapper tabIndex={0} onBlur={handleBlur}>
      <SelectedArea onClick={toggleDropdown}>{value}</SelectedArea>
      {open && <DropDown onSelect={handleSelect}>{children}</DropDown>}
    </StyledSelectWrapper>
  )
}

Select.Option = Option

export default Select
