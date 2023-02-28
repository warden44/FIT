import { useSelector, useDispatch } from "react-redux";
import { spliceRoster, insertRoster } from "./rosterTeamsSlice";
import { spliceEnroute, pushEnroute } from "../enrouteTeams/enrouteTeamsSlice";
import { spliceReady, pushReady } from "../readyTeams/readyTeamsSlice";
import {
  spliceTChartTeam,
  spliceTChartTask,
  insertTChartTeam,
  insertTChartTask,
  moveTChartTeam,
  moveTChartTask,
} from "../tChart/tChartSlice";

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

  const RosterDrax = ({ item, index }) => {
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
      <View style={styles.enroutePagination}>
        {rosterTeams.map((item, index) =>
          item.name[1] === department.toString()
            ? RosterDrax({ item, index })
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
  },
  departmentButton: {
    flex: 1,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    width: 20,
    height: 20,
    margin: 2,
  },
  enroutePagination: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    // alignContent: "center",
    width: "100%",
    height: "200%",
    backgroundColor: "lightblue",
    flex: 3,
  },
  roster: {
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "center",
    width: "15%",
    height: "99%",
    maxHeight: "99%",
    backgroundColor: "lightblue",
    borderWidth: 2,
  },
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
