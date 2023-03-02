import DraxItem from "../../../../components/DraxItem";

import { useSelector, useDispatch } from "react-redux";
import { spliceRoster, insertRoster } from "./rosterTeamsSlice";
import { spliceEnroute, pushEnroute } from "../enrouteTeams/enrouteTeamsSlice";
import { spliceReady, pushReady } from "../readyTeams/readyTeamsSlice";
import { spliceTChartTeam } from "../tChart/tChartSlice";

import { DraxProvider, DraxView, DraxList } from "react-native-drax";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export default function Roster() {
  const readyTeams = useSelector((state) => state.readyTeams.teams);
  const enrouteTeams = useSelector((state) => state.enrouteTeams.teams);
  const rosterTeams = useSelector((state) => state.rosterTeams.teams);
  const tChartTeams = useSelector((state) => state.tChart.teams);
  const dispatch = useDispatch();

  const [department, setDepartment] = React.useState(3);
  const numberOfTeams = 7;


  return (
    <DraxView
      style={styles.roster}
      onReceiveDragDrop={(event) => {
        let payload = event.dragged.payload;
        if (payload[1] === "roster") {
        } else if (payload[1] === "enroute") {
          dispatch(insertRoster(enrouteTeams[payload[0]]));
          dispatch(spliceEnroute(payload[0]));
        } else if (payload[1] === "ready") {
          dispatch(insertRoster(readyTeams[payload[0]]));
          dispatch(spliceReady(payload[0]));
        } else if (payload[1] === "tChartTeams") {
          dispatch(insertRoster(tChartTeams[payload[0]]));
          dispatch(spliceTChartTeam(payload[0]));
        }
      }}
    >
      <View style={styles.title}>
        <Text style={styles.titleText}>Roster</Text>

        <View style={styles.departmentSelect}>
          <TouchableOpacity
            style={styles.departmentButton}
            onPress={() =>
              setDepartment(department === 1 ? numberOfTeams : department - 1)
            }
          >
            <Text>{"<"}</Text>
          </TouchableOpacity>

          <View style={styles.departmentButton}>
            <Text>{department}</Text>
          </View>
          <TouchableOpacity
            style={styles.departmentButton}
            onPress={() =>
              setDepartment(numberOfTeams === department ? 1 : department + 1)
            }
          >
            <Text>{">"}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.teamList}>
        {rosterTeams.map((item, index) =>
          item.name[1] === department.toString()
            ? DraxItem({ item, index })
            : []
        )}
      </View>
    </DraxView>
  );
}

const styles = StyleSheet.create({
  departmentSelect: {
    alignSelf: "center",
    flexDirection: "row",
    flex: 1,
    backgroundColor: "yellow",
  },
  departmentButton: {
    flex: 1,
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    width: 20,
    height: 20,
    margin: 2,
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
  roster: {
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
