import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'

// Additional package - HapticFeedback
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

// Images - Must declare as module else give error(look at index.d.ts)
import DiceOne from "../assets/One.png";
import DiceTwo from "../assets/Two.png";
import DiceThree from "../assets/Three.png";
import DiceFour from "../assets/Four.png";
import DiceFive from "../assets/Five.png";
import DiceSix from "../assets/Six.png";

// Declaring type of image:- automatically checks whether the url is of image or not
type DiceProps = PropsWithChildren<{
  imageUrl : ImageSourcePropType
}>

const Dice = ({imageUrl}:DiceProps) : JSX.Element => {
  return(
    <View style={styles.dice}>
      <Image source={imageUrl} style={styles.diceImage} />
    </View>
  )
}

// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

export default function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);

  const rollTheDiceOnTap =() => {
    let randomNumber = Math.floor(Math.random()*6)+1;
  
    switch(randomNumber) {
      case 1: setDiceImage(DiceOne);
              break;
      case 2: setDiceImage(DiceTwo);
              break;
      case 3: setDiceImage(DiceThree);
              break;
      case 4: setDiceImage(DiceFour);
              break;
      case 5: setDiceImage(DiceFive);
              break;
      case 6: setDiceImage(DiceSix);
              break;
      
      default:setDiceImage(DiceOne);
              break;
            }
              // Trigger haptic feedback
              ReactNativeHapticFeedback.trigger("impactMedium", options);
  }

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />

    {/* 1st method */}
      {/* <TouchableOpacity onPress={rollTheDiceOnTap} >
        <Text style={styles.btn}>Roll</Text>
      </TouchableOpacity> */}

      {/* 2nd method */}
      <Pressable onPress={rollTheDiceOnTap}>
        <Text style={styles.btn}>Roll The Dice</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  dice:{
    margin: 50
  },
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  diceImage:{
    height: 200,
    width: 200
  },
  btn:{
   paddingHorizontal: 40,
   paddingVertical: 10,
   fontSize: 16,
   borderColor: '#e5e0ff',
   borderWidth: 2,
   borderRadius: 8,
   color: '#8ea7e9',
  }
})