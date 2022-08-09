import React from 'react'
import { styles } from './styles'

import MainContainer from '../container/MainContainer'
import { View } from '../components/Themed'

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <MainContainer />
    </View>
  )
}
