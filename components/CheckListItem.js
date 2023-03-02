import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CheckListItem = (props) => {
  const title = props.title;
  const checkList = props.checkList;
  const bold = props.bold;
  const indent = props.indent;

  const [button, setButton] = React.useState();
  const [check, setCheck] = React.useState();

  return (
    <View>
      <View style={[styles.wrapper, indent && styles.extraLine]}>
        {/* check if unchecked, if checked, uncheck and unmark any buttons */}
        <TouchableOpacity
          style={styles.check}
          onPress={() =>
            check === true
              ? (setCheck(false), setButton("none"))
              : setCheck(true)
          }
        >
          <View style={styles.outterCheck}>
            {check === true && <View style={styles.innerCheck} />}
          </View>
          <Text style={bold && styles.bold}>{title}</Text>
        </TouchableOpacity>
        <View style={[styles.buttons, indent && styles.indent]}>
            {/* map out all items in the list into buttons, mark and unmark, when marking, unmark all others */}
          {checkList.map((choice) => (
            <TouchableOpacity
              key={choice}
              style={styles.button}
              onPress={() =>
                button === choice
                  ? (setButton("none"), setCheck(false))
                  : (setButton(choice), setCheck(true))
              }
            >
              <View style={styles.outterButton}>
                {button === choice && <View style={styles.innerButton} />}
              </View>
              <Text style={[styles.font, bold && styles.bold]}>{choice}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default CheckListItem;

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold",
  },
  button: {
    flexDirection: "row",
  },
  buttons: {
    flexDirection: "row",
    width: "100%",
    marginTop: 0,
    marginBottom: 0,
    alignItems: "center",
  },
  check: {
    flexDirection: "row",
  },
  extraLine: {
    flexDirection: "column",
  },
  indent: {
    left: 20,
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
    alignSelf: "center",
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
    alignSelf: "center",
    marginRight: 10,
    backgroundColor: "white",
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    marginTop: 0,
    marginBottom: 0,
  },
});
