import React from 'react'
import Heading from './index'

export default {
  title: 'Heading',
  component: Heading,
}

export const Default = () => (
  <>
    <Heading>Hey, H1</Heading> <br />
    <Heading level={2}>Hey, H2</Heading> <br />
    <Heading level={3}>Hey, H3</Heading> <br />
    <Heading level={4}>Hey, H4</Heading> <br />
  </>
)
