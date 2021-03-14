import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  LogIn,
  AddDay,
  Profile,
  Run,
  EndofRun,
  History,
} from "./../Screens/index";

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="AddDay"
          component={AddDay}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        /> */}
         <Stack.Screen
          name="Run"
          component={Run}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="EndofRun"
          component={EndofRun}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="History"
          component={History}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
