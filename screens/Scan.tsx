import { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner';

const Scan = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null)
  const [scanned, setScanned] = useState<boolean>(false)

  useEffect(() => {
    requestPermission()
  }, [])

  const requestPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true)
    alert(`type: ${type}, data: ${data}`)
  }

  if (hasPermission === null) {
    return <Text>Request for the Camera Permission</Text>
  }

  if (hasPermission === false) {
    return <Text>No Access to the Camera</Text>
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.barcode}
      />
    </View>
  )
};

export default Scan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 8,
  },
  barcode: {
    flex: 1,
    width: 300,
    height: 300
  }
})
