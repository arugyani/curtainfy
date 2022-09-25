import React, { useEffect, useState } from "react";

import { StyleSheet, View, Text, Image, Pressable, StatusBar } from "react-native";
import RadioNav from "../../components/RadioNav";

import { API_KEY } from '@env';

const SaveWorld = ({ navigation, route }) => {
  const name = route.params["name"];
  const address = route.params["address"];

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?zip=${address}&units=imperial&appid=${API_KEY}`
      );

      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={"dark-content"}
         />
      <View style={styles.container}>
        <Text style={styles.header}>
          Hey, <Text style={styles.bold}>{name}</Text>!
        </Text>
        <Text style={styles.caption}>
          Let's save the <Text style={styles.green}>world</Text>.
        </Text>

        <Image
          style={styles.logo}
          source={require("../../assets/curtainfy.png")}
        />
      </View>
      <View style={styles.navigation}>
        <RadioNav items={[1, 1, 1, 1, 1]} />
      
        {isLoading ? <Text style={styles.bold}>Loading Data...</Text> : 
          <Pressable
            style={styles.button}
            onPress={() => {
              if (name !== "") {
                navigation.navigate("CompassOne", { ...route.params, weatherStatus: data });
              }
            }}
          >
            <Text style={styles.buttonText}>let's go!</Text>
          </Pressable>
        }
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

  header: {
    fontSize: 36,
  },

  caption: {
    fontSize: 33,
  },

  green: {
    color: "#559663",
    fontWeight: "700",
    fontSize: "40",
  },

  logo: {
    width: 100,
    height: 100,
    marginTop: 50,
  },

  bold: {
    fontWeight: "700",
  },

  navigation: {
    position: "absolute",
    bottom: 100,
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

export default SaveWorld;
