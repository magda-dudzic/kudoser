import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import Account from '../screens/Account';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const HomeOptions = ({ size, color }: { size: number; color: string }) => {
  return <Ionicons name="md-home" size={size} color={color} />;
};

const AccountOptions = ({ size, color }: { size: number; color: string }) => {
  return <Ionicons name="md-person" size={size} color={color} />;
};

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ tabBarIcon: HomeOptions, headerShown: false }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{ tabBarIcon: AccountOptions, headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
