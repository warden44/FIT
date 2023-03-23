import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Mayday = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>
          "MAYDAY" Lost or Trapped FireFighters
        </Text>
      </View>
      <View style={styles.direction}>
        <Text style={styles.directionText}>
          <Text style={styles.highlight}>E</Text>mergency Traffic Declared
        </Text>
      </View>
      <View style={styles.direction}>
        <Text style={styles.directionText}>
          <Text style={styles.highlight}>R</Text>IT Deployed
        </Text>
      </View>
      <View style={styles.direction}>
        <Text style={styles.directionText}>
          <Text style={styles.highlight}>U</Text>pgrade Assignment
        </Text>
      </View>
      <View style={styles.direction}>
        <Text style={styles.directionText}>
          <Text style={styles.highlight}>P</Text>AR on ALL crews in the hazard zone
        </Text>
      </View>
      <View style={styles.direction}>
        <Text style={styles.directionText}>
          <Text style={styles.highlight}>T</Text>actical Channel assigned for the specific fire
        </Text>
      </View>
      <View style={styles.direction}>
        <Text style={styles.directionText}>
          <Text style={styles.highlight}>T</Text>ools needed
        </Text>
      </View>
      <View style={styles.direction}>
        <Text style={styles.directionText}>
          <Text style={styles.highlight}>T</Text>ime the MAYDAY was called
        </Text>
      </View>
    </View>
  );
};

export default Mayday;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        flexDirection: "column",
        borderWidth: 2
    },
    title: {
        flex: 1,
        backgroundColor: "red",
        padding: 2,

    },
    titleText: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
    },
    direction: {
        flex: 1,
        borderTopWidth: 1,
        backgroundColor: "yellow",
        padding: 2,
    },
    highlight: {
        color: "red",
        fontWeight: "bold",
    }

});
