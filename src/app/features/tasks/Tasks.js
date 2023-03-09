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
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
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
              <Text style={styles.itemFont}>{item.name}</Text>
            </View>
          );
        }}
        key={index}
        onReceiveDragDrop={(event) => {}}
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
      })

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
        onReceiveDragDrop={(event) => {
          let payload = event.dragged.payload;

          if (payload[1] === "task") {
          } else if (payload[1] === "tChartTasks") {
            if (!checkDoubleTasks(tChartTasks[payload[0]][payload[2]].id)) {
              console.log("inside check");
              dispatch(pushTask(tChartTasks[payload[0]][payload[2]]));
            }
            dispatch(spliceTChartTask(payload));
          }
        }}
      >
        {tasks.map((item, index) =>
          item.priority === priority ? TaskDrax({ item, index }) : []
        )}
      </DraxView>
      <View style={styles.switchTasks}>
        <TouchableOpacity
          style={[
            styles.switchButton,
            priority === 1
              ? { backgroundColor: "red" }
              : { backgroundColor: "yellow" },
          ]}
          onPress={() => {
            priority === 1 ? setPriority(2) : setPriority(1);
          }}
        ></TouchableOpacity>
      </View>
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    height: "98%",
    width: "100%",
    justifyContent: "center",
  },
  itemFont: {
    fontSize: 12.5,
    textAlign: "center",
  },
  switchButton: {
    opacity: 0.75,
    flex: 1,
    borderRadius: 10,
    borderWidth: 3,
  },
  switchTasks: {
    flex: 1,
    marginLeft: 5,
  },
  task: {
    width: "48%",
    height: "7.25%",
    backgroundColor: "lightyellow",
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 10,
    margin: 2,
    marginTop: 4,
    marginBottom: 4,
  },
  taskComponent: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    // alignContent: "space-around",
    flex: 9,
    backgroundColor: "lightblue",
    borderWidth: 2,
  },
});
