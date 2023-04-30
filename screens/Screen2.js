import React, { useState } from 'react';
import { View, Text, Button, PanResponder, Animated } from 'react-native';

const Screen2 = ({ navigation }) => {
    const [isPlant1Hovered, setIsPlant1Hovered] = useState(false);
    const [isPlant2Hovered, setIsPlant2Hovered] = useState(false);
    const [isPlant3Hovered, setIsPlant3Hovered] = useState(false);

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
    onPanResponderGrant: () => {
        setIsPlant1Hovered(true);
      },
      onPanResponderRelease: () => {
        setIsPlant1Hovered(false);
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
    onPanResponderGrant: () => {
        setIsPlant2Hovered(true);
      },
      onPanResponderRelease: () => {
        setIsPlant2Hovered(false);
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
    onPanResponderGrant: () => {
        setIsPlant3Hovered(true);
      },
      onPanResponderRelease: () => {
        setIsPlant3Hovered(false);
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
  {isPlant1Hovered && <Text style={{ fontSize: 16 }}>Epipremnum plant</Text>}

      </View>
      <View style={{ position: 'absolute', left: plant2Position.x, top: plant2Position.y }}>
        <Animated.Image
          source={require('../plant_images/BOP.png')}
          style={{ width: 100, height: 100 }}
          {...panResponder2.panHandlers}
        />
        {isPlant2Hovered && <Text style={{ fontSize: 16 }}>Bird of Paradise plant</Text>}

      </View>
      <View style={{ position: 'absolute', left: plant3Position.x, top: plant3Position.y }}>
        <Animated.Image
          source={require('../plant_images/Daisy.png')}
          style={{ width: 100, height: 100 }}
          {...panResponder3.panHandlers}
        />
          {isPlant3Hovered && <Text style={{ fontSize: 16 }}>Daisies</Text>}

      </View>
      <Button title="Go back to Home" onPress={() => navigation.goBack()} 
        color="green"
      />
    </View>
  );
};

export default Screen2;