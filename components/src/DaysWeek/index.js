import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DaysWeek() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
            <Text style={styles.itemDays}>Dia:</Text>
            <Text style={styles.itemGenerator}>Gerados:</Text>
      </View>
      <View>
            <Text style={styles.itemWeek}>Segunda</Text>
            <Text style={styles.itemWeek}>Terça</Text>
            <Text style={styles.itemWeek}>Quarta</Text>
            <Text style={styles.itemWeek}>Quinta</Text>
            <Text style={styles.itemWeek}>Sexta</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent:"space-between",
   paddingStart: 18,
   paddingEnd:18,
   paddingBottom: 22,
   paddingTop: 22,
    marginEnd: 14,
    marginTop: -24,
    marginStart: 14,
    backgroundColor:'#f3f4e5',
    borderRadius: 10,

  },
  item: {},
});
