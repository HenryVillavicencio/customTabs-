import React from "react";
import { View, Text } from "react-native";

const style = {
        flex: 1,
        backgroundColor: "#f08a5d",
        justifyContent: "center",
        alignItems: "center"
      }
const Imbox = props => {
  return (
    <View
      style={style}
    >
      <Text style={{ fontSize: 42, fontWeight: "bold", color: "white" }}>
        Imbox
      </Text>
    </View>
  );
};

export default Imbox;
