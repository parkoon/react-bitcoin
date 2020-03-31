import React from 'react'
import InlineList from './index'
import styled from 'styled-components'

export default {
  title: 'InlineList',
  component: InlineList,
}

const StyledTomatoBox = styled.div`
  background: tomato;
  height: ${Math.random() * 100}px;
  padding: 30px;
  color: #fff;
`

export const Default = () => (
  <InlineList>
    <StyledTomatoBox>1</StyledTomatoBox>
    <StyledTomatoBox>2</StyledTomatoBox>
    <StyledTomatoBox>3</StyledTomatoBox>
  </InlineList>
)

export const AlignCenter = () => (
  <InlineList align="center">
    <StyledTomatoBox>1</StyledTomatoBox>
    <StyledTomatoBox>2</StyledTomatoBox>
    <StyledTomatoBox>3</StyledTomatoBox>
  </InlineList>
)
export const AlignRight = () => (
  <InlineList align="right">
    <StyledTomatoBox>1</StyledTomatoBox>
    <StyledTomatoBox>2</StyledTomatoBox>
    <StyledTomatoBox>3</StyledTomatoBox>
  </InlineList>
)
// Default.story = {
//   name: 'to Storybook',
// }
