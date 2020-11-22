import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'

import TextComponent from 'components/TextComponent'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <TextComponent />
      </SafeAreaView>
    </>
  )
}

export default App
