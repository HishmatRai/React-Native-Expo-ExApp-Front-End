import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import CounterDown from './../../Components/CounterDown/CounterDown';
import StopWatch from './../../Components/StopWatch/StopWatch'
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const Run = (props) => {
  const [dimensions, setDimensions] = useState({ window, screen });
  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });
  return (
    <View style={styles.container}>

      {/* ---------------------> STATUS BAR <--------------------- */}
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="white"
        translucent={true}
      />

      {/* ---------------------> BODY <--------------------- */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles._main}>

          {/* ---------------------> HEADING <--------------------- */}
          <Text style={styles._heading}>SHEARERS WATCH</Text>

          {/* ---------------------> STOP WATCH <--------------------- */}
          <Text style={styles._sub_heading}>Time into Run</Text>
          <StopWatch />

          {/* ---------------------> COUNTER DOWN <--------------------- */}
          <Text style={styles._counter_Down}>Cutter Countdown</Text>
          <CounterDown />
        </View>
      </ScrollView>

      {/* ---------------------> TABS <--------------------- */}
      <View style={styles._tab_main}>

        {/* ---------------------> HISTORY <--------------------- */}
        <TouchableOpacity style={styles._tab_btn}
          onPress={() => props.navigation.navigate("History")}>
          <Ionicons name="map-sharp" size={24} color="white" />
          <Text style={styles._tab_text}>History</Text>
        </TouchableOpacity>

        {/* ---------------------> PROFILE <--------------------- */}
        <TouchableOpacity style={styles._tab_btn}
          onPress={() => props.navigation.navigate("Profile")}>
          <FontAwesome name="user-circle" size={24} color="white" />
          <Text style={styles._tab_text}>Profile</Text>
        </TouchableOpacity>

        {/* ---------------------> START RUN <--------------------- */}
        <TouchableOpacity style={styles._tab_btn}
          onPress={() => props.navigation.navigate("Run")}>
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
  _counter_Down: {
    fontSize: 20,
    color: "black",
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "bold"

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
