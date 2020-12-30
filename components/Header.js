import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  const styles = StyleSheet.create({
    header: {
      backgroundColor: "white",
    },
  
    title1: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 50,
      color: "black",
    },
  
    title2: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 50,
      color: "red",
    },
    
    settings: {
      flexDirection: "row",
      justifyContent: "flex-end",
    },
  });

  
  return (
    <View style={styles.header}>
      <Text style={styles.title1}>Mask</Text>
      <Text style={styles.title2}>Alert</Text>
      <View style={styles.settings}>
        <Ionicons name="settings-sharp" size={34} color="black" />
      </View>
    </View>
  );
}

