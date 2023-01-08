import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Mayday = () => {
  return (
    <View style={styles.mayday}>
    <Text style={styles.maydayHeader}>
      "MAYDAY" Lost or Trapped FireFighters
    </Text>
    <Text style={styles.chartSection}>
      <Text style={styles.highlight}>E</Text>mergency Traffic Declared
    </Text>
    <Text style={styles.chartSection}>
      <Text style={styles.highlight}>R</Text>IT Deployed
    </Text>
    <Text style={styles.chartSection}>
      <Text style={styles.highlight}>U</Text>pgrade the assignment
    </Text>
    <Text style={styles.chartSection}>
      <Text style={styles.highlight}>P</Text>AR on ALL crews in the hazard
      zone
    </Text>
    <Text style={styles.chartSection}>
      <Text style={styles.highlight}>T</Text>actical Channel assigned for
      the specific fire
    </Text>
    <Text style={styles.chartSection}>
      <Text style={styles.highlight}>T</Text>ools needed
    </Text>
    <Text style={styles.chartSection}>
      <Text style={styles.highlight}>T</Text>ime the MAYDAY was called
    </Text>
  </View>
  )
}

export default Mayday

const styles = StyleSheet.create({
    mayday: {
        width: "25%",
        height: "99%",
        backgroundColor: "yellow",
        borderWidth: 2,
      },
      maydayHeader: {
        flex: 1,
        color: "white",
        backgroundColor: "red",
        fontWeight: "bold",
        textAlign: "center",
        paddingLeft: 5,
        paddingRight: 5,
      },
})