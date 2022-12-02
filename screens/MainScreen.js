import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Top from "./sections/Top";
import Bottom from "./sections/Bottom";

function MainScreen(props) {
  //const [checked, setChecked] = React.useState("first");

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Top></Top>
      </View>
      <View style={styles.bottom}>
        <Bottom></Bottom>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottom: {
    flex: 9,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',

  },
  top: {
    flex: 5,
  }
});

export default MainScreen;
