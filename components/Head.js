import React, { useState } from "react"
import { Colors } from "../styles";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AntDesign } from '@expo/vector-icons'; 
import Logo from "../assets/logo.svg";


const Head = ({navigation, hasNotifications}) => {

  return (
    <View style={styles.head}>
      <Logo/>
      <TouchableOpacity
        onPress={() => navigation.navigate("Notifications")}
      >
        <View class={styles.notification}>
          <AntDesign 
            name="notification" 
            size={24} 
            color={Colors.blue}
          />
          {
            hasNotifications && <View style={styles.notificationActive}></View>
          }
        </View>
      </TouchableOpacity>
    </View>
  )

}

const styles = StyleSheet.create({
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

export default Head;
