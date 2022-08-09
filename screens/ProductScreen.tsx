import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Platform } from 'react-native'
import { View } from '../components/Themed'
import ProductItemContainer from '../container/ProductItemContainer'
import { styles } from './styles'

export default function ProductScreen({ route }: any) {
  const { item, type } = route.params
  return (
    <View style={styles.container}>
      <ProductItemContainer item={item} type={type} />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}
