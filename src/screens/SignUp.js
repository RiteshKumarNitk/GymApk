import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import pattern from "../../assets/gymperson.jpeg";
import {
  formgroup,
  head1,
  link,
  link2,
  input1,
  formgroup1,
  errormessage,
} from "../common/formcss";
import { button1 } from "../common/button";

const SignUp = ({ navigation }) => {
  const [fdata, setfdata] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    dob: "",
    address: "",
  });
  const [error, setErrorMsg] = useState(null);

  // In the SignUp component
  const Sendtobackend = () => {
    // existing code...
    fetch("http://10.0.2.2:3005/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fdata),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Parsed Data:", data);
        if (data.error === "Invalid Credentials") {
          setErrorMsg("invalid credentials");
        } else if (data.message === "Verification code sent to your email") {
          alert(data.message);
          navigation.navigate("verification", { userdata: data.udata || [] });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.patternbg} source={pattern} />
      <View style={styles.container1}>
        <View style={styles.s1}>
          <Text style={styles.h1}>cult-fit</Text>
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.s2}>
            <Text style={head1}>Create a New Account</Text>
            <Text style={link2}>
              Already Registered?{" "}
              <Text style={link} onPress={() => navigation.navigate("SignIn")}>
                Login here
              </Text>
            </Text>

            {error ? <Text style={errormessage}>{error}</Text> : null}

            {/* Name Field */}
            <View style={formgroup}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={input1}
                placeholder="Enter your Name"
                onFocus={() => setErrorMsg(null)}
                onChangeText={(text) => setfdata({ ...fdata, name: text })}
              />
            </View>

            {/* Email Field */}
            <View style={formgroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={input1}
                placeholder="Enter your Email"
                onFocus={() => setErrorMsg(null)}
                onChangeText={(text) => setfdata({ ...fdata, email: text })}
              />
            </View>

            {/* DOB Field */}
            <View style={formgroup}>
              <Text style={styles.label}>DOB</Text>
              <TextInput
                style={input1}
                placeholder="Enter your DOB"
                onFocus={() => setErrorMsg(null)}
                onChangeText={(text) => setfdata({ ...fdata, dob: text })}
              />
            </View>

            {/* Password Field */}
            <View style={formgroup}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={input1}
                placeholder="Enter your Password"
                secureTextEntry={true}
                onFocus={() => setErrorMsg(null)}
                onChangeText={(text) => setfdata({ ...fdata, password: text })}
              />
            </View>

            {/* Confirm Password Field */}
            <View style={formgroup}>
              <Text style={styles.label}>Confirm Password</Text>
              <TextInput
                style={input1}
                placeholder="Confirm your Password"
                secureTextEntry={true}
                onFocus={() => setErrorMsg(null)}
                onChangeText={(text) => setfdata({ ...fdata, cpassword: text })}
              />
            </View>

            {/* Address Field */}
            <View style={formgroup1}>
              <Text style={styles.label}>Address</Text>
              <TextInput
                style={input1}
                onFocus={() => setErrorMsg(null)}
                placeholder="Enter your Address"
                onChangeText={(text) => setfdata({ ...fdata, address: text })}
              />
            </View>

            {/* Sign Up Button */}
            <TouchableOpacity onPress={Sendtobackend}>
              <Text style={button1}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  s1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  h1: {
    fontSize: 30,
    color: "#FFF",
  },
  s2: {
    flex: 4,
    padding: 15,
    width: "100%",
    bottom: 0,
  },
  scrollView: {
    backgroundColor: "#A3EC3E",
    flexGrow: 1,
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  patternbg: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
  },
  container1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  label: {
    fontSize: 16,
    color: "#333",
  },
});
