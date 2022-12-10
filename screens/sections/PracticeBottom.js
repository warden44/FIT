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

const gestureRootViewStyle = { flex: 1 };

function PracticeBottom(props) {
  const myContext = React.useContext(AppContext);

  const TaskList = [
    {
      id: 1,
      name: "Fire Attack",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 2,
      name: "Support/Backup Lines",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 3,
      name: "FDC Connection",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 4,
      name: "Standpipe Connection",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 5,
      name: "Exposure",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 6,
      name: "Search/Rescue",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 7,
      name: "Evacuation",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 8,
      name: "Ventilation",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 9,
      name: "Water Supply",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 10,
      name: "Secondary Water Supply",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 11,
      name: "IRIT",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 12,
      name: "RIT",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 13,
      name: "Assign Safety Officeer",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 14,
      name: "Assign Accountability Officer",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 15,
      name: "Utilities",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 16,
      name: "Gas",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 17,
      name: "Electric",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 18,
      name: "Water",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 19,
      name: "Rehab",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 20,
      name: "Salvage",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 21,
      name: "Overhaul",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 22,
      name: "Medical",
      border_color: "red",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 23,
      name: "Traffic Control",
      border_color: "yellow",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 24,
      name: "Police",
      border_color: "yellow",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 25,
      name: "PIO",
      border_color: "yellow",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 26,
      name: "Investigators",
      border_color: "yellow",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 27,
      name: "Fire Marhsal",
      border_color: "yellow",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 28,
      name: "State Fire Marhsal",
      border_color: "yellow",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 29,
      name: "Health Department",
      border_color: "yellow",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 30,
      name: "Occupant Services",
      border_color: "yellow",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 31,
      name: "Board Up",
      border_color: "yellow",
      currentList: "task",
      tChart: 12,
    },
    {
      id: 32,
      name: "Red Cross",
      border_color: "yellow",
      currentList: "task",
      tChart: 12,
    },
  ];
  const DoneList = [
    {
      id: 13,
      name: "M",
      border_color: "#ffaaff",
      currentList: "done",
      tChart: 12,
    },
    {
      id: 14,
      name: "N",
      border_color: "#ffaaff",
      currentList: "done",
      tChart: 12,
    },
    {
      id: 15,
      name: "O",
      border_color: "#ffaaff",
      currentList: "done",
      tChart: 12,
    },
    {
      id: 16,
      name: "P",
      border_color: "#ffaaff",
      currentList: "done",
      tChart: 12,
    },
  ];
  const [currentTaskList, setCurrentTaskList] = React.useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const [dragDoneList, setDragDoneList] = React.useState(DoneList);
  const [dragTaskList, setDragTaskList] = React.useState(TaskList);

  const userSettings = {
    doneList: dragDoneList,
    taskList: dragTaskList,
    currentList: currentTaskList,
    setDragDoneList,
    setDragTaskList,
    setCurrentTaskList,
  };

  // const [currentTaskList, setCurrentTaskList] = React.useState([""]);

  const DragTaskComponent = ({ item, index }) => {
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
          if (event.dragged.payload[1] === "done") {
            let selected_item = dragDoneList[event.dragged.payload[0]];

            selected_item.currentList = "task"; //set current task to current task

            let newDragTaskList = [...dragTaskList];

            newDragTaskList.push(selected_item);
            setDragTaskList(newDragTaskList);

            let newDragDoneList = [...dragDoneList];
            newDragDoneList.splice(newDragDoneList.indexOf(selected_item), 1);

            setDragDoneList(newDragDoneList);
          } else if (event.dragged.payload[1] === "currentTask") {

            let selected_item = currentTaskList[event.dragged.payload[2]];

            selected_item.currentList = "task"; //set current task to current task
            selected_item.tChart = 12; //set chart id

            let newDragTaskList = [...dragTaskList];

            newDragTaskList.push(selected_item);
            setDragTaskList(newDragTaskList);

            let newCurrentTaskList = [...currentTaskList];
            newCurrentTaskList[event.dragged.payload[2]] = "";
            setCurrentTaskList(newCurrentTaskList);
          }
        }}
      />
    );
  };

  const ReceivingZoneUIComponent = ({ item, index }) => {
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
          if (event.dragged.payload[1] === "task") {
            let selected_item = dragTaskList[event.dragged.payload[0]];

            selected_item.currentList = "done"; //set current task to current task

            let newDragDoneList = [...dragDoneList];

            newDragDoneList.push(selected_item);
            setDragDoneList(newDragDoneList);

            let newDragTaskList = [...dragTaskList];
            newDragTaskList.splice(newDragTaskList.indexOf(selected_item), 1);

            setDragTaskList(newDragTaskList);
          } else if (event.dragged.payload[1] === "currentTask") {
            let selected_item = currentTaskList[event.dragged.payload[2]];

            selected_item.currentList = "done"; //set current task to current task
            selected_item.tChart = 12; //set chart id

            let newDragDoneList = [...dragDoneList];

            newDragDoneList.push(selected_item);
            setDragDoneList(newDragDoneList);

            let newCurrentTaskList = [...currentTaskList];
            newCurrentTaskList[event.dragged.payload[2]] = "";

            setCurrentTaskList(newCurrentTaskList);
          }
        }}
      />
    );
  };


  const FlatListItemSeparator = () => {
    return <View style={styles.itemSeparator} />;
  };

  const [bench, setBench] = React.useState("");
  const [checkBench, setCheckBench] = React.useState(false);

  return (
    <AppContext.Provider value={userSettings}>
      <GestureHandlerRootView style={gestureRootViewStyle}>
        <DraxProvider style={styles.container}>
          <View style={styles.todo}>
            {dragTaskList.map((item, index) =>
              DragTaskComponent({ item, index })
            )}
          </View>
          <View style={styles.done}>
            {dragDoneList.map((item, index) =>
              ReceivingZoneUIComponent({ item, index })
            )}
          </View>
          <View style={styles.rightBotom}>
            <View style={styles.benchmarks}>
              {/* Benchmarks */}
              <TouchableOpacity
                style={styles.check}
                onPress={() =>
                  checkBench === true
                    ? setCheckBench(false)
                    : setCheckBench(true)
                }
              >
                <View style={styles.outterCheck}>
                  {checkBench === true && <View style={styles.innerCheck} />}
                </View>
                <Text style={[styles.bold, styles.font]}>Benchmarks:</Text>
              </TouchableOpacity>

              {[
                '"All Clear" Complete',
                "Fire Under Control",
                "Loss Stopped",
              ].map((choice) => (
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
                    <Text style={[styles.bold, styles.smallFont]}>
                      {"\n"}PAR
                    </Text>
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.elapsed}>
              <Timer></Timer>
            </View>
            <View style={styles.teamCharts}>
              <TChart style={styles.tChart} tChartId={0} />
              <TChart style={styles.tChart} tChartId={1} />
              <TChart style={styles.tChart} tChartId={2} />
              <TChart style={styles.tChart} tChartId={3} />
              <TChart style={styles.tChart} tChartId={4} />
              <TChart style={styles.tChart} tChartId={5} />
              <TChart style={styles.tChart} tChartId={6} />
              <TChart style={styles.tChart} tChartId={7} />
              <TChart style={styles.tChart} tChartId={8} />
              <TChart style={styles.tChart} tChartId={9} />
              <TChart style={styles.tChart} tChartId={10} />
              <TChart style={styles.tChart} tChartId={11} />
            </View>
          </View>
        </DraxProvider>
      </GestureHandlerRootView>
    </AppContext.Provider>
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
    backgroundColor: "green",
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
    height: "100%",
    backgroundColor: "gray",
    borderWidth: 2,
  },
  elapsed: {
    width: "100%",
  },

  exampleText: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
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
    height: "95%",
    backgroundColor: "gray",
  },
  scroll: {
    //idk
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
    // shadowColor: "#171717",
    // shadowOffset: { width: -2, height: 4 },
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
    // elevation: 15,
    // shadowColor: 'white',
  },
  taskAdditional: {
    borderColor: "yellow",
  },
  taskText: {
    color: "blue",
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
  // timer: {
  //   flexDirection: "row",
  //   justifyContent: "flex-start",
  //   textAlign: 'center',
  // },
  // timerMain: {
  //   width: 75,
  //   height: 25,
  //   backgroundColor: 'lightgray',
  //   borderWidth: 1,
  //   borderRadius: 8,
  //   borderColor: 'red',
  //   margin: 5,
  //   paddingLeft: 5,
  //   paddingRight: 5,
  //   textAlign: 'center',
  //   fontSize: 24,
  //   },
  todo: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "20%",
    height: "98%",
    backgroundColor: "gray",
    borderWidth: 2,
  },
  tSection: {
    height: "25%",
  },
});

export default PracticeBottom;
