import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { styles } from './styles'
import { Platform } from 'react-native'
import { View } from '../components/Themed'
import ListContainer from '../container/ListContainer'

export default function ListScreen({ route }: any) {
  const { type } = route.params
  return (
    <View style={styles.container}>
      <ListContainer type={type} />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}
