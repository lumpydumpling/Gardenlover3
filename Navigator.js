// Navigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';
import Settings from './Settings';

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
