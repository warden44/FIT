import { StyleSheet, Text, View } from "react-native";
import { DraxProvider, DraxView, DraxList } from "react-native-drax";

import React from "react";

const DraxItem = ({ item, index }) => {
  return (
    <DraxView
      style={[styles.team, { borderColor: item.border_color }]}
      animateSnapback={false}
      draggingStyle={styles.dragging}
      dragReleasedStyle={styles.dragReleased}
      hoverDraggingStyle={styles.dragHover}
      dragPayload={[index, item.currentList]}
      longPressDelay={150}
      receivingStyle={styles.receiving}
      renderContent={({ viewState }) => {
        const receivingDrag = viewState && viewState.receivingDrag;
        const payload = receivingDrag && receivingDrag.payload;
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
    width: "30%",
    height: "20%",
    fontSize: 20,
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "red",
    backgroundColor: "lightyellow",
    borderRadius: 10,
    margin: 2,
  },
});
