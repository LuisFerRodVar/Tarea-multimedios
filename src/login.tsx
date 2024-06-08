import React from "react";
import { View, Text, Button, Image, TextInput } from "react-native";
import Styles from "../assets/css/styles";

function Login() {
  return (
    <View>
      <Image source={require('../assets/background.png')} style={Styles.background} />
      <Text style={Styles.title}>Bienvenido!</Text>
      <Text style={Styles.subtitle}>Ingresa con tu cuenta</Text>
      <TextInput style={Styles.input} placeholder="Correo" />
      <TextInput style={Styles.input} placeholder="contraseña" />
      <Button title="Login" onPress={() => {}} />
    </View>
  );
}
export default Login;
