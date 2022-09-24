import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "./screens/intro/WelcomeScreen";
import NameScreen from "./screens/intro/NameScreen";
import SaveWorld from "./screens/intro/SaveWorld";
import AddressScreen from "./screens/intro/AddressScreen";

import CompassOne from "./screens/home/CompassOne";
import CompassTwo from "./screens/home/CompassTwo";
import CompassThree from "./screens/home/CompassThree";
import CompassFour from "./screens/home/CompassFour";
import CompassFive from "./screens/home/CompassFive";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            title: "Welcome",
          }}
        />
        <Stack.Screen
          name="Name"
          component={NameScreen}
          options={{
          }}
        />
        <Stack.Screen
          name="Address"
          component={AddressScreen}
          options={{
          }}
        />
        <Stack.Screen
          name="SaveSplash"
          component={SaveWorld}
          options={{
          }}
        />
        <Stack.Screen
          name="CompassOne"
          component={CompassOne}
          options={{
          }}
        />
        <Stack.Screen
          name="CompassTwo"
          component={CompassTwo}
          options={{
          }}
        />
        <Stack.Screen
          name="CompassThree"
          component={CompassThree}
          options={{
          }}
        />
        <Stack.Screen
          name="CompassFour"
          component={CompassFour}
          options={{
          }}
        />
        <Stack.Screen
          name="CompassFive"
          component={CompassFive}
          options={{
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
