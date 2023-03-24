import { useSelector, useDispatch } from "react-redux";
import { spliceTask, pushTask } from "./tasksSlice";
import {
  spliceTChartTeam,
  spliceTChartTask,
  insertTChartTeam,
  insertTChartTask,
  moveTChartTeam,
  moveTChartTasks,
} from "../tChart/tChartSlice";
import { DraxProvider, DraxView, DraxList } from "react-native-drax";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
  Dimensions,
} from "react-native";
import React from "react";

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const tChartTasks = useSelector((state) => state.tChart.tasks);
  const dispatch = useDispatch();

  const [priority, setPriority] = React.useState(1);
  const [priorityText, setPriorityText] = React.useState("Primary");

  const TaskDrax = ({ item, index }) => {
    return (
      <DraxView
        style={[
          styles.task,
          { backgroundColor: item.background_color },
          item.background_color === "lightgray" ||
          item.background_color === "#FFF9A6"
            ? { borderColor: "black" }
            : null,
        ]}
        draggingStyle={{ backgroundColor: "#FFF9A6", borderColor: "black" }}
        hoverDraggingStyle={{}}
        animateSnapback={false}
        dragPayload={{ index: index, item: item }}
        longPressDelay={100}
        receivingStyle={styles.receiving}
        renderContent={({ viewState }) => {
          const receivingDrag = viewState && viewState.receivingDrag;
          const payload = receivingDrag && receivingDrag.payload;
          return (
            <View style={styles.taskInternal}>
              <TouchableOpacity
                style={styles.XTaskButton}
                onPress={() => {
                  console.log("yay")
                  if (!checkDoubleTasks(item.id)) {
                    console.log("checkigndouble")
                    dispatch(pushTask({ index: index, item: item }));
                  }
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    textAlignVertical: "center",
                  }}
                >
                  X
                </Text>
              </TouchableOpacity>

              <Text style={[styles.itemFont]}>{item.name}</Text>
            </View>
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
    <DraxView
      style={styles.container}
      onReceiveDragDrop={(event) => {
        let payload = event.dragged.payload;

        if (payload.item.currentList === "task") {
        } else if (payload.item.currentList === "tChartTasks") {
          if (!checkDoubleTasks(payload.item.id)) {
            dispatch(pushTask(payload));
          }
          dispatch(spliceTChartTask(payload));
        }
      }}
    >
      <View style={styles.switchButton}>
        <Switch
          style={{ flex: 0.75, alignItems: "flex-start" }}
          onValueChange={() => {
            priority === 1
              ? (setPriority(2), setPriorityText("Secondary"))
              : (setPriority(1), setPriorityText("Primary"));
          }}
          value={priority === 1 ? false : true}
          thumbColor={priority === 1 ? "red" : "red"}
          trackColor={{ true: "white", false: "white" }}
        />
        <Text
          style={{ flex: 1, textAlignVertical: "center", fontWeight: "bold" }}
        >
          {priorityText}
        </Text>
      </View>
      {tasks.map(
        (item, index) => item.priority === priority && TaskDrax({ item, index })
      )}
    </DraxView>
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
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "flex-start",
    backgroundColor: "lightblue",
    borderWidth: 2,
  },
  itemFont: {
    width: "80%",
    fontSize: 12.5,
    textAlign: "left",
    textAlignVertical: "center",
  },
  switchButton: {
    width: Dimensions.get("window").width * 0.115,
    height: Dimensions.get("window").height * 0.045,
    backgroundColor: "lightgray",
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 100,
    margin: 2,
    marginVertical: 4,
  },
  task: {
    width: Dimensions.get("window").width * 0.115,
    height: Dimensions.get("window").height * 0.045,
    backgroundColor: "#FFBEBE",
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderRadius: 5,
    borderColor: "red",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "1%",
    marginVertical: "1.25%",
  },
  taskInternal: {
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    width: "100%",
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
  XTaskButton: {
    backgroundColor: "gray",
    margin: "5%",
    height: "90%",
    width: "20%",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
});
