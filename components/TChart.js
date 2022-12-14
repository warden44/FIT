//How to get tchart components to work
//differentiate each tchart component through props.tchartID
//create global list of lists corresponding to the tcharts
//when adding task to tchart, set new task attribute "currentTChart" equal to tChartId
//when receiving task from tChart, remove task from list index of the tChart or currentTChart, and set currentTChart to 12

import * as React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Timer from "./Timer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DraxProvider, DraxView, DraxList } from "react-native-drax";
import AppContext from "./AppContext";

function TChart(props) {
  const myContext = React.useContext(AppContext);

  var tChartId = props.tChartId;
  let item = myContext.currentTaskList[tChartId]; //this is basically the index

  let team = myContext.currentTeamList[tChartId];


  const recievingTaskZone = () => {
    return (
      <DraxView
        style={[styles.tChartSection, { borderColor: item.border_color }]}
        animateSnapback={false}
        draggingStyle={styles.dragging}
        dragReleasedStyle={styles.dragging}
        hoverDraggingStyle={styles.hoverDragging}
        dragPayload={[item.tChart, item.currentList]}
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
        onReceiveDragDrop={(event) => {
          if (
            event.dragged.payload[1] === "task" ||
            event.dragged.payload[1] === "done" ||
            event.dragged.payload[1] === "currentTask"
          ) {
            if (!myContext.currentTaskList[tChartId]) {
              myContext.moveItem(
                myContext.currentTaskList,
                myContext.setCurrentTaskList,
                event.dragged.payload,
                "currentTask",
                tChartId
              );
            } else {
              myContext.moveItem(
                myContext.currentTaskList,
                myContext.setCurrentTaskList,
                event.dragged.payload,
                "currentTask",
                tChartId,
                "pushReplace"
              );
            }
          } else {
            if (!myContext.currentTeamList[tChartId]) {
              myContext.moveTeam(
                myContext.currentTeamList,
                myContext.setCurrentTeamList,
                event.dragged.payload,
                "currentTeam",
                tChartId
              );
            } else {
              myContext.moveTeam(
                myContext.currentTeamList,
                myContext.setCurrentTeamList,
                event.dragged.payload,
                "currentTeam",
                tChartId,
                "pushReplace"
              );
            }
          }
        }}
      />
    );
  };

  const receivingTeamZone = () => {
    return (
      <DraxView
        style={[styles.tChartSection, { borderColor: team.border_color }]}
        animateSnapback={false}
        draggingStyle={styles.dragging}
        dragReleasedStyle={styles.dragging}
        hoverDraggingStyle={styles.hoverDragging}
        dragPayload={[team.tChart, team.currentList]}
        longPressDelay={150}
        receivingStyle={styles.receiving}
        renderContent={({ viewState }) => {
          const receivingDrag = viewState && viewState.receivingDrag;
          const payload = receivingDrag && receivingDrag.payload;
          return (
            <View>
              <Text style={styles.textStyle}>{team.name}</Text>
            </View>
          );
        }}
        onReceiveDragDrop={(event) => {
          if (
            event.dragged.payload[1] === "task" ||
            event.dragged.payload[1] === "done" ||
            event.dragged.payload[1] === "currentTask"
          ) {
            if (!myContext.currentTaskList[tChartId]) {
              myContext.moveItem(
                myContext.currentTaskList,
                myContext.setCurrentTaskList,
                event.dragged.payload,
                "currentTask",
                tChartId
              );
            } else {
              myContext.moveItem(
                myContext.currentTaskList,
                myContext.setCurrentTaskList,
                event.dragged.payload,
                "currentTask",
                tChartId,
                "pushReplace"
              );
            }
          } else {
            if (!myContext.currentTeamList[tChartId]) {
              myContext.moveTeam(
                myContext.currentTeamList,
                myContext.setCurrentTeamList,
                event.dragged.payload,
                "currentTeam",
                tChartId
              );
            } else {
              myContext.moveTeam(
                myContext.currentTeamList,
                myContext.setCurrentTeamList,
                event.dragged.payload,
                "currentTeam",
                tChartId,
                "pushReplace"
              );
            }
          }
        }}
      />
    );
  };


  return (
    <View style={styles.tChart}>
      {recievingTaskZone()}
      {receivingTeamZone()}

      <View style={styles.tChartTimer}>
        <Timer size={"smallTimer"}></Timer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tChart: {
    // justifyContent: 'space-around',
    // alignItems: 'center',
    width: "25%",
    height: "22%",
    backgroundColor: "white",
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
});

export default TChart;
