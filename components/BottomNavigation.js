import React from "react";

import { StyleSheet, View, Text } from "react-native";

const BottomNavigation = ({ navigation }) => {
    return (
       <View style={styles.container}>
        <Text style={styles.button}>Hi</Text>
        <Text style={styles.button}>Hi</Text>
        <Text style={styles.button}>Hi</Text>
        <Text style={styles.button}>Hi</Text>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        backgroundColor: 'blue',
        justifyContent: 'center',
        width: '100%',
    },

    button: {
        fontSize: '35px',
    }
});

export default BottomNavigation;