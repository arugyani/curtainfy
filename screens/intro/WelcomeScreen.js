import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, StatusBar } from "react-native";
import RadioNav from "../../components/RadioNav";

const WelcomeScreen = ({ navigation }) => {
  const [value, setValue] = useState("");
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={"dark-content"}
         />
      <View style={styles.headerWrapper}>
        <Text style={styles.header}>
          welcome to <Text style={styles.bold}>curtainfy</Text>
        </Text>
      </View>

      <View style={styles.navigation}>
        <RadioNav items={[1, 0, 0, 0, 0]} />
  
        <Pressable style={styles.button} onPress={() => navigation.navigate('Name')}>
          <Text style={styles.buttonText}>get started</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  headerWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    fontSize: "36px",
  },

  bold: {
    fontWeight: "700",
  },

  navigation: {
    position: "absolute",
    bottom: 100,
  },

  button: {
    backgroundColor: "#559663",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
});

export default WelcomeScreen;