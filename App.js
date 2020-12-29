import React, { useState } from "react";
import Header from "./components/Header";
import { Button, StyleSheet, View, TouchableOpacity } from "react-native";

export default function App() {
  const [name, setName] = useState("Drew");

  const clickHandler = () => {
    setName("Coool Drew");
    name == "Coool Drew" ? setName("Drew") : null;
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* body component */}
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.2)",
            alignItems: "center",
            justifyContent: "center",
            width: 100,
            height: 100,
            backgroundColor: "#fff",
            borderRadius: 50,
          }}
        >
          <Button title={name} onPress={clickHandler} />
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
    paddingTop: 330,
    alignItems: "center",
  },
});
