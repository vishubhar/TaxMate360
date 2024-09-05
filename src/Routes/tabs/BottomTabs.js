import * as React from 'react';
import { Image, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import TaxTools from '../../screens/TaxTools';
import MyOrders from '../../screens/MyOrders';
import Profile from '../../screens/Profile';
import Mutualfunds from '../../screens/Mutualfunds';
import ITRFiling from '../../screens/ITRFiling';

const Tab = createBottomTabNavigator();


const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={HomeScreen}
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarStyle: [
          {
            display: 'flex',
            height: 60,
            paddingBottom: 5,
            paddingTop: 5,
          },
        ],
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: 'grey',
        tabBarInactiveTintColor: 'red',
        tabBarLabel: ({ focused, color, size }) => {
          return (
            <Text
              style={{
                fontSize: focused ? 12 : 12,
                fontWeight: focused ? '800' : '400',
                color: focused ? 'black' : 'grey',
                letterSpacing: focused ? .1 : .1
              }}
            >
              {route.name}
            </Text>
          );
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{ tintColor: focused ? 'black' : 'grey', height: focused ? 35 : 30, width: focused ? 35 : 30 }}
                source={require('../../Assets/icons/home.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Tax Center"
        component={ITRFiling}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{ tintColor: focused ? 'balck' : 'grey', height: focused ? 30 : 25, width: focused ? 30 : 25, }}
                source={require('../../Assets/icons/document.png')}
              />
            );
          },
        }}
      />
      {/* <Tab.Screen
        name="Mutual Funds"
        component={Mutualfunds}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{ tintColor: focused ? 'balck' : 'gray', height: focused ? 30 : 25, width: focused ? 30 : 25, }}
                source={require('../../Assets/icons/mutualfund.png')}
              />
            );
          },
        }}
      />
       */}
      <Tab.Screen
        name="Dashboard"
        component={Profile}
        options={{
          headerShown: true,
          headerTitle: "Account Settings",
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{ tintColor: focused ? 'balck' : 'grey', height: focused ? 30 : 25, width: focused ? 30 : 25, }}
                source={require('../../Assets/icons/dashboard.png')}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabs;
