import DraxItem from "../../../../components/DraxItem";

import { useSelector, useDispatch } from "react-redux";
import { spliceRoster, insertRoster } from "../rosterTeams/rosterTeamsSlice";
import { spliceEnroute, pushEnroute } from "./enrouteTeamsSlice";
import { spliceReady, pushReady } from "../readyTeams/readyTeamsSlice";
import { spliceTChartTeam } from "../tChart/tChartSlice";

import { DraxProvider, DraxView, DraxList } from "react-native-drax";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export default function Enroute() {
  const readyTeams = useSelector((state) => state.readyTeams.teams);
  const enrouteTeams = useSelector((state) => state.enrouteTeams.teams);
  const rosterTeams = useSelector((state) => state.rosterTeams.teams);
  const tChartTeams = useSelector((state) => state.tChart.teams);
  const dispatch = useDispatch();

  return (
    <DraxView
      style={styles.enroute}
      onReceiveDragDrop={(event) => {
        let payload = event.dragged.payload;

        if (payload[1] === "enroute") {
        } else if (payload[1] === "roster") {
          dispatch(pushEnroute(rosterTeams[payload[0]]));
          dispatch(spliceRoster(payload[0]));
        } else if (payload[1] === "ready") {
          dispatch(pushEnroute(readyTeams[payload[0]]));
          dispatch(spliceReady(payload[0]));
        } else if (payload[1] === "tChartTeams") {
          dispatch(pushEnroute(tChartTeams[payload[0]]));
          dispatch(spliceTChartTeam(payload[0]));
        }
      }}
    >
      <View style={styles.title}>
        <Text style={styles.titleText}>Enroute</Text>
      </View>
      <View style={styles.teamList}>
        {enrouteTeams.map((item, index) => DraxItem({ item, index }))}
      </View>
    </DraxView>
  );
}

const styles = StyleSheet.create({
  enroute: {
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "center",
    width: "15%",
    height: "99%",
    maxHeight: "99%",
    backgroundColor: "gray",
    borderWidth: 2,
    margin: 0,
    padding: 0,
  },
  teamList: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    backgroundColor: "lightblue",
    flex: 3,
    margin: 0,
    padding: 0,
  },
  title: {
    flex: 1,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    flex: 1,
  },
});
