import React, { useState } from "react"
import { Colors } from "../styles";
import { View, Image, Text, TouchableHighlight, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AntDesign } from '@expo/vector-icons'; 


const ProductCard = ({onPress, id, uri, name, image, price, currency, isAdded}) => {


  let action = isAdded ? "remove" : "add";

  return (
    <TouchableHighlight
      onPress={() => onPress(action, id)}
      //disabled={isAdded}
      style={{
        ...styles.wrapper,
        borderColor: isAdded ? Colors.green: Colors.gray
      }}
    >
      <View style={styles.container}>
        <Image 
          style={{
            ...styles.imgBG,
            opacity: isAdded ? 0.7 : 1,
          }}
          source={{uri: image}}
        />
        {isAdded && <Text style={styles.added}>Added</Text>}
        <View style={{
            ...styles.content,
            opacity: isAdded ? 0.4 : 1,
          }}>
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
    borderWidth: 3,
    borderRadius: 3,
    backgroundColor: Colors.blue
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
  added: {
    position: "absolute",
    color: Colors.green,
    fontSize: 22,
    top: "45%",
    right: "30%",
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.snow
  },
  name: {
    color: Colors.blue,
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: Colors.white,
    padding: 3,
    alignSelf: "flex-start",
  },
  price: {
    alignSelf: "flex-start",
    color: Colors.blueLight,
    fontSize: 20,
    fontWeight: "bold",
    padding: 2,
    backgroundColor: Colors.white
  }
});

export default ProductCard;
