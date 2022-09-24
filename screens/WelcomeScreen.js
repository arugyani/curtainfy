import React from "react";
import { Text, View, Button } from "react-native";
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
        </View>
    )
}

export default WelcomeScreen;