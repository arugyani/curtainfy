import React from "react";
import { StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";
import BottomNavigation from "../../components/BottomNavigation";


const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
        {
            data: [10, 20, 30, 20, 10, 5]
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
        justifyContent: "center",
        alignItems: "center",
    },
});

export default GraphScreen;