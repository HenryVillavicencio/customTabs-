import React from "react";
import { View, Text } from "react-native";

const Imbox = props => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f08a5d",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text style={{ fontSize: 42, fontWeight: "bold", color: "white" }}>
        Imbox
      </Text>
    </View>
  );
};

export default Imbox;
