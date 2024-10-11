import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signInWithPhoneNumber,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { Component, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  ScrollView,
  View,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { auth } from "../firebase/firebase";
export default function Signup() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const handleSignUp = () => {
    if (!name || !email || !password || !phone) {
      ToastAndroid.show("Please enter details to create account!");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((credential) => {
          console.log(credential);
          if (credential.user.email) {
            ToastAndroid.show("This email is already registered", 3000);
          }
          sendEmailVerification(credential.user.email);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
  // const formData = {
  //   fullName: name,
  //   email: email,
  //   password: password,
  // };
  // saveFormData(formData);
  // function saveFormData(formData) {
  //   const storedFormData = JSON.parse(AsyncStorage.getItem("formData")) || [];
  //   storedFormData.push(formData);
  //   AsyncStorage.setItem("formData", JSON.stringify(storedFormData));
  // }
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 14,
      }}
      showsVerticalScrollIndicator={false}
    >
      <Image
        source={require("../../assets/images/logo.png")}
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
          }}
        >
          Welcome to
        </Text>
        <Text
          style={{
            fontFamily: "MontserratBold",
            fontSize: 24,
            marginBottom: 20,
          }}
        >
          HotDoc
        </Text>
      </View>
      <View style={{ width: "100%" }}>
        <View style={{ marginBottom: 14 }}>
          <View style={styles.label}>
            <Feather name="mail" size={18} color="teal" />
            <Text style={{ fontFamily: "MontserratMedium", marginLeft: 4 }}>
              Email
            </Text>
          </View>
          <TextInput
            value={email}
            keyboardType="email-address"
            onChangeText={(value) => setEmail(value)}
            placeholder="shabii@gmail.com"
            style={styles.input}
          />
        </View>
        <View style={{ marginBottom: 14 }}>
          <View style={styles.label}>
            <Feather name="user" size={18} color="teal" />
            <Text style={{ fontFamily: "MontserratMedium", marginLeft: 4 }}>
              Name
            </Text>
          </View>
          <TextInput
            value={name}
            onChangeText={(value) => setName(value)}
            keyboardType="default"
            placeholder="Enter your full name"
            style={styles.input}
          />
        </View>
        <View style={{ marginBottom: 14 }}>
          <View style={styles.label}>
            <Feather name="phone-call" size={18} color="teal" />
            <Text style={{ fontFamily: "MontserratMedium", marginLeft: 4 }}>
              Phone number
            </Text>
          </View>
          <TextInput
            value={phone}
            onChangeText={(value) => setPhone(value)}
            placeholder="+92 Enter your phone number"
            style={styles.input}
          />
        </View>
        <View style={{ marginBottom: 14 }}>
          <View style={styles.label}>
            <Feather name="lock" size={18} color="teal" />
            <Text style={{ fontFamily: "MontserratMedium", marginLeft: 4 }}>
              Password
            </Text>
          </View>
          <TextInput
            value={password}
            secureTextEntry={true}
            onChangeText={(value) => setPassword(value)}
            placeholder="Enter password"
            style={styles.input}
          />
        </View>
      </View>

      <View
        style={{
          width: "100%",
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            color: "gray",
            width: "100%",
            marginBottom: 5,
            fontFamily: "MontserratRegular",
          }}
        >
          Using this app implies your agreement to HotDoc's:
        </Text>
        <Text style={{ color: "teal", fontFamily: "MontserratRegular" }}>
          Terms of Service
        </Text>
        <Text
          style={{
            marginBottom: 10,
            marginTop: 10,
            fontFamily: "MontserratRegular",
          }}
        >
          Your information is kept confidential and never shared without consent
        </Text>
        <TouchableHighlight
          style={styles.continue}
          onPress={() => {
            if (email && password) {
              navigation.replace("MPin");
            }
            handleSignUp();
            saveFormData();
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              fontFamily: "MontserratMedium",
            }}
          >
            Send Verification Code
          </Text>
        </TouchableHighlight>
        <TouchableOpacity
          style={{ alignSelf: "center", paddingBottom: 10 }}
          onPress={() => {
            navigation.replace("Login");
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: "MontserratMedium",
            }}
          >
            Already have an account?{" "}
            <Text style={{ color: "teal" }}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 140,
    height: 140,
    borderRadius: 100,
    alignSelf: "center",
    marginTop: 40,
  },
  continue: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    backgroundColor: "teal",
    borderRadius: 6,
    marginTop: 20,
    bottom: 10,
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
