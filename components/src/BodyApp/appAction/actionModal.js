import React from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

export default function ActiveModal({ HandleClose }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={{ flex: 1, zIndex: 9 }} onPress={HandleClose} />
      <View style={styles.content}>
        <TouchableOpacity
          styles={styles.buttonAction}
          activeOpacity={0.8}
          onPress={() => {}}
        >
          <Text style={styles.itemText}>Segunda-Feira</Text>
          {/*<Text style={styles.itemText}>Terça-Feira</Text>
        <Text style={styles.itemText}>Selecionar</Text>
        <Text style={styles.itemText}>Selecionar</Text>
        <Text style={styles.itemText}>Selecionar</Text>*/}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
    marginLeft: 10,
    marginRight: 10, 
    paddingStart: 20,
 },
  itemText: {
    textAlign: "center",
    width: 250,
    height: 80,
    fontSize: 30,
    marginBottom: 200,
    backgroundColor: "#fff",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.2)",
    padding: 10,
    paddingTop:20,
    marginTop: 8,
    shadowColor: "rgba(0, 0, 0, 0.9)",
    shadowOffset: {
      width: 1,
      height: 5,
    },
    elevation: 5,
    shadowOpacity: 0.28,
    shadowRadius: 4,
  },
});
