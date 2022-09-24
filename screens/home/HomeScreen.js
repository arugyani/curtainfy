import React from "react";

import { StyleSheet, Text, View } from "react-native";

import RainyWeather from "../../components/RainyWeather";
import Night from "../../components/Night";
import Sunny from '../../components/Sunny';

const HomeScreen = ({ navigation, route }) => {
  const weatherDescription = route.params["weatherStatus"]
  const time = route.params["weatherStatus"]["dt"]
  const location = route.params["weatherStatus"]["name"]
  const temperature = route.params["weatherStatus"]["main"]["temp"]
  const id = route.params["weatherStatus"]["weather"][0]["id"]

  const Widget = () => {
    if (id >= 200 && id <= 622) return <RainyWeather temperature={temperature.toFixed(1)} location={location} />
    if (new Date(time * 1000).getHours() < 5 || new Date(time * 1000).getHours() > 17) return <Night temperature={temperature.toFixed(1)} location={location} />
    
    return <Sunny temperature={temperature.toFixed(1)} location={location} />
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Welcome, <Text style={styles.bold}>{route.params["name"]}</Text>
      </Text>

      <View style={styles.stats}>
        <Text style={styles.title}>
          Today's weather
        </Text>
        
        <Widget />
      </View>
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

  title: {
    fontSize: 25,
    marginTop: 30,
    marginBottom: 15,
  },  

  bold: {
    fontWeight: '700'
  },

  stats: {
    width: '100%',
  }
});

export default HomeScreen;
