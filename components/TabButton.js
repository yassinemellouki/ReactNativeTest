import React from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StyleSheet, Text, Pressable} from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { Colors } from "../styles";

const TabButton = (props) => {

  const {accessibilityState, routeName} = props;

  const {selected} = accessibilityState;

    let iconName;

    switch (routeName) {
      case "Home":
        iconName = "home"
        break;
      case "Profile":
        iconName = "profile"
        break;
      default: 
        iconName = "warning"
    }

  return (
    <Pressable
      {...props}
      style={styles.wrapper}
    >
        <AntDesign
          style={{
            ...styles.icon,
            color: (selected) ? Colors.blue :  Colors.gray
          }}
          name={iconName}
          size={wp(6)} 
          color={Colors.black}
        /> 
        <Text style={{
            ...styles.text,
            color: (selected) ? Colors.black :  Colors.gray
          }
        }>{routeName}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  icon: {
    color: Colors.gray,
    marginVertical: 5,
    width: 26,
  },
  text: {
    color: Colors.gray,
    fontSize: wp(2.5),
  }
});


export default TabButton;
