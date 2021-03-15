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
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import DatePicker from "./../../Components/DatePiker/DatePiker";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const History = (props) => {
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

  let UserName = [{ UserName: "Shed Name" }, { UserName: "Shed Name" }];
  return (
    <View style={styles.container}>

      {/* ---------------------> STATUS BAR <--------------------- */}
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="white"
        translucent={true}
      />

      {/* ---------------------> HEADER <--------------------- */}
      <View style={styles._header}>
        <Text style={styles._header_text}>History</Text>

        {/* ---------------------> ADD DAY <--------------------- */}
        <TouchableOpacity onPress={() => props.navigation.navigate("AddDay")}>
          <Text style={styles._add_day_btn_text}>Add Day</Text>
        </TouchableOpacity>
      </View>

      {/* ---------------------> BODY <--------------------- */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles._main}>

          {/* ---------------------> CALENDER PICKER <--------------------- */}
          <DatePicker />

          {/* ---------------------> CARD <--------------------- */}
          {UserName.map((v, i) => {
            return (
              <View style={styles.shed_name_card_main}>
                <Text style={styles._shed_name}>{v.UserName}</Text>
                <Text style={styles.Date}>Date</Text>
                <View style={styles._selected_main}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <MaterialIcons name="alarm" size={24} color="white" />
                    <Text
                      style={{
                        color: "white",
                        fontSize: 15,
                        marginLeft: 10,
                        fontWeight: "bold",
                      }}
                    >
                      Ti...
                    </Text>
                  </View>
                  <Text
                    style={{ color: "white", fontSize: 15, fontWeight: "bold" }}
                  >
                    Ti...
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 15,
                      fontWeight: "bold",
                      marginRight: 10,
                    }}
                  >
                    PRs
                  </Text>
                </View>
                <View>
                  <View style={styles._unseleced}>
                    <Text style={styles._unseleced_value}>Time</Text>
                    <Text style={styles._unseleced_value}>Tally</Text>
                    <Text style={styles._unseleced_value}>Type</Text>
                    <Text style={styles._unseleced_value}>Speech</Text>
                  </View>
                  <View style={styles._unseleced}>
                    <Text style={styles._unseleced_value}>Time</Text>
                    <Text style={styles._unseleced_value}>Tally</Text>
                    <Text style={styles._unseleced_value}>Type</Text>
                    <Text style={styles._unseleced_value}>Speech</Text>
                  </View>
                  <View style={styles._unseleced}>
                    <Text style={styles._unseleced_value}>Time</Text>
                    <Text style={styles._unseleced_value}>Tally</Text>
                    <Text style={styles._unseleced_value}>Type</Text>
                    <Text style={styles._unseleced_value}>Speech</Text>
                  </View>
                  <View style={styles._unseleced}>
                    <Text style={styles._unseleced_value}>Time</Text>
                    <Text style={styles._unseleced_value}>Tally</Text>
                    <Text style={styles._unseleced_value}>Type</Text>
                    <Text style={styles._unseleced_value}>Speech</Text>
                  </View>
                  <View style={styles._unseleced}>
                    <Text style={styles._unseleced_value}>Time</Text>
                    <Text style={styles._unseleced_value}>Tally</Text>
                    <Text style={styles._unseleced_value}>Type</Text>
                    <Text style={styles._unseleced_value}>Speech</Text>
                  </View>
                </View>
              </View>
            );
          })}
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

  _header: {
    flexDirection: "row",
    paddingTop: 40,
    paddingBottom: 10,
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
  _add_day_btn_text: {
    fontSize: 15,
    color: "#0D5DE8",
    fontWeight: "bold",
  },
  shed_name_card_main: {
    marginTop: 30,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 10,
  },
  _shed_name: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
  },
  Date: {
    fontSize: 15,
    color: "black",
  },
  _selected_main: {
    backgroundColor: "#0D5DE8",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 2,
    marginTop: 10,
  },
  _unseleced: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
  },
  _unseleced_value: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
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

export default History;
