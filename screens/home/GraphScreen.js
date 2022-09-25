import React from "react";
import { StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";
import BottomNavigation from "../../components/BottomNavigation";


const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
        {
            data: [20, 45, 28, 80, 99, 43]
        }
    ]
};



const GraphScreen = ({ navigation, route }) => {

    return (
        <View style={styles.container}>
            <Text>{route.name}</Text>
            <BarChart
                data={data}
                chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                      borderRadius: 16
                    },
                    propsForDots: {
                      r: "6",
                      strokeWidth: "2",
                      stroke: "#ffa726"
                    }
                  }}
                width={Dimensions.get("window").width}
                height={220}
                yAxisLabel="$"
                verticalLabelRotation={30}
            />
            <BottomNavigation navigation={navigation} route={route}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default GraphScreen;