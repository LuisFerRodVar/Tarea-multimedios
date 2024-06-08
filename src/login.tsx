import React from "react";
import { View, Text, Button } from "react-native";

const helloWorld = () => {
  console.log("Hello World")
  return <Text>Hello World</Text>;
}

function Login() {
  return (
    <View>
      <Text>Login</Text>
      <Button title="Login" onPress={() => {helloWorld}} />
    </View>
  );
}
export default Login;
