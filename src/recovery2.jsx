import React from "react";
import {Image, View, Text, TextInput, TouchableOpacity } from "react-native";
import Styles from "../assets/css/styles";

import { useNavigation } from "@react-navigation/native";

const Recovery2 = () => {
 const navigation = useNavigation();
  const signup = () => {
    navigation.navigate('Signup');
  };

  return (
    <View>
      <Image source={require('../assets/background.png')} style={Styles.background} />
      <Text style={Styles.title}>Recuperar cuenta</Text>
      <Text style={Styles.subtitle}>Recuperar su cuenta</Text>
      <TextInput style={Styles.input} placeholder="Contraseña nueva" />
      <TextInput style={Styles.input} placeholder="Confirmar contraseña" />
      <TouchableOpacity onPress={signup}>
        <Text style={Styles.link}>Iniciar sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={{}} style={Styles.buttonContainer}>
        <Text style={Styles.button}>Reestablecer</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={signup}>
        <Text style={Styles.linkAux}>¿No tienes una cuenta?</Text>
        <Text style={Styles.linkAux1}>Regístrate</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Recovery2;
