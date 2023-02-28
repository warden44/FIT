import { useSelector, useDispatch } from "react-redux";
import { spliceTask, pushTask } from "./tasksSlice";
import { spliceReady, pushReady } from "../readyTeams/readyTeamsSlice";
import { spliceTChart, insertTChart, moveTChart } from "../tChart/tChartSlice";

import { DraxProvider, DraxView, DraxList } from "react-native-drax";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const tChartTasks = useSelector((state) => state.tChart.tasks);
  const dispatch = useDispatch();

  const priority = 1;

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
  return (
    <DraxView
      style={styles.tasksContainer}
      onReceiveDragDrop={(event) => {
        let payload = event.dragged.payload;

        if (payload[1] === "task") {
        } else if (payload[1] === "TChartTasks") {
          dispatch(pushTask(tChartTasks - payload[0]));
        }
      }}
    >
      {tasks.map((item, index) =>
        item.priority === priority ? TaskDrax({ item, index }) : []
      )}
    </DraxView>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  itemFont: {
    fontSize: 12.5,
    textAlign: "center",
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
  tasksContainer: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
    width: "20%",
    height: "98%",
    backgroundColor: "lightblue",
    borderWidth: 2,
  },
});
