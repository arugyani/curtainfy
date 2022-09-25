import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "./screens/intro/WelcomeScreen";
import NameScreen from "./screens/intro/NameScreen";
import SaveWorld from "./screens/intro/SaveWorld";
import AddressScreen from "./screens/intro/AddressScreen";

import CompassOne from "./screens/compass/CompassOne";
import CompassTwo from "./screens/compass/CompassTwo";
import CompassThree from "./screens/compass/CompassThree";
import CompassFour from "./screens/compass/CompassFour";
import CompassFive from "./screens/compass/CompassFive";

import HomeScreen from "./screens/home/HomeScreen";
import SettingsScreen from "./screens/home/SettingsScreen";
import GraphScreen from "./screens/home/GraphScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
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
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
          }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
          }}
        />
        <Stack.Screen
          name="Graph"
          component={GraphScreen}
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
