import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import pattern from "../../assets/gymperson.jpeg";
import logo from "../../assets/logoossss.png";
import {
  formgroup,
  head1,
  label,
  input,
  errormessage,
  bwmessage,
} from "../common/formcss";
import { button1 } from "../common/button";

const Verification = ({ navigation, route }) => {
  const [error, setErrormsg] = useState(null);
  const [ActualCode, setActualCode] = useState(null);
  const [userCode, setUserCode] = useState("");

  // Extracting udata from route.params
  const { udata } = route.params || {};

  // Get verification code from udata
  const verificationCode =
    udata?.length > 0 ? udata[0]?.verificationCode : null;

  // Set the actual code when the component mounts
  useEffect(() => {
    setActualCode(verificationCode);
  }, [verificationCode]);

  //   const Sendtobackend = () => {
  //     // Check if the userCode is empty
  //     if (!userCode.trim()) {
  //       setErrormsg("Please enter the verification code");
  //       return; // Exit if no code is entered
  //     }

  //     // Validate the code
  //     // Convert ActualCode to string and trim userCode
  //     if (String(ActualCode).trim() === userCode.trim()) {
  //       const fdata = {
  //         email: udata[0]?.email,
  //         password: udata[0]?.password,
  //         name: udata[0]?.name,
  //         dob: udata[0]?.dob,
  //         address: udata[0]?.address,
  //       };

  //       // Correct the URL and send the request to the backend
  //       fetch("http://10.0.2.2:3005/signup", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(fdata),
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           console.log("Backend Response:", data); // Log the full response
  //           if (data.message === "Verification code sent to your email") {
  //             alert(data.message);
  //             navigation.navigate("login");
  //           } else {
  //             alert("Something went wrong !! Try Signing Up Again");
  //           }
  //         })
  //         .catch((err) => {
  //           console.error("Error:", err);
  //           alert("Server error, please try again later.");
  //         });
  //     } else {
  //       setErrormsg("Invalid Verification Code");
  //     }
  //   };
  const Sendtobackend = () => {
    // Check if the userCode is empty
    if (!userCode.trim()) {
      setErrormsg("Please enter the verification code");
      return; // Exit if no code is entered
    }

    // Validate the code
    if (String(ActualCode).trim() === userCode.trim()) {
      const fdata = {
        email: udata[0]?.email,
        password: udata[0]?.password,
        name: udata[0]?.name,
        dob: udata[0]?.dob,
        address: udata[0]?.address,
      };

      // Send the request to the backend
      fetch("http://10.0.2.2:3005/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fdata),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Parsed Data:", data); // Log the full response

          // Handle different backend responses
          if (data.message === "User Registered Successfully") {
            alert(data.message);
            console.log("Parsed Data:", data); // Log the full response
            navigation.navigate("login");
          } else if (data.message === "Verification code sent to your email") {
            console.log("Parsed Data:", data); // Log the full response
            alert(
              "Verification code already sent. Please try registering again."
            );
          } else {
            alert("Something went wrong! Try Signing Up Again");
          }
        })
        .catch((err) => {
          console.error("Error:", err);
          alert("Server error, please try again later.");
        });
    } else {
      setErrormsg("Invalid Verification Code");
    }
  };
  return (
    <View style={styles.container}>
      <Image style={styles.patternbg} source={pattern} />
      <View style={styles.container1}>
        <View style={styles.s1}>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.h1}>cult-fitssss</Text>
          <Text style={styles.h2}>eat sleep gym repeat</Text>
        </View>

        <View style={styles.s2}>
          <Text style={head1}>Verification</Text>
          <Text style={bwmessage}>A code has been sent to your email</Text>

          {error ? <Text style={errormessage}>{error}</Text> : null}

          <View style={formgroup}>
            <Text style={label}>Code</Text>
            <TextInput
              style={input}
              placeholder="Enter 6 digit Verification Code"
              keyboardType="numeric"
              onChangeText={(text) => setUserCode(text)}
              onFocus={() => setErrormsg(null)}
            />
          </View>

          <Text style={button1} onPress={Sendtobackend}>
            Verify
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Verification;

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
  h2: {
    fontSize: 17,
    color: "#FFF",
  },
  s2: {
    flex: 1,
    backgroundColor: "#A3EC3E",
    padding: 20,
    width: "100%",
    height: "100%",
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
  logo: {
    width: 200,
    height: 200,
    borderRadius: 150,
    shadowOffset: 5,
  },
});
