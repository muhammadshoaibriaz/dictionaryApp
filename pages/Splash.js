import { useFonts } from "expo-font";
import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
export default function Splash() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={require("../images/logo.png")}
        style={{ width: 300, height: 200 }}
        resizeMode="contain"
      />
      <Text
        style={{
          fontSize: 20,
          fontFamily: "MontserratBold",
          marginTop: 10,
        }}
      >
        {" "}
        HotDoc{" "}
      </Text>
    </View>
  );
}
