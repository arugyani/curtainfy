import React from "react";

import { StyleSheet, Text, View } from "react-native";

const HomeScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Welcome, <Text style={styles.bold}>{route.params["name"]}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
    alignItems: "start",
    paddingVertical: 100,
    paddingHorizontal: 40,
  },

  header: {
    fontSize: "30px",
  },

  bold: {
    fontWeight: '700'
  }
});

export default HomeScreen;
