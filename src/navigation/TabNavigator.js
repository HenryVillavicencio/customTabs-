import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Imbox from "../screens/Imbox";
import Profile from "../screens/Profile";
import { Ionicons } from "@expo/vector-icons";
import CustomTab from "../components/CustomTab";
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Imbox"
      tabBarOptions={{
        activeTintColor: "#fff",
        activeBackgroundColor: "#feb72b",
        inactiveTintColor: "gray"
      }}
      tabBar={props => <CustomTab {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Imbox"
        component={Imbox}
        options={{
          title: "Mensajes",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-chatboxes" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-contact" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
