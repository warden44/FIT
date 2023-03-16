import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { DraxView } from "react-native-drax";

import DraxItem from "./DraxItem";

import { useSelector, useDispatch } from "react-redux";
import { spliceRoster } from "../src/app/features/rosterTeams/rosterTeamsSlice";
import { spliceEnroute } from "../src/app/features/enrouteTeams/enrouteTeamsSlice";
import { spliceReady } from "../src/app/features/readyTeams/readyTeamsSlice";
import { spliceStaged } from "../src/app/features/stagedTeams/stagedTeams";
import { spliceTChartTeam } from "../src/app/features/tChart/tChartSlice";

const TeamList = (props) => {
  const rosterTeams = useSelector((state) => state.rosterTeams.teams);
  const enrouteTeams = useSelector((state) => state.enrouteTeams.teams);
  const readyTeams = useSelector((state) => state.readyTeams.teams);
  const stagedTeams = useSelector((state) => state.stagedTeams.teams);
  const tChartTeams = useSelector((state) => state.tChart.teams);
  const dispatch = useDispatch();
  const title = props.title;
  const list = props.list;
  const listName = props.listName;
  const push = props.push;
  const pagination = props.pagination;

  const [department, setDepartment] = React.useState(3); //Pagination state
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
        } else if (payload[1] === "staged") {
          dispatch(push(stagedTeams[payload[0]]));
          dispatch(spliceStaged(payload[0]));
        } else if (payload[1] === "tChartTeams") {
          dispatch(push(tChartTeams[payload[0]][payload[2]]));
          dispatch(spliceTChartTeam(payload));
        }
      }}
    >
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      {/* if pagination is set to true, add buttons */}
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
      {pagination === true ? (
        <View style={styles.teamList}>
          {list.map(
            (item, index) =>
              item.name[1] === department.toString() && (
                <View style={styles.team} key={index}>
                  {DraxItem({ item, index })}
                </View>
              )
          )}
        </View>
      ) : (
        <View style={styles.teamList}>
          {list.map((item, index) => (
            <View style={styles.team} key={index}>
              {DraxItem({ item, index })}
            </View>
          ))}
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
    width: "100%",
    height: "100%",
    backgroundColor: "lightblue",
    borderWidth: 2,
  },
  departmentSelect: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "2%",
    flex: 1,
  },
  departmentButton: {
    flex: 1,
    elevation: 5,
    zIndex: 99,
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    height: "100%",
    margin: 2,
  },
  team: {
    width: Dimensions.get("window").width * 0.04,
    height: Dimensions.get("window").height * 0.04,
    margin: "1%",
  },
  teamList: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    flex: 6,
    margin: 0,
    paddingVertical: 1,
  },
  title: {
    flex: 1,
    width: "100%",
    borderBottomWidth: 2,
    backgroundColor: "lightgray",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    flex: 1,
  },
});
