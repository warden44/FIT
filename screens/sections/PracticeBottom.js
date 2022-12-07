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
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DraxProvider, DraxView, DraxList } from "react-native-drax";

const gestureRootViewStyle = { flex: 1 };

function PracticeBottom(props) {
  const draggableItemList = [
    {
      id: 1,
      name: "Fire Attack",
      background_color: "red",
    },
    {
      id: 2,
      name: "Support/Backup Lines",
      background_color: "pink",
    },
    {
      id: 3,
      name: "FDC Connection",
      background_color: "orange",
    },
    {
      id: 4,
      name: "Standpipe Connection",
      background_color: "#aaaaff",
    },
    {
      id: 5,
      name: "Exposure",
      background_color: "blue",
    },
    {
      id: 6,
      name: "Search/Rescue",
      background_color: "green",
    },
    {
      id: 7,
      name: "Evacuation",
      background_color: "brown",
    },
    {
      id: 8,
      name: "Ventilation",
      background_color: "#aaaaff",
    },
    {
      id: 9,
      name: "Water Supply",
      background_color: "red",
    },
    {
      id: 10,
      name: "Secondary Water Supply",
      background_color: "pink",
    },
    {
      id: 11,
      name: "IRIT",
      background_color: "orange",
    },
    {
      id: 12,
      name: "RIT",
      background_color: "#aaaaff",
    },
    {
      id: 13,
      name: "Assign Safety Officeer",
    },
    {
      id: 14,
      name: "Assign Accountability Officer",
    },
    {
      id: 15,
      name: "Utilities",
    },
    {
      id: 16,
      name: "Gas",
    },
    {
      id: 17,
      name: "Electric",
    },
    {
      id: 18,
      name: "Water",
    },
    {
      id: 19,
      name: "Rehab",
    },
    {
      id: 20,
      name: "Salvage",
    },
    {
      id: 21,
      name: "Overhaul",
    },
    {
      id: 22,
      name: "Medical",
    },
  ];
  const FirstReceivingItemList = [
    {
      id: 13,
      name: "M",
      background_color: "#ffaaff",
    },
    {
      id: 14,
      name: "N",
      background_color: "#ffaaff",
    },
    {
      id: 15,
      name: "O",
      background_color: "#ffaaff",
    },
    {
      id: 16,
      name: "P",
      background_color: "#ffaaff",
    },
  ];

  const [receivingItemList, setReceivedItemList] = React.useState(
    FirstReceivingItemList
  );
  const [dragItemMiddleList, setDragItemListMiddle] =
    React.useState(draggableItemList);

  const DragUIComponent = ({ item, index }) => {
    return (
      <DraxView
        style={[
          styles.centeredContent,
          styles.task,
          { backgroundColor: item.background_color },
        ]}
        draggingStyle={styles.dragging}
        dragReleasedStyle={styles.dragging}
        hoverDraggingStyle={styles.hoverDragging}
        dragPayload={index}
        longPressDelay={150}
        key={index}
      >
        <Text style={styles.textStyle}>{item.name}</Text>
      </DraxView>
    );
  };

  const ReceivingZoneUIComponent = ({ item, index }) => {
    return (
      <DraxView
        style={[
          styles.centeredContent,
          styles.receivingZone,
          { backgroundColor: item.background_color },
        ]}
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
          let selected_item = dragItemMiddleList[event.dragged.payload];
          console.log("onReceiveDragDrop::index", selected_item, index);
          console.log("onReceiveDragDrop :: payload", event.dragged.payload);
          let newReceivingItemList = [...receivingItemList];
          console.log(
            "onReceiveDragDrop :: newReceivingItemList",
            newReceivingItemList
          );
          newReceivingItemList[index] = selected_item;
          setReceivedItemList(newReceivingItemList);

          let newDragItemMiddleList = [...dragItemMiddleList];
          console.log(
            "onReceiveDragDrop :: newDragItemMiddleList 1",
            newDragItemMiddleList
          );
          newDragItemMiddleList[event.dragged.payload] =
            receivingItemList[index];
          console.log(
            "onReceiveDragDrop :: newDragItemMiddleList 2",
            newDragItemMiddleList
          );
          setDragItemListMiddle(newDragItemMiddleList);
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
    <GestureHandlerRootView style={gestureRootViewStyle}>
      <View style={styles.container}>
        <DraxProvider style={styles.container}>
          <DraxList
            style={styles.todo}
            data={dragItemMiddleList}
            renderItemContent={DragUIComponent}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={FlatListItemSeparator}
            scrollEnabled={true}
          />
          <View style={styles.done}>
            <ScrollView style={styles.scroll}>
              <View style={styles.receivingContainer}>
                {receivingItemList.map((item, index) =>
                  ReceivingZoneUIComponent({ item, index })
                )}
              </View>
            </ScrollView>
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
              <View style={styles.tChart}>
                <View style={styles.tChartSection}>
                  <Text>Task</Text>
                </View>
                <View style={styles.tChartSection}>
                  <Text>Team Name</Text>
                </View>
                <View style={styles.tChartTimer}>
                  <Timer size={"smallTimer"}></Timer>
                </View>
              </View>
              <View style={styles.tChart}></View>
              <View style={styles.tChart}></View>
              <View style={styles.tChart}></View>
              <View style={styles.tChart}></View>
              <View style={styles.tChart}></View>
              <View style={styles.tChart}></View>
              <View style={styles.tChart}></View>
              <View style={styles.tChart}></View>
              <View style={styles.tChart}></View>
              <View style={styles.tChart}></View>
              <View style={styles.tChart}></View>
            </View>
          </View>
        </DraxProvider>
      </View>
    </GestureHandlerRootView>
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
    width: "20%",
    height: "95%",
    backgroundColor: "brown",
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
    fontSize: 20,
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "red",
    margin: 10,
    marginTop: 5,
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
    borderWidth: 1,
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
    width: "20%",
    height: "95%",
    backgroundColor: "gray",
    borderWidth: 2,
  },
  tSection: {
    height: "25%",
  },
});

export default PracticeBottom;
