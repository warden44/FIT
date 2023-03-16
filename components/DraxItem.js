import { Dimensions, StyleSheet, Text, View } from "react-native";
import { DraxProvider, DraxView, DraxList } from "react-native-drax";

import React from "react";

const DraxItem = ({ item, index }) => {
  return (
    <DraxView
      style={[styles.team, { borderColor: item.border_color }]}
      animateSnapback={false}
      draggingStyle={{
        position: "absolute",
        width: 0,
        height: 0,
        borderWidth: 0,
      }}
      hoverDraggingStyle={styles.hoverDragging}
      dragPayload={[index, item.currentList]}
      longPressDelay={150}
      receivingStyle={styles.receiving}
      renderContent={({ viewState }) => {
        return (
          <View>
            <Text style={styles.textStyle}>{item.name}</Text>
          </View>
        );
      }}
      key={index}
    />
  );
};

export default DraxItem;

const styles = StyleSheet.create({
  team: {
    width: "100%",
    height: "100%",
    fontSize: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "red",
    backgroundColor: "lightyellow",
    borderRadius: 10,
  },
  textStyle: {
    textAlign: "center",
    textAlignVertical: "center",
  },
  hoverDragging: {
    width: Dimensions.get("window").width * 0.04,
    height: Dimensions.get("window").height * 0.04,
  },
});
