import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const Profile = (props) => {
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

  let CardData = [
    {
      _Money_Overview_heading: "Money Overview",
      _total_percentage_heading: "$ Total",
      _total_percentage: "14%",
      second_Card_Heading: "12.0",
    },
    {
      _Money_Overview_heading: "Tally Overview",
      _total_percentage_heading: "$ Total",
      _total_percentage: "14%",
      second_Card_Heading: "12.0",
    },
  ];
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
      <TouchableOpacity style={styles._header}>
        <Text style={styles._header_text}>Setting</Text>
      </TouchableOpacity>

      {/* ---------------------> BODY <--------------------- */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles._main}>

          {/* ---------------------> HEADING <--------------------- */}
          <Text style={styles._heading}>Profile</Text>

          {/* ---------------------> PROFILE <--------------------- */}
          <View style={styles._profile_main}>
            <Image
              source={require("./../../images/profile_image.png")}
              style={styles._profile}
            />
            <View style={styles._user_name_main}>
              <Text style={styles._user_name}>Username</Text>
              <Text style={styles._Contractor}>Contractor</Text>
              <Text style={styles._Goal}>Goal</Text>
            </View>
          </View>

          {/* ---------------------> DASHBOARD <--------------------- */}
          <Text style={styles._Dashboard}>Dashboard</Text>
          {CardData.map((v, i) => {
            return (
              <View style={styles._card_main}>
                <Text style={styles._Money_Overview_heading}>
                  {v._Money_Overview_heading}
                </Text>
                <View style={styles._Money_Overview_Card_Main}>

                  {/* ---------------------> CARD 01 <--------------------- */}
                  <View style={styles._total_percentage_card}>
                    <Text style={styles._total_percentage_heading}>
                      {v._total_percentage_heading}
                    </Text>
                    <Text style={styles._total_percentage}>
                      {v._total_percentage}
                    </Text>
                    <Image source={require("./../../images/graph1.png")} />
                  </View>

                  {/* ---------------------> CARD 02 <--------------------- */}
                  <View style={styles._total_percentage_card}>
                    <Text style={styles._total_percentage_heading}>
                      {v.second_Card_Heading}
                    </Text>
                    <Image source={require("./../../images/graph2.png")} />
                    <TouchableOpacity style={styles._month_btn}>
                      <Text style={styles._month_btn_text}>January</Text>

                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })}
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
  _header: {
    marginTop: 40,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    alignSelf: "flex-end",
    marginRight: 20,
  },
  _header_text: {
    fontSize: 15,
    color: "#0D5DE8",
    fontWeight: "bold",
  },
  _main: {
    margin: 20,
  },
  _heading: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 26,
    marginBottom: 10,
  },
  _profile_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _profile: {
    width: 111,
    height: 111,
    borderRadius: 60,
  },
  _user_name_main: {
    marginLeft: 20,
  },
  _user_name: {
    fontSize: 21,
    fontWeight: "bold",
    color: "black",
  },
  _Contractor: {
    fontSize: 17,
    color: "black",
  },
  _Goal: {
    fontSize: 17,
    color: "black",
  },
  _Dashboard: {
    fontSize: 26,
    fontWeight: "bold",
    color: "black",
    marginTop: 10,
  },
  _card_main: {
    marginTop: 20,
  },
  _Money_Overview_heading: {
    fontSize: 15,
    color: "black",
    marginBottom: 5,
    fontWeight: "bold",
  },
  _Money_Overview_Card_Main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _total_percentage_card: {
    backgroundColor: "white",
    elevation: 10,
    borderRadius: 5,
    padding: 10,
    width: "48%",
  },
  _total_percentage_heading: {
    fontSize: 21,
    fontWeight: "bold",
    color: "black",
  },
  _total_percentage: {
    fontSize: 17,
    color: "black",
    marginLeft: 20,
  },
  _month_btn: {
    backgroundColor: "white",
    elevation: 6,
    marginTop: 15,
    marginBottom: 13,
    width: "60%",
    borderRadius: 5,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 5,
    paddingRight: 5,
    alignItems: "center",
  },
  _month_btn_text: {
    fontSize: 17,
    color: "black",
  },
});

export default Profile;
