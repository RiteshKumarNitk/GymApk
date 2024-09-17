import { View, Text, StyleSheet, Image, TextInput } from "react-native";
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
  errormessage,
} from "../common/formcss";
import { button1 } from "../common/button";

const SignIn = ({ navigation }) => {
  const [fdata, setfdata] = useState({
    email: "",
    password: "",
  });

  const [error, setErrormsg] = useState(null);
  const sendtobackend = () => {
    console.log(fdata);
    if (fdata.email === "" || fdata.password === "") {
      setErrormsg("All fields are required");
      return;
    }
    else{
      fetch("http://10.0.2.2:3005/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fdata),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if(data.error){
            setErrormsg(data.error);
          }
          else{
            // alert('account Login Successfull');
            navigation.navigate('Homepage')
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.patternbg} source={pattern} />
      <View style={styles.container1}>
        <View style={styles.s1}>
          {/* <Image style={styles.logo} source={logo} /> */}
          <Text style={styles.h1}>cult-fitssss</Text>
          <Text style={styles.h2}>eat sleep gym repeat</Text>
        </View>

        <View style={styles.s2}>
          <Text style={head1}>Login</Text>
          <Text style={head2}>Sign in to continue</Text>
          {error ? <Text style={errormessage}>{error}</Text> : null}
          <View style={formgroup}>
            <Text style={label}>Email</Text>
            <TextInput
              style={input}
              placeholder="Enter your email"
              onPress={() => {
                setErrormsg(null);
              }}
              onChangeText={(text) => setfdata({ ...fdata, email: text })}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>Password</Text>
            <TextInput
              secureTextEntry={true}
              placeholder="Enter your Password"
              onPress={() => {
                setErrormsg(null);
              }}
              onChangeText={(text) => setfdata({ ...fdata, password: text })}
              style={input}
            />
          </View>
          <View style={styles.fp}>
            <Text style={link}>forgot password</Text>
          </View>
          <Text style={button1} onPress={sendtobackend}>
            Login
          </Text>
          <Text style={link2}>
            Don't have an account?{" "}
            <Text style={link} onPress={() => navigation.navigate('SignUp')}>
              Create a new account
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

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
  fp: {
    display: "flex",
    alignItems: "flex-end",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  patternbg: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
  },
  head: {
    fontSize: 30,
    color: "#fff",
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
