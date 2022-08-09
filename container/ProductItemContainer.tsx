import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import _ from 'lodash'
import { styles } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import products from '../data/products.json'
import { faShopify } from '@fortawesome/free-brands-svg-icons'
import ProductItem from '../components/ProductItem'

interface IProductItemContainerProps {
  item: any
  type: string
}

export default function ProductItemContainer({
  item,
  type,
}: IProductItemContainerProps) {
  const list: any = _.filter(products, function (o) {
    if (type === 'brand') {
      return o.brand === item
    } else {
      return o.category === item
    }
  })

  return (
    <View style={styles.container}>
      <View style={styles.listHeaderContainer}>
        <FontAwesomeIcon icon={faShopify} size={40} color={'#b474e8'} />
        <Text style={styles.headerTitle}>{_.capitalize(item)}</Text>
      </View>
      <ScrollView>
        {list.map((data: any) => {
          return (
            <ProductItem
              key={data?.id}
              addProduct={true}
              id={data?.id}
              display_name={data?.display_name}
              price={data?.price}
            />
          )
        })}
      </ScrollView>
    </View>
  )
}
