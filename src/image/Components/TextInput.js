import React from 'react';
import {TextInput } from 'react-native';

const Input = (props) => (
  <TextInput
  placeholder={props.placeholder}
  secureTextEntry={props.secureTextEntry}
  style={[{width:300,
          height:50,
          backgroundColor:'#ededed',
          borderWidth:0.5,
          borderColor:"gray",
          borderRadius:7,
          paddingLeft:7,
          marginBottom:20},props.style]}/>
);

export default Input;
