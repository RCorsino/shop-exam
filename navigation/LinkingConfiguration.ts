/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native'
import * as Linking from 'expo-linking'

import { RootStackParamList } from '../types'

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Home: {
        screens: {
          List: {
            screens: 'ListScreen',
          },
          Barcode: {
            screens: 'BarcodeScreen',
          },
          Product: {
            screens: 'ProductScreen',
          },
        },
      },
      Cart: {
        screens: 'CartScreen',
      },
    },
  },
}

export default linking
