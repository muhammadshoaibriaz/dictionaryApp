import React, { Component } from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../components/screens/Search";
import Results from "../components/screens/Results";
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen name="Search" component={Search}></Stack.Screen>
      <Stack.Screen name="Results" component={Results}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default { StackNavigator };
