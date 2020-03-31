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
  color: tomato;
  font-size: 12px;
  font-weight: bold;
`

export const Default = () => (
  <>
    <Spacing bottom={20}>
      <StyledTomatoBox>bottom 20</StyledTomatoBox>
    </Spacing>
    <Spacing left={12}>
      <StyledTomatoBox>left 12</StyledTomatoBox>
    </Spacing>
    <Spacing top={12} left={32}>
      <StyledTomatoBox>top 12, left 32</StyledTomatoBox>
    </Spacing>
    <Spacing right={12} top={20}>
      <StyledTomatoBox>right 12, top 20</StyledTomatoBox>
    </Spacing>
  </>
)
