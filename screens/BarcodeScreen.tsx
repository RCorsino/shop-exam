import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Platform } from 'react-native'
import { View } from '../components/Themed'
import BarcodeContainer from '../container/BarcodeContainer'
import { styles } from './styles'

export default function BarcodeScreen() {
  return (
    <View style={styles.container}>
      <BarcodeContainer />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}
