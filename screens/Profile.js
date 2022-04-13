import React, { useState } from "react"
import { Colors } from "../styles";
import { View, Text, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {AuthConsumer} from "../contexts/Auth.context";


const ProfileScreen = ({navigation, ...rest}) => {

  console.log("rest", rest)

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
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

export default AuthConsumer(ProfileScreen);
