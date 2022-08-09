//@ts-nocheck

import React from 'react'
import { styles } from './styles'
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { Text, View } from '../components/Themed'
import {
  faBagShopping,
  faBarcode,
  faShop,
} from '@fortawesome/free-solid-svg-icons'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { faShopify } from '@fortawesome/free-brands-svg-icons'

export default function MainContainer() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <FontAwesomeIcon icon={faShopify} size={40} color={'#b474e8'} />
        <Text style={styles.headerTitle}>Unicorn Shop</Text>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.selectionContainer}
          onPress={() => navigation.navigate('List', { type: 'brand' })}
        >
          <FontAwesomeIcon icon={faBagShopping} size={80} />
          <Text style={styles.label}>Brands</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.selectionContainer}
          onPress={() => navigation.navigate('List', { type: 'category' })}
        >
          <FontAwesomeIcon icon={faShop} size={80} />
          <Text style={styles.label}>Category</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.barcodeContainer}
          onPress={() => navigation.navigate('Barcode')}
        >
          <FontAwesomeIcon icon={faBarcode} size={80} />
          <Text style={styles.barcodeText}>Click here to scan</Text>
        </TouchableOpacity>
      </View>

      {/* <View
        style={styles.inputContainer}
        darkColor="rgba(255,255,255,0.05)"
        lightColor="rgba(0,0,0,0.05)"
      >
        <TextInput
          onChangeText={(newText) => onChangetext(newText)}
          value={text}
          style={{ padding: 10 }}
          editable
          maxLength={40}
          placeholder="Search Music"
        />
      </View> */}
    </View>
  )
}
