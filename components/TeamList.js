import DraxItem from "./DraxItem";

import { useSelector, useDispatch } from "react-redux";
import { spliceRoster, insertRoster } from "../src/app/features/rosterTeams/rosterTeamsSlice";
import { spliceEnroute, pushEnroute } from "../src/app/features/enrouteTeams/enrouteTeamsSlice";
import { spliceReady, pushReady } from "../src/app/features/readyTeams/readyTeamsSlice";
import { spliceTChartTeam } from "../src/app/features/tChart/tChartSlice";
import { DraxProvider, DraxView, DraxList } from "react-native-drax";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const TeamList = (props) => {
  const rosterTeams = useSelector((state) => state.rosterTeams.teams);
  const enrouteTeams = useSelector((state) => state.enrouteTeams.teams);
  const readyTeams = useSelector((state) => state.readyTeams.teams);
  const tChartTeams = useSelector((state) => state.tChart.teams);
  const dispatch = useDispatch();
  const push = props.push();

  return (
    <DraxView
      style={styles.ready}
      onReceiveDragDrop={(event) => {
        let payload = event.dragged.payload;

        if (payload[1] === "ready") {
        } else if (payload[1] === "roster") {
          dispatch(push(rosterTeams[payload[0]]));
          dispatch(spliceRoster(payload[0]));
        } else if (payload[1] === "enroute") {
          dispatch(push(enrouteTeams[payload[0]]));
          dispatch(spliceEnroute(payload[0]));
        } else if (payload[1] === "tChartTeams") {
          dispatch(push(tChartTeams[payload[0]]));
          dispatch(spliceTChartTeam(payload[0]));
        }
      }}
    >
      <View style={styles.title}>
        <Text style={styles.titleText}>Ready</Text>
      </View>
      <View style={styles.teamList}>
        {readyTeams.map((item, index) => DraxItem({ item, index }))}
      </View>
    </DraxView>
  );
};

export default TeamList;

const styles = StyleSheet.create({
  ready: {
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
