import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { DraxView } from "react-native-drax";

import DraxItem from "./DraxItem";

import { useSelector, useDispatch } from "react-redux";
import { spliceRoster } from "../src/app/features/rosterTeams/rosterTeamsSlice";
import { spliceEnroute } from "../src/app/features/enrouteTeams/enrouteTeamsSlice";
import { spliceReady } from "../src/app/features/readyTeams/readyTeamsSlice";
import { spliceTChartTeam } from "../src/app/features/tChart/tChartSlice";

const TeamList = (props) => {
  const rosterTeams = useSelector((state) => state.rosterTeams.teams);
  const enrouteTeams = useSelector((state) => state.enrouteTeams.teams);
  const readyTeams = useSelector((state) => state.readyTeams.teams);
  const tChartTeams = useSelector((state) => state.tChart.teams);
  const dispatch = useDispatch();
  const title = props.title;
  const list = props.list;
  const listName = props.listName;
  const push = props.push;
  const pagination = props.pagination;

  const [department, setDepartment] = React.useState(1); //Pagination state
  const numberOfTeams = 7;

  return (
    <DraxView
    on
      style={styles.container}
      onReceiveDragDrop={(event) => {
        let payload = event.dragged.payload;

        //if not being dropped on itself, figure out where its coming from, then copy to list and remove from old list
        if (payload[1] === listName) {
        } else if (payload[1] === "roster") {
          dispatch(push(rosterTeams[payload[0]]));
          dispatch(spliceRoster(payload[0]));
        } else if (payload[1] === "enroute") {
          dispatch(push(enrouteTeams[payload[0]]));
          dispatch(spliceEnroute(payload[0]));
        } else if (payload[1] === "ready") {
          dispatch(push(readyTeams[payload[0]]));
          dispatch(spliceReady(payload[0]));
        } else if (payload[1] === "tChartTeams") {
          dispatch(push(tChartTeams[payload[0]]));
          dispatch(spliceTChartTeam(payload[0]));
        }
      }}
    >
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>

        {/* if pagination is set to true, add button */}
        {pagination && (
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
        )}
      </View>
      {/* if pagination is set to true, filter teams, if not show all */}
      {pagination === true ? (
        <View style={styles.teamList}>
          {list.map((item, index) =>
            item.name[1] === department.toString()
              ? DraxItem({ item, index })
              : []
          )}
        </View>
      ) : (
        <View style={styles.teamList}>
          {list.map((item, index) => DraxItem({ item, index }))}
        </View>
      )}
    </DraxView>
  );
};

export default TeamList;

const styles = StyleSheet.create({
  container: {
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
