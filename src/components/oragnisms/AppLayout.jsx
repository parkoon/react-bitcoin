import React from 'react'
import AppNav, { AppBarHeight } from '../molecules/AppBar'
import styled from 'styled-components'
import { theme } from '../../Theme'

const { unit } = theme

const AppLayoutWrapper = styled.div`
  margin-top: ${AppBarHeight}px;
`
const AppLayoutBody = styled.div`
  padding: ${unit * 6}px;
`

function AppLayout({ children }) {
  return (
    <AppLayoutWrapper>
      <AppNav />

      <AppLayoutBody>{children}</AppLayoutBody>
    </AppLayoutWrapper>
  )
}

export default AppLayout
