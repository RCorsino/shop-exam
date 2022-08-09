// @ts-nocheck
import React from 'react'
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native'
import _ from 'lodash'
import { useNavigation } from '@react-navigation/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'

interface IBrandListProps {
  list: any
  type: string
}

const BrandList = ({ list, type }: IBrandListProps) => {
  const navigation = useNavigation()
  const dataValues = Object.keys(list)

  const renderItem = ({ item }: any | undefined) => {
    return (
      <TouchableOpacity
        key={item}
        style={styles.itemContainer}
        onPress={() =>
          navigation.navigate('Product', { type: type, item: item })
        }
      >
        <FontAwesomeIcon icon={faTag} size="20" />
        <Text style={styles.text}>{item}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dataValues}
        renderItem={renderItem}
        keyExtractor={(item: any) => item}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    width: '90%',
    padding: 12,
    alignItems: 'center',
    backgroundColor: '#eee',
    marginBottom: 12,
    borderRadius: 10,
    alignSelf: 'center',
  },
  text: {
    fontSize: 14,
    marginLeft: 15,
  },
})

export default BrandList
