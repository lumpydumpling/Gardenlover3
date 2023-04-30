import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Build your garden bed! Use the arrow keys on your keyboard to change the size of the box.

The up and down arrow keys will change the height of the box.

The left and right arrow keys will change the width of the box.</Text>
      <Button
        title="Choose plants"
        onPress={() => navigation.navigate('Other')}
        color="green"
      />
    </View>
  );
}
