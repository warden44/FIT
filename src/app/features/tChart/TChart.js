//How to get tchart components to work
//differentiate each tchart component through props.tChartID
//create global list of lists corresponding to the tcharts
//when adding task to tchart, set new task attribute "currentTChart" equal to tChartID
//when receiving task from tChart, remove task from list index of the tChart or currentTChart, and set currentTChart to 12

import { useSelector, useDispatch } from "react-redux";
import { spliceRoster, insertRoster } from "../rosterTeams/rosterTeamsSlice";
import { spliceEnroute, pushEnroute } from "../enrouteTeams/enrouteTeamsSlice";
import { spliceReady, pushReady } from "../readyTeams/readyTeamsSlice";
import { spliceTChart, insertTChart, moveTChart } from "./tChartSlice";

import * as React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Timer from "../../../../components/Timer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DraxProvider, DraxView, DraxList } from "react-native-drax";

function TChart(props) {
  var tChartID = props.tChartID;
  const rosterTeams = useSelector((state) => state.rosterTeams.teams);
  const enrouteTeams = useSelector((state) => state.enrouteTeams.teams);
  const readyTeams = useSelector((state) => state.readyTeams.teams);
  const tChartTeams = useSelector((state) => state.tChart.teams);
  const tChartTasks = useSelector((state) => state.tChart.tasks);
  const dispatch = useDispatch();

  let task = tChartTasks[tChartID]; //this is basically the index

  let team = tChartTeams[tChartID];

  let opac = 0.25;
  let glow = "black";

  if (team || task) {
    opac = 1;
    glow = "gold";
  } else {
    opac = 0.25;
    glow = "black";
  }

  const TChartSlotDrax = (item, bottomBorder = 2, topBorder = 2) => {
    return (
      <DraxView
        style={[
          styles.tChartSection,
          {
            borderColor: item.border_color,
            borderBottomWidth: bottomBorder,
            borderTopWidth: topBorder,
          },
        ]}
        animateSnapback={false}
        draggingStyle={styles.dragging}
        dragReleasedStyle={styles.dragReleased}
        hoverDraggingStyle={styles.dragHover}
        dragPayload={[tChartID, item.currentList]}
        longPressDelay={150}
        receivingStyle={styles.receiving}
        renderContent={({ viewState }) => {
          const receivingDrag = viewState && viewState.receivingDrag;
          const payload = receivingDrag && receivingDrag.payload;
          return (
            <View>
              <Text style={styles.textStyle} adjustsFontSizeToFit>
                {item.name}
              </Text>
            </View>
          );
        }}
      />
    );
  };

  return (
    <DraxView
      style={[styles.tChart, { opacity: opac, borderColor: glow }]}
      onReceiveDragDrop={(event) => {
        let payload = event.dragged.payload;

        if (tChartTeams[tChartID]) {
        } else if (payload[1] === "roster") {
          dispatch(
            insertTChart({ toIndex: tChartID, team: rosterTeams[payload[0]] })
          );
          dispatch(spliceRoster(payload[0]));
        } else if (payload[1] === "enroute") {
          dispatch(
            insertTChart({ toIndex: tChartID, team: enrouteTeams[payload[0]] })
          );
          dispatch(spliceEnroute(payload[0]));
        } else if (payload[1] === "ready") {
          dispatch(
            insertTChart({ toIndex: tChartID, team: readyTeams[payload[0]] })
          );
          dispatch(spliceReady(payload[0]));
        } else if (payload[1] === "tChartTeams" && !tChartTeams[tChartID]) {
          dispatch(
            moveTChart({
              toIndex: tChartID,
              fromIndex: payload[0],
              team: tChartTeams[payload[0]],
            })
          );
        }
        console.log("These are the teams" + JSON.stringify(team));
      }}
    >
      {TChartSlotDrax(task, 1, 2)}
      {TChartSlotDrax(team, 2, 1)}

      <View style={styles.tChartTimer}>
        <Timer size={"smallTimer"}></Timer>
      </View>
    </DraxView>
  );
}

const styles = StyleSheet.create({
  dragging: {
    width: 0,
    height: 0,
    textAlign: "center",
  },
  dragHover: {
    width: "15%",
    height: "auto",
    backgroundColor: "lightyellow",
    borderWidth: 2,
  },
  tChart: {
    // justifyContent: 'space-around',
    // alignItems: 'center',
    width: "25%",
    height: "22%",
    backgroundColor: "lightyellow",
    borderWidth: 1,
    margin: 5,
    padding: 5,
    paddingBottom: 0,
  },
  tChartSection: {
    textAlign: "center",
    flex: 1,
    borderWidth: 2,
    paddingBottom: 0,
  },
  tChartTimer: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  textStyle: {
    textAlign: "center",
    margin: 0,
    fontSize: 12.5,
  },
});

export default TChart;
