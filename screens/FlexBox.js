import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FlexBox = () => {
  return (
    <View style={{ flex: .5, flexDirection: "row" }}>
      <View style={{ flex: 1, backgroundColor: "green" }}>
        <Text>FlexBox</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "blue" }}>
        <Text>FlexBox</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <Text>FlexBox</Text>
      </View>
    </View>
  );
};

export default FlexBox;

const styles = StyleSheet.create({});
