import React from "react";
import { View, Text } from "react-native";

const Profile = props => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#b83b5e",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text style={{ fontSize: 42, fontWeight: "bold", color: "white" }}>
        Profile
      </Text>
    </View>
  );
};

export default Profile;
