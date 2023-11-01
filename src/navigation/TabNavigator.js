import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Imbox from "../screens/Imbox";
import Profile from "../screens/Profile";
import { Ionicons } from "@expo/vector-icons";
import CustomTab from "../components/CustomTab";
const Tab = createBottomTabNavigator();

const routesNames = {
  HOME: "Home",
  INMBOX: "Imbox",
  PROFILE: "Profile"
}

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
        name={routesNames.HOME}
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
        name={routesNames.IMBOX}
        component={Imbox}
        options={{
          title: "Mensajes",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-chatboxes" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name={routesNames.PROFILE}
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
