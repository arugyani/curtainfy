import React from "react";

import { StyleSheet, View, Text } from "react-native";

const SaveWorld = ({ navigation, route }) => {
	const name = route.params.user;
	const address = route.params.address;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hey, <Text style={styles.bold}>{name}</Text>!</Text>
			<Text style={styles.caption}>Let's save the <Text style={styles.green}>world</Text>.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },

		header: {
			fontSize: 36
		},

		caption: {
			fontSize: 33,
		},

		green: {
			color: '#559663',
			fontWeight: '700',
			fontSize: '40'
		},

		bold: {
			fontWeight: '700',
		}
});

export default SaveWorld;
