import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Switch,
  List,
  ViewPagerAndroidComponent,
} from "react-native";

import HideKeyboard from "../../components/HideKeyboard";
import BottomNavigation from "../../components/BottomNavigation";
import RadioNav from "../../components/RadioNav";

const SwitchComponent = (item) => {
  const [switchState, setSwitchState] = useState(item.state);
  return (
    <Switch
      value={switchState}
      onValueChange={() => setSwitchState((prevState) => !prevState)}
    />
  );
};

const SettingsScreen = ({ navigation, route }) => {
  const [name, changeName] = useState("");

  return (
    <HideKeyboard>
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <View style={styles.switchComp}>
            <Text style={styles.switchTxt}>do not disturb</Text>
            <SwitchComponent
              style={styles.actualSwitch}
              item={{ state: false }}
            />
          </View>
          <View style={styles.switchComp}>
            <Text style={styles.switchTxt}>beta features</Text>
            <SwitchComponent
              style={styles.actualSwitch}
              item={{ state: false }}
            />
          </View>
          <View style={styles.switchCompText}>
            <Text style={styles.switchTxtComp}>notification hours</Text>
            <View style={styles.inputWrapper}>
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
          </View>
        </View>
        <BottomNavigation navigation={navigation} route={route} />
      </View>
    </HideKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  listContainer: {
    height: "100%",
    marginTop: '45%',
    justifyContent: "start",
    alignItems: "center",
  },

  switchComp: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },

  switchTxt: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 12,
    marginRight: 24,
  },

  switchTxtComp: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 24,
  },

  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  listInput: {
    height: 45,
    width: 100,
    marginHorizontal: 12,
    textAlign: 'center',
    borderRadius: 50,
    borderColor: '#000',
    borderWidth: 1,
    fontWeight: '700',
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
