import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const XButton = (props) => {
  return (
        <View style={styles.container}>

          <TouchableOpacity
            style={styles.xButton}

            onPress={() => {
              console.log("why does this owrk");
            }}
          >
            <Text adjustsFontSizeToFit>X</Text>
          </TouchableOpacity>
        </View>
  );
};

export default XButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  containerSmall: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "green",
  },
  dateSmall: {
    flex: 1,
    backgroundColor: "red",
  },
  smallTimer: {
    flex: 1,
    backgroundColor: "blue"
  }
});
