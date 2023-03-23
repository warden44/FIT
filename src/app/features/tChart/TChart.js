// I want each team to be draggable
// push item to end of array only allowing for two, if already has two, do nothing

import { useSelector, useDispatch } from "react-redux";
import { spliceRoster, insertRoster } from "../rosterTeams/rosterTeamsSlice";
import { spliceEnroute, pushEnroute } from "../enrouteTeams/enrouteTeamsSlice";
import { spliceReady, pushReady } from "../readyTeams/readyTeamsSlice";
import { spliceTask, pushTask } from "../tasks/tasksSlice";
import {
  spliceTChartTeam,
  spliceTChartTask,
  insertTChartTeam,
  insertTChartTask,
  moveTChartTeam,
  moveTChartTask,
} from "./tChartSlice";

import * as React from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Timer from "../Timer";
import { DraxProvider, DraxView, DraxList } from "react-native-drax";
import { useEffect } from "react";

function TChart(props) {
  var tChartID = props.tChartID;
  const rosterTeams = useSelector((state) => state.rosterTeams.teams);
  const enrouteTeams = useSelector((state) => state.enrouteTeams.teams);
  const readyTeams = useSelector((state) => state.readyTeams.teams);
  const tasks = useSelector((state) => state.tasks.tasks);
  const tChartTeams = useSelector((state) => state.tChart.teams);
  const tChartTasks = useSelector((state) => state.tChart.tasks);
  const dispatch = useDispatch();

  let task = tChartTasks[tChartID];
  let team = tChartTeams[tChartID];
  const [customTask, setCustomTask] = React.useState();

  let timerRef = React.useRef();

  const [active, setActive] = React.useState(false);
  const [opac, setOpac] = React.useState(0.25);
  const [glow, setGlow] = React.useState("black");
  const [xBackground, setXBackground] = React.useState("gray");

  React.useEffect(() => {
    if (team.length || task.length || customTask) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [team.length || task.length || customTask]);

  React.useEffect(() => {
    if (active) {
      setOpac(1);
      setGlow("black");
      setXBackground("red");
      timerRef.current.resetTimer();
      timerRef.current.resetDate();
      timerRef.current.startTimer();
    } else {
      setOpac(0.25);
      setGlow("black");
      setXBackground("gray");
      timerRef.current.stopTimer();
    }
  }, [active]);

  const checkDoubleTasks = (id) => {
    let count = 0;
    tChartTasks.forEach((tChart) => {
      tChart.forEach((task) => {
        if (task.id === id) {
          count++;
        }
      });
    });
    if (count > 1) {
      return true;
    } else {
      return false;
    }
  };

  const TChartDraxItem = (item, index) => {
    return (
      <DraxView
        style={[
          styles.tChartItem,
          item.currentList === "tChartTasks" && styles.tChartTask,
        ]}
        key={index}
        animateSnapback={false}
        draggingStyle={{
          position: "absolute",
          width: 0,
          height: 0,
          borderWidth: 0,
        }}
        hoverDraggingStyle={{
          width:
            item.currentList === "tChartTasks"
              ? Dimensions.get("window").width * 0.115
              : Dimensions.get("window").width * 0.04,
          height: Dimensions.get("window").height * 0.03,
        }}
        dragPayload={{ index: index, item: item, tChartID: tChartID }}
        longPressDelay={0}
        receivingStyle={styles.receiving}
        renderContent={({ viewState }) => {
          return (
            <View style={{}}>
              <Text style={styles.textStyle}>{item.name}</Text>
            </View>
          );
        }}
      />
    );
  };

  const TChartCustomTask = () => {
    return (
      <View
        style={[
          styles.tChartCustomTask,
          customTask && { borderColor: "red", backgroundColor: "lightgray" },
        ]}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TextInput
          style={{ flex: 5, textAlign: "center", opacity: 5 }}
          placeholder="Custom"
          selectTextOnFocus={true}
          onFocus={() => setOpac(1)}
          onSubmitEditing={({ nativeEvent: { text } }) => {
            if (text) {
              setCustomTask(text);
            } else {
              setCustomTask();
              setOpac(0.25);
            }
          }}
          disableFullscreenUI={true}
        >
          <Text>{customTask}</Text>
        </TextInput>
      </View>
    );
  };

  return (
    <DraxView
      style={[styles.tChartContainer, { opacity: opac, borderColor: glow }]}
      onReceiveDragDrop={(event) => {
        let payload = event.dragged.payload;

        //////if a team
        if (
          team.length > 3 ||
          (payload.tChartID === tChartID && payload.item.currentList === "tChartTeams")
        ) {
        } else if (payload.item.currentList === "roster") {
          console.log("ayy");
          dispatch(
            insertTChartTeam({
              toIndex: tChartID,
              item: payload.item,
            })
          );
          dispatch(spliceRoster(payload));
        } else if (payload.item.currentList === "enroute") {
          dispatch(
            insertTChartTeam({
              toIndex: tChartID,
              item: payload.item,
            })
          );
          dispatch(spliceEnroute(payload));
        } else if (payload.item.currentList === "ready") {
          dispatch(
            insertTChartTeam({
              toIndex: tChartID,
              item: payload.item,
            })
          );
          dispatch(spliceReady(payload));
        } else if (payload.item.currentList === "tChartTeams") {
          dispatch(
            insertTChartTeam({
              toIndex: tChartID,
              item: payload.item,
            })
          );
          dispatch(spliceTChartTeam(payload));
        }
        //////////////////////////////if a task
        if (
          task.length > 1 ||
          (payload.tChartID === tChartID && payload.item.currentList === "tChartTasks")
        ) {
        } else if (payload.item.currentList === "task") {
          setCustomTask();
          dispatch(
            insertTChartTask({ toIndex: tChartID, item: payload.item })
          );
          dispatch(spliceTask(payload));
        } else if (payload.item.currentList === "tChartTasks") {
          setCustomTask();
          dispatch(
            insertTChartTask({
              toIndex: tChartID,
              item: payload.item,
            })
          );
          dispatch(spliceTChartTask(payload));
        }
      }}
    >
      <View style={styles.tChartSectionMT}>
        {team.map((item, index) => TChartDraxItem(item, index))}
      </View>
      <View style={styles.tChartSectionMT}>
        {tChartID < 16 - 16 || task.length > 0
          ? task.map((item, index) => TChartDraxItem(item, index))
          : TChartCustomTask()}
      </View>
      <View style={styles.xButtonTimer}>
        <TouchableOpacity
          style={[styles.xButton, { backgroundColor: xBackground }]}
          onPress={() => (
            team.forEach((item, index) => {
              dispatch(pushReady({item: tChartTeams[tChartID][index]}));
              dispatch(spliceTChartTeam({tChartID: tChartID, index: 0}));
            }),
            task.forEach((item, index) => {
              if (!checkDoubleTasks(item.id)) {
                dispatch(pushTask({item: item}));
              }
              dispatch(spliceTChartTask({tChartID: tChartID, index: 0}));
            }),
            setCustomTask()
          )}
        >
          <Text style={styles.xButtonText}>X</Text>
        </TouchableOpacity>

        <View style={styles.tChartTimer}>
          <Timer size={"smallTimer"} reference={timerRef}></Timer>
        </View>
      </View>
    </DraxView>
  );
}

const styles = StyleSheet.create({
  tChartContainer: {
    // justifyContent: 'space-around',
    // alignItems: 'center',
    width: "100%",
    height: "100%",
    backgroundColor: "lightblue",
    borderWidth: 2,
    padding: 1,
  },
  tChartItem: {
    textAlign: "center",
    borderRadius: 5,
    backgroundColor: "lightgreen",
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: "green",
    width: Dimensions.get("window").width * 0.04,
    height: "100%",
    marginHorizontal: "1%",
  },
  tChartTask: {
    borderColor: "red",
    width: Dimensions.get("window").width * 0.07,
    flex: 1,
    backgroundColor: "#FFBEBE",
  },
  tChartCustomTask: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    textAlign: "center",
    margin: 1,
    padding: 1,
  },
  tChartSection: {
    flexDirection: "row",
    flex: 1,
    textAlign: "center",
  },
  tChartSectionMT: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    textAlign: "center",
    borderWidth: 2,
    margin: 1,
    padding: 1,
  },
  tChartTimer: {
    flex: 5,
  },
  textStyle: {
    textAlign: "center",
    margin: 0,
  },
  xButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "left",
    borderWidth: 1,
  },
  xButtonText: {
    fontWeight: "bold",
  },
  xButtonTimer: {
    flexDirection: "row",
    flex: 1,
    margin: 1,
    marginHorizontal: 2,
    height: "100%",
  },
});

export default TChart;
