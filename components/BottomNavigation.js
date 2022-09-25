import React from "react";

import { StyleSheet, View, Text, Pressable, Image } from "react-native";

const BottomNavigation = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <Pressable
                style={styles.button}
                onPress={() => {
                    navigation.navigate("Home", { ...route.params });
                }}
            >
                <Image
                    style={route.name == "Home" ? styles.selImg : styles.img}
                    source={require("../assets/home.png")}
                />
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => {
                    navigation.navigate("Stats", { ...route.params });
                }}
            >
                <Image
                    style={route.name == "Stats" ? styles.selImg : styles.img}
                    source={require("../assets/stats.png")}
                />
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => {
                    navigation.navigate("Graph", { ...route.params });
                }}
            >
                <Image
                    style={route.name == "Graph" ? styles.selImg : styles.img}
                    source={require("../assets/solar.png")}
                />
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => {
                    navigation.navigate("Settings", { ...route.params });
                }}
            >
                <Image
                    style={
                        route.name == "Settings" ? styles.selImg : styles.img
                    }
                    source={require("../assets/settings.png")}
                />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        backgroundColor: "transparent",
        justifyContent: "space-between",
        width: "100%",
        height: 100,
        paddingTop: 20,
        paddingLeft: 30,
        paddingRight: 30,
        height: 100,
        marginRight: 10,
        marginLeft: 10,
        borderTopColor: "#e9ebee",
        borderTopWidth: 2,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: "#e9ebee",
    },
    button: {
        fontSize: "35px",
        bottom: 0,
    },
    selImg: {
        height: 40,
        width: 40,
        bottom: 20,
        tintColor: "#559663",
        bottom: 0,
    },
    img: {
        height: 40,
        width: 40,
        bottom: 20,
        bottom: 0,
    },
});

export default BottomNavigation;
