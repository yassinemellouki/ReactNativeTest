import React, {useRef, useEffect, useState} from "react";
import { Colors } from "../../styles";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Logo from "../../assets/logo.svg"
import {Animated, View, Text, StyleSheet} from "react-native";

export default () => {

  const rotateAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const [opacity, setOpacity] = useState(0);

  const runAnimation = () => {

    (Animated.timing(rotateAnim, {
      toValue: 6.27,
      duration: 2000,
      useNativeDriver: true
    })).start();

    setTimeout(() => {
      setOpacity(1);
      Animated.loop(Animated.timing(scaleAnim, {
        toValue: 1.5,
        duration: 2000,
        useNativeDriver: true
      })).start();
    }, 2000)

  }

  useEffect(() => {
    runAnimation()
  },[])

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.logo,
          transform: [
            {
              rotate: rotateAnim
            }
          ]

        }}
      >
        <Logo width="180"/>
      </Animated.View>
      <Animated.View 
        style={{
          opacity,
          transform: [
            {
              scale: scaleAnim
            }
          ]
        }}
      >
        <Text style={styles.text}>Loading ...</Text>
      </Animated.View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingHorizontal: wp(4),
    paddingVertical: wp(4),
  },
  logo: {
    marginBottom: hp(6)
  },
  text: {
    color: Colors.blue,
    fontSize: 18 
  }
});

