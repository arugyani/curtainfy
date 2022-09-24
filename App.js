import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

<<<<<<< Updated upstream
import WelcomeScreen from './screens/WelcomeScreen';
import NameScreen from './screens/NameScreen';
=======
import WelcomeScreen from "./screens/initScreens/WelcomeScreen";
import NameScreen from "./screens/initScreens/NameScreen";
import SaveWorld from "./screens/initScreens/SaveWorld";
import AddressScreen from "./screens/initScreens/AddressScreen";
>>>>>>> Stashed changes

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: 'Welcome', gestureEnabled: false }}
        />
        <Stack.Screen name="Name" component={NameScreen} options={{
          gestureEnabled: 'false',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
