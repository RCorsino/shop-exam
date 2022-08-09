import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Button,
  Modal,
  Pressable,
  ScrollView,
} from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import _ from 'lodash'
import { styles } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import products from '../data/products.json'
import ProductItem from '../components/ProductItem'

export default function BarcodeContainer() {
  const [hasPermission, setHasPermission] = useState<boolean>(false)
  const [scanned, setScanned] = useState<boolean>(false)
  const [scannedData, setScannedData] = useState([])

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    }
    getBarCodeScannerPermissions()
  }, [])

  const handleBarCodeScanned = ({ data }: any) => {
    setScanned(true)
    const scannedProduct: any = _.filter(products, function (o) {
      return o.barcode == data
    })
    setScannedData(scannedProduct)
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={scanned}
        onRequestClose={() => {
          setScanned(false)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView>
              <Pressable
                style={styles.button}
                onPress={() => setScanned(false)}
              >
                <FontAwesomeIcon icon={faClose} size={15} />
              </Pressable>
              <View style={styles.modalBodyContainer}>
                {scannedData.map((d: any) => {
                  return (
                    <ProductItem
                      addProduct={true}
                      id={d.id}
                      display_name={d?.display_name}
                      price={d?.price}
                    />
                  )
                })}
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  )
}
