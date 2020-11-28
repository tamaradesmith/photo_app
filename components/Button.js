import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';


const Button = (props) => {
  return (
    <TouchableOpacity style={props.style} onPress={props.clickAction} >
      <Text>Click to Reorder</Text>
    </TouchableOpacity>
  );
};

export default Button;