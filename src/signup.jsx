import React from "react";
import { View, Text, Image, TextInput , TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Styles from "../assets/css/styles";

const Signup = () => {
  const navigation = useNavigation();
  
  const signup = () => {
   navigation.navigate('Signup');
  }
  const recovery1 = () => {
    navigation.navigate('Recovery1');
  }
  return (
    <View>
      <Image source={require('../assets/background.png')} style={Styles.background} />
      <Text style={Styles.title}>Crear cuenta</Text>
      <Text style={Styles.subtitle}>Ingrese los datos solicitados</Text>
      <TextInput style={Styles.input} placeholder="Nombre completo" />
      <TextInput style={Styles.input} placeholder="Correo electrónico" />
      <TextInput style={Styles.input} placeholder="Contraseña" />
      <TouchableOpacity onPress={signup}>
        <Text style={Styles.link}>Iniciar sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={{}} style={Styles.buttonContainer}>
        <Text style={Styles.button}>Registrate</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={recovery1}>
        <Text style={Styles.linkAux}>Ya tiene cuenta</Text>
        <Text style={Styles.linkAux1}>¿Has olvidado su contraseña?</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Signup;
