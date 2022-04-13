import React, { useState } from "react"
import { Colors } from "../styles";
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Image } from "react-native";
import {AppDataConsumer} from "../contexts/appData.context"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Head from "../components/Head";
import ProductCard from "../components/ProductCard";


const HomeScreen = ({navigation, store, actions}) => {

  const {products, addedToCart, currency} = store;

  const {toggleProduct} = actions;

  const onProductPress = (action, id) => {
    toggleProduct(action, id)
  }

  return (
    <View style={styles.container}>
      <Head hasProducts={addedToCart.length === 0 ? false : true} navigation={navigation}/>
      <ScrollView style={styles.scrollableContent}>
        <View style={styles.cardsWrapper}>
          {
            products.map((product, i) => <ProductCard
              key={i}
              {...product}
              isAdded={addedToCart.includes(product.id)}
              onPress={onProductPress}
              currency={currency}
              />)
          }
        </View>
      </ScrollView>
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
  },
  scrollableContent: {
    height: "100%",
    paddingVertical: hp(3),
    paddingHorizontal: hp(3),
  },
  cardsWrapper: {
    flex: 1,
    height: "100%",
    flexWrap: "wrap",
    justifyContent: "space-between",
    flexDirection: "row",
  }
});

export default AppDataConsumer(HomeScreen);
