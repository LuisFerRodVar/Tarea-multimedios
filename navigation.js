import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/login';
import Recovery1 from './src/recovery1';
import Recovery2 from './src/recovery2';
import Signup from './src/signup';


const stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="login" component={Login} />
        <stack.Screen name="recovery1" component={Recovery1} />
        <stack.Screen name="recovery2" component={Recovery2} />
        <stack.Screen name="signup" component={Signup} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
