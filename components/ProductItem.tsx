import React, { useCallback } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

interface IData {
  id: number
  display_name: string
  price: number
  addProduct: boolean
  callback?: () => void
}

export default function ProductItem({
  display_name,
  id,
  price,
  addProduct,
  callback,
}: IData) {
  const addToCart = useCallback(async (id, display_name, price) => {
    const currentCart = await AsyncStorage.getItem('cart')
    let cart = []
    if (currentCart !== null) {
      cart = JSON.parse(currentCart)
    }
    cart.push({ id, display_name, price })
    await AsyncStorage.setItem('cart', JSON.stringify(cart))
  }, [])

  const removeToCart = useCallback(async (id) => {
    const currentCart = await AsyncStorage.getItem('cart')
    let cart = []
    if (currentCart !== null) {
      cart = JSON.parse(currentCart)
    }
    const updatedCart = _.filter(cart, function (o) {
      return o.id !== id
    })
    await AsyncStorage.setItem('cart', JSON.stringify(updatedCart))

    if (callback) {
      callback()
    }
  }, [])

  return (
    <View style={styles.itemContainer} key={id}>
      <View style={styles.itemDetails}>
        <Text style={styles.productText}>{display_name}</Text>
        <Text style={styles.priceText}>₱ {price}</Text>
      </View>
      {addProduct ? (
        <TouchableOpacity onPress={() => addToCart(id, display_name, price)}>
          <FontAwesomeIcon icon={faPlus} size={20} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => removeToCart(id)}>
          <FontAwesomeIcon icon={faMinus} size={20} />
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
    padding: 10,
  },
  itemDetails: {
    width: '90%',
  },
  productText: {
    fontSize: 18,
    width: '80%',
    marginRight: 20,
  },
  priceText: {
    fontSize: 16,
    width: '80%',
    marginRight: 20,
    marginTop: 10,
    color: 'green',
    fontWeight: '500',
  },
})
