import React, { useState } from "react"
import { Colors } from "../styles";
import { View, Image, Text, TouchableHighlight, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AntDesign } from '@expo/vector-icons'; 


const ProductCard = ({onPress, id, uri, name, image, price, currency, isAdded}) => {


  let action = isAdded ? "remove" : "add";

  console.log(id, isAdded, action)

  return (
    <TouchableHighlight
      onPress={() => onPress(action, id)}
      //disabled={isAdded}
      style={{
        ...styles.wrapper,
        opacity: isAdded ? 0.4 : 1,
      }}
    >
      <View style={styles.container}>
        <Image style={styles.imgBG} source={{uri: image}}/>
        <View style={styles.content}>
          <Text style={styles.name}>{name}</Text>
          <View>
            <Text style={styles.price}>{price}{currency}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: "48%",
    height: hp(25),
    marginBottom: hp(1),
  },
  imgBG: {
    zIndex: 0,
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0
  },
  content: {
    padding: 20,
    height: "100%",
    justifyContent: "space-between",
  },
  name: {
    color: Colors.blue,
    fontSize: 20,
    fontWeight: "bold"
  },
  price: {
    color: Colors.blueLight,
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default ProductCard;
