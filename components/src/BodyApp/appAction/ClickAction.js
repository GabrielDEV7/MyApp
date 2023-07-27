import { useState } from "react";
import React from "react";
import { Text, StyleSheet } from "react-native";
import { ReactDOM } from "react";

const valuesArray = [
    "OPÇÃO 1: 1 Xícara de café + 5g de Leite | 50g de Cuscuz OU 40g de Pão | 2 Ovos ou 30g Carne Moída ou Frango desfiado",
    "OPÇÃO 2: 1 Xícara de café + 5g de Leite | 50g de Tapioca | 2 Ovos ou 30g Carne Moída ou Frango desfiado ",
    "OPÇÃO 3: 1 Xícara de café + 5g de Leite | 100g de Banana | 40 de Queijo Muçarela",
    "OPÇÃO 4: 1 Xícara de café + 5g de Leite | 1 Iougurte Molico Zero | 200g Mamão + 25g Granola",
  ];
  const [randomValue, setRandomValue] = useState(null);

  const pickRandomValue = ({ randomValue }) => {
    const randomIndex = Math.floor(Math.random() * valuesArray.length);
    const selectedValue = valuesArray[randomIndex];
    setRandomValue(selectedValue);
};
export default pickRandomValue;
