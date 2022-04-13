import React, { useState } from "react"
import { Colors } from "../styles";
import { View, Text, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const HomeScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Text>CHECKOUT</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingHorizontal: wp(4),
    paddingVertical: wp(4),
  },
});

export default HomeScreen;
