import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 24
  : 64;

export default function Header({ name }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>

        <TouchableOpacity activeOpacity={0.5} style={styles.buttonUser}>
          <Feather name="user" size={27} color={"#fff"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#9e0c39",
    paddingTop: statusBarHeight,
    flexDirection: "row",
    paddingStart: 18,
    paddingEnd: 16,
    paddingBottom: 54,
  },
  name:{
        color: "#fff",
        fontSize: 25,
        letterSpacing: 5,
        fontWeight: "bold",
  },    
  content: {
   flex: 1,
   alignItems: "center",
   flexDirection: "row",
   justifyContent: "space-between",

  },
  buttonUser: {
        width: 44,
        height: 44,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "rgba( 255, 255, 255, 0.5)",
        borderRadius: 44/2,
        marginRight: 16,

  }

});
