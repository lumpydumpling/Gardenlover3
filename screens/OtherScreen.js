import React from 'react';
import { View, Text, Button } from 'react-native';

export default function OtherScreen({ navigation }) {
  return (
    <View>
      <Text>Welcome to the Other Screen!</Text>
      <Button
        title="Home"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
