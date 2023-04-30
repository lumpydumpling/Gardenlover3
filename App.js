import React, { useEffect, useRef, useState } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';

export default function Box() {
  const boxRef = useRef(null);
  const [width, setWidth] = useState(80);
  const [height, setHeight] = useState(40);
  const [position, setPosition] = useState({
    x: window.innerWidth / 2 - 50, // initial horizontal position
    y: window.innerHeight / 2 - 50, // initial vertical position
  });

  const [widthFeet, widthInches] = getFeetAndInches(width);
  const [heightFeet, heightInches] = getFeetAndInches(height);

  function getFeetAndInches(value) {
    const inches = Math.round((value * 100) / 100);
    const feet = Math.floor(inches / 12);
    const remainingInches = inches % 12;
    return [feet, remainingInches];
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      const arrowKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
      if (arrowKeys.includes(event.key)) {
        event.preventDefault();
        switch (event.key) {
          case "ArrowUp":
            setHeight((prevHeight) => prevHeight + 5);
            break;
          case "ArrowDown":
            setHeight((prevHeight) => prevHeight - 5);
            break;
          case "ArrowLeft":
            setWidth((prevWidth) => prevWidth + 5);
            break;
          case "ArrowRight":
            setWidth((prevWidth) => prevWidth - 5);
            break;
          default:
            break;
        }
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <NavigationContainer>
      <AppNavigator />
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        ref={boxRef}
        style={{ width: `${width}%`, height: `${height}%`, backgroundColor: "brown" }}
      />
      <Text style={{ fontSize: 24, fontFamily: "Helvetica", marginTop: 20 }}>
        {widthFeet}'{widthInches}" x {heightFeet}'{heightInches}"
      </Text>
    </View>
    </NavigationContainer>
  );
}

