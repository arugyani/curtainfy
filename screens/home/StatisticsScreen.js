import React, { useEffect, useState } from "react";

import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

import RainyWeather from "../../components/RainyWeather";
import Night from "../../components/Night";
import Sunny from "../../components/Sunny";

import BottomNavigation from "../../components/BottomNavigation";
import HomeNotification from "../../components/HomeNotification";

function rounder(x) {
  return Number.parseFloat(x).toFixed(2);
}

const StatisticsScreen = ({ navigation, route }) => {
  const weatherDescription = route.params["weatherStatus"];
  const time = route.params["weatherStatus"]["dt"];
  const location = route.params["weatherStatus"]["name"];
  const temperature = route.params["weatherStatus"]["main"]["temp"];
  const id = route.params["weatherStatus"]["weather"][0]["id"];
  const size = route.params["houseSize"];
  const address = route.params["address"];
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await fetch(
        `https://us-central1-hackdfw-363322.cloudfunctions.net/api/${address}`
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const offsetpft = (data["offsetpkm"] / 10763910.41) * size; // metric tons
  const phones = rounder(offsetpft / 0.00000822);
  const barrels = rounder(offsetpft / 0.43);
  const gallons = rounder(offsetpft / 0.008887);
  const acres = rounder(offsetpft / 0.84);
  useEffect(() => {
    getData();
  }, []);

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
        <View style={styles.stats}>
          <Widget />
        </View>

        {isLoading ? (
          <Text>Loading data...</Text>
        ) : (
          <View style={styles.container}>
            <View style={styles.notifications}>
              <Text style={styles.text}>
                based on your house location and layout, you may save
              </Text>
              <Text style={styles.textBold}>{acres} acres</Text>
              <Text style={styles.text}>
                of forest area worth of carbon offset, which is equivalent to:
              </Text>
            </View>
            <View style={styles.dataStats}>
              <Image
                style={styles.logo}
                source={require("../../assets/forest.png")}
              />
              <Text style={styles.bold}>{rounder(offsetpft)} lb</Text>
              <Text style={styles.text}>of carbon emissions per year</Text>
            </View>
            <View style={styles.dataStats}>
              <Image
                style={styles.logo}
                source={require("../../assets/drill.png")}
              />
              <Text style={styles.bold}>{barrels}</Text>
              <Text style={styles.text}> barrels of oil</Text>
            </View>
            <View style={styles.dataStats}>
              <Image
                style={styles.logo}
                source={require("../../assets/gas.png")}
              />
              <Text style={styles.bold}>{Math.round(gallons)}</Text>
              <Text style={styles.text}>galloons of gasoline</Text>
            </View>
            <View style={styles.dataStats}>
              <Image
                style={styles.logo}
                source={require("../../assets/phone.png")}
              />
              <Text style={styles.bold}>{Math.round(phones)}</Text>
              <Text style={styles.text}>smartphones charged</Text>
            </View>
          </View>
        )}

        <Text style={styles.subtitle}>Calculations by www.epa.gov</Text>
        <BottomNavigation navigation={navigation} route={route} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  dataStats: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "end",
    paddingHorizontal: 80,
  },
  container: {
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    marginTop: 50,
  },
  stats: {
    justifyContent: "start",
    width: "95%",
    paddingTop: 10,
  },
  containerWrapper: {
    flex: 1,
    // justifyContent: "space-between",
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
    paddingLeft: 10,
    fontSize: 20,
  },

  stats: {
    marginTop: 1,
    width: "100%",
    paddingHorizontal: 20,
  },

  notifications: {
    flexDirection: "column",
    justifyContent: 'center',
    position: "center",
  },

  text: {
    fontSize: 18,
    width: "100%",
    textAlign: "center",
    padding: 5,
    maxWidth: 350,
  },

  textBold: {
    fontSize: 28,
    textAlign: "center",
    textBold: true,
    padding: 5,
  },
  logo: {
    width: 60,
    height: 60,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 8,
    textAlign: "center",
    width: "100%",
    paddingTop: 75,
  },
});

export default StatisticsScreen;
