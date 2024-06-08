import React from 'react';
import { View, Text, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import Styles from '../assets/css/styles';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  const forgotPassword = () => {
    navigation.navigate('Recovery1');
  };

  return (
    <View>
      <Image source={require('../assets/background.png')} style={Styles.background} />
      <Text style={Styles.title}>Bienvenido!</Text>
      <Text style={Styles.subtitle}>Ingresa con tu cuenta</Text>
      <TextInput style={Styles.input} placeholder="multimedios@gmail.com" />
      <TextInput style={Styles.input} placeholder="contraseña" secureTextEntry />
      <TouchableOpacity onPress={forgotPassword}>
        <Text style={Styles.link}>Olvidé mi contraseña</Text>
      </TouchableOpacity>
      <Button title="Login" onPress={() => {}} />
    </View>
  );
}

export default Login;
