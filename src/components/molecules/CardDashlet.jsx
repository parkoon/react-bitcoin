import React from 'react'
import { Card, Heading, Text, InlineList, Spacing } from '../atoms'

function CardDashlet() {
  return (
    <Card top={4} left={4} right={4} bottom={4}>
      <Heading level={4}>
        비트코인
        <Spacing inline left={1}>
          <Text>2,333,444원</Text>
        </Spacing>
      </Heading>
      <InlineList spacingBetween={1}>
        <button>매도</button>
        <button>매수</button>
      </InlineList>
    </Card>
  )
}

export default CardDashlet
