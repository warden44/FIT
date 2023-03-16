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

  const [keyboardOpen, setKeyBoardOpen] = React.useState(false);

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

  const TChartSlotDrax = (item, index) => {

    return (
      <DraxView
        style={[
          styles.tChartItem,
          { borderColor: "black" },

          item.currentList === "tChartTasks"
            ? { borderColor: "red" }
            : item.currentList === "tChartTeams"
            ? { borderColor: "green" }
            : null,
        ]}
        key={index}
        animateSnapback={false}
        draggingStyle={{width: 0, height: 0, borderWidth: 0}}
        hoverStyle={{width: "30%", height: "30%",}}
        dragPayload={[tChartID, item.currentList, index]}
        longPressDelay={150}
        receivingStyle={styles.receiving}
        renderContent={({ viewState }) => {
          return (
            <View style={{ backgroundColor: "green" }}>
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
          styles.tChartSectionMT,
          customTask && { borderColor: "red", backgroundColor: "lightgray" },
          keyboardOpen && {
            position: "absolute",
            height: 50,
            width: "100%",
            bottom: 5,
            backgroundColor: "lightyellow",
            borderWidth: 5,
            zIndex: 1,
          },
        ]}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TextInput
          style={{ flex: 5, textAlign: "center", opacity: 5 }}
          placeholder="+"
          selectTextOnFocus={true}
          onFocus={() => (
            setKeyBoardOpen(true), setOpac(1), console.log(keyboardOpen)
          )}
          onSubmitEditing={({ nativeEvent: { text, eventCount, target } }) => {
            setKeyBoardOpen(false);
            if (text) {
              setCustomTask("Custom - " + text);
            }
          }}
          disableFullscreenUI={true}
        >
          <Text>{customTask}</Text>
        </TextInput>
      </View>
    );
  };
  const TChartMT = () => {
    return <View style={styles.tChartSectionMT}></View>;
  };

  return (
    <DraxView
      style={[styles.tChart, { opacity: opac, borderColor: glow }]}
      onReceiveDragDrop={(event) => {
        let payload = event.dragged.payload;

        //////if a team
        if (
          team.length > 2 ||
          (payload[0] === tChartID && payload[1] === "tChartTeams")
        ) {
        } else if (payload[1] === "roster") {
          dispatch(
            insertTChartTeam({
              toIndex: tChartID,
              team: rosterTeams[payload[0]],
            })
          );
          dispatch(spliceRoster(payload[0]));
        } else if (payload[1] === "enroute") {
          dispatch(
            insertTChartTeam({
              toIndex: tChartID,
              team: enrouteTeams[payload[0]],
            })
          );
          dispatch(spliceEnroute(payload[0]));
        } else if (payload[1] === "ready") {
          dispatch(
            insertTChartTeam({
              toIndex: tChartID,
              team: readyTeams[payload[0]],
            })
          );
          dispatch(spliceReady(payload[0]));
        } else if (payload[1] === "tChartTeams") {
          dispatch(
            insertTChartTeam({
              toIndex: tChartID,
              team: tChartTeams[payload[0]][payload[2]],
            })
          );
          dispatch(spliceTChartTeam(payload));
        }
        //////////////////////////////if a task
        if (
          task.length > 1 ||
          (payload[0] === tChartID && payload[1] === "tChartTasks")
        ) {
        } else if (payload[1] === "task") {
          setCustomTask();
          dispatch(
            insertTChartTask({ toIndex: tChartID, task: tasks[payload[0]] })
          );
          dispatch(spliceTask(payload[0]));
        } else if (payload[1] === "tChartTasks") {
          setCustomTask();
          dispatch(
            insertTChartTask({
              toIndex: tChartID,
              task: tChartTasks[payload[0]][payload[2]],
            })
          );
          dispatch(spliceTChartTask(payload));
        }
      }}
    >
      {team.length > 0 ? (
        <View style={styles.tChartSection}>
          {team.map((item, index) => TChartSlotDrax(item, index))}
        </View>
      ) : (
        TChartMT()
      )}

      {task.length > 0 ? (
        <View style={styles.tChartSection}>
          {task.map((item, index) => TChartSlotDrax(item, index))}
        </View>
      ) : tChartID < 16 - 4 ? (
        TChartMT()
      ) : (
        TChartCustomTask()
      )}
      <View style={styles.xButtonTimer}>
        <TouchableOpacity
          style={[styles.xButton, { backgroundColor: xBackground }]}
          onPress={() => (
            team.forEach((item, index) => {
              dispatch(pushEnroute(tChartTeams[tChartID][index]));
              dispatch(spliceTChartTeam([tChartID, item.currentList, 0]));
            }),
            task.forEach((item, index) => {
              if (!checkDoubleTasks(item.id)) {
                dispatch(pushTask(item));
              }
              dispatch(spliceTChartTask([tChartID, item.currentList, 0]));
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
  dragging: {
    color: "white",
    fontWeight: "bold",
    fontSize: 50,
    borderColor: "black",
    display: "none",
  },
  dragHover: {
    // width: "15%",
    // height: "auto",
    // backgroundColor: "lightyellow",
    // borderWidth: 2,
    display: "flex",
  },
  tChart: {
    // justifyContent: 'space-around',
    // alignItems: 'center',
    width: "20%",
    height: "22%",
    backgroundColor: "lightyellow",
    borderWidth: 3,
    margin: 5,
    padding: 2,
  },
  tChartItem: {
    textAlign: "center",
    flex: 1,
    borderWidth: 2,
    margin: 1,
  },
  tChartSection: {
    flexDirection: "row",
    flex: 1,
    textAlign: "center",
  },
  tChartSectionMT: {
    flex: 1,
    flexDirection: "row",
    textAlign: "center",
    borderWidth: 2,
    margin: 1,
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
