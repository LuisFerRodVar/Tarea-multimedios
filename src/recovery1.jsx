import React from "react";
import {Image, View, Text , TextInput , TouchableOpacity} from "react-native";
import Styles from "../assets/css/styles"
import { useNavigation } from "@react-navigation/native";

const Recovery1 = () => {
  const navigation = useNavigation();
  const signup = () => {
    navigation.navigate('Signup');
  };
  const recovery2 = () => {
   navigation.navigate('Recovery2');
  };

  return (
    <View>
      <Image source={require('../assets/background.png')} style={Styles.background} />
      <Text style={Styles.title}>Recuperar cuenta</Text>
      <Text style={Styles.subtitle}>Ingrese su correo electrónico para recuperar cuenta</Text>
      <TextInput style={Styles.input} placeholder="multimedios@gmail.com" />
      <TouchableOpacity onPress={signup}>
        <Text style={Styles.link}>Iniciar sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={recovery2} style={Styles.buttonContainer}>
        <Text style={Styles.button}>Continuar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={signup}>
        <Text style={Styles.linkAux}>¿No tienes una cuenta?</Text>
        <Text style={Styles.linkAux1}>Regístrate</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Recovery1;
