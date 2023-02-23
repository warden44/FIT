//****** ABANDONED FOR NOW, intedned for universal team list component************

import { useSelector, useDispatch } from "react-redux";
import { spliceReady, pushReady } from "./readyTeamsSlice";
import { spliceEnroute, pushEnroute } from "../enrouteTeams/enrouteTeamsSlice";
import { DraxProvider, DraxView, DraxList } from "react-native-drax";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

//variables needed, which team list, color

export default function TeamList(props) {
  let list = props.list;
  const readyTeams = useSelector((state) => state.readyTeams.teams);
  const enrouteTeams = useSelector((state) => state.enrouteTeams.teams);
  const dispatch = useDispatch();

  const DraxTeam = ({ item, index }) => {
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
        onReceiveDragDrop={(event) => {}}
      />
    );
  };

  return (
    <DraxView
      style={styles.ready}
      onReceiveDragDrop={(event) => {
        let payload = event.dragged.payload;
        if (payload[1] === list) {

        }
        else if (payload[1] === "enroute") {
          dispatch(pushReady(enrouteTeams[payload[0]]));
          dispatch(spliceEnroute(payload[0]));
        }
      }}
    >
      {readyTeams.map((item, index) => DraxTeam({ item, index }))}
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
});
