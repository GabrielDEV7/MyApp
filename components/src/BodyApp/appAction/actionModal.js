import React from "react";
import { useState } from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";



export function ActiveModal({ HandleCLose, HandleSupper, HandleSnack, HandleCoffe}) {
  const valuesArray = [
    "OPÇÃO 1: 1 Xícara de café + 5g de Leite | 50g de Cuscuz OU 40g de Pão | 2 Ovos ou 30g Carne Moída ou Frango desfiado",
    "OPÇÃO 2: 1 Xícara de café + 5g de Leite | 50g de Tapioca | 2 Ovos ou 30g Carne Moída ou Frango desfiado ",
    "OPÇÃO 3: 1 Xícara de café + 5g de Leite | 100g de Banana | 40 de Queijo Muçarela",
    "OPÇÃO 4: 1 Xícara de café + 5g de Leite | 1 Iougurte Molico Zero | 200g Mamão + 25g Granola",
  ];
  const arraysValue = [
    "OPÇÃO 1: 1 Xícara de café + 5g de Leite | 50g de Cuscuz OU 40g de Pão | 2 Ovos ou 30g Carne Moída ou Frango desfiado",
    "OPÇÃO 2: 1 Xícara de café + 5g de Leite | 50g de Tapioca | 2 Ovos ou 30g Carne Moída ou Frango desfiado ",
    "OPÇÃO 3: 1 Xícara de café + 5g de Leite | 100g de Banana | 40 de Queijo Muçarela",
    "OPÇÃO 4: 1 Xícara de café + 5g de Leite | 1 Iougurte Molico Zero | 200g Mamão + 25g Granola",
  ]
  const [randomValue, setRandomValue] = useState(null);

  const pickRandomValue = ({ randomValue }) => {
    const randomIndex = Math.floor(Math.random() * valuesArray.length);
    const selectedValue = valuesArray[randomIndex];
    setRandomValue(selectedValue);
  }
  const [ValueAR, setRValue] = useState(null);

  const  GeneratorAle= ({ ValueAR }) => {
    const randomIndex = Math.floor(Math.random() * arraysValue.length);
    const selectedValue = arraysValue[randomIndex];
    setRValue(selectedValue);
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={{ flex: 1, zIndex: 99 }} onPress={HandleCLose} />
      <View style={styles.content}>
        <TouchableOpacity
          styles={styles.buttonAction}
          activeOpacity={0.9}
          onPress={pickRandomValue}
        >{randomValue !== null && (
          <Text style={styles.Text1}>{alert ("Dica do dia:  " + randomValue)}</Text>
        )}
          <Text style={styles.itemText}>Café da manhã</Text>
        </TouchableOpacity>
        <TouchableOpacity
          styles={styles.buttonAction}
          activeOpacity={0.9}
          onPress={GeneratorAle}
        >{ValueAR !== null && (
          <Text style={styles.Text1}>{alert ("Dica do dia:  " + ValueAR)}</Text>
        )}
          <Text style={styles.itemText}>Lanche</Text>
        </TouchableOpacity>
        <TouchableOpacity
          styles={styles.buttonAction}
          activeOpacity={0.9}
          onPress={HandleSupper}
        >
          <Text style={styles.itemText}>Ceia</Text>
        </TouchableOpacity>
        <TouchableOpacity
          styles={styles.buttonAction}
          activeOpacity={0.9}
          onPress={HandleCLose}
        >
          <Text style={[styles.itemText, styles.itemTwo]}>Fechar</Text>
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    marginBottom: 200,
    paddingStart: 20,
    width: "100%",
  },
  itemText: {
    textAlign: "center",
    width: 250,
    height: 80,
    fontSize: 30,
    marginBottom: 20,
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: "rgba(0, 0, 0, 0.2)",
    padding: 10,
    paddingTop: 20,
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
  itemTwo: {
    color: "#fff",
    backgroundColor: "#340735",
    borderRadius: 0,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  
});
