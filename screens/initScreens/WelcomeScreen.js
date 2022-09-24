import React from "react";
<<<<<<< Updated upstream:screens/WelcomeScreen.js
import { Text, View, Button } from "react-native";
import { DotIndicator } from "react-native-indicators";
import RadioNav from "../components/RadioNav";
=======
import { StyleSheet, Text, View, Pressable } from "react-native";
import RadioNav from "../../components/RadioNav";

>>>>>>> Stashed changes:screens/initScreens/WelcomeScreen.js
const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text>Hello, world!</Text>
            <Button
                title="Go to Jane's profile"
                onPress={() =>
                    navigation.navigate('Name', { name: 'Jane' })
                }
            />
            <RadioNav items={[0, 0, 1, 0, 0]} />
        </View>
    )
}



export default WelcomeScreen;