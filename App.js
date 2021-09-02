import React, {useEffect, useState} from 'react';
import { 
  View, 
  Text, 
  TextInput,
  TouchableOpacity,
  Image, 
  StyleSheet,
  Alert,
  KeyboardAvoidingView
} from 'react-native';

import ActionButton from './components/actionButton';

import Logo from './assets/ifit.png';

export default function App(){
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();

  const [imc, setImc] = useState();

  useEffect(() => {
    imc;
  });

  function calculateIMC(height, weight){
    const IMC = weight/(height*height);
    
    Alert.alert('IMC', `Seu IMC é de ${IMC}.`,
    [
      {
        text:'Estou feliz', 
        onPress: ()=>[]
      },
      {
        text:'Estou irritado',
        onPress: ()=>[]
      }
    ]
    );

    setImc(IMC);
  }

  return(
    // Container pai
    <View style={style.container}>
      <Image source={Logo} style={style.logo}/>
      <Text style={style.welcomeText}>Bem-vindo(a) ao Ifit!</Text>
      <Text style={style.infoText}>Vamos ver sua altura e seu peso para saber como te ajudar!</Text>
      {/* Text Input Container */}
      <KeyboardAvoidingView style={{alignItems: 'center'}}>
        <View style={style.textInputContainer}>
          <TextInput
            value={height}
            onChangeText={(text) => setHeight(text)}
            placeholder="Height"
            style={style.textInput}
          />
          <TextInput
            value={weight}
            onChangeText={(text) => setWeight(text)}
            placeholder="Weight"
            style={style.textInput}
          />
        </View>
        <ActionButton
          title="Calcular"
          opacity={1}
          press={()=>calculateIMC(height, weight)}
        />
        <Text>{imc}</Text>
      </KeyboardAvoidingView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#393F7A',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInputContainer: {
    paddingTop: 10
  },
  logo:{
    width: 120,
    height: 120,
  },
  welcomeText:{
    marginTop:25,
    color:'#fff',
    fontSize: 25,
    fontWeight:"bold"
  },
  infoText:{
    color:'#fff',
    fontSize: 20,
    textAlign:'center',
    marginTop: 50,
    width:300,
    fontWeight:"bold"
  },
  textInput:{
    backgroundColor:"#fff",
    height: 50,
    width: 300,
    borderBottomWidth: 1,
    borderRadius: 10,
    borderColor: '#fff',
    paddingLeft: 15,
    marginTop: 15
  }
});