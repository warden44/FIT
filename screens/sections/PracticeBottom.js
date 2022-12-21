//refactor draxview onReceiveDragDrop section into functions that :
//1. Check where dragged item is coming from
//2. Creates draggedItem from fromList based on payload... maybe move creating tempFrom and tempTo lists to top
//2. Sets item's currentList of dragged item to receiving list || if from currentTask, also set item's tChartId to 12
//3. Creates tempTo list
//4. Pushes draggedItem to tempTo list
//5. set toList to tempToList
//6. set tempFrom list
//7. splice payload's index from tempFromList || if from currentTask, instead set index to empty string
//8. set fromList to tempFromList
// if setFunction cant be passed as param, have function return tempToList, and use setToList on the return
// params... payload, toList, setToList, toListName

import * as React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Timer from "../../components/Timer";
import TChart from "../../components/TChart";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DraxProvider, DraxView, DraxList } from "react-native-drax";
import AppContext from "../../components/AppContext";
import * as functs from "../../utils/MoveItem";

const gestureRootViewStyle = { flex: 1 };

function PracticeBottom(props) {
  const myContext = React.useContext(AppContext);

  const TodoTasks = ({ item, index }) => {
    return (
      <DraxView
        style={[styles.task, { borderColor: item.border_color }]}
        animateSnapback={false}
        draggingStyle={styles.dragging}
        dragReleasedStyle={styles.dragging}
        hoverDraggingStyle={styles.hoverDragging}
        dragPayload={[index, item.currentList]}
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
        key={index}
        onReceiveDragDrop={(event) => {
          myContext.moveItem(
            myContext.dragTaskList,
            myContext.setDragTaskList,
            event.dragged.payload,
            "task"
          );
        }}
      />
    );
  };

  const DoneTasks = ({ item, index }) => {
    return (
      <DraxView
        style={[styles.task, { borderColor: item.border_color }]}
        animateSnapback={false}
        draggingStyle={styles.dragging}
        dragReleasedStyle={styles.dragging}
        hoverDraggingStyle={styles.hoverDragging}
        dragPayload={[index, item.currentList]}
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
        key={index}
        onReceiveDragDrop={(event) => {
          myContext.moveItem(
            myContext.dragDoneList,
            myContext.setDragDoneList,
            event.dragged.payload,
            "done"
          );
        }}
      />
    );
  };

  const [bench, setBench] = React.useState("");
  const [checkBench, setCheckBench] = React.useState(false);

  return (
    <View style={styles.container}>
      <DraxView
        style={styles.todo}
        onReceiveDragDrop={(event) => {
          myContext.moveItem(
            myContext.dragTaskList,
            myContext.setDragTaskList,
            event.dragged.payload,
            "task"
          );
        }}
      >
        {myContext.dragTaskList.map((item, index) =>
          TodoTasks({ item, index })
        )}
      </DraxView>
      <DraxView
        style={styles.done}
        onReceiveDragDrop={(event) => {
          myContext.moveItem(
            myContext.dragDoneList,
            myContext.setDragDoneList,
            event.dragged.payload,
            "done"
          );
        }}
      >
        {myContext.dragDoneList.map((item, index) =>
          DoneTasks({ item, index })
        )}
      </DraxView>
      <View style={styles.rightBotom}>
        <View style={styles.benchmarks}>
          {/* Benchmarks */}
          <TouchableOpacity
            style={styles.check}
            onPress={() =>
              checkBench === true ? setCheckBench(false) : setCheckBench(true)
            }
          >
            <View style={styles.outterCheck}>
              {checkBench === true && <View style={styles.innerCheck} />}
            </View>
            <Text style={[styles.bold, styles.font]}>Benchmarks:</Text>
          </TouchableOpacity>

          {['"All Clear" Complete', "Fire Under Control", "Loss Stopped"].map(
            (choice) => (
              <TouchableOpacity
                key={choice}
                style={styles.button}
                onPress={() =>
                  bench === choice ? setBench("none") : setBench(choice)
                }
              >
                <View style={styles.outterButton}>
                  {bench === choice && <View style={styles.innerButton} />}
                </View>
                <Text style={[styles.font, styles.bold]}>
                  {choice}
                  <Text style={[styles.bold, styles.smallFont]}>{"\n"}PAR</Text>
                </Text>
              </TouchableOpacity>
            )
          )}
        </View>
        <View style={styles.elapsed}>
          <Timer></Timer>
        </View>
        <View style={styles.teamCharts}>
          {myContext.currentTaskList.map((task, index) => (
            <TChart style={styles.tChart} key={index} tChartId={index} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  benchmarks: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    marginTop: 0,
    marginBottom: 0,
    paddingRight: 10,
  },
  bold: {
    fontWeight: "bold",
  },
  button: {
    flexDirection: "row",
  },
  check: {
    flexDirection: "row",
  },
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  done: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "20%",
    height: "98%",
    backgroundColor: "lightgreen",
    borderWidth: 2,
  },
  elapsed: {
    width: "100%",
  },
  font: {
    fontSize: 14,
    textAlign: "center",
  },
  innerButton: {
    width: 10,
    height: 10,
    backgroundColor: "blue",
    borderRadius: 10,
  },
  innerCheck: {
    width: 10,
    height: 10,
    backgroundColor: "red",
  },
  outterButton: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    marginTop: 2,
    marginLeft: 10,
    marginRight: 5,
  },
  outterCheck: {
    width: 15,
    height: 15,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    marginTop: 2,
    marginRight: 10,
  },
  rightBotom: {
    width: "55%",
    height: "98%",
    backgroundColor: "lightgray",
    borderWidth: 2,
  },
  smallFont: {
    fontSize: 10,
  },
  task: {
    width: "31.5%",
    fontSize: 20,
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 10,
    margin: 2,
    marginTop: 4,
    marginBottom: 4,
  },
  taskAdditional: {
    borderColor: "yellow",
  },
  teamCharts: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
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
  todo: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "20%",
    height: "98%",
    backgroundColor: "lightblue",
    borderWidth: 2,
  },
  tSection: {
    height: "25%",
  },
});

export default PracticeBottom;
