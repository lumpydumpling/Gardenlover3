import React, { useState } from 'react';
import { View, Text, Button, PanResponder, Animated } from 'react-native';

const Screen2 = ({ navigation }) => {
  const [plant1Position, setPlant1Position] = useState({ x: 0, y: 0 });
  const [plant2Position, setPlant2Position] = useState({ x: 200, y: 0 });
  const [plant3Position, setPlant3Position] = useState({ x: 100, y: 0 });

  const panResponder1 = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      setPlant1Position({
        x: gestureState.moveX - 25, // subtract half of plant width to center it on cursor
        y: gestureState.moveY - 25, // subtract half of plant height to center it on cursor
      });
    },
  });

  const panResponder2 = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      setPlant2Position({
        x: gestureState.moveX - 25, // subtract half of plant width to center it on cursor
        y: gestureState.moveY - 25, // subtract half of plant height to center it on cursor
      });
    },
  });

  const panResponder3 = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      setPlant3Position({
        x: gestureState.moveX - 25, // subtract half of plant width to center it on cursor
        y: gestureState.moveY - 25, // subtract half of plant height to center it on cursor
      });
    },
  });

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>Create your garden</Text>
      <View style={{ position: 'absolute', left: plant1Position.x, top: plant1Position.y }}>
        <Animated.Image
          source={require('../plant_images/Epipremnum_plant.png')}
          style={{ width: 100, height: 100 }}
          {...panResponder1.panHandlers}
        />
      </View>
      <View style={{ position: 'absolute', left: plant2Position.x, top: plant2Position.y }}>
        <Animated.Image
          source={require('../plant_images/BOP.png')}
          style={{ width: 100, height: 100 }}
          {...panResponder2.panHandlers}
        />
      </View>
      <View style={{ position: 'absolute', left: plant3Position.x, top: plant3Position.y }}>
        <Animated.Image
          source={require('../plant_images/Daisy.png')}
          style={{ width: 100, height: 100 }}
          {...panResponder3.panHandlers}
        />
      </View>
      <Button title="Go back to Home" onPress={() => navigation.goBack()} 
        color="green"
      />
    </View>
  );
};

export default Screen2;