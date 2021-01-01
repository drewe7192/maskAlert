import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  const settingsHandler = () => {
    alert("I've been hit");
  };

  return (
    <View style={styles.header}>
      <View style={styles.title}>
        <Text style={{ fontSize: 30, color: "black" }}>Mask</Text>
        <Text style={{ fontSize: 30, color: "crimson" }}>Alert</Text>
      </View>
      <View style={styles.settingsShadowBox}>
        <Ionicons
          name="settings-sharp"
          size={30}
          color="black"
          onPress={settingsHandler}
        />
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
    paddingVertical: 45,

    backgroundColor: "white",
  },
  settingsShadowBox: {
    backgroundColor: "#e4e6eb",
    width: 50,
    height: 50,
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    flexDirection: "row",
  },
});
