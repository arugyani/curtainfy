import React from "react";

import { StyleSheet, View, Text, Image } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

const Sunny = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.temp}>
        <Text style={styles.caption}>Sunny</Text>
        <Text style={styles.value}>{props.temperature}&deg;</Text>
      </View>
      <View style={styles.location}>
        <Text style={styles.caption}>{props.location}</Text>

        <Image
					style={styles.sun}
          source={require("../assets/sun.png")}
        />
				<Image
					style={styles.cloud}
          source={require("../assets/cloud.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#55b3fe",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
		marginBottom: 25,
  },

	sun: {
		position: 'absolute',
		zIndex: -1,
		bottom: -40,
		right: -10,
		height: 100,
		width: 100,
	},

	cloud: {
		position: 'absolute',
		zIndex: 0,
		bottom: -20,
		right: 20,
		width: 106,
		height: 59,
	},

	rain: {
		position: 'absolute',
		bottom: -50,
		zIndex: 0,
		right: -7,
		width: 141,
		height: 63
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

export default Sunny;
