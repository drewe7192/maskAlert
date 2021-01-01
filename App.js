import React, { useState } from "react";
import Header from "./components/Header";
import {
  Button,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";

export default function App() {
  const [alert, setAlert] = useState("Alert 1");
  const clickHandler = () => {
    setAlert("Alert 2");
    alert == "Alert 2" ? setAlert("Alert 1") : null;
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar barStyle="dark-content" />
        <Header />
        <View style={styles.content}>
          <TouchableOpacity style={styles.mainButton}>
            <Button title={alert} onPress={clickHandler} color="black" />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={{ paddingVertical: 50, alignItems: "center" }}>
        <Text style={{ textAlign: "center" }}>
          Tapping this button will help you tell that person in front of you to
          wear a damn mask.
        </Text>
        <Text>Help us all Stay Safe TOGETHER : )</Text>
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
    borderColor: "crimson",
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 200,
    backgroundColor: "#fff",
    borderRadius: 100,
  },
});
