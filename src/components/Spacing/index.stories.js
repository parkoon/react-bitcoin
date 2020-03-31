import React from 'react'
import Spacing from './index'
import styled from 'styled-components'

export default {
  title: 'Spacing',
  component: Spacing,
}

const StyledTomatoBox = styled.div`
  display: inline-block;
  width: 100px;
  height: 100px;
  border: 1px solid tomato;
`

export const Default = () => (
  <>
    <Spacing bottom={20}>
      <StyledTomatoBox>1</StyledTomatoBox>
    </Spacing>
    <Spacing>
      <StyledTomatoBox>1</StyledTomatoBox>
    </Spacing>
    <Spacing>
      <StyledTomatoBox>1</StyledTomatoBox>
    </Spacing>
    <Spacing>
      <StyledTomatoBox>1</StyledTomatoBox>
    </Spacing>
  </>
)
