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
    let task = myContext.currentTaskList[tChartId]; //this is basically the index

    let team = myContext.currentTeamList[tChartId];

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
        style={[styles.tChartSection, { borderColor: item.border_color, borderBottomWidth: bottomBorder, borderTopWidth: topBorder }]}
        animateSnapback={false}
        draggingStyle={styles.dragging}
        dragReleasedStyle={styles.dragReleased}
        hoverDraggingStyle={styles.dragHover}
        dragPayload={[item.tChart, item.currentList]}
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
