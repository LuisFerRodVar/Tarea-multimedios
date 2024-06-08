import React from 'react';
import { View, Text, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import Styles from '../assets/css/styles';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  const forgotPassword = () => {
    navigation.navigate('Recovery1');
  };
  const signup = () => {
   navigation.navigate('Signup');
  }

  return (
    <View>
      <Image source={require('../assets/background.png')} style={Styles.background} />
      <Text style={Styles.title}>Bienvenido!</Text>
      <Text style={Styles.subtitle}>Ingresa con tu cuenta</Text>
      <TextInput style={Styles.input} placeholder="multimedios@gmail.com" />
      <TextInput style={Styles.input} placeholder="contraseña" secureTextEntry />
      <TouchableOpacity onPress={forgotPassword}>
        <Text style={Styles.link}>¿Has olvidado su contraseña?</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => {}} style={Styles.buttonContainer}>
        <Text style={Styles.button}>Iniciar Sesión</Text>
      </TouchableOpacity>      
      <TouchableOpacity onPress={signup}>
        <Text style={Styles.linkAux}>¿No tienes una cuenta?</Text>
        <Text style={Styles.linkAux1}>Regístrate</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
