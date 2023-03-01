import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const TChartEmptySlot = () => {
    return (
      <View style={[styles.tChartSection, { borderColor: "black" }]}>
        <TextInput style={[styles.textStyle, {zIndex:99999}]} adjustsFontSizeToFit>
          
        </TextInput>
      </View>
    );
  };

export default TChartEmptySlot

const styles = StyleSheet.create({  tChartSection: {
    textAlign: "center",
    flex: 1,
    borderWidth: 2,
    margin: 1,
  },
  textStyle: {
    textAlign: "center",
    margin: 0,
    fontSize: 12.5,
  },})