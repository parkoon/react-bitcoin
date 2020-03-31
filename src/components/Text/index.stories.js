import React from 'react'
import Text from './index'
import styled from 'styled-components'

export default {
  title: 'Text',
  component: Text,
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
    <Text>Hey, Default</Text> <br />
    <Text bold>Hey, Bold</Text> <br />
    <Text inverse>Hey, Inverse</Text> <br />
    <Text large>Hey, Large</Text> <br />
    <Text small>Hey, Small</Text> <br />
    <Text primary>Hey, Primary</Text> <br />
    <Text secondary>Hey, Secondary</Text> <br />
  </>
)
