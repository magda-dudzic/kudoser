import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import Account from "../screens/Account";
import Home from "../screens/Home";
import Ranking from "../screens/Ranking";
import { colors } from "../static/theme/colors";
import LoginScreen from "../screens/Login";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeOptions = ({ size, color }: { size: number; color: string }) => {
  return <Ionicons name="md-home" size={size} color={color} />;
};

const RankingOptions = ({ size, color }: { size: number; color: string }) => {
  return <Ionicons name="stats-chart" size={size} color={color} />;
};

const AccountOptions = ({ size, color }: { size: number; color: string }) => {
  return <Ionicons name="md-person" size={size} color={color} />;
};

function Main() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: HomeOptions,
          tabBarActiveTintColor: "#337078",
        }}
      />
      <Tab.Screen
        name="Ranking"
        component={Ranking}
        options={{
          tabBarIcon: RankingOptions,
          headerShown: false,
          tabBarActiveTintColor: "#337078",
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: AccountOptions,
          headerShown: false,
          tabBarActiveTintColor: "#337078",
        }}
      />
    </Tab.Navigator>
  );
}

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
