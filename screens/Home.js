import React, { useState } from "react"
import { Colors } from "../styles";
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Image } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Head from "../components/Head"


const HomeScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Head hasNotifications />
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: Colors.white,
    paddingHorizontal: wp(4),
    paddingTop: hp(4)
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 17,
  },
  notificationActive: {
    width: 12,
    height: 12,
    backgroundColor: Colors.red,
    position: "absolute",
    borderRadius: 12,
    top: -3,
    right: -3,
    borderColor: Colors.white,
    borderWidth: 2 
  }
});

export default HomeScreen;
