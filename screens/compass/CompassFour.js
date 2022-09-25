import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Pressable, StatusBar } from "react-native";

import HideKeyboard from "../../components/HideKeyboard";
import RadioNav from "../../components/RadioNav";

const CompassFour = ({ navigation, route }) => {
  const [windows, changeWindows] = useState("");

  return (
    <HideKeyboard>
      <View style={styles.container}>
      <StatusBar
        barStyle={"dark-content"}
         />
        <View style={styles.headerWrapper}>
          <Text style={styles.header}>
            How many <Text style={styles.bold}>east</Text> facing windows do you have?
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={changeWindows}
            value={windows}
          />
        </View>
        <View style={styles.navigation}>
          <View style={styles.navigation}>
            <RadioNav items={[1, 1, 1, 1, 0]} />

            <Pressable
              style={styles.button}
              onPress={() => {
                if (windows !== "") {
                  navigation.navigate("CompassFive", { ...route.params, eastWindows: windows });
                }
              }}
            >
              <Text style={styles.buttonText}>continue</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </HideKeyboard>
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
    width: "100%",
  },

  header: {
    fontSize: "36px",
    justifyContent: "center",
    textAlign: "center",
  },

  bold: {
    fontWeight: "700",
  },

  input: {
    height: 50,
    margin: 20,
    width: "75%",
    backgroundColor: "#e4e4e4",
    paddingHorizontal: 24,
    fontWeight: "700",
    borderRadius: 15,
    padding: 10,
    fontSize: 20,
    textAlign: "center",
  },

  navigation: {
    position: "absolute",
    bottom: 50,
    justifyContent: "center",
    alignItems: "center",
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

export default CompassFour;
