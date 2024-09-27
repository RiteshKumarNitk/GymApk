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
  const [error, setErrormsg] = useState(null);

  // In the SignUp component
  const Sendtobackend = async () => {
    if (
      fdata.name === "" ||
      fdata.email === "" ||
      fdata.password === "" ||
      fdata.cpassword === "" ||
      fdata.dob === "" ||
      fdata.address === ""
    ) {
      setErrormsg("All fields are required");
      return;
    } else {
      if (fdata.password !== fdata.cpassword) {
        setErrormsg("Password and Confirm Password must be the same");
        return;
      } else {
        try {
          const response = await fetch("http://10.0.2.2:3005/verify", {  // Corrected URL
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(fdata),
          });
  
          // Check if the response status is okay (200-299)
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          // Try to parse the JSON response
          const data = await response.json();
          console.log("Server response:", data);
  
          if (data.error === "Invalid Credentials") {
            setErrormsg("Invalid Credentials");
          } else if (data.message === "Verification Code Sent to your Email") {
            alert(data.message);
            navigation.navigate("Verification", { userdata: data.udata });
          } else {
            setErrormsg("Unexpected response from server");
          }
        } catch (error) {
          console.error("Error during signup process:", error);
          if (error.name === 'SyntaxError') {
            setErrormsg("Invalid JSON response from the server");
          } else {
            setErrormsg("An error occurred. Please try again.");
          }
        }
      }
    }
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
                onFocus={() => setErrormsg(null)}
                onChangeText={(text) => setfdata({ ...fdata, name: text })}
              />
            </View>

            {/* Email Field */}
            <View style={formgroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={input1}
                placeholder="Enter your Email"
                onFocus={() => setErrormsg(null)}
                onChangeText={(text) => setfdata({ ...fdata, email: text })}
              />
            </View>

            {/* DOB Field */}
            <View style={formgroup}>
              <Text style={styles.label}>DOB</Text>
              <TextInput
                style={input1}
                placeholder="Enter your DOB"
                onFocus={() => setErrormsg(null)}
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
                onFocus={() => setErrormsg(null)}
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
                onFocus={() => setErrormsg(null)}
                onChangeText={(text) => setfdata({ ...fdata, cpassword: text })}
              />
            </View>

            {/* Address Field */}
            <View style={formgroup1}>
              <Text style={styles.label}>Address</Text>
              <TextInput
                style={input1}
                onFocus={() => setErrormsg(null)}
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
