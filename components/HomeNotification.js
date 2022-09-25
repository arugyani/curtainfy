import { Animated, StyleSheet, View } from "react-native";
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const HomeNotification = (props) => {
    return (
        <View style={[styles.container, {backgroundColor: props.color}]}>
            <View style={styles.row}>
                {props.children}
                  
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginBottom: 15,
        borderRadius: 15,

        justifyContent: 'start',
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default HomeNotification;