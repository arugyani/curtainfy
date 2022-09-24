import React from "react";

import { StyleSheet, View, Text, Image } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

const RainyWeather = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.temp}>
        <Text style={styles.caption}>Night</Text>
        <Text style={styles.value}>{props.temperature}&deg;</Text>
      </View>
      <View style={styles.location}>
        <Text style={styles.caption}>{props.location}</Text>

				<Image
					style={styles.cloud}
          source={require("../assets/cloud.png")}
        />
        <Image
					style={styles.moon}
          source={require("../assets/moon.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#3b3b3c",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
		marginBottom: 50,
  },

	cloud: {
		position: 'absolute',
		zIndex: 0,
		bottom: -40,
		right: -5,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
	},

  moon: {
    position: 'absolute',
    zIndex: 0,
    bottom: -30,
    right: -20,
    width: 100,
    height: 100,
  }, 

  info: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  caption: {
    fontSize: "20px",
    color: "#fff",
  },

  value: {
    fontWeight: "700",
    color: "#fff",
    fontSize: "50px",
		marginBottom: 20,
  },

  text: {
    color: "white",
  },
});

export default RainyWeather;
