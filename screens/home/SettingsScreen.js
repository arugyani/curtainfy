import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Pressable, Switch, List, ViewPagerAndroidComponent } from "react-native";


import HideKeyboard from "../../components/HideKeyboard";
import RadioNav from "../../components/RadioNav";

const SwitchComponent = (item => {
  const [switchState, setSwitchState] = useState(item.state)
  return (

    <Switch value={switchState} onValueChange={() => setSwitchState(prevState => !prevState)} />

  )
});

const SettingsScreen = ({ navigation, route }) => {
  const [name, changeName] = useState("");

  return (
    <HideKeyboard>
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <View style={styles.switchComp}>
            <Text style={styles.switchTxt}>do not disturb</Text>
            <SwitchComponent style={styles.actualSwitch} item={{ state: false }} />
          </View>
          <View style={styles.switchComp}>
            <Text style={styles.switchTxt}>beta features</Text>
            <SwitchComponent style={styles.actualSwitch} item={{ state: false }} />
          </View>
          <View style={styles.switchComp}>
            <Text style={styles.switchTxt}>notificaiton hours</Text>
            <TextInput
            style={styles.listInput}
            onChangeText={changeName}
            value={name}
          />
          <Text style={styles.dash}>-</Text>
          <TextInput
            style={styles.listInput}
            onChangeText={changeName}
            value={name}
          />
          </View>
          <View style={styles.switchComp}>
            <Text style={styles.switchTxt}>notifications</Text>
            <Text style={styles.actualSwitch}>{'>'}</Text>
          </View>
          <View style={styles.switchComp}>
            <Text style={styles.switchTxt}>privacy</Text>
            <Text style={styles.actualSwitch}>{'>'}</Text>
          </View>
          <View style={styles.switchComp}>
            <Text style={styles.switchTxt}>security</Text>
            <Text style={styles.actualSwitch}>{'>'}</Text>
          </View>
          <View style={styles.switchComp}>
            <Text style={styles.switchTxt}>help</Text>
            <Text style={styles.actualSwitch}>{'>'}</Text>
          </View>
          <View style={styles.switchComp}>
            <Text style={styles.switchTxt}>my home</Text>
            <Text style={styles.actualSwitch}>{'>'}</Text>
          </View>
          <View style={styles.switchComp}>
            <Text style={styles.switchTxt}>about</Text>
            <Text style={styles.actualSwitch}>{'>'}</Text>
          </View>

        </View>
        {/* <View style={styles.headerWrapper}>
            <Pressable
              style={styles.button}
              onPress={() => {
                if (name !== "") {
                  navigation.navigate("CompassThree", { user: name });
                }
              }}
            >
              <Text style={styles.buttonText}>continue</Text>
            </Pressable>
          </View> */}
        </View>
    </HideKeyboard >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  headerWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  listContainer: {
    flex: 1,
    paddingTop: 50,
    justifyContent: "end",
    alignItems: "end",
  },

  header: {
    fontSize: "36px",
    justifyContent: "center",
    textAlign: "center",
  },

  switchComp: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "end",
    alignItems: "start",
    paddingRight: 20,
  },
  switchTxt: {
    flexDirection: "row",
    flex: 1,
    fontSize: 36
  },
  actualSwitch: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    fontSize: "36px"
  },

  bold: {
    fontWeight: "700",
  },

  input: {
    height: 100,
    margin: 20,
    width: "75%",
    backgroundColor: "#e4e4e4",
    paddingHorizontal: 24,
    fontWeight: "700",
    borderRadius: 15,
    padding: 10,
    fontSize: 100,
    textAlign: "center",
  },
  listInput: {
    height: 20,
    margin: 5,
    width: "10%",
    backgroundColor: "#e4e4e4",
    paddingHorizontal: 10,
    fontWeight: "700",
    borderRadius: 15,
    padding: 10,
    fontSize: 20,
    textAlign: "center",
  },

  navigation: {
    position: "absolute",
    bottom: 50,
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
  dash: {
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
});

export default SettingsScreen;
