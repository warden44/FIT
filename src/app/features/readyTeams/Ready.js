import { useSelector, useDispatch } from "react-redux";
import { spliceRoster, insertRoster } from "../rosterTeams/rosterTeamsSlice";
import { spliceEnroute, pushEnroute } from "../enrouteTeams/enrouteTeamsSlice";
import { spliceReady, pushReady } from "./readyTeamsSlice";
import { DraxProvider, DraxView, DraxList } from "react-native-drax";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export default function Ready() {
  const readyTeams = useSelector((state) => state.readyTeams.teams);
  const enrouteTeams = useSelector((state) => state.enrouteTeams.teams);
  const rosterTeams = useSelector((state) => state.rosterTeams.teams);
  const dispatch = useDispatch();

  const ReadyDrax = ({ item, index }) => {
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
        onReceiveDragDrop={(event) => {
          let payload = event.dragged.payload;
          if (payload[1] === "ready") {
          } else if (payload[1] === "roster") {
            dispatch(pushReady(rosterTeams[payload[0]]));
            dispatch(spliceRoster(payload[0]));
          } else if (payload[1] === "enroute") {
            dispatch(pushReady(enrouteTeams[payload[0]]));
            dispatch(spliceEnroute(payload[0]));
          }
        }}
      />
    );
  };

  return (
    <DraxView
      style={styles.ready}
      onReceiveDragDrop={(event) => {
        let payload = event.dragged.payload;
        if (payload[1] === "ready") {
        } else if (payload[1] === "roster") {
          dispatch(pushReady(rosterTeams[payload[0]]));
          dispatch(spliceRoster(payload[0]));
        } else if (payload[1] === "enroute") {
          dispatch(pushReady(enrouteTeams[payload[0]]));
          dispatch(spliceEnroute(payload[0]));
        }
      }}
    >
      {readyTeams.map((item, index) => ReadyDrax({ item, index }))}
    </DraxView>
  );
}

const styles = StyleSheet.create({
  ready: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
    width: "15%",
    height: "99%",
    maxHeight: "99%",
    backgroundColor: "lightgreen",
    borderWidth: 2,
  },
  team: {
    width: "30%",
    height: "15%",
    fontSize: 20,
    flexDirection: "row",
    justifyContent: "center",
    ali: "center",
    borderWidth: 2,
    borderColor: "red",
    backgroundColor: "lightyellow",
    borderRadius: 10,
    margin: 2,
  },
});
