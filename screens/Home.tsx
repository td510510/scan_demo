import { StyleSheet, View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('Scan')}>
        <Text style={styles.text}>Scan</Text>
      </Pressable>
    </View>
  )
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d6fee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    borderRadius: 20,
    color: '#ffffff',
    width: 150,
    backgroundColor: '#fd687a',
    padding: 10,
    textAlign: 'center'
  }
})