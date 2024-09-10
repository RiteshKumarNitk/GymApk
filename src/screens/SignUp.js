import { View, Text, StyleSheet, Image, TextInput, ScrollView } from "react-native";
import React from "react";
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
  formgroup1
} from "../common/formcss";
import { button1 } from "../common/button";

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.patternbg} source={pattern} />
      <View style={styles.container1}>
        <View style={styles.s1}>
          <Text style={styles.h1}>cult-fit</Text>
          {/* <Text style={styles.h2}>eat sleep gym repeat</Text> */}
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.s2}>
            <Text style={head1}>Create a New Account</Text>
            <Text style={link2}>
              Already Registered? <Text style={link} onPress={()=>navigation.navigate('Login')}>Login here</Text>
            </Text>
            <View style={formgroup}>
              <Text style={label}>Name</Text>
              <TextInput style={input1} placeholder="Enter your Name" />
            </View>
            <View style={formgroup}>
              <Text style={label}>Email</Text>
              <TextInput style={input1} placeholder="Enter your Email" />
            </View>
            <View style={formgroup}>
              <Text style={label}>DOB</Text>
              <TextInput style={input1} placeholder="Enter your DOB"/>
            </View>
            <View style={formgroup}>
              <Text style={label}>Password</Text>
              <TextInput style={input1} placeholder="Enter your Password" />
            </View>
            <View style={formgroup}>
              <Text style={label}>Confirm Password</Text>
              <TextInput style={input1} placeholder="Confirm your Password" />
            </View>
            <View style={formgroup1}>
              <Text style={label}>Address</Text>
              <TextInput style={input2} placeholder="Enter your Address"/>
            </View>

            <Text style={button1}>Sign Up</Text>
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
    flex:4,
    padding: 15,
    width: "100%",
 
    bottom: 0,
},
scrollView: {
    backgroundColor: "#A3EC3E",
    flexGrow: 1,
    width:"100%",
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
