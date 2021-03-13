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
} from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const AddDay = (props) => {
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
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="white"
        translucent={true}
      />
      <View style={styles._header}>
        <TouchableOpacity>
          <Entypo name="circle-with-cross" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles._header_text}>Add Day</Text>
        <Text style={{ color: "white" }}>Add Day</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles._main}>
          <Text style={styles.select_Dat}>Select a Day</Text>
          <TextInput style={styles._input} placeholder="Your Email" />
        </View>
      </ScrollView>
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
    alignSelf: "center",
    marginRight: 20,
  },

  _input: {
    // fontWeight: "bold",
    color: "#B6B7B7",
    height: 40,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 13,
  },
  _header: {
    flexDirection: "row",
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
  },
  _header_text: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#000000",
  },
  select_Dat: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#000000",
  },
});

export default AddDay;
