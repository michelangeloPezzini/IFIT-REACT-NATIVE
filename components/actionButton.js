import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ActionButton({title, opacity, press}){
  return(
    <TouchableOpacity 
      style={style.button} 
      activeOpacity={opacity}
      onPress={press}
    >
      <Text style={style.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  button: {
    backgroundColor: '#e06',
    width: 160,
    height: 50,
    marginTop: 15,
    borderRadius: 10,
    alignItems: 'center',
    paddingTop: 10
  },
  buttonTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  }
})