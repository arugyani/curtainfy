import React, { Component } from "react";
import {
    StyleSheet,
    View
} from "react-native";

const Circle = (props) => {
    if (props.indic == 1){
    return (
        <View style={styles.fillCircle} />
    );
    }
    return (
        <View style={styles.circle} />
    );
}
const RadioNav = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.background}>
                {
                    props.items.map((item, index) => <Circle key={index} indic={item}/>)
                }
            </View> 
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },

    background: {
        flexDirection: "row",
    },
    circle: {
        width: 15,
        height: 15,
        backgroundColor: "#ffff",
        borderWidth: 1,
        borderColor: "#559663",
        borderRadius: 20,
        marginRight: 4,
        overflow: "hidden",
    },
    fillCircle: {
        width: 15,
        height: 15,
        backgroundColor: "#559663",
        borderWidth: 1,
        borderColor: "#559663",
        borderRadius: 20,
        marginRight: 4,
        overflow: "hidden",
    },
    
});

export default RadioNav;