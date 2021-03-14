let UserName = [{ UserName: "Shed Name" }, { UserName: "Shed Name" }];
import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TextInput,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  TextPropTypes,
} from "react-native";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import DatePicker from "./../../Components/DatePiker/DatePiker";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Run = (props) => {
  const [dimensions, setDimensions] = useState({ window, screen });
  const [active, setActive] = useState(0);
  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  let UserName = [{ UserName: "Shed Name" }, { UserName: "Shed Name" }];
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="white"
        translucent={true}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles._main}>
          <Text style={styles._heading}>SHEARERS WATCH</Text>
          <Text style={styles._sub_heading}>Time into Run</Text>
        </View>
      </ScrollView>

      <View style={styles._tab_main}>
        <TouchableOpacity style={styles._tab_btn}>
          <Ionicons name="map-sharp" size={24} color="white" />
          <Text style={styles._tab_text}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles._tab_btn}>
          <FontAwesome name="user-circle" size={24} color="white" />
          <Text style={styles._tab_text}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles._tab_btn}>
          <MaterialCommunityIcons name="update" size={24} color="white" />
          <Text style={styles._tab_text}>Start Run</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  _main: {
    marginLeft: 20,
    marginRight: 20,
  },
  _heading: {
    fontSize: 26,
    fontWeight: "bold",
    color: "black",
    marginTop: 70,
    textAlign: "center",
  },
  _sub_heading: {
    fontSize: 20,
    color: "black",
    textAlign: "center",
    marginTop: 20,
  },

  //   tab

  _tab_main: {
    backgroundColor: "#707070",
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: 5,
    paddingTop: 5,
  },
  _tab_btn: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  _tab_text: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default Run;
