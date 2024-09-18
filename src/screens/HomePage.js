import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { button1 } from '../common/button'
import { head1 } from '../common/formcss'

const HomePage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={head1}>This is home page</Text>
      <Text style={button1} onPress={()=>{
         navigation.navigate('SignIn')
      }}>
        logout
      </Text>
    </View>
  )
}

export default HomePage
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})