import React from 'react'
import { Heading, InlineList } from '../atoms'

import CoinDashlet from '../molecules/CardDashlet'

function CoinOverview() {
  return (
    <>
      <Heading>코인 동향</Heading>
      <InlineList>
        <CoinDashlet />
        <CoinDashlet />
        <CoinDashlet />
      </InlineList>
    </>
  )
}

export default CoinOverview
