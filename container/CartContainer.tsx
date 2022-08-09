import React, { useState, useEffect } from 'react'
import { Text, View, ScrollView } from 'react-native'
import _ from 'lodash'
import { styles } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShopify } from '@fortawesome/free-brands-svg-icons'
import ProductItem from '../components/ProductItem'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { faMehBlank } from '@fortawesome/free-regular-svg-icons'

export default function CartContainer() {
  const [cart, setCart] = useState([])

  const getCart = async () => {
    const currentCart = await AsyncStorage.getItem('cart')
    let cart = []
    if (currentCart !== null) {
      cart = JSON.parse(currentCart)
    }
    setCart(cart)
  }

  useEffect(() => {
    getCart()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.listHeaderContainer}>
        <FontAwesomeIcon icon={faShopify} size={40} color={'#b474e8'} />
        <Text style={styles.headerTitle}>{'Cart'}</Text>
      </View>
      {cart.length > 0 ? (
        <ScrollView>
          {cart.map((data: any) => {
            return (
              <ProductItem
                addProduct={false}
                id={data.id}
                display_name={data?.display_name}
                price={data?.price}
                callback={getCart}
              />
            )
          })}
        </ScrollView>
      ) : (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <FontAwesomeIcon icon={faMehBlank} size={40} />
          <Text style={{ marginTop: 20 }}>Your cart is empty</Text>
        </View>
      )}
    </View>
  )
}
