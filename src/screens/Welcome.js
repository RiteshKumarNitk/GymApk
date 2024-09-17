import { View, Text,StyleSheet ,Image} from 'react-native'
import React from 'react'
import pattern from "../../assets/gymperson.jpeg"
import welcomelogo from "../../assets/logoossss.png"
import { button1 } from '../common/button'

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.patternbg} source={pattern} />
      <View style={styles.container1}>
        <Image style={styles.logo} source={welcomelogo} />
        <Text style={button1} onPress={()=>navigation.navigate('SignIn')}>Login </Text>
        <Text style={button1} onPress={()=>navigation.navigate('SignUp')}>Sign Up</Text>
      </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
    },
    patternbg:{
        position:"absolute",
        top:0,
        width:'100%',
        height:"100%"
       
    },
    head:{
       fontSize:30,
       color:"#fff",
    },
    container1:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",

        // opacity:".2",
        // backgroundColor:"#CC000000",
        height:"100%"
    },
    logo:{
        width:200,
        height: 200,
        borderRadius:150,
        shadowOffset:5
    }
})