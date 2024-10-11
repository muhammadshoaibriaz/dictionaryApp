import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./pages/Splash";
import CreateAccount from "./pages/CreateAccount";
import ForgotPassword from "./pages/ForgotPassword";
import SignUp from "./pages/SignUp";
import MPin from "./pages/MPin";
import ResetPassword from "./pages/ResetPassword";

const Stack = createNativeStackNavigator();

export default function DocNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash}></Stack.Screen>
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
        ></Stack.Screen>
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
        ></Stack.Screen>
        <Stack.Screen name="MPin" component={MPin}></Stack.Screen>
        <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
