import React from 'react'
import styled from 'styled-components'

import Heading from '../atoms/Heading'
import Text from '../atoms/Text'
import { theme } from '../../Theme'

const { unit, color } = theme

export const AppBarHeight = 64

const AppBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  height: ${AppBarHeight - 4}px;
  background: ${color.primary};
  width: 100%;
`
const AppBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: ${unit * 6}px;
  padding-right: ${unit * 6}px;
`

function AppBar() {
  return (
    <AppBarWrapper>
      <AppBarContainer>
        <Heading level={3}>쿤 코인 거래소</Heading>
        <Text bold inverse large>
          회원 가입
        </Text>
      </AppBarContainer>
    </AppBarWrapper>
  )
}

export default AppBar
