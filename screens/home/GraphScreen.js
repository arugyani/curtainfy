import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Dimensions,
    StatusBar,
} from "react-native";
import { BarChart } from "react-native-chart-kit";
import BottomNavigation from "../../components/BottomNavigation";

import RainyWeather from "../../components/RainyWeather";
import Night from "../../components/Night";
import Sunny from "../../components/Sunny";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";

const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
        {
            data: [10, 20, 30, 20, 10, 5],
        },
    ],
};

const GraphScreen = ({ navigation, route }) => {
    const weatherDescription = route.params["weatherStatus"];
    const time = route.params["weatherStatus"]["dt"];
    const location = route.params["weatherStatus"]["name"];
    const temperature = route.params["weatherStatus"]["main"]["temp"];
    const id = route.params["weatherStatus"]["weather"][0]["id"];
    const maxTemp = route.params["weatherStatus"]["main"]["temp_max"];

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
            return (
                <Night
                    temperature={temperature.toFixed(1)}
                    location={location}
                />
            );

        return (
            <Sunny temperature={temperature.toFixed(1)} location={location} />
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle={"dark-content"} />
            <View style={styles.stats}>
                <Widget />
            </View>
            <BarChart
                data={data}
                style={styles.chart}
                chartConfig={{
                    backgroundGradientFrom: "#000",
                    backgroundGradientFromOpacity: 0,
                    backgroundGradientTo: "#0000",
                    backgroundGradientToOpacity: 0,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    barPercentage: 0.5,
                }}
                width={Dimensions.get("window").width}
                height={300}
                yAxisLabel="$"
                verticalLabelRotation={30}
            />
            <BottomNavigation navigation={navigation} route={route} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "start",
        alignItems: "center",
        marginTop: 40,
    },
    stats: {
        justifyContent: "start",
        width: "90%",
        paddingTop: 10,
    },
    chart: {
        marginTop: 150,
    },
});

export default GraphScreen;
