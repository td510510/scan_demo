import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home'
import Scan from './screens/Scan'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={Home}
            options={{ title: 'Home' }}
          />
          <Stack.Screen
            name='Scan'
            component={Scan}
            options={{ title: 'Scan' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
