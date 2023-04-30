// // import React, { useState } from 'react';
// // import { View, Text, Button, PanResponder, Animated } from 'react-native';

// // const Screen2 = ({ navigation }) => {
// //   const [plant1Position, setPlant1Position] = useState({ x: 0, y: 0 });
// //   const [plant2Position, setPlant2Position] = useState({ x: 200, y: 0 });
// //   const [plant3Position, setPlant3Position] = useState({ x: 100, y: 0 });

// //   const panResponder1 = PanResponder.create({
// //     onMoveShouldSetPanResponder: () => true,
// //     onPanResponderMove: (evt, gestureState) => {
// //       setPlant1Position({
// //         x: gestureState.moveX - 25, // subtract half of plant width to center it on cursor
// //         y: gestureState.moveY - 25, // subtract half of plant height to center it on cursor
// //       });
// //     },
// //   });

// //   const panResponder2 = PanResponder.create({
// //     onMoveShouldSetPanResponder: () => true,
// //     onPanResponderMove: (evt, gestureState) => {
// //       setPlant2Position({
// //         x: gestureState.moveX - 25, // subtract half of plant width to center it on cursor
// //         y: gestureState.moveY - 25, // subtract half of plant height to center it on cursor
// //       });
// //     },
// //   });

// //   const panResponder3 = PanResponder.create({
// //     onMoveShouldSetPanResponder: () => true,
// //     onPanResponderMove: (evt, gestureState) => {
// //       setPlant3Position({
// //         x: gestureState.moveX - 25, // subtract half of plant width to center it on cursor
// //         y: gestureState.moveY - 25, // subtract half of plant height to center it on cursor
// //       });
// //     },
// //   });

// //   return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //       <Text style={{ fontSize: 24 }}>Create your garden</Text>
// //       <View style={{ position: 'absolute', left: plant1Position.x, top: plant1Position.y }}>
// //         <Animated.Image
// //           source={require('../plant_images/Epipremnum_plant.png')}
// //           style={{ width: 100, height: 100 }}
// //           {...panResponder1.panHandlers}
// //         />
// //       </View>
// //       <View style={{ position: 'absolute', left: plant2Position.x, top: plant2Position.y }}>
// //         <Animated.Image
// //           source={require('../plant_images/BOP.png')}
// //           style={{ width: 100, height: 100 }}
// //           {...panResponder2.panHandlers}
// //         />
// //       </View>
// //       <View style={{ position: 'absolute', left: plant3Position.x, top: plant3Position.y }}>
// //         <Animated.Image
// //           source={require('../plant_images/Daisy.png')}
// //           style={{ width: 100, height: 100 }}
// //           {...panResponder3.panHandlers}
// //         />
// //       </View>
// //       <Button title="Go back to Home" onPress={() => navigation.goBack()} />
// //     </View>
// //   );
// // };

// // export default Screen2;

// import React, { useState } from 'react';
// import { View, Text, Button, PanResponder, Animated } from 'react-native';
// import { Tooltip } from 'react-native-elements';

// const Screen2 = ({ navigation }) => {
//   const [plant1Position, setPlant1Position] = useState({ x: 0, y: 0 });
//   const [plant2Position, setPlant2Position] = useState({ x: 200, y: 0 });
//   const [plant3Position, setPlant3Position] = useState({ x: 100, y: 0 });

//   const panResponder1 = PanResponder.create({
//     onMoveShouldSetPanResponder: () => true,
//     onPanResponderMove: (evt, gestureState) => {
//       setPlant1Position({
//         x: gestureState.moveX - 25,
//         y: gestureState.moveY - 25,
//       });
//     },
//   });

//   const panResponder2 = PanResponder.create({
//     onMoveShouldSetPanResponder: () => true,
//     onPanResponderMove: (evt, gestureState) => {
//       setPlant2Position({
//         x: gestureState.moveX - 25,
//         y: gestureState.moveY - 25,
//       });
//     },
//   });

//   const panResponder3 = PanResponder.create({
//     onMoveShouldSetPanResponder: () => true,
//     onPanResponderMove: (evt, gestureState) => {
//       setPlant3Position({
//         x: gestureState.moveX - 25,
//         y: gestureState.moveY - 25,
//       });
//     },
//   });

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text style={{ fontSize: 24 }}>Create your garden</Text>
//       <Tooltip popover={<Text>Epipremnum Plant</Text>}>
//         <View style={{ position: 'absolute', left: plant1Position.x, top: plant1Position.y }}>
//           <Animated.Image
//             source={require('../plant_images/Epipremnum_plant.png')}
//             style={{ width: 100, height: 100 }}
//             {...panResponder1.panHandlers}
//           />
//         </View>
//       </Tooltip>
//       <Tooltip popover={<Text>Birds of Paradise Plant</Text>}>
//         <View style={{ position: 'absolute', left: plant2Position.x, top: plant2Position.y }}>
//           <Animated.Image
//             source={require('../plant_images/BOP.png')}
//             style={{ width: 100, height: 100 }}
//             {...panResponder2.panHandlers}
//           />
//         </View>
//       </Tooltip>
//       <Tooltip popover={<Text>Daisy</Text>}>
//         <View style={{ position: 'absolute', left: plant3Position.x, top: plant3Position.y }}>
//           <Animated.Image
//             source={require('../plant_images/Daisy.png')}
//             style={{ width: 100, height: 100 }}
//             {...panResponder3.panHandlers}
//           />
//         </View>
//       </Tooltip>
//       <Button title="Go back to Home" onPress={() => navigation.goBack()} />
//     </View>
//   );
// };

// export default Screen2;
import React, { useState } from 'react';
import { View, Text, Button, PanResponder, Animated } from 'react-native';
import { Tooltip } from 'react-native-elements';

const Screen2 = ({ navigation }) => {
  const [plant1Position, setPlant1Position] = useState({ x: 0, y: 0 });
  const [plant2Position, setPlant2Position] = useState({ x: 200, y: 0 });
  const [plant3Position, setPlant3Position] = useState({ x: 100, y: 0 });
  const [tooltip1Visible, setTooltip1Visible] = useState(false);
  const [tooltip2Visible, setTooltip2Visible] = useState(false);
  const [tooltip3Visible, setTooltip3Visible] = useState(false);

  const panResponder1 = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      setPlant1Position({
        x: gestureState.moveX - 25,
        y: gestureState.moveY - 25,
      });
    },
  });

  const panResponder2 = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      setPlant2Position({
        x: gestureState.moveX - 25,
        y: gestureState.moveY - 25,
      });
    },
  });

  const panResponder3 = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      setPlant3Position({
        x: gestureState.moveX - 25,
        y: gestureState.moveY - 25,
      });
    },
  });

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>Create your garden</Text>
      <Tooltip isVisible={tooltip1Visible} onBackdropPress={() => setTooltip1Visible(false)}>
        <Text>Epipremnum Plant</Text>
      </Tooltip>
      <Tooltip isVisible={tooltip2Visible} onBackdropPress={() => setTooltip2Visible(false)}>
        <Text>BOP</Text>
      </Tooltip>
      <Tooltip isVisible={tooltip3Visible} onBackdropPress={() => setTooltip3Visible(false)}>
        <Text>Daisy</Text>
      </Tooltip>
      <View style={{ position: 'absolute', left: plant1Position.x, top: plant1Position.y }}>
        <Animated.Image
          source={require('../plant_images/Epipremnum_plant.png')}
          style={{ width: 100, height: 100 }}
          {...panResponder1.panHandlers}
          onLongPress={() => setTooltip1Visible(true)}
        />
      </View>
      <View style={{ position: 'absolute', left: plant2Position.x, top: plant2Position.y }}>
        <Animated.Image
          source={require('../plant_images/BOP.png')}
          style={{ width: 100, height: 100 }}
          {...panResponder2.panHandlers}
          onLongPress={() => setTooltip2Visible(true)}
        />
      </View>
      <View style={{ position: 'absolute', left: plant3Position.x, top: plant3Position.y }}>
        <Animated.Image
          source={require('../plant_images/Daisy.png')}
          style={{ width: 100, height: 100 }}
          {...panResponder3.panHandlers}
          />
        </View>
        </View>
      </Tooltip>
      <Button title="Go back to Home" onPress={() => navigation.goBack()} />
    </View>
  );
};
