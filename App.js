import React, { useState } from "react";
import Header from "./components/Header";
import { Button, StyleSheet, View, TouchableOpacity } from "react-native";

export default function App() {
  const [alert, setAlert] = useState("Robot alert");
  const clickHandler = () => {
    setAlert("Darth Vader alert");
    alert == "Darth Vader alert" ? setAlert("Robot alert") : null;
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <TouchableOpacity style={styles.mainButton}>
          <Button title={alert} onPress={clickHandler} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    paddingTop: 250,
    justifyContent: "center",
    alignItems: "center",
  },

  mainButton: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 200,
    backgroundColor: "#fff",
    borderRadius: 100,
  },
});
