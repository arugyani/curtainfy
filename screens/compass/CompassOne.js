import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import RadioNav from "../../components/RadioNav";

const CompassOne = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.header}>
          now for some questions about your <Text style={styles.bold}>windows</Text> 
        </Text>
      </View>

      <View style={styles.navigation}>
        <RadioNav items={[1, 0, 0, 0, 0]} />
        
        <Pressable style={styles.button} onPress={() => navigation.navigate('CompassTwo', route.params)}>
          <Text style={styles.buttonText}>continue</Text>
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
    width: "95%"
  },

  header: {
    fontSize: "36px",
    justifyContent: "center",
    textAlign: "center",
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

export default CompassOne;