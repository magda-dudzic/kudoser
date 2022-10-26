import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import Account from '../app/screens/Account';
import Home from '../app/screens/Home';
import Ranking from '../app/screens/Ranking';
import { colors } from '../app/static/theme/colors';

const Tab = createBottomTabNavigator();

const HomeOptions = ({ size, color }: { size: number; color: string }) => {
  return <Ionicons name="md-home" size={size} color={color} />;
};

const RankingOptions = ({ size, color }: { size: number; color: string }) => {
  return <Ionicons name="stats-chart" size={size} color={color} />;
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
          options={{
            tabBarIcon: HomeOptions,
            tabBarActiveTintColor: colors.primaryLight,
          }}
        />
        <Tab.Screen
          name="Ranking"
          component={Ranking}
          options={{ tabBarIcon: RankingOptions, headerShown: false }}
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
