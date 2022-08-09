/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { ColorSchemeName } from 'react-native'
import NavigationHeader from '../components/NavigationHeader'
import BarcodeScreen from '../screens/BarcodeScreen'

import CartScreen from '../screens/CartScreen'
import ListScreen from '../screens/ListScreen'
import MainScreen from '../screens/MainScreen'
import ProductScreen from '../screens/ProductScreen'
import { RootStackParamList } from '../types'
import LinkingConfiguration from './LinkingConfiguration'

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  )
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={MainScreen} />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{ header: () => <NavigationHeader title={'Cart'} /> }}
      />
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={{ header: () => <NavigationHeader title={'List'} /> }}
      />
      <Stack.Screen
        name="Barcode"
        component={BarcodeScreen}
        options={{ header: () => <NavigationHeader title={'Barcode'} /> }}
      />
      {/* <Stack.Group> */}
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{ header: () => <NavigationHeader title={'Product'} /> }}
      />
      {/* </Stack.Group> */}
    </Stack.Navigator>
  )
}
