import React from "react";
import { View, Text } from "react-native";

const style = {
        flex: 1,
        backgroundColor: "#f9ed69",
        justifyContent: "center",
        alignItems: "center"
      }
const Home = props => {
  return (
    <View
      style={style}
    >
      <Text style={{ fontSize: 42, fontWeight: "bold", color: "white" }}>
        Home
      </Text>
    </View>
  );
};

export default Home;
