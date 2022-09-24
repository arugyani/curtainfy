import React from "react";
import { Text, View } from "react-native";

const NameScreen = ({ navigation, route }) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text>This is {route.params.name}'s profile</Text>
        </View>
    )
}

export default NameScreen;