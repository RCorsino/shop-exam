import React from 'react'
import _ from 'lodash'
import products from '../data/products.json'

import { Text, View } from '../components/Themed'
import { useNavigation } from '@react-navigation/native'
import BrandList from '../components/BrandList'
import { styles } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShopify } from '@fortawesome/free-brands-svg-icons'

interface IListContainerProps {
  type: string
}

export default function ListContainer({ type }: IListContainerProps) {
  const navigation = useNavigation()
  let data: any = []
  if (type === 'brand') {
    data = _.groupBy(products, 'brand')
  } else {
    data = _.groupBy(products, 'category')
  }

  return (
    <View style={styles.container}>
      <View style={styles.listHeaderContainer}>
        <FontAwesomeIcon icon={faShopify} size={40} color={'#b474e8'} />
        <Text style={styles.headerTitle}>{_.capitalize(type)}</Text>
      </View>
      <View style={styles.listContainer}>
        <BrandList list={data} type={type} />
      </View>
    </View>
  )
}
