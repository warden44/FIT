import * as React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
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

  const [filter, setFilter] = React.useState("red");

  const TodoTasks = ({ item, index }) => {
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
          item.border_color === filter ? TodoTasks({ item, index }) : []
        )}
      </DraxView>
      <View style={[styles.switchTasks]}>
        <TouchableOpacity
          style={[styles.switchButton, { backgroundColor: filter }]}
          onPress={() => {
            filter === "red" ? setFilter("yellow") : setFilter("red");
            console.log(filter);
          }}
        ></TouchableOpacity>
      </View>

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
          item.border_color === filter ? DoneTasks({ item, index }) : []
        )}
      </DraxView>
      <View style={styles.rightBotom}>
        <View style={styles.benchmarks}>
          {/* Benchmarks */}
          <TouchableOpacity
            style={styles.check}
            onPress={() =>
              checkBench === true
                ? (setCheckBench(false), setBench("none"))
                : setCheckBench(true)
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
                  bench === choice
                    ? (setBench("none"), setCheckBench(false))
                    : (setBench(choice), setCheckBench(true))
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
    alignContent: "center",
    width: "20%",
    height: "98%",
    backgroundColor: "lightgreen",
    borderWidth: 2,
  },
  dragging: {
    width: 0,
    height: 0,
    borderWidth: 0,
    textAlign: "center",
  },
  dragHover: {
    width: "15%",
    height: "auto",
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
  itemFont: {
    fontSize: 12.5,
    textAlign: "center",
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
    backgroundColor: "white",
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
    backgroundColor: "white",
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
  switchButton: {
    opacity: 0.75,
    flex: 1,
    borderRadius: 10,
    borderWidth: 3,
  },
  switchTasks: {
    width: "2%",
    height: "98%",
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
    alignContent: "center",
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
