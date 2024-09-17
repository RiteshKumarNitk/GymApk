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
import logo from "../../assets/logoossss.png";
import {
  formgroup,
  head1,
  head2,
  label,
  input,
  link,
  link2,
  input1,
  input2,
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
  const Sendtobackend = () => {
    console.log(fdata);
    if (
      fdata.name === "" ||
      fdata.email === "" ||
      fdata.password === "" ||
      fdata.cpassword === "" ||
      fdata.dob === "" ||
      fdata.address === ""
    ) {
      setErrorMsg("All fields are required");
      return;
    } else {
      if (fdata.password != fdata.cpassword) {
        setErrorMsg("Password Must be Same");
        return;
      } else {
        fetch("http://10.0.2.2:3005/SignUp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(fdata),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if(data.error){
              setErrorMsg(data.error);
            }
            else{
              alert('account created Successfull');
              navigation.navigate('Login')
              // navigation.navigate('Welcome')
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
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
            <View style={formgroup}>
              <Text style={label}>Name</Text>
              <TextInput
                style={input1}
                placeholder="Enter your Name"
                onPress={() => {
                  setErrorMsg(null);
                }}
                onChangeText={(text) => setfdata({ ...fdata, name: text })}
              />
            </View>
            <View style={formgroup}>
              <Text style={label}>Email</Text>
              <TextInput
                style={input1}
                placeholder="Enter your Email"
                onPress={() => {
                  setErrorMsg(null);
                }}
                onChangeText={(text) => setfdata({ ...fdata, email: text })}
              />
            </View>
            <View style={formgroup}>
              <Text style={label}>DOB</Text>
              <TextInput
                style={input1}
                placeholder="Enter your dob"
                onPress={() => {
                  setErrorMsg(null);
                }}
                onChangeText={(text) => setfdata({ ...fdata, dob: text })}
              />
            </View>
            <View style={formgroup}>
              <Text style={label}>Password</Text>
              <TextInput
                style={input1}
                placeholder="Enter your Password"
                secureTextEntry={true}
                onPress={() => {
                  setErrorMsg(null);
                }}
                onChangeText={(text) => setfdata({ ...fdata, password: text })}
              />
            </View>
            <View style={formgroup}>
              <Text style={label}>Confirm Password</Text>
              <TextInput
                style={input1}
                placeholder="Confirm your Password"
                secureTextEntry={true}
                onPress={() => {
                  setErrorMsg(null);
                }}
                onChangeText={(text) => setfdata({ ...fdata, cpassword: text })}
              />
            </View>
            <View style={formgroup1}>
              <Text style={label}>Address</Text>
              <TextInput
                style={input2}
                onPress={() => {
                  setErrorMsg(null);
                }}
                placeholder="Enter your Address"
                onChangeText={(text) => setfdata({ ...fdata, address: text })}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                Sendtobackend();
              }}
            >
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
  h2: {
    fontSize: 17,
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
});
