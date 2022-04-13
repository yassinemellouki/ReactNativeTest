import React, { useState } from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableHighlight } from "react-native";
import HomeScreen from "../screens/Home";
import CheckoutScreen from "../screens/Checkout";
import ProfileScreen from "../screens/Profile";
import { Colors } from "../styles";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import TabButton from "../components/TabButton";
import { AntDesign } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

const Navigation = () => {

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarStyle: {
          height: hp(10),
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          backgroundColor: Colors.snow,
        },
        tabBarButton: (props) => <TabButton routeName={route.name} {...props} />
      })}>
        <Tab.Screen 
          name="Home"
          options={{
            headerShown: false,
          }}
        >
          {() => (
              <HomeStack.Navigator>
                <HomeStack.Screen
                  name="HomeScreen"
                  component={HomeScreen}
                  options={{
                    headerShown: false,
                  }}
                />
                <HomeStack.Screen
                  name="Checkout"
                  component={CheckoutScreen}
                  options={({navigation}) => ({
                    headerShown: true,
                    title: "Checkout",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerTitleStyle: {
                      fontSize: 18
                    },
                    headerLeft: () => (
                      <TouchableHighlight
                        onPress={() => navigation.goBack()}
                        underlayColor={Colors.white}
                      >
                        <AntDesign 
                          name="arrowleft" 
                          size={wp(6)} 
                          color={Colors.black}
                        />
                      </TouchableHighlight>
                    ),
                  })}
                />
              </HomeStack.Navigator>

          )}
        </Tab.Screen>
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
  )
}

export default Navigation;
