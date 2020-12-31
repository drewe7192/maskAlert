import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 50, color: "black" }}>
          Mask
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 50, color: "crimson" }}>
          Alert
        </Text>
      </View>
      <View style={styles.settings}>
        <Ionicons name="settings-sharp" size={34} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "white",
  },
  settings: {
    backgroundColor: "#e4e6eb",
    width: 60,
    height: 60,
    borderRadius: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
