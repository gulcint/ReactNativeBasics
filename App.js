import React, {Component} from "react";
import {View, Text, Image, SafeAreaView,TextInput} from "react-native"; 
import Input from "./src/image/Components/TextInput";

export default class App extends Component{

  render(){
  
    return(
      <SafeAreaView
      style={{flex:1,}}>  

      {/*Logo image*/}
      <View style={[styles.subContainer,{flex:2}]}>
        <Image 
        source={require('./src/image/logo.png')}
        style ={styles.logo}    
        ></Image>
      </View>

      {/* Form */}
      <View style={[styles.subContainer,{flex:3}]}>

      <Input
        placeholder={"Phone number, username or  email"}/>
      <Input placeholder={"Password"}
             secureTextEntry={true}/>

      </View>

      {/* Login with Facebook */}
      <View style={[styles.subContainer,{flex:0.5,borderTopWidth:0.5,borderTopColor:"gray",flexDirection:"row"}]}>

      <Image 
      source={require('./src/image/facebook.png')}
      style ={styles.facebook_logo}    
      ></Image>
      <Text style={[styles.blueText,{fontSize:18,marginLeft:15}]}> Login with Facebook</Text>
      
      </View>

      {/* Bottom */}
      <View style={[styles.subContainer,{flex:0.5,borderTopWidth:0.5,borderTopColor:"gray"}]}>
        <Text style={styles.mainText}>Don't have an account?</Text>
        <Text style={styles.blueText}> Sign up</Text>
      </View>
      </SafeAreaView>
    )
  }
}

const styles = {
  mainText:{color:"gray"},
  blueText:{color:"#4495cb",fontWeight:"bold"},
  subContainer: {alignItems:"center",justifyContent:"center"},
  logo:{width:200,height:100},
  facebook_logo:{width:30,height:30}
}