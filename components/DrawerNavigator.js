import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { Component } from "react";
import { Text, View } from "react-native";
import Search from "./screens/Search";
import Results from "./screens/Results";
import { StackNavigator } from "./StackNavigator";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Search">
      <Drawer.Screen name="Search" component={Search}></Drawer.Screen>
      <Drawer.Screen name="Results" component={Results}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default { DrawerNavigator };
