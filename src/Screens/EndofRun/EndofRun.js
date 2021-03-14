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
} from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import Rating from "./../../Components/StartRating/StartRating";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const EndofRun = (props) => {
  const [dimensions, setDimensions] = useState({ window, screen });
  const [active, setActive] = useState(0);
  const [activeBtn, setActiveBtn] = useState(0);
  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });
  let _Shearing_Btn_Data = [{ value: "Shearing" }, { value: "Cruching" }];
  let ButtonsValue = [
    { value: "Lambs" },
    { value: "Hoggest" },
    { value: "Wethers" },
  ];
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
          <Rating />
          <Text style={styles._great_job_heading}>Great Job!</Text>
          <Image
            source={require("./../../images/logo.png")}
            style={styles._logo}
          />
          <View style={styles._Shearing_btn_main}>
            {_Shearing_Btn_Data.map((v, i) => {
              return (
                <TouchableOpacity
                  onPress={() => setActive(i)}
                  style={
                    active === i
                      ? {
                          backgroundColor: "#31F10C",
                          borderRadius: 5,
                          width: "30%",
                          padding: 10,
                        }
                      : {
                          backgroundColor: "#D6DED5",
                          width: "40%",
                          padding: 10,
                        }
                  }
                >
                  <Text style={styles._Shearing_btn_text}>{v.value}</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <Text style={styles._enter_tally}>Enter Tally and Type</Text>
          <TouchableOpacity style={styles._tally_btn}>
            <Text style={styles._tally_btn_text}>Tally</Text>
          </TouchableOpacity>

          <View style={styles._buttons_main}>
            {ButtonsValue.map((v, i) => {
              return (
                <TouchableOpacity
                  style={styles._button}
                  onPress={() => setActiveBtn(i)}
                  style={
                    activeBtn === i
                      ? {
                          backgroundColor: "#D6DED5",
                          borderRadius: 5,
                          width: 100,
                          paddingTop: 0,
                        }
                      : {
                          backgroundColor: "white",
                          width: 100,
                          padding: 0,
                        }
                  }
                >
                  <Text
                    style={
                      activeBtn === i
                        ? {
                            textAlign: "center",
                            fontSize: 17,
                            fontWeight: "bold",
                            color: "black",
                          }
                        : {
                            textAlign: "center",
                            fontSize: 17,
                            fontWeight: "bold",
                            color: "#A6A6A6",
                          }
                    }
                  >
                    {v.value}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <Text style={styles._add_note}>Add Note</Text>
          <TextInput style={styles._input} />

          <TouchableOpacity style={styles._done_btn}>
            <Text style={styles._done_btn_text}>Done</Text>
          </TouchableOpacity>
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
    paddingTop: 50,
    alignItems: "center",
  },

  _input: {
    height: 40,
    fontSize: 13,
    borderColor: "#707070",
    borderWidth: 1,
    color: "black",
    width: 300,
    marginTop:20
  },
  _great_job_heading: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#000000",
    marginTop: 10,
  },
  _enter_tally: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginTop: 20,
  },
  _buttons_main: {
    marginTop: 30,
  },

  _logo: {
    width: 169,
    height: 126,
    marginTop: 10,
  },
  _done_btn: {
    alignSelf: "center",
    marginTop: 30,
  },
  _done_btn_text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0D5DE8",
  },
  _Shearing_btn_main: {
    flexDirection: "row",
    alignSelf: "center",
    backgroundColor: "#D6DED5",
    borderRadius: 5,
    marginTop: 20,
  },
  __Shearign_btn: {
    // backgroundColor: "#D6DED5",
    width: "30%",
    padding: 10,
  },
  _Shearing_btn_text: {
    fontWeight: "bold",
    fontSize: 12,
    color: "black",
    textAlign: "center",
    letterSpacing: 1,
  },
  _tally_btn: {
    backgroundColor: "#D6DED5",
    alignSelf: "center",
    alignItems: "center",
    padding: 5,
    width: 60,
    borderRadius: 5,
    marginTop: 20,
  },
  _tally_btn_text: {
    fontSize: 17,
    textAlign: "center",
    color: "#A6A6A6",
  },
  _add_note: {
    fontSize: 17,
    color: "black",
    fontWeight: "bold",
    textAlign:"center",
    marginTop:20
  },
});

export default EndofRun;
