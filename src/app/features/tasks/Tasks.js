import { useSelector, useDispatch } from "react-redux";
import { spliceTask, pushTask } from "./tasksSlice";
import { spliceReady, pushReady } from "../readyTeams/readyTeamsSlice";
import {
  spliceTChartTeam,
  spliceTChartTask,
  insertTChartTeam,
  insertTChartTask,
  moveTChartTeam,
  moveTChartTasks,
} from "../tChart/tChartSlice";
import { DraxProvider, DraxView, DraxList } from "react-native-drax";
import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";
import React from "react";

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const tChartTasks = useSelector((state) => state.tChart.tasks);
  const dispatch = useDispatch();

  const [priority, setPriority] = React.useState(1);

  const TaskDrax = ({ item, index }) => {
    return (
      <DraxView
        style={[styles.task, { borderColor: item.border_color }]}
        animateSnapback={false}
        dragPayload={[index, item.currentList]}
        longPressDelay={0}
        receivingStyle={styles.receiving}
        renderContent={({ viewState }) => {
          const receivingDrag = viewState && viewState.receivingDrag;
          const payload = receivingDrag && receivingDrag.payload;
          return (
            <TouchableOpacity
              style={styles.taskText}
              onLongPress={() => console.log("wow")}
            >
              <Text style={styles.itemFont}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
        key={index}
      />
    );
  };

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

  return (
    <View style={styles.container}>
      <DraxView
        style={styles.taskComponent}
        onAccessibilityTap={() => console.log("does this work")}
        onReceiveDragDrop={(event) => {
          let payload = event.dragged.payload;

          if (payload[1] === "task") {
          } else if (payload[1] === "tChartTasks") {
            if (!checkDoubleTasks(tChartTasks[payload[0]][payload[2]].id)) {
              dispatch(pushTask(tChartTasks[payload[0]][payload[2]]));
            }
            dispatch(spliceTChartTask(payload));
          }
        }}
      >
        <View style={styles.switchButton}>
          <Switch
            onValueChange={() => {
              priority === 1 ? setPriority(2) : setPriority(1);
            }}
            value={priority === 1 ? false : true}
            thumbColor={priority === 1 ? "red" : "yellow"}
            trackColor={{ true: "white", false: "white" }}
          />
        </View>
        {tasks.map(
          (item, index) =>
            item.priority === priority && TaskDrax({ item, index })
        )}
      </DraxView>
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
  itemFont: {
    fontSize: 12.5,
    textAlign: "center",
  },
  switchButton: {
    width: "48%",
    height: "7.25%",
    backgroundColor: "lightgray",
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 100,
    margin: 2,
    marginVertical: 4,
  },
  task: {
    width: "48%",
    height: "7.25%",
    backgroundColor: "lightyellow",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 10,
    margin: "1%",
    marginVertical: "1.25%",
  },
  taskText: {
    textAlign: "center",
    textAlignVertical: "center",
  },
  taskComponent: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    alignContent: "flex-start",
    flex: 9,
    backgroundColor: "lightblue",
    borderWidth: 2,
  },
});
