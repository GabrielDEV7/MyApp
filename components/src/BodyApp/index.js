import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  Alert,
} from "react-native";
import { useFonts, Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import { useState } from "react";
import  {ActiveModal} from "./appAction/actionModal";



export default function DaysWeek() {
  const [VisibleModal, setVisibleModal] = useState(false);
  const [fontload] = useFonts({
    Pacifico_400Regular,
  });
  if (!fontload) {
    return null;
  }
  
  
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Dietay</Text>
      </View>
      <View style={styles.bodyItem}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.buttonItem}
          onPress={() => setVisibleModal(true)}
        >
          <Text style={styles.ItemText}>Selecionar Horário:</Text>
        </TouchableOpacity>

        <Modal
          visible={VisibleModal}
          transparent={true}
          onRequestClose={() => setVisibleModal(false)}
        >
          <ActiveModal 
          HandleCLose={() => setVisibleModal(false)}
          HandleCoffe={() =>  alert("oi d2")} 
          HandleSnack={() =>  alert("oi dnv")} 
          HandleSupper={() =>  alert("ooi")} />
        </Modal>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingStart: 18,
    paddingEnd: 18,
    paddingBottom: 22,
    paddingTop: 22,
    marginEnd: 14,
    marginTop: -24,
    marginStart: 14,
    backgroundColor: "#f3f4e5",
    borderRadius: 10,
    zIndex: 99,
  },
  itemTitle: {
    fontFamily: "Pacifico_400Regular",
    fontSize: 70,
    letterSpacing: 10,
    display: "flex",
    justifyContent: "center",
  },
  buttonItem: {
    marginTop: 150,
    borderBottomLeftRadius: 30,
  },
  ItemText: {
    fontSize: 40,
    color: "#fff",
    borderWidth: 0,
    padding: 30,
    borderBottomLeftRadius: 80,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderRadius: 0,
    backgroundColor: "#72bab0",
    shadowColor: "rgba(055, 1, 40, 0.9)",
    shadowOffset: {
      width: 1,
      height: 5,
    },
    elevation:10,
    shadowRadius: 4,
  },
});
