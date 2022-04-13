import React, { useState } from "react"
import { Colors } from "../styles";
import { SafeAreaView, View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Image } from "react-native";
import {AppDataConsumer} from "../contexts/appData.context"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Head from "../components/Head";
import ProductCard from "../components/ProductCard";


const HomeScreen = ({navigation, store, actions}) => {

  const {products, addedToCart, currency} = store;

  const {toggleProduct} = actions;

  const totalPrice = () => {

    let prices = [];

    products.forEach(product => {
      if(addedToCart.includes(product.id)) {
        prices.push(product.price)
      }
      return;
    })

    return prices.reduce(function(acc, val) { return acc + val; }, 0);
  }


  const onCheckoutPress = () =>  {
    const total = totalPrice();
    if(total === 0) {
      alert("Please add products to check out.");
      return;
    }
    navigation.navigate("Checkout", {
      products: addedToCart,
      totalPrice: total,
      currency
    })
  }

  const onProductPress = (action, id) => {
    toggleProduct(action, id)
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Head 
          hasProducts={addedToCart.length === 0 ? false : true}
          onCheckoutPress={onCheckoutPress}/>
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
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: Colors.white,
    paddingHorizontal: wp(3),
    paddingBottom: hp(16)
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 17,
    marginBottom: 8
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
