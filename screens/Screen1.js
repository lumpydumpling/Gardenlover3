// // Screen1.js

// import React from 'react';
// import { View, Text, Button } from 'react-native';

// const Screen1 = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text style={{ fontSize: 20 }}>Build your garden bed! Use the arrow keys on your keyboard to change the size of the box.

// The up and down arrow keys will change the height of the box.

// The left and right arrow keys will change the width of the box.</Text>
//       <Button title="Choose plants" onPress={() => navigation.navigate('Screen2')} />
//     </View>
//   );
// };

// export default Screen1;

// Screen1.js

import React from 'react';
import { View, Text, Button } from 'react-native';

const Screen1 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
        Welcome to Garden Builder!
      </Text>
      <Text style={{ fontSize: 18, textAlign: 'center', marginHorizontal: 16 }}>
        Use the arrow keys on your keyboard to change the size of the box. The up and down arrow keys
        will change the height of the box, and the left and right arrow keys will change the width of
        the box. Click "Choose plants" to proceed to the next screen and start selecting plants for
        your garden.
      </Text>
      <Button title="Choose plants" onPress={() => navigation.navigate('Screen2')} 
        color="green"
      />
    </View>
  );
};

export default Screen1;
