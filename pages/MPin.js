import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { Component, useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from "react-native";

export default function MPin() {
  const navigation = useNavigation();
  let [timer, setTimer] = useState(60);
  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer == 0) {
        clearInterval(() => interval);
      } else {
        setTimer(timer - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   //Implementing the setInterval method
  //   const interval = setInterval(() => {
  //     setCount(count + 1);
  //   }, 1000);

  //   //Clearing the interval
  //   return () => clearInterval(interval);
  // }, [count]);
  return (
    <View style={{ flex: 1, paddingHorizontal: 14 }}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backArrow}
          onPress={() => navigation.replace("SignUp")}
        >
          <AntDesign name="arrowleft" size={18} />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: "MontserratMedium",
            fontSize: 16,
            marginRight: 20,
          }}
        >
          Confirm your number{" "}
        </Text>
        <Text> </Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
          marginTop: 10,
        }}
      >
        <View>
          <Text style={{ fontSize: 16, fontFamily: "MontserratRegular" }}>
            Enter the 4-digit code we sent over SMS to "{"03425016476"}"
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              margin: 4,
              marginTop: 40,
            }}
          >
            <TextInput
              ref={ref1}
              value={pin1}
              autoComplete="sms-otp"
              onChangeText={(val) => {
                setPin1(val);
                if (pin1 != "null") {
                  ref2.current.focus();
                }
              }}
              maxLength={1}
              style={styles.input}
            />
            <TextInput
              ref={ref2}
              value={pin2}
              onChangeText={(val) => {
                setPin2(val);
                if (pin2 != "") {
                  ref3.current.focus();
                }
              }}
              autoComplete="sms-otp"
              maxLength={1}
              style={styles.input}
            />
            <TextInput
              ref={ref3}
              value={pin3}
              onChangeText={(val) => {
                setPin3(val);
                if (pin3 != "") {
                  ref4.current.focus();
                }
              }}
              autoComplete="sms-otp"
              maxLength={1}
              style={styles.input}
            />
            <TextInput
              ref={ref4}
              value={pin4}
              onChangeText={(val) => {
                setPin4(val);
              }}
              autoComplete="sms-otp"
              maxLength={1}
              style={styles.input}
            />
          </View>
          <View>
            <Text style={{ color: "teal", fontFamily: "MontserratMedium" }}>
              Send again after{" "}
              {timer > 0 ? (
                timer + "s"
              ) : (
                <Text onPress={() => setTimer(60)} style={{ color: "red" }}>
                  Resend OTP
                </Text>
              )}
            </Text>
          </View>
        </View>
        <View>
          <TouchableHighlight
            style={styles.continue}
            onPress={() => navigation.replace("AppNavigator")}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 16,
                fontFamily: "MontserratMedium",
              }}
            >
              Verify
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 50,
    height: 50,
    borderRadius: 10,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    margin: 4,
    fontSize: 18,
    fontFamily: "MontserratRegular",
  },
  header: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backArrow: {
    width: 40,
    height: 40,
    justifyContent: "center",
  },
  continue: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    backgroundColor: "teal",
    borderRadius: 6,
    bottom: 10,
  },
});
