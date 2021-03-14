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
import { FontAwesome, Entypo } from "@expo/vector-icons";
// import DatePicker from "./../../Components/DatePiker/DatePiker";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const AddDay = (props) => {
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
  
        <Text style={styles._date_show}>Feb 28, 2021</Text>

          <Text style={styles.enter_tally}>Enter Tally</Text>
          <TextInput style={styles._input} />
          <Text style={styles.select_type}>Select Type</Text>

          <View style={styles._buttons_main}>
            {ButtonsValue.map((v, i) => {
              return (
                <TouchableOpacity
                  style={styles._button}
                  onPress={() => setActive(i)}
                  style={
                    active === i
                      ? {          backgroundColor: "#D6DED5",
                      borderRadius: 5,
                      width: 100,
                      paddingTop: 0, }
                      : {   backgroundColor: "white",
                      width: 100,
                      padding: 0,}
                  }
                >
                  <Text style={
                      active === i
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
                    }>{v.value}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <Image
            source={require("./../../images/logo.png")}
            style={styles._logo}
          />
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
    marginLeft: 20,
    marginRight: 20,
  },

  _input: {
    height: 30,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 13,
    borderColor: "#707070",
    borderWidth: 1,
    color: "black",
    width: "50%",
    alignSelf:"center",
    marginTop:20
  },
  _header: {
    flexDirection: "row",
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 10,
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
    marginBottom: 10,
    textAlign: "center",
  },
  _buttons_main: {
    marginTop: 30,
    alignSelf:"center"
  },
  _button: {
    marginBottom: 10,
    borderRadius: 10,
    alignItems: "center",
    paddingBottom: 5,
    paddingTop: 5,
  },
  _button_value: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },
  _logo: {
    width: 169,
    height: 126,
    alignSelf: "center",
    marginTop:30
  },
  _done_btn: {
    alignSelf: "center",
    marginTop: 50,
  },
  _done_btn_text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0D5DE8",
  },
  _date_show:{
    backgroundColor:"#D6DED5",
    fontSize:16,
    color:"#0D5DE8",
    textAlign:"center",
    fontWeight:"bold",
    width:"50%",
    alignSelf:"center",
    borderRadius:5
  },
  enter_tally:{
    fontSize:21,
    fontWeight:"bold",
  color:"black",
textAlign:"center" ,
marginTop:10
 },
 select_type:{
  fontSize:21,
  fontWeight:"bold",
color:"black",
textAlign:"center" ,
marginTop:20
 }
});

export default AddDay;
