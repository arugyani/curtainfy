<<<<<<< Updated upstream:screens/NameScreen.js
import React from "react";
import { Text, View } from "react-native";
=======
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";

import HideKeyboard from "../../components/HideKeyboard";
import RadioNav from "../../components/RadioNav";
>>>>>>> Stashed changes:screens/initScreens/NameScreen.js

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