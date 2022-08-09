import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Platform } from 'react-native'
import { View } from '../components/Themed'
import CartContainer from '../container/CartContainer'
import { styles } from './styles'

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <CartContainer />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}
