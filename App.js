import React, { useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';

import Logo from './assets/ifit.png';

export default function App() {

  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();

  function calculaImc(height, weight) {
    const IMC = weight / (height * height);
    
    Alert.alert('Seu IMC é de', `${IMC}.`,[{
      text:"Estou feliz", 
      onPress:()=>[]
    },
    {
    text:"Estou irritado",
    onPress:()=>[]
  }
  ])
  } 


  return (
    //container pai
    <View style={style.container}>
      <Image source={Logo} style={style.logo} />
      <Text style={style.textWelcome}>Welcome to IFIT</Text>
      <Text style={style.textInfo}>Let´s get your height and your weight to know how to help you</Text>

      <View style={style.textInputContainer}>
        <TextInput
          value={height}
          onChangeText={(text) => setHeight(text)}
          placeholder="height"
          style={style.textInput}

        />
        <TextInput
          value={weight}
          onChangeText={(text) => setWeight(text)}
          placeholder="weight"
          style={style.textInput} />

      </View>
      <TouchableOpacity style={style.buttom} activeOpacity={0.8}
        onPress={()=> calculaImc(height, weight)}
      >
        <Text style={style.buttomTitle}>Calcular</Text>
      </TouchableOpacity>

      <Text ></Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AFCBF4",
    alignItems: "center",
    justifyContent: "center"
  },

  textInputContainer: {
    paddingTop: 10
  },

  logo: {
    width: 120,
    height: 120,
  },
  textWelcome: {
    marginTop: 25,
    color: "#fff",
    fontSize: 25
  },

  textInfo: {
    marginTop: 50,
    color: "#fff",
    fontSize: 20,
    textAlign: "center"
  },

  textInput: {
    backgroundColor: "#fff",
    height: 50,
    width: 300,
    paddingLeft: 15,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 10,
    marginTop: 15

  },

  resultado:{
    backgroundColor: "#fff",
    height: 50,
    width: 300,
    paddingLeft: 15,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 10,
    marginTop: 15
  },

  buttom: {
    backgroundColor: "#e32",
    width: 150,
    height: 50,
    marginTop: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent:"center"
  },

  buttomTitle: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: 'bold',

  }

});