import React from "react";

import { StyleSheet, Text, View, ScrollView } from "react-native";

import RainyWeather from "../../components/RainyWeather";
import Night from "../../components/Night";
import Sunny from "../../components/Sunny";

import BottomNavigation from "../../components/BottomNavigation";
import HomeNotification from "../../components/HomeNotification";

const HomeScreen = ({ navigation, route }) => {
  const weatherDescription = route.params["weatherStatus"];
  const time = route.params["weatherStatus"]["dt"];
  const location = route.params["weatherStatus"]["name"];
  const temperature = route.params["weatherStatus"]["main"]["temp"];
  const id = route.params["weatherStatus"]["weather"][0]["id"];

  const Widget = () => {
    if (id >= 200 && id <= 622)
      return (
        <RainyWeather
          temperature={temperature.toFixed(1)}
          location={location}
        />
      );
    if (
      new Date(time * 1000).getHours() < 5 ||
      new Date(time * 1000).getHours() > 17
    )
      return <Night temperature={temperature.toFixed(1)} location={location} />;

    return <Sunny temperature={temperature.toFixed(1)} location={location} />;
  };

  return (
    <ScrollView contentContainerStyle={styles.containerWrapper}>
      <View style={styles.container}>
        <Text style={styles.header}>
          Welcome, <Text style={styles.bold}>{route.params["name"]}</Text>
        </Text>

        <View style={styles.stats}>
          <Text style={styles.title}>Today's weather</Text>
          
          <Widget />
        </View>

        <View style={styles.notifications}>
          <Text style={styles.title}>Curtain schedule</Text>
          <HomeNotification color="#ebb0ff">
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.notificationText}><Text style={styles.bold}>North Curtains</Text></Text>
              <Text style={styles.notificationTextr}>Leave closed from <Text style={styles.bold}>11:00 am - 5 pm</Text></Text>
            </View>
          </HomeNotification>
          <HomeNotification color="#a0ffd2">
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.notificationText}><Text style={styles.bold}>East Curtains</Text></Text>
              <Text style={styles.notificationTextr}>Please open from <Text style={styles.bold}>10:15 am - 1 pm</Text> and <Text style={styles.bold}>5:00 pm - 8:15 pm</Text></Text>
            </View>
          </HomeNotification>
          <HomeNotification color="#ff9999">
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.notificationText}><Text style={styles.bold}>West Curtains</Text></Text>
              <Text style={styles.notificationTextr}>Please open from <Text style={styles.bold}>8 am - 11 am</Text> and <Text style={styles.bold}>5:00 pm - 8:15 pm</Text></Text>
            </View>
          </HomeNotification>
        </View>
      </View>
      <BottomNavigation navigation={navigation} route={route}/>

    </ScrollView>

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

  containerWrapper: {
    flex: 1,
    justifyContent: 'space-between',
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
    fontWeight: "700",
  },

  stats: {
    width: "100%",
  },

  notifications: {
    width: '100%',
  },

  notificationText: {
    fontSize: 18
    
  }
});

export default HomeScreen;
