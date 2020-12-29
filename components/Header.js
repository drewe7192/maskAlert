import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}> Tell that clown to wear a mask!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    padding: 30,
    backgroundColor: "coral",
  },

  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
  },
});
