import { View, Text, StyleSheet, Image, TextInput, ScrollView } from "react-native";
import React from "react";
import pattern from "../../assets/gymperson.jpeg";
import logo from "../../assets/logoossss.png";
import { formgroup, head1, head2,label,input,link,link2 } from "../common/formcss";
import { button1 } from "../common/button";


const SignIn = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Image style={styles.patternbg} source={pattern} />
    <View style={styles.container1}>
      <View style={styles.s1} >
        <Image style={styles.logo} source={logo}  />
        <Text style={styles.h1} onPress={()=>navigation.navigate('Welcome')}>cult-fit</Text>
        <Text style={styles.h2}>eat sleep gym repeat</Text>
      </View>
      <ScrollView style={styles.s2}>
        <Text style={head1}>Login</Text>
        <Text style={head2}>Sign in to continue</Text>
        <View style={formgroup }>
          <Text style={label}>Email</Text>
          <TextInput style={input} placeholder="Confirm your Email"  />
        </View>
        <View style={formgroup}>
          <Text style={label}>Password</Text>
          <TextInput style={input} placeholder="Confirm your Password"  />
        </View>
        <View style={styles.fp}>
          <Text style={link}>forgot password</Text>
        </View>
        <Text style={button1}> Login</Text>
        <Text style={link2}> Don't have an account? <Text style={link} onPress={()=>navigation.navigate('SignUp')}>Create a new account</Text></Text>
      </ScrollView>
    </View>
  </View>
  )
}

export default SignIn

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
      fontWeight:"700",
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
    fp:{
      display:"flex",
      alignItems:"flex-end",
      marginHorizontal:10,
      marginVertical:5,
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
      // opacity:".2",
      // backgroundColor:"#CC000000",
      height: "100%",
    },
    logo: {
      width: 200,
      height: 200,
      borderRadius: 150,
      shadowOffset: 5,
    },
  });
  