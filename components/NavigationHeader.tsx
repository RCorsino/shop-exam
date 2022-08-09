import React from 'react'
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { Text, View } from '../components/Themed'
import { faArrowLeft, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

interface INavigationHeaderProps {
  title: string
}

export default function NavigationHeader({ title }: INavigationHeaderProps) {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.rowContainer}
        onPress={() => navigation.goBack()}
      >
        <FontAwesomeIcon icon={faArrowLeft} size={20} />
      </TouchableOpacity>
      {title !== 'Cart' && <Text style={styles.headerTitle}>{title}</Text>}
      {title !== 'Cart' && (
        <TouchableOpacity
          style={styles.rowContainer}
          onPress={() => navigation.navigate('Cart')}
        >
          <FontAwesomeIcon icon={faCartShopping} size={20} />
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '100%',
    flexDirection: 'row',
    paddingTop: 60,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '500',
    alignSelf: 'center',
  },
  label: {
    marginLeft: 10,
    fontSize: 15,
  },
})
