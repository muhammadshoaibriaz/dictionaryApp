import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  ScrollView,
  View,
} from "react-native";

export default function CreateAccount() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 14,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        // source={require("../../assets/images/logo.png")}
        style={styles.image}
      />
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "MontserratRegular",
            marginBottom: 2,
            fontSize: 16,
          }}
        >
          Welcome to
        </Text>
        <Text
          style={{
            fontFamily: "MontserratBold",
            fontSize: 34,
            marginBottom: 20,
          }}
        >
          HotDoc
        </Text>
      </View>
      <TouchableHighlight
        underlayColor="#eee"
        style={[styles.continue, { backgroundColor: "white" }]}
        onPress={() => navigation.replace("SignUp")}
      >
        <Text
          style={{
            color: "#111",
            fontSize: 16,
            fontFamily: "MontserratMedium",
          }}
        >
          Sign Up
        </Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.continue}
        onPress={() => navigation.replace("Login")}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
            fontFamily: "MontserratMedium",
          }}
        >
          Sign In
        </Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 240,
    height: 240,
    resizeMode: "cover",
    // tintColor: "black",
    borderRadius: 100,
    alignSelf: "center",
  },
  continue: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    backgroundColor: "teal",
    borderRadius: 6,
    marginTop: 20,
    width: "60%",
  },
  input: {
    width: "100%",
    height: 34,
    borderRadius: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    fontSize: 14,
    fontFamily: "MontserratRegular",
  },
  label: {
    flexDirection: "row",
    alignItems: "center",
  },
});
