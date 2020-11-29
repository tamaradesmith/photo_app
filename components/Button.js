import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity style={props.style} onPress={props.clickAction} >
      <Text>{props.buttonText}</Text>
    </TouchableOpacity>
  );
};

export default Button;