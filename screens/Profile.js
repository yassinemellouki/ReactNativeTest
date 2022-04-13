import React, { useState } from "react"
import { Colors } from "../styles";
import { SafeAreaView, View, Image, FlatList, Text, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {AuthConsumer} from "../contexts/Auth.context";


const ProfileScreen = ({navigation, store}) => {

  const {currentUser} = store;
  const {avatar, fullname, lastname, firstname, details} = currentUser.data;

  const renderItem = ({ item }, i) => {
    return (
      <View key={i} style={styles.item}>
        <Text style={styles.itemLabel}>{item.label} :</Text>
        <Text style={styles.itemValue}>{
          ((typeof item.value === "object") ? item.value.join(", ") : item.value)
        }</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image 
        style={styles.avatar}
        source={{uri: avatar}}
      />
      <Text style={styles.name}>{fullname}</Text>
      <FlatList
        data={details}
        renderItem={renderItem}
      />

      
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingVertical: hp(4),
  },
  avatar: {
    width: 60,
    height: 60,
    marginBottom: hp(5)
  },
  name: {
    fontSize: 26,
    fontWeight: "600",
    color: Colors.blue
  },
  item: {
  },
  itemLabel: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 8,
  },
  itemValue: {
    fontSize: 16,
  }
});

export default AuthConsumer(ProfileScreen);
