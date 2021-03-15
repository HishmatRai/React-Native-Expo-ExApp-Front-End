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
import { FontAwesome, EvilIcons } from "@expo/vector-icons";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const login = (props) => {
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
          <Text style={styles._login_heading}>Login</Text>
          <Text style={styles._login_sub_heading}>
            Add your details to login
          </Text>

          {/* ---------------------> EMAIL INPUT <--------------------- */}
          <View style={styles._email_input_view}>
            <TextInput style={styles._input} placeholder="Your Email" />
          </View>

          {/* ---------------------> PASSWORD INPUT <--------------------- */}
          <View style={styles._email_input_view}>
            <TextInput
              style={styles._input}
              placeholder="Password"
              secureTextEntry={true}
            />
          </View>

          {/* ---------------------> LOGIN  <--------------------- */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.navigation.navigate("EndofRun")}
          >
            <Text style={styles._button_txt}>login</Text>
          </TouchableOpacity>

          {/* ---------------------> FORGOT PASSOWRD <--------------------- */}
          <TouchableOpacity style={styles._forgot_btn}>
            <Text style={styles._forgot_btn_Text}>Forgot your password?</Text>
          </TouchableOpacity>

          {/* ---------------------> LOGIN IN ANOTHER ACCOUNTS <--------------------- */}
          <Text style={styles._or}>or Login With</Text>

          {/* ---------------------> FACEBOOK <--------------------- */}
          <TouchableOpacity
            style={styles._facebook_button}
            onPress={() => props.navigation.navigate("")}
          >
            <FontAwesome name="facebook-f" size={24} color="white" />
            <Text style={styles.facebook__button_txt}>Login with Facebook</Text>
          </TouchableOpacity>

          {/* ---------------------> GOOGLE <--------------------- */}
          <TouchableOpacity
            style={styles._google_button}
            onPress={() => props.navigation.navigate("")}
          >
            <EvilIcons name="sc-google-plus" size={24} color="white" />
            <Text style={styles.google__button_txt}>Login with Google</Text>
          </TouchableOpacity>

          {/* ---------------------> SIGN UP <--------------------- */}
          <View style={styles._sign_up_main}>
            <Text style={styles._sign_up_text}>Don't have an Account?</Text>
            <TouchableOpacity style={styles._sign_up_button}>
              <Text style={styles._sign_up_button_textF}> Sign Up</Text>
            </TouchableOpacity>
          </View>
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
    margin: 20,
  },
  _login_heading: {
    fontSize: 29,
    marginTop: 30,
    color: "#4A4B4D",
    fontWeight: "bold",
    letterSpacing: 0.5,
    textAlign: "center",
  },
  _login_sub_heading: {
    fontSize: 13,
    color: "#7C7D7E",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  _email_input_view: {
    width: "100%",
    backgroundColor: "#F2F2F2",
    borderRadius: 50,
    marginTop: 30,
    padding: 5,
  },
  _input: {
    // fontWeight: "bold",
    color: "#B6B7B7",
    height: 40,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 13,
  },
  button: {
    backgroundColor: "#0D5DE8",
    borderRadius: 50,
    width: "100%",
    alignSelf: "center",
    marginTop: 30,
  },
  _button_txt: {
    fontWeight: "bold",
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: "center",
    color: "white",
    fontSize: 18,
    letterSpacing: 2,
  },
  _forgot_btn: {
    padding: 10,
    alignSelf: "center",
    alignItems: "center",
  },
  _forgot_btn_Text: {
    fontSize: 13,
    color: "#7C7D7E",
    letterSpacing: 1,
  },
  _or: {
    fontSize: 13,
    color: "#7C7D7E",
    letterSpacing: 1,
    textAlign: "center",
    marginTop: 20,
  },
  _facebook_button: {
    backgroundColor: "#367FC0",
    borderRadius: 50,
    width: "100%",
    alignSelf: "center",
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  facebook__button_txt: {
    color: "white",
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 20,
  },
  _google_button: {
    backgroundColor: "#DD4B39",
    borderRadius: 50,
    width: "100%",
    alignSelf: "center",
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  google__button_txt: {
    color: "white",
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 20,
  },
  _sign_up_main: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  _sign_up_text: {
    fontSize: 13,
    color: "#7C7D7E",
    letterSpacing: 0.5,
  },
  _sign_up_button_textF: {
    color: "#FC6011",
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
});

export default login;
