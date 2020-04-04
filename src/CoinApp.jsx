import React from 'react'
import AppBar from './components/molecules/AppBar'
import AppLayout from './components/oragnisms/AppLayout'
import CoinOverview from './components/oragnisms/CoinOverview'

function CoinApp() {
  return (
    <AppLayout>
      <CoinOverview />
    </AppLayout>
  )
}

export default CoinApp
