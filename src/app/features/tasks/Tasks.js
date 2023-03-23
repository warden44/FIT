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
          item.background_color === "gray" ||
          item.background_color === "#FFEA00"
            ? { borderColor: "black" }
            : null,
        ]}
        draggingStyle={{ backgroundColor: "#FFEA00", borderColor: "black" }}
        hoverDraggingStyle={{}}
        animateSnapback={false}
        dragPayload={{index: index, item: item}}
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
          style={{flex: .75, alignItems: "flex-start"}}
            onValueChange={() => {
              priority === 1 ? (setPriority(2), setPriorityText("Secondary")) : (setPriority(1), setPriorityText("Primary"));
            }}
            value={priority === 1 ? false : true}
            thumbColor={priority === 1 ? "red" : "red"}
            trackColor={{ true: "white", false: "white" }}
          />
            <Text style={{flex: 1, textAlignVertical: "center"}}>{priorityText}</Text>
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
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 100,
    margin: 2,
    marginVertical: 4,
  },
  task: {
    width: Dimensions.get("window").width * 0.115,
    height: Dimensions.get("window").height * 0.0425,
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
